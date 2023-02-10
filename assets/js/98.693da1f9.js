(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{795:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"flow-trigger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-trigger"}},[t._v("#")]),t._v(" Flow trigger")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.models.triggers.types.Flow"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Kestra is able to trigger one flow after another one. This allows the chaining of flows without the need to update the base flows."),e("br"),t._v("\nWith this capacity, you can break responsibility between different flows to different teams.")])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("blockquote",[e("p",[t._v("This flow will be triggered after each successful execution of the flow "),e("code",[t._v("io.kestra.tests.trigger-flow")]),t._v(" and forward the "),e("code",[t._v("uri")]),t._v(" output of the "),e("code",[t._v("my-task")]),t._v(" task.")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listener\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("revision")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fromParent\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" STRING\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" onlyNoInput\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1: {{trigger.executionId}}"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" listenFlow\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.triggers.types.Flow\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fromParent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{ outputs.myTask.uri }}'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionFlowCondition\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionStatusCondition\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("in")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SUCCESS\n")])])]),e("blockquote",[e("p",[t._v("This flow will be triggered after the successful execution of both flows "),e("code",[t._v("flow-a")]),t._v(" & "),e("code",[t._v("flow-b")]),t._v(" during the current day. When the conditions are met, the counter is reset and can be re-triggered during the same day. See "),e("RouterLink",{attrs:{to:"/plugins/core/conditions/io.kestra.core.models.conditions.types.MultipleCondition.html"}},[t._v("MultipleCondition")]),t._v(" for more details")],1)]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("multiplecondition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listener\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" onlyListener\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let\'s go "')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multipleListenFlow\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.triggers.types.Flow\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multiple\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.MultipleCondition\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("window")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" P1D\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("windowAdvance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" P0D\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flow-a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionFlowCondition\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("multiplecondition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("a\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flow-b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionFlowCondition\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("multiplecondition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("b\n\n")])])]),e("h2",{attrs:{id:"properties-and-outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-and-outputs"}},[t._v("#")]),t._v(" Properties and Outputs")]),t._v(" "),e("p",[t._v("Check the "),e("RouterLink",{attrs:{to:"/plugins/core/triggers/io.kestra.core.models.triggers.types.Flow.html"}},[t._v("Flow task")]),t._v(" documentation for the complete list of the task properties and outputs.")],1),t._v(" "),e("h2",{attrs:{id:"variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),e("p",[t._v("When the flow is triggered by another one, some context variables will be injected to allow some customization of the flow.")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered table-hover table-striped"},[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("{{ trigger.executionId }}")])]),t._v(" "),e("td",[t._v("the ID of the execution that triggers the current flow.")])]),t._v(" "),e("tr",[e("td",[e("code",{pre:!0},[t._v("{{ trigger.namespace }}")])]),t._v(" "),e("td",[t._v("the namespace of the flow that triggers the current flow.")])]),t._v(" "),e("tr",[e("td",[e("code",{pre:!0},[t._v("{{ trigger.flowId }}")])]),t._v(" "),e("td",[t._v("the ID of the flow that triggers the current flow.")])]),t._v(" "),e("tr",[e("td",[e("code",{pre:!0},[t._v("{{ trigger.flowRevision }}")])]),t._v(" "),e("td",[t._v("the revision of the flow that triggers the current flow.")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);