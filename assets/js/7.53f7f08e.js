(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{378:function(t,e,a){"use strict";var s={props:{classes:{type:Array,default:function(){return[]}}}},i=a(19),n=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-relative shape-wrapper"},[e("div",{staticClass:"shape overflow-hidden",class:this.classes},[e("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);e.a=n.exports},379:function(t,e,a){t.exports=a.p+"assets/img/logo-white.d5238fff.svg"},380:function(t,e,a){},381:function(t,e,a){},382:function(t,e,a){},385:function(t,e,a){"use strict";var s=a(390),i=a.n(s),n=a(412),o=a(413),r=a(411),l=a(414),c=a(415),u=a(403),d=a(397),h=a(409),m=a(416),v=a(404),f=a(417),p=a(405),g=a(418),_=a(419),b=a(420),C=a(383),k={components:{VsmMenu:n.a,VsmMob:o.a,SearchBox:r.a,Domain:l.a,GoogleCirclesExtended:u.a,Terraform:h.a,Server:m.a,FileDocumentOutline:d.a,Email:v.a,ApplicationOutline:f.a,FeatureSearch:p.a,AccountNetworkOutline:g.a,PostOutline:b.a,GithubIcon:C.d},data:function(){return{stargazers:void 0,menu:[{title:"Product",icon:f.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features",icon:p.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages",icon:g.a,desc:"How Kestra can help on your daily workflow"},{title:"Enterprise Edition  ",link:"/features/enterprise",icon:_.a,desc:"Security and Productivity for enterprise"}]},{title:"Learn",icon:c.a,element:"a",dropdown:"docs",items:[{title:"Blogs",link:"/blogs/",icon:b.a,desc:"Product updates, user stories, and more"},{title:"Documentation",link:"/docs/",icon:d.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:u.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:h.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:d.a,desc:"Learn how to deploy Kestra"}]},{title:"Company",icon:l.a,element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us",icon:l.a,desc:"Discover our story and our team"},{title:"Contact us",link:"/company/contact",icon:v.a,desc:"How can we help?"}]},{title:"GitHub",icon:C.d,element:"span",href:"https://github.com/kestra-io/kestra",target:"_blank"}]}},mounted:function(){var t=this;window.sessionStorage.getItem("github_stargazers_count")?this.stargazers=window.sessionStorage.getItem("github_stargazers_count"):i.a.get("https://api.github.com/repos/kestra-io/kestra").then((function(e){window.sessionStorage.setItem("github_stargazers_count",e.data.stargazers_count),t.stargazers=e.data.stargazers_count}))},computed:{stargazersText:function(){return void 0===this.stargazers?"":Intl.NumberFormat("en-US").format(this.stargazers)}}},w=(a(391),a(19)),x=Object(w.a)(k,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vsm-menu",{attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[s("div",{staticClass:"wrap-content"},[s("div",{staticClass:"dropdown-menu show"},[t._l(a.items,(function(e,i){return[s("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"desc"},[t._v(t._s(e.desc))])],1),t._v(" "),i!==a.items.length-1?s("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(e){return[s(e.item.icon,{tag:"span"}),t._v(" "),"GitHub"===e.item.title?s("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title)+" "),t.stargazers?s("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):e.item.href?s("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title))]):s("span",[t._v(t._s(e.item.title))])]}},{key:"before-nav",fn:function(){return[s("li",{staticClass:"vsm-section logo-section"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a(379),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[s("li",{staticClass:"vsm-section search-section"},[s("SearchBox")],1),t._v(" "),s("vsm-mob",[s("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(e){return["a"===e.element?s("h6",{staticClass:"dropdown-header"},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))])],1):[s("h6",{staticClass:"dropdown-header"},["GitHub"===e.title?s("a",{attrs:{href:e.href}},[t._v(t._s(e.title)+" "),t.stargazers?s("span",{staticClass:"badge badge-dark",attrs:{"data-aos":"zoom-out"}},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):s("a",{attrs:{href:e.href}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))])],1)])],t._v(" "),t._l(e.items,(function(e){return[s("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))])],1)]}))]}))],2)])]},proxy:!0}])})}),[],!1,null,null,null);e.a=x.exports},386:function(t,e,a){"use strict";var s=a(399),i=a(387),n=a(421),o=a(383),r={data:function(){return{}},components:{Shape:a(378).a,GithubIcon:o.d,TwitterIcon:o.j,LinkedinIcon:o.e,Slack:i.a,MailIcon:o.f,ChevronRight:s.a,Heart:n.a}},l=(a(392),a(19)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Shape",{staticClass:"text-footer"}),t._v(" "),s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[s("img",{attrs:{src:a(379),height:"60",alt:""}})]),t._v(" "),s("p",{staticClass:"mt-2"},[t._v("Infinitely scalable open source orchestration platform.")]),t._v(" "),s("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io",target:"_blank",rel:"”noopener”"}},[s("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io",target:"_blank",rel:"”noopener”"}},[s("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra",target:"_blank",rel:"”noopener”"}},[s("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[s("slack",{attrs:{title:""}})],1)])])],1),t._v(" "),s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),s("ul",{staticClass:"list-unstyled footer-list"},[s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/features/features"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/features/enterprise"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Enterprise Edition\n                            ")],1)],1)])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),s("ul",{staticClass:"list-unstyled footer-list"},[s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/blogs/"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Blogs\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),s("ul",{staticClass:"list-unstyled footer-list"},[s("li",[s("a",{staticClass:"text-foot",attrs:{href:"/company/about-us"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),s("li",[s("a",{staticClass:"text-foot",attrs:{href:"/company/contact"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),s("footer",{staticClass:"footer footer-bar"},[s("div",{staticClass:"container text-center"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"text-sm-left"},[s("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),s("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),s("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"text-sm-right"},[s("p",{staticClass:"mb-0"},[s("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),s("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"321c4992",null);e.a=c.exports},388:function(t,e,a){"use strict";var s=a(387),i=a(390),n=a.n(i),o={components:{Slack:s.a},data:function(){return{online:void 0}},mounted:function(){var t=this;window.sessionStorage.getItem("slack_member_count")?this.online=window.sessionStorage.getItem("slack_member_count"):n.a.get("https://api.kestra.io/v1/communities/slack").then((function(e){window.sessionStorage.setItem("slack_member_count",e.data.total),t.online=e.data.total}))},computed:{onlineText:function(){return void 0===this.online?"":Intl.NumberFormat("en-US").format(this.online)}}},r=(a(393),a(19)),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-chat"},[e("a",{staticClass:"btn btn-primary rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[e("slack",{attrs:{title:""}}),this._v(" Chat "),this.online?e("span",{staticClass:"online"},[this._v(this._s(this.onlineText)+" members")]):this._e()],1)])}),[],!1,null,"4de6c5cf",null);e.a=l.exports},391:function(t,e,a){"use strict";a(380)},392:function(t,e,a){"use strict";a(381)},393:function(t,e,a){"use strict";a(382)},425:function(t,e,a){},426:function(t,e,a){},435:function(t,e,a){"use strict";a(425)},436:function(t,e,a){"use strict";a(426)},443:function(t,e,a){"use strict";var s=a(63),i=(a(65),a(9),a(66),a(434)),n=a.n(i),o={name:"right-anchor",props:{global:Boolean},data:function(){return{listData:[],activeIndex:null,opened:!1}},watch:{"$page.regularPath":function(){this.filterDataByLevel()}},computed:{},methods:{itemClick:function(t,e){var a;this.activeIndex=t,window.scrollTo({top:(null===(a=document.getElementById(e))||void 0===a?void 0:a.offsetTop)||0,behavior:"smooth"})},filterDataByLevel:function(){this.listData=[];var t=this.$page.headers;this.listData=t?Object(s.a)(t):[]},getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},mounted:function(){var t,e,a=this;(this.filterDataByLevel(),"click"===(null===(t=this.expandOptions)||void 0===t?void 0:t.trigger))&&(this.opened=null===(e=this.expandOptions)||void 0===e?void 0:e.clickModeDefaultOpen);window.addEventListener("scroll",n()((function(){var t=a.getScrollTop();a.listData.forEach((function(e,s){var i,n=null===(i=document.getElementById(e.slug))||void 0===i?void 0:i.offsetTop;n&&(0===s&&t<n?a.activeIndex=0:t>=n&&(a.activeIndex=s))}))}),100))}},r=(a(435),a(19)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.listData,(function(e,s){return a("li",{key:s,class:[s===t.activeIndex?"active":"",e.level>2?"sub":"","level-"+e.level],on:{click:function(a){return t.itemClick(s,e.slug)}}},[t._v(t._s(e.title)+"\n    ")])})),0)}),[],!1,null,"2e06833c",null);e.a=l.exports},444:function(t,e,a){"use strict";var s=a(383),i={components:{LinkedinIcon:s.e,TwitterIcon:s.j,FacebookIcon:s.c},computed:{url:function(){return encodeURIComponent("https://kestra.io/"+this.$page.regularPath)},title:function(){return encodeURIComponent(this.$page.title)}}},n=(a(436),a(19)),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("div",{staticClass:"btn-group mt-5 mb-3"},[a("a",{staticClass:"btn btn-twitter",attrs:{href:"https://twitter.com/intent/tweet?text="+t.title+"&url="+t.url,target:"_blank"}},[a("twitter-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Tweet\n        ")],1),t._v(" "),a("a",{staticClass:"btn btn-linkedin",attrs:{href:"https://www.linkedin.com/sharing/share-offsite/?url="+t.url+"&title="+t.title,target:"_blank"}},[a("linkedin-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Share\n        ")],1),t._v(" "),a("a",{staticClass:"btn btn-facebook",attrs:{href:"http://www.facebook.com/sharer.php?u="+t.url+"&title="+t.title,target:"_blank"}},[a("facebook-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Share\n        ")],1)]),t._v(" "),a("script",{attrs:{src:"https://giscus.app/client.js","data-repo":"kestra-io/kestra","data-repo-id":"MDEwOlJlcG9zaXRvcnkyMDQxNjQzNTM=","data-category":"General","data-category-id":"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDEyMTEw","data-mapping":"pathname","data-strict":"1","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"light","data-lang":"en",crossorigin:"anonymous",async:""}}),t._v(" "),a("div",{staticClass:"mb-5"})])}),[],!1,null,"2b6e4a05",null);e.a=o.exports},487:function(t,e,a){},488:function(t,e,a){},497:function(t,e,a){"use strict";a.r(e);var s={extends:a(667).a},i=(a(601),a(19)),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.default=n.exports},601:function(t,e,a){"use strict";a(487)},602:function(t,e,a){"use strict";a(488)},670:function(t,e,a){"use strict";var s={extends:a(668).a},i=a(19),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=n.exports},671:function(t,e,a){"use strict";var s={extends:a(672).a},i=a(19),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=n.exports},673:function(t,e,a){"use strict";var s={extends:a(669).a},i=a(19),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=n.exports},688:function(t,e,a){"use strict";a.r(e);var s=a(441),i=a.n(s),n=a(385),o=a(386),r=a(443),l=a(652),c=a(653),u=a(497),d=a(424),h=a(444),m=a(388),v={name:"GlobalLayout",components:{Header:n.a,Footer:o.a,RightAnchor:r.a,SidebarLinks:u.default,PageEdit:l.a,PageNav:c.a,Share:h.a,Chat:m.a},data:function(){return{isSidebarOpen:!1}},computed:{sidebarItems:function(){return Object(d.g)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"sidebar-open":this.isSidebarOpen},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},rightBar:function(){return i()(this.$page.frontmatter.rightBar)?!this.$site.themeConfig.rightBar||this.$site.themeConfig.rightBar:this.$page.frontmatter.rightBar},mainClass:function(){return this.rightBar()?{"col-md-9":!0,"col-xl-8":!0,"py-md-3":!0,"pl-md-5":!0}:{}}}},f=(a(602),a(19)),p=Object(f.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.pageClasses,attrs:{id:"wrapper"}},[a("Chat"),t._v(" "),a("Header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row flex-xl-nowrap"},[a("div",{staticClass:"col-md-3 col-xl-2 nav-sidebar"},[a("SidebarLinks",{attrs:{depth:0,items:t.sidebarItems,"sidebar-depth":0}})],1),t._v(" "),t.rightBar()?a("nav",{staticClass:"d-none d-xl-block col-xl-2 right"},[a("RightAnchor")],1):t._e(),t._v(" "),a("main",{staticClass:" docs",class:t.mainClass(),attrs:{role:"main"}},[a("div",{staticClass:"d-block d-md-none sidebar-mobile-btn"},[a("button",{staticClass:"navbar-toggler shadow-lg",attrs:{type:"button"},on:{click:t.toggleSidebar}},[a("span",{staticClass:"navbar-toggler-icon"})])]),t._v(" "),a("Content"),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),a("Share")],1)])])]),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);e.default=p.exports}}]);