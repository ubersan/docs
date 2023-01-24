---
title: "Advanced Tips and Techniques for Kafka Streams"
description: Discover tips and clever techniques that will help you build resilient and distributed applications
date: 2022-06-27T10:00:00
layout: BlogsPost
author:
  name: Ludovic Dehon
  image: "ldehon"
  twitter: "@tchiotludo"
image: /blogs/2022-06-28-tips-kafka-streams-distributed.jpg
draft: true
---

The distributed event store and streamlining platform [Apache Kafka](https://kafka.apache.org/) has many advantages. Think of high throughput, low latency, durability, high concurrency, scalability, and fault tolerance. So, it's not surprising that when we built [Kestra](https://github.com/kestra-io/kestra), an open-source data orchestration and scheduling platform, we decided to use Kafka as the central database to build a scalable architecture. Since Kafka supports high throughput, which allows it to handle high-volume data at equally high velocity, we were confident of a fully scalable solution. However, Kafka has some restrictions since it is not a database, so we need to deal with the constraints and adapt the code to make it work with Kafka.

Since we rely heavily on [Kafka Streams](https://kafka.apache.org/documentation/streams/) for most of our services (executor and scheduler), we have made some assumptions on how it handles the workload. This blog post shows some advanced tips and techniques we discovered over the last two years to make a Kafka Stream reliable.

## Same Kafka Topic for Source and Destination

In Kestra, we have a [Kafka topic](https://kafka.apache.org/intro#intro_concepts_and_terms) for the current [execution](https://kestra.io/docs/concepts/executions.html#execution). That topic is both the source and the destination. We update the current execution to add some information and send it back to Kafka for further processing. 

Initially, we were unsure if this design was possible with Kafka. We [asked](https://twitter.com/tchiotludo/status/1252197729406783488) Matthias J. Sax, one of the primary maintainers of Kafka Streams, who responded on [Stack Overflow](https://stackoverflow.com/questions/61316312/does-kafka-stream-with-same-sink-source-topics-with-join-is-supported).

TL;DR: Yes, it's possible.

Yes, it's possible if you are certain that for the same key (the execution, in this case), you have only one process that can write. If you see this warning in the console `Detected out-of-order KTable update for execution at offset 10, partition 7.`, you likely have more than one process for the same key, which can lead to unexpected behavior (like overwriting previous values).

Struggling to understand what this means? Imagine a topology with the topic as the source, some branching logic, and two different processes writing to the same destination:

```java
KStream<String, Execution> executions = builder
    .stream("executions", Consumed.with(Serdes.String(), JsonSerde.of(Execution.class)));

executions
    .mapValues((readOnlyKey, value) -> value)
    .to("executions", Produced.with(Serdes.String(), JsonSerde.of(Execution.class)));

executions
    .leftJoin(
        builder.table("results", Consumed.with(Serdes.String(), JsonSerde.of(WorkerTaskResult.class))),
        (readOnlyKey, value1, value2) -> value1
    )
    .to("executions", Produced.with(Serdes.String(), JsonSerde.of(Execution.class)));
```

In this case, a concurrent process can write on the same topic, overwriting the previous value and destroying the previously computed methods. In this context, you must define a single writer for a Key at a given time. This leads us to our next part, a custom joiner.

## Custom Joiner for Kafka Streams

We wrote a microservice to process the executions and split the microservice into multiple topics:
- A topic with the executions (with multiple tasks)
- A topic with task results

To allow the next task to start, we need to create a state with all task results merged into the current execution. Our first thought was to use `join()` from Kafka Streams. In hindsight, this was not a very clever decision. 😉

All joins provided by Kafka Streams were designed with aggregation in mind, like sum, avg, etc. It processes all the incoming data from both topics 1:1. We will see all the changes on the streams on both sides, as illustrated below:

```
# timeline
--A-------- > Execution
-----B--C-- > Task Result

# join result timeline
- (A,null)
- (A, B) => emit (A+B)
- (A, C) => emit (A+C) <=== you have overwriten the result of A+B
- (A+B, null)
- (A+C, null) <== we will never have (A+B+C)
```

However, we are building a [state machine](https://developer.mozilla.org/en-US/docs/Glossary/State_machine) and want to keep the last state of execution, meaning we do not want to see the intermediate states. In this case, we have no choice but to build a custom joiner since Kafka Streams doesn't have one built-in.

Our custom joiner needs to:
- [Manually create a store](https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/ExecutorFromExecutionTransformer.java) that will save the last state of an execution.
- Create a custom [merge function](https://github.com/kestra-io/kestra/blob/8a17519b5b41e8ba0ab8e0044c9c6b1e887ccd94/runner-kafka/src/main/java/io/kestra/runner/kafka/executors/ExecutorMain.java#L216-L246) that will merge the execution stream with the task results stream.
- [Get the last value](https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/ExecutorJoinerTransformer.java) from the state, add the task result and emit the new state that will finally be saved on the store and the final topic.

With all this, we make sure that the execution state will always be the last version, whatever the number of tasks results coming in parallel might be.

## Distributed Workload Between Multiple Backends

In Kestra, a scheduler will look up all flows either with scheduled execution or with a long-polling mechanism (detecting files on S3 or SFTP). To avoid a single point of failure on this service, we needed to split the flow between all instances of schedulers.

We rely on Kafka's consumer groups that will handle the complexity of a distributed system for us. Here's how we do it:
- Create a [Kafka stream](https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/KafkaFlowListeners.java) that will read in a `KTable` and transmit all the results to a `Consumer`.
- Listen to state change (mostly `REBALANCED` streams) and empty all the flows for the `Consumer`.
- On the `READY` state, read all the `KTable` again.

With these, all flows will be dispatched to all listeners. That means if you have a thousand flows, every consumer will have ~500 flows (depending on the repartition of keys). Kafka will handle all the heavy parts of the distributed systems, such as:
- Heartbeat to detect failure for a consumer
- Notifications for rebalancing
- Ensure exactly-once pattern for a topic, ensuring that only one consumer will handle the data

This way, you will have a fully distributed system thanks to Kafka without the pain of going through a [Jespen](https://jepsen.io/) analysis.

## Partitions to Detect Dead Kafka Consumers

For Kestra, we need to detect when a worker was processing a task and died. The reasons for the process "dying" could range from an outage to a simple restart during processing.

Thanks to the Kafka consumer, we can know the specific partition affected by this consumer. We use these features to detect dead workers:
- We create a `UUID` on startup for the worker.
- When a consumer connects to Kafka, we [listen to the partitions](https://github.com/kestra-io/kestra/blob/4a61af45d668feab19313b9033826fa7075bf02b/runner-kafka/src/main/java/io/kestra/runner/kafka/KafkaWorkerTaskQueue.java#L157-L187) affected using a `ConsumerRebalanceListener`. We publish to Kafka a WorkerInstance with `UUID` and assigned partition.
- For each task run, we publish a message with [TaskRunning](https://github.com/kestra-io/kestra/blob/4a61af45d668feab19313b9033826fa7075bf02b/runner-kafka/src/main/java/io/kestra/runner/kafka/KafkaWorkerTaskQueue.java#L112-L123) with the worker UUID.

Now, let's handle the data stored in Kafka. The main logic is a [Kafka Stream](https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/WorkerInstanceTransformer.java) which will:
- Create a global `KTable` with all the `WorkerInstance`.
- On every change, it will listen to the changed `WorkerInstance`.
- If there is a new `WorkerInstance`, we look at the partition assigned to this one. If there is an overlap between this instance's partitions and the previous one, we know that the previous `WorkerInstance` is dead. In Kafka, you can't have two consumers on the same partition.
- We only need to look at the affected tasks in this `WorkerInstance` and resend them for processing.

Et voilà! We have detection of dead consumers using just the Kafka API. 🎉 

## Beware of State Store `all()`

We use a [GlobalKTable](https://kafka.apache.org/31/documentation/streams/developer-guide/dsl-api.html#streams_concepts_globalktable) to detect [flow trigger](/docs/developer-guide/triggers/flow.html). For all the flows on the cluster, we test all the flow's [conditions](/docs/developer-guide/conditions/) to find matching flows. For this, we are using an API to fetch all flows from a `GlobalKTable` using `store.all()` that returns all the flows from RocksDB (internal database from Kafka Stream).

Our first assumption was `all()` returns an object (Flow in our case), as the API return Object, but we discovered that the `all()` will:
- Fetch all the data from RocksDB
- Deserialize the data from RocksDB that is stored as byte and map it to concrete Java POJO

So each time we call `all()` on the method, all values are deserialized, which can lead to high CPU usage and latency on your stream. We are talking about all [flow revisions](https://kestra.io/docs/concepts/flows.html#revision) on our cluster. The last revision had 2.5K flows, but we don't see people creating a lot of revisions. Imagine 100K `byte[]` to deserialize to POJO for every call. 🤯

Since we only need the last revision in our use case, we create an in-memory Map with all the flows using the following:

```java
builder.addGlobalStore(
    Stores.keyValueStoreBuilder(
        Stores.persistentKeyValueStore(FLOW_STATE_STORE_NAME),
        Serdes.String(),
        JsonSerde.of(Flow.class)
    ),
    kafkaAdminService.getTopicName(Flow.class),
    Consumed.with(Serdes.String(), JsonSerde.of(Flow.class)).withName("GlobalStore.Flow"),
    () -> new GlobalInMemoryStateProcessor<>(
        FLOW_STATE_STORE_NAME,
        flows -> kafkaFlowExecutor.setFlows(flows),
        store -> kafkaFlowExecutor.setStore(store)
    )
);
```

[GlobalInMemoryStateProcessor](https://github.com/kestra-io/kestra/blob/master/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/GlobalInMemoryStateProcessor.java) is a simple wrapper that saves to state store and sends a complete list on every change (not so frequent). Using this, we decided to gather all the flows in memory. This works well for our use cases because we know that an instance of Kestra will not have millions of flows.

Remember that all store operations (like get) will lead to deserialization that costs you some CPU.


## Many Source Topics Within a Kafka Stream

At first, we designed Kestra to have only one **huge** stream for all the processing from the executor. At first, it seemed cool, but this led to some drawbacks.

Here is the last version of our main and only Kafka Stream with many topics 🙉:
![Kestra Topology](./2022-06-28-tips-kafka-streams-distributed/topology.jpg)
Yes, this is a huge Kafka Stream. It was working almost despite the complexity of this one. But the major drawbacks were :
- **Monitoring**: All the metrics are under the same consumer groups
- **Debugging**: Each topic is consumed independently during a crash. When a message fails, the whole process crashes.
- **Lag**: This is the most important one. Since Kafka Streams optimize the consumption of messages by themselves, a topic with large outputs could lead to lag on unrelated topics. In that case, it is impossible to understand the lag on our consumers.

Now, we have decided to split into multiple [streams](https://github.com/kestra-io/kestra/tree/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/executors) to be able to monitor and properly understand the lag on our Kafka Streams.

To split our giant stream, we dealt with only one topic at a time. We consumed only one topic at a time (to avoid large network transit), so we grouped all streams by source topics.


## Do More With Kafka Streams

We have covered some tips that took us a lot of time to find how to deal with the issues. Even though there were some challenges, we could adapt our code so that Kafka worked well for our use case.

We learned how to use the same Kafka topic for source and destination, write a custom joiner for Kafka Streams, distribute workloads between multiple backends, use partitions to detect dead Kafka Consumers, tradeoffs for using state store `all()`, and using many source topics within a Kafka Stream. 

We hope you enjoyed our story. Stay connected and follow Kestra on [GitHub](https://github.com/kestra-io/kestra), [Twitter](https://twitter.com/kestra_io), or [Slack](https://api.kestra.io/v1/communities/slack/redirect).