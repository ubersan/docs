(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{896:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"document-your-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-your-plugin"}},[t._v("#")]),t._v(" Document your plugin")]),t._v(" "),a("p",[t._v("First, let us remember the organization of a plugin project:")]),t._v(" "),a("ul",[a("li",[t._v("The Gradle project can contain several plugins, we call it a group of plugins.")]),t._v(" "),a("li",[t._v("The package in which a plugin is is called a sub-group of plugins. Sometimes there is only one sub-group, so the group and the sub-group are the same.")]),t._v(" "),a("li",[t._v("Each class is a plugin that provides one task, trigger, condition, etc.")])]),t._v(" "),a("p",[t._v("The plugin documentation will be used on the Kestra website and the Kestra UI.")]),t._v(" "),a("p",[t._v("We provide a way to document each level of a plugin project.")]),t._v(" "),a("h2",{attrs:{id:"document-the-plugin-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-the-plugin-group"}},[t._v("#")]),t._v(" Document the plugin group")]),t._v(" "),a("h3",{attrs:{id:"manifest-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manifest-attributes"}},[t._v("#")]),t._v(" Manifest attributes")]),t._v(" "),a("p",[t._v("Kestra uses custom manifest attributes to provide top-level group documentation.")]),t._v(" "),a("p",[t._v("The following manifest attributes are used to document the group of plugins:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("X-Kestra-Title")]),t._v(": by default, the Gradle "),a("code",[t._v("project.name")]),t._v(" property is used.")]),t._v(" "),a("li",[a("code",[t._v("X-Kestra-Group")]),t._v(": by default, the Gradle "),a("code",[t._v("group.id")]),t._v(" property with an additional group name is used.")]),t._v(" "),a("li",[a("code",[t._v("X-Kestra-Description")]),t._v(": by default, the Gradle "),a("code",[t._v("project.description")]),t._v(" property is used.")]),t._v(" "),a("li",[a("code",[t._v("X-Kestra-Version")]),t._v(": by default, the Gradle "),a("code",[t._v("project.version")]),t._v(" property is used.")])]),t._v(" "),a("p",[t._v("If you follow the plugin structure of the GitHub template, you should have something like this:")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("group "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"io.kestra.plugin"')]),t._v("\ndescription "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google Cloud Platform (GCP) plugins for Kestra.'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [...]")]),t._v("\n\njar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    manifest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"X-Kestra-Title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"X-Kestra-Group"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('".gcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"X-Kestra-Description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"X-Kestra-Version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("As you can see, the most important documentation attribute is the "),a("code",[t._v("description")]),t._v(", which should be a short sentence describing the plugins.")]),t._v(" "),a("h3",{attrs:{id:"additional-markdown-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-markdown-files"}},[t._v("#")]),t._v(" Additional markdown files")]),t._v(" "),a("p",[t._v("You can add additional markdown files in the "),a("code",[t._v("src/main/resources/doc")]),t._v(" directory.")]),t._v(" "),a("p",[t._v("If there is a file "),a("code",[t._v("src/main/resources/doc/<plugin-group>.md")]),t._v(", it will be inlined inside the main documentation page as the long description for the group of plugins.")]),t._v(" "),a("p",[t._v("For example, for the GCP group of plugins, the file is "),a("code",[t._v("src/main/resources/doc/io.kestra.plugin.gcp.md")]),t._v(", and it contains authentication information that applies to all tasks.")]),t._v(" "),a("p",[t._v("If there are files inside the "),a("code",[t._v("src/main/resources/doc/guides")]),t._v(" directory, we will list them in a "),a("code",[t._v("Guides")]),t._v(" section on the documentation for the group of plugins.")]),t._v(" "),a("h2",{attrs:{id:"document-the-plugin-sub-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-the-plugin-sub-groups"}},[t._v("#")]),t._v(" Document the plugin sub-groups")]),t._v(" "),a("p",[t._v("Each sub-group can be documented via the "),a("code",[t._v("io.kestra.core.models.annotations.PluginSubGroup")]),t._v(" annotation that must be defined at the package level in a "),a("code",[t._v("package-info.java")]),t._v(" file.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("@PluginSubGroup")]),t._v(" annotation allows setting:")]),t._v(" "),a("ul",[a("li",[t._v("The sub-group "),a("code",[t._v("title")]),t._v(". If not set, the name of the sub-group will be used.")]),t._v(" "),a("li",[t._v("The sub-group "),a("code",[t._v("description")]),t._v(", which is a short sentence introducing the sub-group.")])]),t._v(" "),a("p",[t._v("For example, for the GCP BigQuery sub-group:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginSubGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BigQuery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This sub-group of plugins contains tasks for accessing Google Cloud BigQuery.\\n"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BigQuery is a completely serverless and cost-effective enterprise data warehouse. "')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigquery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PluginSubGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"document-each-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-each-plugin"}},[t._v("#")]),t._v(" Document each plugin")]),t._v(" "),a("p",[t._v("Plugin documentation will generate a JSON Schema that will be used to validate flows. It also generates documentation for both the UI and the website.")]),t._v(" "),a("h3",{attrs:{id:"document-the-plugin-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-the-plugin-class"}},[t._v("#")]),t._v(" Document the plugin class")]),t._v(" "),a("p",[t._v("Each plugin class must be documented via the following:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("code",[t._v("io.kestra.core.models.annotations.Plugin")]),t._v(" annotation allows providing examples.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("io.swagger.v3.oas.annotations.media.Schema")]),t._v(" annotation, which the "),a("code",[t._v("title")]),t._v(" attribute will use as the plugin description.")])]),t._v(" "),a("p",[t._v("For example, the "),a("code",[t._v("Query")]),t._v(" task of the PostgreSQL group of plugins is documented as follows:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Query a PostgresSQL server"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    examples "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            full "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Execute a query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"- id: update"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  type: io.kestra.plugin.jdbc.postgresql.Query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  url: jdbc:postgresql://127.0.0.1:56982/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  username: postgres"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  password: pg_passwd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  sql: select concert_id, available, a, b, c, d, play_time, library_record, floatn_test, double_test, real_test, numeric_test, date_type, time_type, timez_type, timestamp_type, timestampz_type, interval_type, pay_by_quarter, schedule, json_type, blob_type from pgsql_types"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  fetch: true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("For convenience, the "),a("code",[t._v("code")]),t._v(" attribute of the "),a("code",[t._v("@Example")]),t._v(" annotation is a list of strings. Each string will be a line of the example. That avoids concatenating multi-line strings in a single attribute.")]),t._v(" "),a("p",[t._v("You can add multiple examples if needed.")]),t._v(" "),a("h3",{attrs:{id:"document-the-plugin-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-the-plugin-properties"}},[t._v("#")]),t._v(" Document the plugin properties")]),t._v(" "),a("p",[t._v("In a plugin, all properties must be annotated by "),a("code",[t._v("io.kestra.core.models.annotations.PluginProperty")]),t._v(" and should provide documentation via the "),a("code",[t._v("io.swagger.v3.oas.annotations.media.Schema")]),t._v(" annotation and validation rules via "),a("code",[t._v("javax.validation.constraints.*")]),t._v(".")]),t._v(" "),a("p",[t._v("Please check the "),a("RouterLink",{attrs:{to:"/docs/plugin-developer-guide/runnable-task/#properties-validation"}},[t._v("Properties validation")]),t._v(" documentation page for validation rules.")],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("@PluginProperty")]),t._v(" annotation contains two attributes:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dynamic")]),t._v(": set it to true if the property will be rendered dynamically. See "),a("RouterLink",{attrs:{to:"/docs/plugin-developer-guide//runnable-task/#render-variables"}},[t._v("Render Variable")]),t._v(".")],1),t._v(" "),a("li",[a("code",[t._v("additionalProperties")]),t._v(": you can use it to denote the sub-type of the property. For example, when using a "),a("code",[t._v("Map<String, Message>")]),t._v(", you can set it to "),a("code",[t._v("Message.class")]),t._v(".")])]),t._v(" "),a("p",[t._v("The Swagger "),a("code",[t._v("@Schema")]),t._v(" annotation contains a lot of attributes that can be used to document the plugin properties. The most useful are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("title")]),t._v(": a short description of a property.")]),t._v(" "),a("li",[a("code",[t._v("description")]),t._v(": long description of a property.")]),t._v(" "),a("li",[a("code",[t._v("anyOf")]),t._v(": a list of allowed sub-types of a property. Use it when the property type is an interface, an abstract classes, or a class inside a hierarchy of class to denote possible sub-types. This should be set when the property type is "),a("code",[t._v("Object")]),t._v(".")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("@Schema")]),t._v(" and "),a("code",[t._v("@PluginProperty")]),t._v(" annotations can be used on fields, methods, or classes.")]),t._v(" "),a("p",[t._v("Many tasks can take input from multiple sources on the same property. They usually have a single "),a("code",[t._v("from")]),t._v(" property, a string representing a file in the Kestra Storage, a single object, or a list of objects. To document such property, you can use "),a("code",[t._v("anyOf")]),t._v(" this way:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PluginProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dynamic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The source of the published data."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Can be an internal storage URI, a list of Pub/Sub messages, or a single Pub/Sub message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    anyOf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Due to limitations on how JSON schema works, you cannot add "),a("code",[t._v("@Schema")]),t._v(" on a Java enum type and the plugin property that uses this type. We advise avoiding using "),a("code",[t._v("@Schema")]),t._v(" on enumerations.")])]),t._v(" "),a("h3",{attrs:{id:"document-the-plugin-outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-the-plugin-outputs"}},[t._v("#")]),t._v(" Document the plugin outputs")]),t._v(" "),a("p",[t._v("Outputs should be documented with the "),a("code",[t._v("io.swagger.v3.oas.annotations.media.Schema")]),t._v(" annotation the same way as plugin properties. Please read the section above for more information.")]),t._v(" "),a("p",[t._v("Only use the annotation mentioned above. Never use "),a("code",[t._v("@PluginProperty")]),t._v(" on an output.")])])}),[],!1,null,null,null);e.default=n.exports}}]);