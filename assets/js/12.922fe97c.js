(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(t,s,e){"use strict";var a={props:{classes:{type:Array,default:function(){return[]}}}},i=e(19),r=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"position-relative shape-wrapper"},[s("div",{staticClass:"shape overflow-hidden",class:this.classes},[s("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);s.a=r.exports},379:function(t,s,e){t.exports=e.p+"assets/img/logo-white.d5238fff.svg"},380:function(t,s,e){},381:function(t,s,e){},382:function(t,s,e){},386:function(t,s,e){},387:function(t,s,e){"use strict";var a=e(390),i=e.n(a),r=e(416),n=e(417),o=e(415),l=e(697),c=e(418),d=e(409),u=e(419),m=e(404),h=e(397),v=e(410),_=e(420),p=e(405),f=e(421),C=e(406),b=e(422),g=e(423),k=e(424),w=e(383),y={components:{VsmMenu:r.a,VsmMob:n.a,SearchBox:o.a,BAlert:l.a,Domain:c.a,GoogleCirclesExtended:m.a,Terraform:v.a,Server:_.a,FileDocumentOutline:h.a,Email:p.a,ApplicationOutline:f.a,FeatureSearch:C.a,AccountNetworkOutline:b.a,PostOutline:k.a,GithubIcon:w.d},data:function(){return{stargazers:void 0,isBannerOpen:!0,menu:[{title:"Product",icon:f.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features.html",icon:C.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages.html",icon:b.a,desc:"How Kestra can help on your daily workflow"},{title:"Enterprise Edition",link:"/features/enterprise.html",icon:g.a,desc:"Security and Productivity for enterprise"}]},{title:"Learn",icon:u.a,element:"a",dropdown:"docs",items:[{title:"Blogs",link:"/blogs/",icon:k.a,desc:"Product updates, user stories, and more"},{title:"Documentation",link:"/docs/",icon:h.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:m.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:v.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:h.a,desc:"Learn how to deploy Kestra"}]},{title:"Community",attributes:{href:"/community.html"},icon:d.a},{title:"Company",icon:c.a,element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us",icon:c.a,desc:"Discover our story and our team"},{title:"Contact us",link:"/company/contact",icon:p.a,desc:"How can we help?"}]},{title:"GitHub",icon:w.d,element:"span",href:"https://github.com/kestra-io/kestra",target:"_blank"}]}},mounted:function(){var t=this;window.sessionStorage.getItem("github_stargazers_count")?this.stargazers=window.sessionStorage.getItem("github_stargazers_count"):i.a.get("https://api.github.com/repos/kestra-io/kestra").then((function(s){window.sessionStorage.setItem("github_stargazers_count",s.data.stargazers_count),t.stargazers=s.data.stargazers_count})),this.isBannerOpen=this.bannerIsOpen()},methods:{onBannerClose:function(){window.localStorage.setItem("header","false"),this.isBannerOpen=!1},bannerIsOpen:function(){return"false"!==window.localStorage.getItem("header")}},computed:{stargazersText:function(){return void 0===this.stargazers?"":Intl.NumberFormat("en-US").format(this.stargazers)}}},x=(e(392),e(19)),S=Object(x.a)(y,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("b-alert",{staticClass:"mb-0 top-banner",attrs:{show:t.isBannerOpen,dismissible:""},on:{dismissed:function(s){return t.onBannerClose()}}},[t._v("\n        If you like Kestra, "),a("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank"}},[t._v("give us a star on GitHub !")])]),t._v(" "),a("vsm-menu",{class:{"banner-open":t.isBannerOpen},attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.item;return[a("div",{staticClass:"wrap-content"},[a("div",{staticClass:"dropdown-menu show"},[t._l(e.items,(function(s,i){return[a("router-link",{staticClass:"dropdown-item",attrs:{to:s.link}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"desc"},[t._v(t._s(s.desc))])],1),t._v(" "),i!==e.items.length-1?a("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(s){return[a(s.item.icon,{tag:"span"}),t._v(" "),"GitHub"===s.item.title?a("a",{attrs:{href:s.item.href}},[t._v(t._s(s.item.title)+" "),t.stargazers?a("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):s.item.href?a("a",{attrs:{href:s.item.href}},[t._v(t._s(s.item.title))]):a("span",[t._v(t._s(s.item.title))])]}},{key:"before-nav",fn:function(){return[a("li",{staticClass:"vsm-section logo-section"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e(379),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[a("li",{staticClass:"vsm-section search-section"},[a("SearchBox")],1),t._v(" "),a("vsm-mob",[a("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(s){return["a"===s.element?a("h6",{staticClass:"dropdown-header"},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1):[a("h6",{staticClass:"dropdown-header"},["GitHub"===s.title?a("a",{attrs:{href:s.href}},[t._v(t._s(s.title)+"\n                                    "),t.stargazers?a("span",{staticClass:"badge badge-dark",attrs:{"data-aos":"zoom-out"}},[t._v("\n                                    "+t._s(t.stargazersText)+" ⭐\n                                ")]):t._e()]):s.attributes.href?a("router-link",{attrs:{to:s.attributes.href}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1):a("a",{attrs:{href:s.href}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1)],1)],t._v(" "),t._l(s.items,(function(s){return[a("router-link",{staticClass:"dropdown-item",attrs:{to:s.link}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1)]}))]}))],2)])]},proxy:!0}])})],1)}),[],!1,null,null,null);s.a=S.exports},388:function(t,s,e){"use strict";var a=e(402),i=e(385),r=e(425),n=e(383),o={data:function(){return{}},components:{Shape:e(378).a,GithubIcon:n.d,TwitterIcon:n.j,LinkedinIcon:n.e,Slack:i.a,MailIcon:n.f,ChevronRight:a.a,Heart:r.a}},l=(e(393),e(19)),c=Object(l.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Shape",{staticClass:"text-footer"}),t._v(" "),a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[a("img",{attrs:{src:e(379),height:"60",alt:""}})]),t._v(" "),a("p",{staticClass:"mt-2"},[t._v("Infinitely scalable open source orchestration platform.")]),t._v(" "),a("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io",target:"_blank",rel:"”noopener”"}},[a("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io",target:"_blank",rel:"”noopener”"}},[a("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra",target:"_blank",rel:"”noopener”"}},[a("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[a("slack",{attrs:{title:""}})],1)])])],1),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/features.html"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages.html"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/enterprise.html"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Enterprise Edition\n                            ")],1)],1)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/blogs/"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Blogs\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("a",{staticClass:"text-foot",attrs:{href:"/company/about-us.html"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),a("li",[a("a",{staticClass:"text-foot",attrs:{href:"/company/contact.html"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),a("footer",{staticClass:"footer footer-bar"},[a("div",{staticClass:"container text-center"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-left"},[a("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),a("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),a("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-right"},[a("p",{staticClass:"mb-0"},[a("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),a("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"78988336",null);s.a=c.exports},389:function(t,s,e){"use strict";var a=e(385),i=e(390),r=e.n(i),n={components:{Slack:a.a},data:function(){return{online:void 0}},mounted:function(){var t=this;window.sessionStorage.getItem("slack_member_count")?this.online=window.sessionStorage.getItem("slack_member_count"):r.a.get("https://api.kestra.io/v1/communities/slack").then((function(s){window.sessionStorage.setItem("slack_member_count",s.data.total),t.online=s.data.total}))},computed:{onlineText:function(){return void 0===this.online?"":Intl.NumberFormat("en-US").format(this.online)}}},o=(e(394),e(19)),l=Object(o.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"widget-chat"},[s("a",{staticClass:"btn btn-primary rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[s("slack",{attrs:{title:""}}),this._v(" Chat "),this.online?s("span",{staticClass:"online"},[this._v(this._s(this.onlineText)+" members")]):this._e()],1)])}),[],!1,null,"4de6c5cf",null);s.a=l.exports},392:function(t,s,e){"use strict";e(380)},393:function(t,s,e){"use strict";e(381)},394:function(t,s,e){"use strict";e(382)},395:function(t,s,e){"use strict";var a={components:{Shape:e(378).a},props:{links:{type:Object,default:function(){}},title:{type:String,default:void 0}},computed:{backgroundStyles:function(){return{backgroundImage:"url("+(this.$page.frontmatter.image||e(400))+")"}}}},i=(e(401),e(19)),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"bg-half text-white d-table w-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"bg-overlay bg-overlay-image",style:t.backgroundStyles}),t._v(" "),this.$page.frontmatter.image?e("div",{staticClass:"bg-overlay"}):t._e(),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-12 text-center"},[e("div",{staticClass:"page-next-level"},[e("h1",[t._v(" "+t._s(t.title||t.$page.title)+" ")]),t._v(" "),e("div",{staticClass:"page-next"},[e("nav",{staticClass:"d-inline-block",attrs:{"aria-label":"breadcrumb"}},[e("ul",{staticClass:"breadcrumb bg-white rounded shadow mb-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Kestra")])],1),t._v(" "),t._l(t.links,(function(s,a){return e("li",{staticClass:"breadcrumb-item"},[s?e("router-link",{attrs:{to:s}},[t._v(t._s(a))]):[t._v(t._s(a))]],2)})),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.title||t.$page.title))])],2)])])])])])])])])}),[],!1,null,"2496ef66",null);s.a=r.exports},400:function(t,s,e){t.exports=e.p+"assets/img/bg.a1648aa2.jpg"},401:function(t,s,e){"use strict";e(386)},450:function(t,s,e){t.exports=e.p+"assets/img/slack.50920980.png"},481:function(t,s,e){},552:function(t,s,e){"use strict";e(481)},708:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[this._v("\n                                    Join the Kestra\n                                    "),s("img",{staticClass:"logo-slack",attrs:{src:e(450)}}),this._v("\n                                    Community\n                                ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-md-4 mt-4 pt-2"},[s("div",{staticClass:"card work-process border-0 rounded shadow"},[s("div",{staticClass:"card-body"},[s("a",{attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect"}},[s("h4",{staticClass:"title"},[this._v("Ask a question")]),this._v(" "),s("p",{staticClass:"text-muted para"},[this._v("\n                                                        Get stuck with the documentation, We´re here to help!\n                                                    ")]),this._v(" "),s("ul",{staticClass:"list-unstyled d-flex justify-content-between mb-0 mt-2"},[s("li",{staticClass:"step h1 mb-0 font-weight-bold"},[this._v("#help")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-md-4 mt-4 pt-2"},[s("div",{staticClass:"card work-process border-0 rounded shadow"},[s("div",{staticClass:"card-body"},[s("a",{attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect"}},[s("h4",{staticClass:"title"},[this._v("Introduce yourself")]),this._v(" "),s("p",{staticClass:"text-muted para"},[this._v("\n                                                        Welcome to the Kestra community! Let's introduce ourselves!\n                                                    ")]),this._v(" "),s("ul",{staticClass:"list-unstyled d-flex justify-content-between mb-0 mt-2"},[s("li",{staticClass:"step h1 mb-0 font-weight-bold"},[this._v("#introductions")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-md-4 mt-4 pt-2"},[s("div",{staticClass:"card work-process border-0 rounded shadow"},[s("div",{staticClass:"card-body"},[s("a",{attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect"}},[s("h4",{staticClass:"title"},[this._v("Share Feedback")]),this._v(" "),s("p",{staticClass:"text-muted para"},[this._v("\n                                                        Discussions about the product, including your feedback, ideas, and dreams.\n                                                    ")]),this._v(" "),s("ul",{staticClass:"list-unstyled d-flex justify-content-between mb-0 mt-2"},[s("li",{staticClass:"step h1 mb-0 font-weight-bold"},[this._v("#feedback-and-requests")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{staticClass:"text-muted para-desc mx-auto mb-0",attrs:{"data-aos":"fade-right"}},[this._v("\n                                    Start building with "),s("span",{staticClass:"text-primary font-weight-bold"},[this._v("Kestra")]),this._v(" and enjoy your pipelines — the only limit is your imagination!\n                                ")])}],i=e(390),r=e.n(i),n=e(551),o=e.n(n),l=e(387),c=e(388),d=e(378),u=e(395),m=e(398),h=e(409),v=e(669),_=e(670),p=e(671),f=e(672),C=e(673),b=e(397),g=e(430),k=e(674),w=e(385),y=e(383),x=e(389),S=e(403),I=e.n(S),O={components:{Header:l.a,Footer:c.a,Breadcrumb:u.a,Shape:d.a,ArrowRight:m.a,AccountGroupOutline:h.a,SourceCommitLocal:v.a,BugOutline:_.a,SourcePull:p.a,DirectionsFork:f.a,Star:C.a,ChevronDoubleRight:k.a,Slack:w.a,PlayCircle:g.a,FileDocumentOutline:b.a,GithubIcon:y.d,countTo:o.a,Chat:x.a},data:function(){return{contributors:void 0,metrics:void 0}},mounted:function(){var t=this;I.a.init({startEvent:"load"}),I.a.refresh(),r.a.get("https://api.kestra.io/v1/communities/github/contributors").then((function(s){t.contributors=s.data})),r.a.get("https://api.kestra.io/v1/communities/github/metrics").then((function(s){t.metrics=s.data}))}},z=(e(552),e(19)),R=Object(z.a)(O,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("Chat"),t._v(" "),e("Header"),t._v(" "),e("div",{attrs:{id:"container"}},[e("main",{staticClass:"features-usage"},[e("Breadcrumb"),t._v(" "),e("section",{staticClass:"section pt-1 overflow-hidden"},[e("div",{staticClass:"container pb-lg-4 mb-md-5 mb-4 mt-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title"},[t._m(0),t._v(" "),e("p",{attrs:{"data-aos":"fade-right"}},[t._v("\n                                    Join the slack to share ideas and best practices, get help with technical questions, and discuss Kestra with other developers (and even the founders).\n                                ")]),t._v(" "),e("div",{staticClass:"row"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"col-12 mt-4 pt-4 text-center"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect","data-aos":"zoom-in"}},[e("slack",{attrs:{title:""}}),t._v(" Join our Slack\n                                            "),e("ArrowRight",{attrs:{title:""}})],1)])])])])])]),t._v(" "),e("Shape",{staticClass:"text-dark"})],1),t._v(" "),e("section",{staticClass:"section bg-dark text-white overflow-hidden"},[e("div",{staticClass:"container pb-lg-4 mb-md-5 mb-4 mt-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[t._v("\n                                    Kestra is built by the open-source community\n                                ")]),t._v(" "),e("p",{attrs:{"data-aos":"fade-right"}},[t._v("Inspire and get inspired. Join our community of maintainers\n                                    and contributors and help us make Kestra better!\n                                ")]),t._v(" "),e("div",{staticClass:"row metrics"},[e("div",{staticClass:"col-md-2 col-4 mt-4 pt-2",attrs:{"data-aos":"fade-left"}},[e("div",{staticClass:"counter-box text-center"},[e("Star",{attrs:{title:""}}),t._v(" "),e("h2",{staticClass:"mb-0 mt-2"},[e("countTo",{attrs:{endVal:this.metrics?this.metrics.stars:0,duration:4e3}})],1),t._v(" "),e("h6",{staticClass:"counter-head text-muted"},[t._v("Stars")])],1)]),t._v(" "),e("div",{staticClass:"col-md-2 col-4 mt-4 pt-2",attrs:{"data-aos":"fade-left"}},[e("div",{staticClass:"counter-box text-center"},[e("DirectionsFork",{attrs:{title:""}}),t._v(" "),e("h2",{staticClass:"mb-0 mt-2"},[e("countTo",{attrs:{endVal:this.metrics?this.metrics.forks:0,duration:4e3}})],1),t._v(" "),e("h6",{staticClass:"counter-head text-muted"},[t._v("Forks")])],1)]),t._v(" "),e("div",{staticClass:"col-md-2 col-4 mt-4 pt-2",attrs:{"data-aos":"fade-left"}},[e("div",{staticClass:"counter-box text-center"},[e("BugOutline",{attrs:{title:""}}),t._v(" "),e("h2",{staticClass:"mb-0 mt-2"},[e("countTo",{attrs:{endVal:this.metrics?this.metrics.issues:0,duration:4e3}})],1),t._v(" "),e("h6",{staticClass:"counter-head text-muted"},[t._v("Issues")])],1)]),t._v(" "),e("div",{staticClass:"col-md-2 col-4 mt-4 pt-2",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"counter-box text-center"},[e("SourcePull",{attrs:{title:""}}),t._v(" "),e("h2",{staticClass:"mb-0 mt-2"},[e("countTo",{attrs:{endVal:this.metrics?this.metrics.pullRequests:0,duration:4e3}})],1),t._v(" "),e("h6",{staticClass:"counter-head text-muted"},[t._v("Pull Requests")])],1)]),t._v(" "),e("div",{staticClass:"col-md-2 col-4 mt-4 pt-2",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"counter-box text-center"},[e("SourceCommitLocal",{attrs:{title:""}}),t._v(" "),e("h2",{staticClass:"mb-0 mt-2"},[e("countTo",{attrs:{endVal:this.metrics?this.metrics.commits:0,duration:4e3}})],1),t._v(" "),e("h6",{staticClass:"counter-head text-muted"},[t._v("Commits")])],1)]),t._v(" "),e("div",{staticClass:"col-md-2 col-4 mt-4 pt-2",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"counter-box text-center"},[e("AccountGroupOutline",{attrs:{title:""}}),t._v(" "),e("h2",{staticClass:"mb-0 mt-2"},[e("countTo",{attrs:{endVal:this.contributors?this.contributors.length:0,duration:4e3}})],1),t._v(" "),e("h6",{staticClass:"counter-head text-muted"},[t._v("Contributors")])],1)])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("a",{staticClass:"btn btn-light title-dark mt-2 mr-2",attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank","data-aos":"zoom-in"}},[e("GithubIcon",{attrs:{title:""}}),t._v("  Follow on GitHub"),e("ArrowRight",{attrs:{title:""}})],1),t._v(" "),e("a",{staticClass:"btn btn-secondary mt-2 mr-2",attrs:{href:"https://github.com/kestra-io/kestra/issues",target:"_blank","data-aos":"zoom-in"}},[e("GithubIcon",{attrs:{title:""}}),t._v("  Find Open Issues"),e("ArrowRight",{attrs:{title:""}})],1)])])])])]),t._v(" "),e("Shape",{staticClass:"text-bg"})],1),t._v(" "),e("section",{staticClass:"section overflow-hidden"},[e("div",{staticClass:"container pb-lg-4 mb-md-5 mb-4 mt-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[t._v("\n                                    Our contributors\n                                ")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.contributors,(function(s){return e("div",{staticClass:"contributors p-2",attrs:{"data-aos":"fade-zoom"}},[e("div",{staticClass:"position-relative"},[e("a",{staticClass:"name text-dark",attrs:{href:"https://github.com/"+s.name}},[e("img",{staticClass:"img-fluid avatar avatar-small rounded-circle shadow",attrs:{src:s.avatar,alt:""}})])]),t._v(" "),e("a",{staticClass:"name",attrs:{href:"https://github.com/"+s.name}},[t._v(t._s(s.name))])])})),0)])])])]),t._v(" "),e("Shape",{staticClass:"text-white"})],1),t._v(" "),e("section",{staticClass:"section pt-1 bg-white overflow-hidden"},[e("div",{staticClass:"container pb-lg-4 mb-md-5 mb-4 mt-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[t._v("\n                                    Endless options to choose from to develop your own plugins!\n                                ")]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"mt-4"},[e("router-link",{staticClass:"btn btn-primary mt-2 mr-2",attrs:{to:"/docs/getting-started","data-aos":"zoom-in"}},[e("PlayCircle",{attrs:{title:""}}),t._v(" Get Started "),e("ArrowRight",{attrs:{title:""}})],1),t._v(" "),e("router-link",{staticClass:"btn btn-outline-primary mt-2",attrs:{to:"/docs","data-aos":"zoom-in"}},[e("FileDocumentOutline",{attrs:{title:""}}),t._v(" Read the docs "),e("ArrowRight",{attrs:{title:""}})],1)],1)])])])])])],1)]),t._v(" "),e("Footer")],1)}),a,!1,null,null,null);s.default=R.exports}}]);