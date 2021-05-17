(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{820:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[s("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDI0IDI0IgogICAgIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyI+CiAgICA8cGF0aCBkPSJNMjAgMkgxMGEyIDIgMCAwIDAtMiAydjJoOGEyIDIgMCAwIDEgMiAydjhoMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMnoiIGZpbGw9IiMzMzMiLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTQgMjJoMTBjMS4xMDMgMCAyLS44OTcgMi0yVjEwYzAtMS4xMDMtLjg5Ny0yLTItMkg0Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTBjMCAxLjEwMy44OTcgMiAyIDJ6bTItMTBoNnYySDZ2LTJ6bTAgNGg2djJINnYtMnoiCiAgICAgICAgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",alt:"Template"}}),t._v(" Template\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.flows.Template"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Include a resuable template inside a flow")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" template\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" with"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("string\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" STRING\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.startDate}}"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.flows.Template\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" template\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("my-forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ inputs.with-string }}"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("end\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.startDate}}"')]),t._v("\n\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" "),s("code",[t._v("args")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The args to pass to the template")])]),t._v(" "),s("p",[t._v("You can provide a list of named arguments (like function argument on dev) allowing to rename outputs of current flow for this template."),s("br"),t._v("\nfor example, if you declare this use of template like this:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.flows.Template\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" template\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ output.task-id.uri }}"')]),t._v("\n")])])]),s("p",[t._v("You will be able to get this output on the template with "),s("code",{pre:!0},[t._v("{{  parent.outputs.args.forward  }}")])]),t._v(" "),s("h3",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" "),s("code",[t._v("errors")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("object")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("List of tasks to run if any tasks failed on this FlowableTask")])]),t._v(" "),s("h3",{attrs:{id:"namespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[t._v("#")]),t._v(" "),s("code",[t._v("namespace")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),s("blockquote",[s("p",[t._v("The namespace of the template")])]),t._v(" "),s("h3",{attrs:{id:"templateid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templateid"}},[t._v("#")]),t._v(" "),s("code",[t._v("templateId")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),s("blockquote",[s("p",[t._v("The id of the template")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"args-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("args")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The args passed to the template")])])])}),[],!1,null,null,null);a.default=n.exports}}]);