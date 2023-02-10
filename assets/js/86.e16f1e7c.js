(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{781:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[t._v("#")]),t._v(" GitLab")]),t._v(" "),s("h2",{attrs:{id:"gitlab-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci"}},[t._v("#")]),t._v(" GitLab CI")]),t._v(" "),s("p",[t._v("GitLab integrates a solution called "),s("a",{attrs:{href:"https://docs.gitlab.com/ee/ci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLAb CI/CD"),s("OutboundLink")],1),t._v(" that allows you to define pipelines in YAML files to automate tests, compilation, or even deploy for your Applications.")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Here is an example of a GitLab CI pipeline. We define three stages:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("test")]),t._v(", where we validate our flows")]),t._v(" "),s("li",[s("code",[t._v("deploy-template")]),t._v(", where we deploy our templates")]),t._v(" "),s("li",[s("code",[t._v("deploy-flow")]),t._v(", where we deploy our flows.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Flows should always be deployed before Templates, to avoid flows running before their templates are created.")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kestra/kestra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("variables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("KESTRA_HOST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//kestra.io/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Validating Kestra Resources")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra-validate-flows-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Validate our flows on server-side")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /app/kestra flow validate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("KESTRA_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra-validate-template-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Validate our template with the client")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /app/kestra template validate ./kestra/templates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("local\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deploying Kestra Templates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra-deploy-templates-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /app/kestra template namespace update io.kestra ./kestra/templates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("KESTRA_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deploying Kestra Flows")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra-deploy-flows-io.kestra-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /app/kestra flow namespace update io.kestra ./kestra/flows/prod "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("KESTRA_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra-deploy-flows-io.kestra.dev-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /app/kestra flow namespace update io.kestra ./kestra/flows/dev "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("KESTRA_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);