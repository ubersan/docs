(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1137:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[a("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iUHJvZHVjdF9JY29ucyIgZGF0YS1uYW1lPSJQcm9kdWN0IEljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhZWNiZmE7fS5jbHMtMSwuY2xzLTIsLmNscy0ze2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojNjY5ZGY2O30uY2xzLTN7ZmlsbDojNDI4NWY0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+SWNvbl8yNHB4X0NvbG9yX0JpZ1F1ZXJ5PC90aXRsZT48ZyBpZD0iU2hhcGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuNzMsMTAuODN2Mi42M0E0LjkxLDQuOTEsMCwwLDAsOC40NCwxNS4yVjEwLjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkuODksOC40MXY3LjUzQTcuNjIsNy42MiwwLDAsMCwxMSwxNiw4LDgsMCwwLDAsMTIsMTZWOC40MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy42NCwxMS44NnYzLjI5YTUsNSwwLDAsMCwxLjctMS44MlYxMS44NloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNy43NCwxNi4zMmwtMS40MiwxLjQyYS40Mi40MiwwLDAsMCwwLC42bDMuNTQsMy41NGEuNDIuNDIsMCwwLDAsLjU5LDBsMS40My0xLjQzYS40Mi40MiwwLDAsMCwwLS41OWwtMy41NC0zLjU0YS40Mi40MiwwLDAsMC0uNiwwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEsMmE5LDksMCwxLDAsOSw5LDksOSwwLDAsMC05LTltMCwxNS42OUE2LjY4LDYuNjgsMCwxLDEsMTcuNjksMTEsNi42OCw2LjY4LDAsMCwxLDExLDE3LjY5Ii8+PC9nPjwvc3ZnPg==",alt:"Trigger"}}),t._v(" Trigger\n")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.bigquery.Trigger"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Wait for query on BigQuery")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Wait for a sql query to return results and iterate through rows")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bigquery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listen\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" each\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.flows.EachSequential\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" return\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{json taskrun.value}}"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ trigger.rows }}"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" watch\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.plugin.gcp.bigquery.Trigger\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PT5M"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM `myproject.mydataset.mytable`"')]),t._v("\n")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("h3",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" "),a("code",[t._v("fetch")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to Fetch the data from the query result to the task output")])]),t._v(" "),a("h3",{attrs:{id:"fetchone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetchone"}},[t._v("#")]),t._v(" "),a("code",[t._v("fetchOne")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to Fetch only one data row from the query result to the task output")])]),t._v(" "),a("h3",{attrs:{id:"interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interval"}},[t._v("#")]),t._v(" "),a("code",[t._v("interval")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("PT1S")])]),t._v(" "),a("li",[a("strong",[t._v("Format:")]),t._v(" "),a("code",[t._v("duration")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Interval between polling")])]),t._v(" "),a("p",[t._v("The interval between 2 different test of schedule, this can avoid to overload the remote system with too many call. For most of trigger that depend on external system, a minimal interval must be at least PT30S."),a("br"),t._v("\nSee "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_8601#Durations",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO_8601 Durations"),a("OutboundLink")],1),t._v(" for more information of available interval value")]),t._v(" "),a("h3",{attrs:{id:"legacysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacysql"}},[t._v("#")]),t._v(" "),a("code",[t._v("legacySql")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to use BigQuery's legacy SQL dialect for this query")])]),t._v(" "),a("p",[t._v("By default this property is set to false.")]),t._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),a("code",[t._v("projectId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("h3",{attrs:{id:"scopes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),a("code",[t._v("scopes")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),a("h3",{attrs:{id:"serviceaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),a("code",[t._v("serviceAccount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" "),a("code",[t._v("sql")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The sql query to run")])]),t._v(" "),a("h3",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" "),a("code",[t._v("store")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to store the data from the query result into an ion serialized data file")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"destinationtable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable"}},[t._v("#")]),t._v(" "),a("code",[t._v("destinationTable")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[a("a",{attrs:{href:"#destinationtable"}},[t._v("DestinationTable")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("The destination table (if one) or the temporary table created automatically")])]),t._v(" "),a("h3",{attrs:{id:"jobid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobid"}},[t._v("#")]),t._v(" "),a("code",[t._v("jobId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The job id")])]),t._v(" "),a("h3",{attrs:{id:"row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[t._v("#")]),t._v(" "),a("code",[t._v("row")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Map containing the first row of fetched data")])]),t._v(" "),a("p",[t._v("Only populated if 'fetchOne' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" "),a("code",[t._v("rows")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("List containing the fetched data")])]),t._v(" "),a("p",[t._v("Only populated if 'fetch' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" "),a("code",[t._v("size")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The size of the rows fetch")])]),t._v(" "),a("h3",{attrs:{id:"uri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),a("code",[t._v("uri")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The uri of store result")])]),t._v(" "),a("p",[t._v("Only populated if 'store' is set to true.")]),t._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),a("h3",{attrs:{id:"destinationtable-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("DestinationTable")])]),t._v(" "),a("h4",{attrs:{id:"dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[t._v("#")]),t._v(" "),a("code",[t._v("dataset")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The dataset of the table")])]),t._v(" "),a("h4",{attrs:{id:"project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[t._v("#")]),t._v(" "),a("code",[t._v("project")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The project of the table")])]),t._v(" "),a("h4",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" "),a("code",[t._v("table")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The table name")])])])}),[],!1,null,null,null);e.default=r.exports}}]);