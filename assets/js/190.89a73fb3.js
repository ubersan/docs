(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{891:function(e,l,a){"use strict";a.r(l);var t=a(19),s=Object(t.a)({},(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"flow-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-examples"}},[e._v("#")]),e._v(" Flow examples")]),e._v(" "),a("p",[e._v("The example from Kestra's guided tour is a good starting point; it is available when running Kestra for the first time and can be downloaded "),a("a",{attrs:{href:"/examples/example-guided-tour.yml"}},[e._v("here")]),e._v(".")]),e._v(" "),a("p",[e._v("Following is a list of other examples that can be downloaded:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/examples/flows_allow-failure.yml"}},[e._v("allow-failure")]),e._v(": This flow will allow a failure of a task and will continue, passing the execution as "),a("code",[e._v("WARNING")]),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_disable-task.yml"}},[e._v("disable-simple")]),e._v(": This flow will never launch the "),a("code",[e._v("t2")]),e._v(" task since it is disabled.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_each.yml"}},[e._v("each-nested")]),e._v(": Example of an each expression to iterate over a list of values.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_errors.yaml"}},[e._v("errors")]),e._v(": This flow will always fail, this will be handled by the "),a("code",[e._v("errors")]),e._v(" branch tasks (cleaning a resource for example). All kinds of tasks can be used on the "),a("code",[e._v("errors")]),e._v(" branch.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_multiplecondition-listeners.yml"}},[e._v("multiplecondition-listener")]),e._v(": This flow will start only if "),a("code",[e._v("multiplecondition-flow-a")]),e._v(" and "),a("code",[e._v("multiplecondition-flow-b")]),e._v(" are successful during the last 24h. You need the two flows "),a("a",{attrs:{href:"/examples/flows_multiplecondition-flow-a.yml"}},[e._v("multiplecondition-flow-a")]),e._v(" and "),a("a",{attrs:{href:"/examples/flows_multiplecondition-flow-b.yml"}},[e._v("multiplecondition-flow-b")]),e._v(" for it to work.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_parallel.yml"}},[e._v("parallel")]),e._v(": This flow will run 3 parallel tasks based on the "),a("code",[e._v("concurrent")]),e._v(" property and will start the "),a("code",[e._v("last")]),e._v(" task at the end.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_pause.yml"}},[e._v("pause")]),e._v(": This flow show how you can pause an execution in order to add a manual validation step.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_retry.yml"}},[e._v("retry")]),e._v(": This flow will be retry 4 times and will success at the 5th attempts.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_sequential.yml"}},[e._v("sequential")]),e._v(": This flow will start the 2 sequential tasks in parallel and those will launch tasks one after the other.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_subflow.yml"}},[e._v("subflow")]),e._v(": This flow will launch a subflow passing parameters as "),a("code",[e._v("inputs")]),e._v(", wait until the end of the flow and gather the output of a task.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_switch.yml"}},[e._v("switch")]),e._v(": Depending on the value passed as the input, the will flow branch to different tasks. If no matching value, the "),a("code",[e._v("defaults")]),e._v(" task is used.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_timeout.yml"}},[e._v("timeout")]),e._v(": This flow will always fail because of a timeout.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_trigger-flow.yml"}},[e._v("trigger-flow")]),e._v(": Flow that is triggered based on the execution of another flow.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/flows_webhook.yml"}},[e._v("webhook")]),e._v(": Example flow for a webhook trigger.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/scripts_bash-docker-with-files.yml"}},[e._v("bash-docker-with-files")]),e._v(": This flow will use the "),a("code",[e._v("alpine")]),e._v(" Docker image, install a package and decompress a file passed as input. It will also export the file size as metrics and the "),a("code",[e._v("mineType")]),e._v(" of the file as outputs.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/scripts_bash-with-files.yml"}},[e._v("bash-with-files")]),e._v(": This flow show how to pass files between tasks.")]),e._v(" "),a("li",[a("a",{attrs:{href:"/examples/scripts_python-pip.yml"}},[e._v("python-pip")]),e._v(": This flow will install the pip package, and use the Python Kestra library to generate outputs and metrics.")])])])}),[],!1,null,null,null);l.default=s.exports}}]);