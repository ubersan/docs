(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{789:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-a-ci-cd-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-ci-cd-pipeline"}},[e._v("#")]),e._v(" Create a CI/CD pipeline")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("In Kestra, the number of flows you develop can grow quickly, and maintaining them can get challenging."),a("br"),e._v("\nCI/CD pipelines are a great way to automate your flows' validation and deployment."),a("br"),e._v("\nThis section will guide you through creating a CI/CD pipeline for your Kestra flows.")]),e._v(" "),a("h2",{attrs:{id:"why-a-ci-cd-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-a-ci-cd-pipeline"}},[e._v("#")]),e._v(" Why a CI/CD pipeline?")]),e._v(" "),a("p",[e._v("CI/CD pipelines provide an easy and reliable way to ensure that your flows are always deployed as soon as they're done."),a("br"),e._v("\nIt integrates nicely with VCS (Version Control System) like Git and can easily integrate into your development workflow.")]),e._v(" "),a("h2",{attrs:{id:"how-to-create-a-ci-cd-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-ci-cd-pipeline"}},[e._v("#")]),e._v(" How to create a CI/CD pipeline?")]),e._v(" "),a("p",[e._v("There are several ways to create a CI/CD pipeline. At Kestra, we propose three different methods:")]),e._v(" "),a("ChildTableOfContents",{attrs:{max:1}}),e._v(" "),a("h2",{attrs:{id:"helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helpers"}},[e._v("#")]),e._v(" Helpers")]),e._v(" "),a("p",[e._v("Kestra has some "),a("em",[e._v("helpers")]),e._v(" function that can help during flow development; they allow separating a flow description on multiple files thanks to an include function, see "),a("RouterLink",{attrs:{to:"/docs/developer-guide/cicd/helpers/"}},[e._v("Helpers")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"useful-cli-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-cli-commands"}},[e._v("#")]),e._v(" Useful CLI commands")]),e._v(" "),a("p",[e._v("Kestra provides several commands intended for use in CI/CD pipelines.")]),e._v(" "),a("h3",{attrs:{id:"flow-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-validation"}},[e._v("#")]),e._v(" Flow validation")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./kestra flow validate path-to-flow-directory\n")])])]),a("p",[e._v("Validates given YAML flow files.")]),e._v(" "),a("p",[a("strong",[e._v("Options:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--local")]),e._v(": perform the validation locally using the client. Default is to use a remote call.")]),e._v(" "),a("li",[a("code",[e._v("--server")]),e._v(": specify the remote Kestra server URL. Default is "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"flow-namespace-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-namespace-update"}},[e._v("#")]),e._v(" Flow namespace update")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./kestra flow namespace update flow-namespace-to-update path-to-flow-directory\n")])])]),a("p",[e._v("Deploys given YAML flow files as flows of the given namespace.")]),e._v(" "),a("p",[a("strong",[e._v("Options:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--no-delete")]),e._v(": preserve existing flows that are missing from the update. Default is to remove the flows.")]),e._v(" "),a("li",[a("code",[e._v("--server")]),e._v(": specify the remote Kestra server URL. Default is "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"template-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-validation"}},[e._v("#")]),e._v(" Template validation")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./kestra template validate path-to-template-directory\n")])])]),a("p",[e._v("Validates given YAML template files.")]),e._v(" "),a("p",[a("strong",[e._v("Options:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--local")]),e._v(": perform the validation locally using the client. Default is to use a remote call.")]),e._v(" "),a("li",[a("code",[e._v("--server")]),e._v(": specify the remote Kestra server URL. Default is "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"template-namespace-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-namespace-update"}},[e._v("#")]),e._v(" Template namespace update")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./kestra template namespace update template-namespace-to-update path-to-template-directory\n")])])]),a("p",[e._v("Deploys given YAML template files as templates of the given namespace.")]),e._v(" "),a("p",[a("strong",[e._v("Options:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--no-delete")]),e._v(": preserve existing templates which are missing from the update. Default is to remove the templates.")]),e._v(" "),a("li",[a("code",[e._v("--server")]),e._v(": specify the remote Kestra server URL. Default is "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),a("OutboundLink")],1),e._v(".")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);