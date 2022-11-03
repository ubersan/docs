(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{379:function(t,e,a){"use strict";var s={props:{classes:{type:Array,default:function(){return[]}}}},i=a(19),n=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-relative shape-wrapper"},[e("div",{staticClass:"shape overflow-hidden",class:this.classes},[e("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);e.a=n.exports},382:function(t,e,a){"use strict";var s=a(404),i=a.n(s),n=a(450),r=a(451),o=a(444),l=a(714),c=a(452),u=a(426),d=a(453),m=a(417),h=a(395),v=a(427),p=a(454),f=a(407),g=a(455),_=a(410),b=a(456),C=a(457),k=a(458),w=a(459),y=a(387),x={components:{VsmMenu:n.a,VsmMob:r.a,SearchBox:o.a,BAlert:l.a,Domain:c.a,GoogleCirclesExtended:m.a,Terraform:v.a,Server:p.a,FileDocumentOutline:h.a,Email:f.a,ApplicationOutline:g.a,FeatureSearch:_.a,AccountNetworkOutline:b.a,PostOutline:k.a,AccountStarOutline:w.a,GithubIcon:y.d},data:function(){return{stargazers:void 0,isBannerOpen:void 0,menu:[{title:"Product",icon:g.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features.html",icon:_.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages.html",icon:b.a,desc:"How Kestra can help on your daily workflow"},{title:"Enterprise Edition",link:"/features/enterprise.html",icon:C.a,desc:"Security and Productivity for enterprise"}]},{title:"Learn",icon:d.a,element:"a",dropdown:"docs",items:[{title:"Blogs",link:"/blogs/",icon:k.a,desc:"Product updates, user stories, and more"},{title:"Documentation",link:"/docs/",icon:h.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:m.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:v.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:h.a,desc:"Learn how to deploy Kestra"}]},{title:"Community",attributes:{href:"/community.html"},icon:u.a},{title:"Company",icon:c.a,badge:"Hiring ‼",element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us.html",icon:y.k,desc:"Discover our story and our team"},{title:"Careers",link:"/company/careers.html",badge:"Hiring ‼",icon:w.a,desc:"Join an open company"},{title:"Contact us",link:"/company/contact.html",icon:f.a,desc:"How can we help?"}]},{title:"GitHub",icon:y.d,element:"span",href:"https://github.com/kestra-io/kestra",target:"_blank"}]}},mounted:function(){var t=this;window.sessionStorage.getItem("github_stargazers_count")?this.stargazers=window.sessionStorage.getItem("github_stargazers_count"):i.a.get("https://api.github.com/repos/kestra-io/kestra").then((function(e){window.sessionStorage.setItem("github_stargazers_count",e.data.stargazers_count),t.stargazers=e.data.stargazers_count})),this.isBannerOpen=this.bannerIsOpen(),this.isBannerOpen&&(document.body.className="banner-open")},methods:{onBannerClose:function(){window.localStorage.setItem("header","false"),document.body.className="",this.isBannerOpen=!1},bannerIsOpen:function(){return"false"!==window.localStorage.getItem("header")}},computed:{stargazersText:function(){return void 0===this.stargazers?"":Intl.NumberFormat("en-US").format(this.stargazers)}}},O=(a(412),a(19)),S=Object(O.a)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-alert",{staticClass:"mb-0 top-banner",attrs:{show:t.isBannerOpen,dismissible:""},on:{dismissed:function(e){return t.onBannerClose()}}},[t._v("\n        If you like Kestra, "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank"}},[t._v("give us a star on GitHub !")])]),t._v(" "),s("vsm-menu",{class:{"banner-open":t.isBannerOpen},attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[s("div",{staticClass:"wrap-content"},[s("div",{staticClass:"dropdown-menu show"},[t._l(a.items,(function(e,i){return[s("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"desc"},[t._v(t._s(e.desc))])],1),t._v(" "),i!==a.items.length-1?s("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(e){return[s(e.item.icon,{tag:"span"}),t._v(" "),"GitHub"===e.item.title?s("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title)+" "),t.stargazers?s("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):e.item.href?s("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title))]):s("span",[t._v(t._s(e.item.title))]),t._v(" "),e.item.badge?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.item.badge))]):t._e()]}},{key:"before-nav",fn:function(){return[s("li",{staticClass:"vsm-section logo-section"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a(398),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[s("li",{staticClass:"vsm-section search-section"},[s("SearchBox")],1),t._v(" "),s("vsm-mob",[s("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(e){return["a"===e.element?s("h6",{staticClass:"dropdown-header"},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))])],1):[s("h6",{staticClass:"dropdown-header"},["GitHub"===e.title?s("a",{attrs:{href:e.href}},[t._v(t._s(e.title)+"\n                                    "),t.stargazers?s("span",{staticClass:"badge badge-dark",attrs:{"data-aos":"zoom-out"}},[t._v("\n                                        "+t._s(t.stargazersText)+" ⭐\n                                    ")]):t._e()]):e.attributes.href?s("router-link",{attrs:{to:e.attributes.href}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))])],1):s("a",{attrs:{href:e.href}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v(t._s(e.title))])],1)],1)],t._v(" "),t._l(e.items,(function(e){return[s("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[s(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),s("span",[t._v("\n                                    "+t._s(e.title)+"\n                                    "),e.badge?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.badge))]):t._e()])],1)]}))]}))],2)])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=S.exports},383:function(t,e,a){"use strict";var s=a(403),i=a(396),n=a(460),r=a(387),o={data:function(){return{}},components:{Shape:a(379).a,GithubIcon:r.d,TwitterIcon:r.j,LinkedinIcon:r.e,Slack:i.a,MailIcon:r.f,ChevronRight:s.a,Heart:n.a}},l=(a(413),a(19)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Shape",{staticClass:"text-footer"}),t._v(" "),s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[s("img",{attrs:{src:a(398),height:"60",alt:""}})]),t._v(" "),s("p",{staticClass:"mt-2"},[t._v("Infinitely scalable open source orchestration platform.")]),t._v(" "),s("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io",target:"_blank",rel:"”noopener”"}},[s("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io",target:"_blank",rel:"”noopener”"}},[s("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra",target:"_blank",rel:"”noopener”"}},[s("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),s("li",{staticClass:"list-inline-item ml-1"},[s("a",{staticClass:"rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[s("slack",{attrs:{title:""}})],1)])])],1),t._v(" "),s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),s("ul",{staticClass:"list-unstyled footer-list"},[s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/features/features.html"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages.html"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/features/enterprise.html"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Enterprise Edition\n                            ")],1)],1)])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),s("ul",{staticClass:"list-unstyled footer-list"},[s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/blogs/"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Blogs\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),s("li",[s("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[s("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),s("ul",{staticClass:"list-unstyled footer-list"},[s("li",[s("a",{staticClass:"text-foot",attrs:{href:"/company/about-us.html"}},[s("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),s("li",[s("a",{staticClass:"text-foot",attrs:{href:"/company/careers.html"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Careers "),s("span",{staticClass:"badge badge-danger"},[t._v("Hiring ‼")])],1)]),t._v(" "),s("li",[s("a",{staticClass:"text-foot",attrs:{href:"/company/contact.html"}},[s("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),s("footer",{staticClass:"footer footer-bar"},[s("div",{staticClass:"container text-center"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"text-sm-left"},[s("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),s("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),s("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"text-sm-right"},[s("p",{staticClass:"mb-0"},[s("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),s("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"c1049efe",null);e.a=c.exports},384:function(t,e,a){"use strict";var s=a(396),i=a(404),n=a.n(i),r={components:{Slack:s.a},data:function(){return{online:void 0}},mounted:function(){var t=this;window.sessionStorage.getItem("slack_member_count")?this.online=window.sessionStorage.getItem("slack_member_count"):n.a.get("https://api.kestra.io/v1/communities/slack").then((function(e){window.sessionStorage.setItem("slack_member_count",e.data.total),t.online=e.data.total}))},computed:{onlineText:function(){return void 0===this.online?"":Intl.NumberFormat("en-US").format(this.online)}}},o=(a(414),a(19)),l=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-chat"},[e("a",{staticClass:"btn btn-primary rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[e("slack",{attrs:{title:""}}),this._v(" Chat "),this.online?e("span",{staticClass:"online"},[this._v(this._s(this.onlineText)+" members")]):this._e()],1)])}),[],!1,null,"4de6c5cf",null);e.a=l.exports},398:function(t,e,a){t.exports=a.p+"assets/img/logo-white.d5238fff.svg"},400:function(t,e,a){},401:function(t,e,a){},402:function(t,e,a){},412:function(t,e,a){"use strict";a(400)},413:function(t,e,a){"use strict";a(401)},414:function(t,e,a){"use strict";a(402)},415:function(t,e,a){},416:function(t,e,a){},428:function(t,e,a){"use strict";var s=a(63),i=(a(65),a(9),a(66),a(434)),n=a.n(i),r={name:"right-anchor",props:{global:Boolean},data:function(){return{listData:[],activeIndex:null,opened:!1}},watch:{"$page.regularPath":function(){this.filterDataByLevel()}},computed:{},methods:{itemClick:function(t,e){var a;this.activeIndex=t,window.scrollTo({top:(null===(a=document.getElementById(e))||void 0===a?void 0:a.offsetTop)||0,behavior:"smooth"})},filterDataByLevel:function(){this.listData=[];var t=this.$page.headers;this.listData=t?Object(s.a)(t):[]},getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},mounted:function(){var t,e,a=this;(this.filterDataByLevel(),"click"===(null===(t=this.expandOptions)||void 0===t?void 0:t.trigger))&&(this.opened=null===(e=this.expandOptions)||void 0===e?void 0:e.clickModeDefaultOpen);window.addEventListener("scroll",n()((function(){var t=a.getScrollTop();a.listData.forEach((function(e,s){var i,n=null===(i=document.getElementById(e.slug))||void 0===i?void 0:i.offsetTop;n&&(0===s&&t<n?a.activeIndex=0:t>=n&&(a.activeIndex=s))}))}),100))}},o=(a(435),a(19)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.listData,(function(e,s){return a("li",{key:s,class:[s===t.activeIndex?"active":"",e.level>2?"sub":"","level-"+e.level],on:{click:function(a){return t.itemClick(s,e.slug)}}},[t._v(t._s(e.title)+"\n    ")])})),0)}),[],!1,null,"2e06833c",null);e.a=l.exports},429:function(t,e,a){"use strict";var s=a(387),i={components:{LinkedinIcon:s.e,TwitterIcon:s.j,FacebookIcon:s.c},computed:{url:function(){return encodeURIComponent("https://kestra.io/"+this.$page.regularPath)},title:function(){return encodeURIComponent(this.$page.title)}}},n=(a(436),a(19)),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("div",{staticClass:"btn-group mt-5 mb-3"},[a("a",{staticClass:"btn btn-twitter",attrs:{href:"https://twitter.com/intent/tweet?text="+t.title+"&url="+t.url,target:"_blank"}},[a("twitter-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Tweet\n        ")],1),t._v(" "),a("a",{staticClass:"btn btn-linkedin",attrs:{href:"https://www.linkedin.com/sharing/share-offsite/?url="+t.url+"&title="+t.title,target:"_blank"}},[a("linkedin-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Share\n        ")],1),t._v(" "),a("a",{staticClass:"btn btn-facebook",attrs:{href:"http://www.facebook.com/sharer.php?u="+t.url+"&title="+t.title,target:"_blank"}},[a("facebook-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Share\n        ")],1)]),t._v(" "),a("script",{attrs:{src:"https://giscus.app/client.js","data-repo":"kestra-io/kestra","data-repo-id":"MDEwOlJlcG9zaXRvcnkyMDQxNjQzNTM=","data-category":"General","data-category-id":"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDEyMTEw","data-mapping":"pathname","data-strict":"1","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"light","data-lang":"en",crossorigin:"anonymous",async:""}}),t._v(" "),a("div",{staticClass:"mb-5"})])}),[],!1,null,"2b6e4a05",null);e.a=r.exports},435:function(t,e,a){"use strict";a(415)},436:function(t,e,a){"use strict";a(416)},510:function(t,e,a){},511:function(t,e,a){},519:function(t,e,a){"use strict";a.r(e);var s={extends:a(707).a},i=(a(629),a(19)),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.default=n.exports},629:function(t,e,a){"use strict";a(510)},630:function(t,e,a){"use strict";a(511)},710:function(t,e,a){"use strict";var s={extends:a(708).a},i=a(19),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=n.exports},711:function(t,e,a){"use strict";var s={extends:a(712).a},i=a(19),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=n.exports},713:function(t,e,a){"use strict";var s={extends:a(709).a},i=a(19),n=Object(i.a)(s,void 0,void 0,!1,null,null,null);e.a=n.exports},731:function(t,e,a){"use strict";a.r(e);var s=a(442),i=a.n(s),n=a(382),r=a(383),o=a(428),l=a(692),c=a(693),u=a(519),d=a(406),m=a(429),h=a(384),v={name:"GlobalLayout",components:{Header:n.a,Footer:r.a,RightAnchor:o.a,SidebarLinks:u.default,PageEdit:l.a,PageNav:c.a,Share:m.a,Chat:h.a},data:function(){return{isSidebarOpen:!1}},computed:{sidebarItems:function(){return Object(d.g)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"sidebar-open":this.isSidebarOpen},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},rightBar:function(){return i()(this.$page.frontmatter.rightBar)?!this.$site.themeConfig.rightBar||this.$site.themeConfig.rightBar:this.$page.frontmatter.rightBar},mainClass:function(){return this.rightBar()?{"col-md-9":!0,"col-xl-8":!0,"py-md-3":!0,"pl-md-5":!0}:{}}}},p=(a(630),a(19)),f=Object(p.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.pageClasses,attrs:{id:"wrapper"}},[a("Chat"),t._v(" "),a("Header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row flex-xl-nowrap"},[a("div",{staticClass:"col-md-3 col-xl-2 nav-sidebar"},[a("SidebarLinks",{attrs:{depth:0,items:t.sidebarItems,"sidebar-depth":0}})],1),t._v(" "),t.rightBar()?a("nav",{staticClass:"d-none d-xl-block col-xl-2 right"},[a("RightAnchor")],1):t._e(),t._v(" "),a("main",{staticClass:" docs",class:t.mainClass(),attrs:{role:"main"}},[a("div",{staticClass:"d-block d-md-none sidebar-mobile-btn"},[a("button",{staticClass:"navbar-toggler shadow-lg",attrs:{type:"button"},on:{click:t.toggleSidebar}},[a("span",{staticClass:"navbar-toggler-icon"})])]),t._v(" "),a("Content"),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),a("Share")],1)])])]),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);e.default=f.exports}}]);