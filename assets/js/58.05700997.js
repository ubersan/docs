(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{770:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[t._v("#")]),t._v(" Schedule")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.models.triggers.types.Schedule"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Kestra is able to trigger flow based on Schedule (aka the time). If you need to wait another system to be ready and can't use any event mechanism, you can schedule 1 or more time for the current flow.")])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("blockquote",[s("p",[t._v("A schedule with a backfill")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" schedule\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.triggers.types.Schedule\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/15 * * * *"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backfill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-06-25T14:00:00Z")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("A schedule that run only the first monday on every month at 11 AM")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" schedule\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.triggers.types.Schedule\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 11 * * 1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheduleConditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" monday\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.DayInMonthCondition\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ trigger.date }}"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dayOfWeek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MONDAY"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dayInMonth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FIRST"')]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Schedule "),s("strong",[t._v("cannot overlap")]),t._v(", this mean that we "),s("strong",[t._v("can't have any concurrent schedule")]),t._v(". If the previous schedule is not ended when the next one must start, the scheduler will wait the end of the previous one. Same is applied during backfill.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Most of the time, schedule execution will depend on "),s("code",[t._v("trigger.date")]),t._v(" (looking at files for today, sql query with where schedule date). This works well, but it prevents you to execute your flow manually (since these variables are only available during schedule)."),s("br"),t._v("\nYou can use this expression in order to make your "),s("strong",[t._v("manual execution working")]),t._v(": "),s("code",{pre:!0},[t._v('{{ dateFormat (firstDefined schedule.date execution.startDate) "yyyy-MM-dd"}}')]),t._v(", it will use the current date instead of the schedule one on manual execution, and your flow will not fail.")])]),t._v(" "),s("h2",{attrs:{id:"backfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backfill"}},[t._v("#")]),t._v(" Backfill")]),t._v(" "),s("p",[t._v("Kestra will handle optionally a backfill. The concept of backfill is the replay the missing schedule because we create the flow later.")]),t._v(" "),s("p",[t._v("Backfill will do all schedules between define date & current date and will start after the normal schedule.")]),t._v(" "),s("h2",{attrs:{id:"variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),s("p",[t._v("When the flow is schedule, some context variables are injected to allow some customization of the flow"),s("br"),t._v("\n(like filename, where in sql query).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.date }}")])]),t._v(" "),s("td",[t._v("the date of current schedule")])]),t._v(" "),s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.next }}")])]),t._v(" "),s("td",[t._v("the date of next schedule")])]),t._v(" "),s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.previous }}")])]),t._v(" "),s("td",[t._v("the date of previous schedule")])])])]),t._v(" "),s("h2",{attrs:{id:"schedule-conditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule-conditions"}},[t._v("#")]),t._v(" Schedule Conditions")]),t._v(" "),s("p",[t._v("When the "),s("code",[t._v("cron")]),t._v(" is not suffisant to determine the date you want to schedule your flow, you can use "),s("code",[t._v("scheduleConditions")]),t._v(" in order to add some extra conditions, (for example, only the first day of the month, only the weekend, ...)."),s("br"),t._v("\nYou "),s("strong",[t._v("must")]),t._v(" use the "),s("code",{pre:!0},[t._v("{{ trigger.date }}")]),t._v(" expression  on properties "),s("code",[t._v("date")]),t._v(" the current schedule."),s("br"),t._v("\nThis condition will be evaluated and "),s("code",{pre:!0},[t._v("{{ trigger.previous }}")]),t._v(" and "),s("code",{pre:!0},[t._v("{{ trigger.next }}")]),t._v(" will reflect the date "),s("strong",[t._v("with")]),t._v(" the conditions apply.")]),t._v(" "),s("p",[t._v("The list of core conditions that can be used  are :")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.DateTimeBetweenCondition.html"}},[t._v("DateTimeBetweenCondition")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.DayWeekCondition.html"}},[t._v("DayWeekCondition")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.DayWeekInMonthCondition.html"}},[t._v("DayWeekInMonthCondition")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.NotCondition.html"}},[t._v("NotCondition")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.OrCondition.html"}},[t._v("OrCondition")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.WeekendCondition.html"}},[t._v("WeekendCondition")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/plugins/dcp-kestra/conditions/io.kestra.core.models.conditions.types.DayInMonthCondition.html"}},[t._v("DayInMonthCondition")])],1)]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" "),s("code",[t._v("id")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔")])]),t._v(" "),s("blockquote",[s("p",[t._v("unique for a flow. The scheduler will keep the last execution date for this schedule. This allow you to change the cron expression without restart all the past execution (if backfill exists)")])]),t._v(" "),s("h3",{attrs:{id:"cron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[t._v("#")]),t._v(" "),s("code",[t._v("cron")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("the cron expression you need tyo"),s("br"),t._v("\na standard "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("unix cron expression"),s("OutboundLink")],1),t._v(" without second.")])]),t._v(" "),s("h3",{attrs:{id:"backfill-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backfill-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("backfill")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[s("a",{attrs:{href:"#schedulebackfill"}},[t._v("ScheduleBackfill")])])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Backfill options in order to fill missing previous past date"),s("br"),t._v("\nKestra will handle optionally a backfill. The concept of backfill is the replay the missing schedule because we create the flow later.")])]),t._v(" "),s("p",[t._v("Backfill will do all schedules between define date & current date and will start after the normal schedule.")]),t._v(" "),s("h3",{attrs:{id:"scheduleconditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduleconditions"}},[t._v("#")]),t._v(" "),s("code",[t._v("scheduleConditions")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("ScheduleCondition")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("List of schedule Conditions in order to limit schedule date.")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" "),s("code",[t._v("date")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The date of current schedule")])]),t._v(" "),s("h3",{attrs:{id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" "),s("code",[t._v("next")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The date of next schedule")])]),t._v(" "),s("h3",{attrs:{id:"previous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#previous"}},[t._v("#")]),t._v(" "),s("code",[t._v("previous")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The date of previous schedule")])]),t._v(" "),s("h2",{attrs:{id:"definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),s("h3",{attrs:{id:"schedulebackfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedulebackfill"}},[t._v("#")]),t._v(" "),s("code",[t._v("ScheduleBackfill")])]),t._v(" "),s("h4",{attrs:{id:"start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" "),s("code",[t._v("start")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The first start date")])])])}),[],!1,null,null,null);e.default=r.exports}}]);