(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{936:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("\n     Purge\n")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.storages.Purge"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Purge execution, logs or storage files.")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"purge"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.storages.Purge"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endDate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{{ now() | dateAdd(-1, 'MONTHS') }}\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("states")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" KILLED\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" FAILED\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" WARNING\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SUCCESS\n")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("h3",{attrs:{id:"enddate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enddate"}},[t._v("#")]),t._v(" "),a("code",[t._v("endDate")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The max date to purge")])]),t._v(" "),a("p",[t._v("All date after this date will be purged.")]),t._v(" "),a("h3",{attrs:{id:"flowid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flowid"}},[t._v("#")]),t._v(" "),a("code",[t._v("flowId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The flow id to purge")])]),t._v(" "),a("p",[t._v("You need to provide the "),a("code",[t._v("namespace")]),t._v(" properties if you want to purge a flow")]),t._v(" "),a("h3",{attrs:{id:"namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[t._v("#")]),t._v(" "),a("code",[t._v("namespace")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Namespace to purge or namespace for a flow")])]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("flowId")]),t._v(" isn't provide, this is a namespace prefix, else the namespace of flow")]),t._v(" "),a("h3",{attrs:{id:"purgeexecution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purgeexecution"}},[t._v("#")]),t._v(" "),a("code",[t._v("purgeExecution")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Purge execution from repository")])]),t._v(" "),a("h3",{attrs:{id:"purgelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purgelog"}},[t._v("#")]),t._v(" "),a("code",[t._v("purgeLog")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Purge log from repository")])]),t._v(" "),a("h3",{attrs:{id:"purgestorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purgestorage"}},[t._v("#")]),t._v(" "),a("code",[t._v("purgeStorage")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Purge file from internal storage")])]),t._v(" "),a("h3",{attrs:{id:"states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[t._v("#")]),t._v(" "),a("code",[t._v("states")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[a("a",{attrs:{href:"#type"}},[t._v("Type")])])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The state of the execution that can be purged.")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"executionscount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executionscount"}},[t._v("#")]),t._v(" "),a("code",[t._v("executionsCount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("0")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The count of executions deleted")])]),t._v(" "),a("h3",{attrs:{id:"logscount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logscount"}},[t._v("#")]),t._v(" "),a("code",[t._v("logsCount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("0")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The count of logs deleted")])]),t._v(" "),a("h3",{attrs:{id:"storagescount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storagescount"}},[t._v("#")]),t._v(" "),a("code",[t._v("storagesCount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("0")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The count of storage deleted")])]),t._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")])])}),[],!1,null,null,null);e.default=r.exports}}]);