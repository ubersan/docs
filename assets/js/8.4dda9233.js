(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{378:function(t,e,a){"use strict";var i={props:{classes:{type:Array,default:function(){return[]}}}},n=a(19),o=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-relative shape-wrapper"},[e("div",{staticClass:"shape overflow-hidden",class:this.classes},[e("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);e.a=o.exports},379:function(t,e,a){t.exports=a.p+"assets/img/logo-white.d5238fff.svg"},380:function(t,e,a){},381:function(t,e,a){},382:function(t,e,a){},385:function(t,e,a){"use strict";var i=a(390),n=a.n(i),o=a(412),s=a(413),r=a(411),l=a(414),c=a(415),u=a(403),d=a(397),f=a(409),m=a(416),v=a(404),p=a(417),h=a(405),b=a(418),g=a(419),_=a(420),w=a(383),y={components:{VsmMenu:o.a,VsmMob:s.a,SearchBox:r.a,Domain:l.a,GoogleCirclesExtended:u.a,Terraform:f.a,Server:m.a,FileDocumentOutline:d.a,Email:v.a,ApplicationOutline:p.a,FeatureSearch:h.a,AccountNetworkOutline:b.a,PostOutline:_.a,GithubIcon:w.d},data:function(){return{stargazers:void 0,menu:[{title:"Product",icon:p.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features",icon:h.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages",icon:b.a,desc:"How Kestra can help on your daily workflow"},{title:"Enterprise Edition  ",link:"/features/enterprise",icon:g.a,desc:"Security and Productivity for enterprise"}]},{title:"Learn",icon:c.a,element:"a",dropdown:"docs",items:[{title:"Blogs",link:"/blogs/",icon:_.a,desc:"Product updates, user stories, and more"},{title:"Documentation",link:"/docs/",icon:d.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:u.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:f.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:d.a,desc:"Learn how to deploy Kestra"}]},{title:"Company",icon:l.a,element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us",icon:l.a,desc:"Discover our story and our team"},{title:"Contact us",link:"/company/contact",icon:v.a,desc:"How can we help?"}]},{title:"GitHub",icon:w.d,element:"span",href:"https://github.com/kestra-io/kestra",target:"_blank"}]}},mounted:function(){var t=this;window.sessionStorage.getItem("github_stargazers_count")?this.stargazers=window.sessionStorage.getItem("github_stargazers_count"):n.a.get("https://api.github.com/repos/kestra-io/kestra").then((function(e){window.sessionStorage.setItem("github_stargazers_count",e.data.stargazers_count),t.stargazers=e.data.stargazers_count}))},computed:{stargazersText:function(){return void 0===this.stargazers?"":Intl.NumberFormat("en-US").format(this.stargazers)}}},k=(a(391),a(19)),C=Object(k.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vsm-menu",{attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[i("div",{staticClass:"wrap-content"},[i("div",{staticClass:"dropdown-menu show"},[t._l(a.items,(function(e,n){return[i("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))]),t._v(" "),i("span",{staticClass:"desc"},[t._v(t._s(e.desc))])],1),t._v(" "),n!==a.items.length-1?i("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(e){return[i(e.item.icon,{tag:"span"}),t._v(" "),"GitHub"===e.item.title?i("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title)+" "),t.stargazers?i("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):e.item.href?i("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title))]):i("span",[t._v(t._s(e.item.title))])]}},{key:"before-nav",fn:function(){return[i("li",{staticClass:"vsm-section logo-section"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a(379),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[i("li",{staticClass:"vsm-section search-section"},[i("SearchBox")],1),t._v(" "),i("vsm-mob",[i("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(e){return["a"===e.element?i("h6",{staticClass:"dropdown-header"},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])],1):[i("h6",{staticClass:"dropdown-header"},["GitHub"===e.title?i("a",{attrs:{href:e.href}},[t._v(t._s(e.title)+" "),t.stargazers?i("span",{staticClass:"badge badge-dark",attrs:{"data-aos":"zoom-out"}},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):i("a",{attrs:{href:e.href}},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])],1)])],t._v(" "),t._l(e.items,(function(e){return[i("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])],1)]}))]}))],2)])]},proxy:!0}])})}),[],!1,null,null,null);e.a=C.exports},386:function(t,e,a){"use strict";var i=a(399),n=a(387),o=a(421),s=a(383),r={data:function(){return{}},components:{Shape:a(378).a,GithubIcon:s.d,TwitterIcon:s.j,LinkedinIcon:s.e,Slack:n.a,MailIcon:s.f,ChevronRight:i.a,Heart:o.a}},l=(a(392),a(19)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Shape",{staticClass:"text-footer"}),t._v(" "),i("footer",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[i("img",{attrs:{src:a(379),height:"60",alt:""}})]),t._v(" "),i("p",{staticClass:"mt-2"},[t._v("Infinitely scalable open source orchestration platform.")]),t._v(" "),i("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[i("li",{staticClass:"list-inline-item"},[i("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io",target:"_blank",rel:"”noopener”"}},[i("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io",target:"_blank",rel:"”noopener”"}},[i("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra",target:"_blank",rel:"”noopener”"}},[i("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[i("slack",{attrs:{title:""}})],1)])])],1),t._v(" "),i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),i("ul",{staticClass:"list-unstyled footer-list"},[i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/features/features"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/features/enterprise"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Enterprise Edition\n                            ")],1)],1)])]),t._v(" "),i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),i("ul",{staticClass:"list-unstyled footer-list"},[i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/blogs/"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Blogs\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),i("ul",{staticClass:"list-unstyled footer-list"},[i("li",[i("a",{staticClass:"text-foot",attrs:{href:"/company/about-us"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),i("li",[i("a",{staticClass:"text-foot",attrs:{href:"/company/contact"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),i("footer",{staticClass:"footer footer-bar"},[i("div",{staticClass:"container text-center"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"text-sm-left"},[i("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),i("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),i("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"text-sm-right"},[i("p",{staticClass:"mb-0"},[i("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),i("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"321c4992",null);e.a=c.exports},388:function(t,e,a){"use strict";var i=a(387),n=a(390),o=a.n(n),s={components:{Slack:i.a},data:function(){return{online:void 0}},mounted:function(){var t=this;window.sessionStorage.getItem("slack_member_count")?this.online=window.sessionStorage.getItem("slack_member_count"):o.a.get("https://api.kestra.io/v1/communities/slack").then((function(e){window.sessionStorage.setItem("slack_member_count",e.data.total),t.online=e.data.total}))},computed:{onlineText:function(){return void 0===this.online?"":Intl.NumberFormat("en-US").format(this.online)}}},r=(a(393),a(19)),l=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-chat"},[e("a",{staticClass:"btn btn-primary rounded",attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"”noopener”"}},[e("slack",{attrs:{title:""}}),this._v(" Chat "),this.online?e("span",{staticClass:"online"},[this._v(this._s(this.onlineText)+" members")]):this._e()],1)])}),[],!1,null,"4de6c5cf",null);e.a=l.exports},389:function(t,e,a){},391:function(t,e,a){"use strict";a(380)},392:function(t,e,a){"use strict";a(381)},393:function(t,e,a){"use strict";a(382)},396:function(t,e,a){"use strict";var i={components:{Shape:a(378).a},props:{links:{type:Object,default:function(){}}},computed:{backgroundStyles:function(){return{backgroundImage:"url("+(this.$page.frontmatter.image||a(400))+")"}}}},n=(a(401),a(19)),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"bg-half text-white d-table w-100"},[a("div",{staticClass:"container"},[a("div",{staticClass:"bg-overlay bg-overlay-image",style:t.backgroundStyles}),t._v(" "),this.$page.frontmatter.image?a("div",{staticClass:"bg-overlay"}):t._e(),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12 text-center"},[a("div",{staticClass:"page-next-level"},[a("h1",[t._v(" "+t._s(t.$page.title)+" ")]),t._v(" "),a("div",{staticClass:"page-next"},[a("nav",{staticClass:"d-inline-block",attrs:{"aria-label":"breadcrumb"}},[a("ul",{staticClass:"breadcrumb bg-white rounded shadow mb-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Kestra")])],1),t._v(" "),t._l(t.links,(function(e,i){return a("li",{staticClass:"breadcrumb-item"},[e?a("router-link",{attrs:{to:e}},[t._v(t._s(i))]):[t._v(t._s(i))]],2)})),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$page.title))])],2)])])])])])])])])}),[],!1,null,"0b8aefd4",null);e.a=o.exports},400:function(t,e,a){t.exports=a.p+"assets/img/bg.a1648aa2.jpg"},401:function(t,e,a){"use strict";a(389)},402:function(t,e,a){t.exports=function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var a={};return e.m=t,e.c=a,e.p="dist/",e(0)}([function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},o=(i(a(1)),a(6)),s=i(o),r=i(a(7)),l=i(a(8)),c=i(a(9)),u=i(a(10)),d=i(a(11)),f=i(a(14)),m=[],v=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&(v=!0),v)return m=(0,d.default)(m,p),(0,u.default)(m,p.once),m},b=function(){m=(0,f.default)(),h()};t.exports={init:function(t){p=n(p,t),m=(0,f.default)();var e=document.all&&!window.atob;return function(t){return!0===t||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()}(p.disable)||e?void m.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})):(p.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?h(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,(function(){h(!0)})):document.addEventListener(p.startEvent,(function(){h(!0)})),window.addEventListener("resize",(0,r.default)(h,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(h,p.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,u.default)(m,p.once)}),p.throttleDelay)),p.disableMutationObserver||l.default.ready("[data-aos]",b),m)},refresh:h,refreshHard:b}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function a(t,e,a){function n(e){var a=f,i=m;return f=m=void 0,g=e,p=t.apply(i,a)}function s(t){return g=t,h=setTimeout(c,e),k?n(t):p}function l(t){var a=t-b;return void 0===b||a>=e||a<0||C&&t-g>=v}function c(){var t=y();return l(t)?u(t):void(h=setTimeout(c,function(t){var a=e-(t-b);return C?w(a,v-(t-g)):a}(t)))}function u(t){return h=void 0,x&&f?n(t):(f=m=void 0,p)}function d(){var t=y(),a=l(t);if(f=arguments,m=this,b=t,a){if(void 0===h)return s(b);if(C)return h=setTimeout(c,e),n(b)}return void 0===h&&(h=setTimeout(c,e)),p}var f,m,v,p,h,b,g=0,k=!1,C=!1,x=!0;if("function"!=typeof t)throw new TypeError(r);return e=o(e)||0,i(a)&&(k=!!a.leading,v=(C="maxWait"in a)?_(o(a.maxWait)||0,e):v,x="trailing"in a?!!a.trailing:x),d.cancel=function(){void 0!==h&&clearTimeout(h),g=0,f=b=m=h=void 0},d.flush=function(){return void 0===h?p:u(y())},d}function i(t){var e=void 0===t?"undefined":s(t);return!!t&&("object"==e||"function"==e)}function n(t){return"symbol"==(void 0===t?"undefined":s(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":s(t))}(t)&&g.call(t)==c}function o(t){if("number"==typeof t)return t;if(n(t))return l;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var a=f.test(t);return a||m.test(t)?v(t.slice(2),a?2:8):d.test(t)?l:+t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="Expected a function",l=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,p="object"==(void 0===e?"undefined":s(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,b=p||h||Function("return this")(),g=Object.prototype.toString,_=Math.max,w=Math.min,y=function(){return b.Date.now()};t.exports=function(t,e,n){var o=!0,s=!0;if("function"!=typeof t)throw new TypeError(r);return i(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),a(t,e,{leading:o,maxWait:e,trailing:s})}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function a(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function i(t){return"symbol"==(void 0===t?"undefined":o(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}(t)&&b.call(t)==l}function n(t){if("number"==typeof t)return t;if(i(t))return r;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=d.test(t);return n||f.test(t)?m(t.slice(2),n?2:8):u.test(t)?r:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s="Expected a function",r=NaN,l="[object Symbol]",c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,v="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,h=v||p||Function("return this")(),b=Object.prototype.toString,g=Math.max,_=Math.min,w=function(){return h.Date.now()};t.exports=function(t,e,i){function o(e){var a=f,i=m;return f=m=void 0,y=e,p=t.apply(i,a)}function r(t){return y=t,h=setTimeout(c,e),k?o(t):p}function l(t){var a=t-b;return void 0===b||a>=e||a<0||C&&t-y>=v}function c(){var t=w();return l(t)?u(t):void(h=setTimeout(c,function(t){var a=e-(t-b);return C?_(a,v-(t-y)):a}(t)))}function u(t){return h=void 0,x&&f?o(t):(f=m=void 0,p)}function d(){var t=w(),a=l(t);if(f=arguments,m=this,b=t,a){if(void 0===h)return r(b);if(C)return h=setTimeout(c,e),o(b)}return void 0===h&&(h=setTimeout(c,e)),p}var f,m,v,p,h,b,y=0,k=!1,C=!1,x=!0;if("function"!=typeof t)throw new TypeError(s);return e=n(e)||0,a(i)&&(k=!!i.leading,v=(C="maxWait"in i)?g(n(i.maxWait)||0,e):v,x="trailing"in i?!!i.trailing:x),d.cancel=function(){void 0!==h&&clearTimeout(h),y=0,f=b=m=h=void 0},d.flush=function(){return void 0===h?p:u(w())},d}}).call(e,function(){return this}())},function(t,e){"use strict";function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),a=Array.prototype.slice.call(t.removedNodes);if(function t(e){var a=void 0,i=void 0;for(a=0;a<e.length;a+=1){if((i=e[a]).dataset&&i.dataset.aos)return!0;if(i.children&&t(i.children))return!0}return!1}(e.concat(a)))return n()}))}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){};e.default={isSupported:function(){return!!a()},ready:function(t,e){var o=window.document,s=new(a())(i);n=e,s.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(t,e){"use strict";function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"phone",value:function(){var t=a();return!(!n.test(t)&&!o.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=a();return!(!s.test(t)&&!r.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new l},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var a=window.pageYOffset,i=window.innerHeight;t.forEach((function(t,n){!function(t,e,a){var i=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!a&&"true"!==i)&&t.node.classList.remove("aos-animate")}(t,i+a,e)}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(12));e.default=function(t,e){return t.forEach((function(t,a){t.node.classList.add("aos-init"),t.position=(0,i.default)(t.node,e.offset)})),t}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(13));e.default=function(t,e){var a=0,n=0,o=window.innerHeight,s={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(n=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(t=document.querySelectorAll(s.anchor)[0]),a=(0,i.default)(t).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=t.offsetHeight/2;break;case"bottom-bottom":a+=t.offsetHeight;break;case"top-center":a+=o/2;break;case"bottom-center":a+=o/2+t.offsetHeight;break;case"center-center":a+=o/2+t.offsetHeight/2;break;case"top-top":a+=o;break;case"bottom-top":a+=t.offsetHeight+o;break;case"center-top":a+=t.offsetHeight/2+o}return s.anchorPlacement||s.offset||isNaN(e)||(n=e),a+n}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),a+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:a,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))}}])},438:function(t,e,a){t.exports=a.p+"assets/img/edarras.6e116b1b.jpg"},439:function(t,e,a){t.exports=a.p+"assets/img/ldehon.ca79a90d.jpg"},465:function(t,e,a){},535:function(t,e,a){t.exports=a.p+"assets/img/ui.3e3f95fc.png"},536:function(t,e,a){"use strict";a(465)},680:function(t,e,a){"use strict";a.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title text-center pb-2"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-right"}},[this._v("Our Story")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0"},[e("div",{staticClass:"position-relative"},[e("img",{staticClass:"rounded img-fluid mx-auto d-block",attrs:{src:a(535),alt:"","data-aos":"fade-right"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0"},[a("div",{staticClass:"section-title ml-lg-4",attrs:{"data-aos":"fade-left"}},[a("p",[a("strong",[t._v("Why did you create a data orchestration platform?")]),a("br"),t._v("\n                                    For many years in the automation and workflow planning landscape, we were frustrated that we "),a("strong",[t._v("did not see a working, professional open-source solution")]),t._v(" that was suitable for either simple or complex projects.\n                                ")]),t._v(" "),a("p",[t._v("\n                                    During our consulting missions, our tireless research for reliable, professional, testable orchestrators ended "),a("strong",[t._v("in failure")]),t._v(" — none were scalable, they were too complex to use, not production ready, and had poor user interface.\n                                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                                        A challenge presented itself to us: "),e("strong",[this._v("Develop your own tool! One Platform to rule them all ^^")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                                        The platform is "),e("strong",[this._v("operational, in production, and performing")]),this._v(" to the satisfaction of several hundred internal users who have seen their productivity gain skyrocket since using Kestra. What a reward it is for us to build something new that brings "),e("strong",[this._v("complete satisfaction")]),this._v(" to its users.\n                                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[this._v("Our Founders")])])])])}],n=a(385),o=a(386),s=a(378),r=a(396),l=a(383),c={props:{teamData:{type:Array,default:[]}},components:{GithubIcon:l.d,TwitterIcon:l.j,LinkedinIcon:l.e},data:function(){return{}}},u=a(19),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.teamData,(function(e,i){return a("div",{key:i,staticClass:"col-lg-3 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"card team text-center border-0 pt-4 pb-4",attrs:{"data-aos":"fade-right"}},[a("div",{staticClass:"position-relative"},[a("img",{staticClass:"img-fluid avatar avatar-ex-large rounded-circle shadow",attrs:{src:""+e.image,alt:""}}),t._v(" "),a("ul",{staticClass:"list-unstyled social-icon team-icon mb-0 mt-4"},t._l(e.socials,(function(t,e){return a("li",{staticClass:"list-inline-item mr-1"},[a("a",{staticClass:"rounded",attrs:{href:t}},[a(e+"-icon",{tag:"templace",staticClass:"fea icon-sm fea-social"})],1)])})),0)]),t._v(" "),a("div",{staticClass:"card-body py-3 px-0 content"},[a("h5",{staticClass:"mb-0"},[a("a",{staticClass:"name text-dark",attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.name))])]),t._v(" "),a("small",{staticClass:"designation text-muted"},[t._v(t._s(e.designation))])])])])})),0)}),[],!1,null,null,null).exports,f=a(399),m=(a(92),{name:"PlayIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),v=Object(u.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._b({staticClass:"material-design-icon play-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M8,5.14V19.14L19,12.14L8,5.14Z"}},[t.title?a("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,p=a(402),h=a.n(p),b=a(404),g=a(388),_={components:{Header:n.a,Footer:o.a,Team:d,Breadcrumb:r.a,Shape:s.a,ChevronRight:f.a,Play:v,Email:b.a,Chat:g.a},mounted:function(){h.a.init({startEvent:"load"}),h.a.refresh()},data:function(){return{teamData:[{image:a(438),name:"Emmanuel Darras",designation:"C.E.O",socials:{linkedin:"https://www.linkedin.com/in/emmanuel-darras-48689b/"}},{image:a(439),name:"Ludovic Dehon",designation:"C.T.O",socials:{linkedin:"https://www.linkedin.com/in/ludovic-dehon-60886530/",twitter:"https://twitter.com/tchiotludo",github:"https://github.com/tchiotludo"}}]}}},w=(a(536),Object(u.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("Chat"),t._v(" "),a("Header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("main",[a("Breadcrumb"),t._v(" "),a("section",{staticClass:"section overflow-hidden"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row align-items-center"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"mt-4 pt-2"},[t._m(3),t._v(" "),a("p",[t._v("\n                                        Above all, we are seeking to challenge the ecosystem;\n                                        to give you a tool to allow you to "),a("router-link",{attrs:{to:"/features/features"}},[t._v("orchestrate and automate your data")]),t._v(", workflows, and batches all with simplicity, autonomy, and high performance.\n                                        his has been our ambition since day one and will continue to challenge us after the "),a("router-link",{attrs:{to:"/blogs/2022-02-01-kestra-opensource"}},[t._v("public launch of the Kestra project.")]),t._v(".\n                                    ")],1),t._v(" "),a("p",[t._v("\n                                        We developed our Open Source platform with careful precision and dedication as part of a mission for one of the leaders of retail in Europe, "),a("router-link",{attrs:{to:"/blogs/2022-02-22-leroy-merlin-usage-kestra"}},[t._v("Leroy Merlin, who were in need of high-capacity data management.")]),t._v(".\n                                    ")],1),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("\n                                        Now we are at the "),a("router-link",{attrs:{to:"/blogs/2022-02-01-kestra-opensource"}},[t._v("stage of our public launch")]),t._v(" with the aim of bringing Kestra to everyone who needs it. We have structured a company and our teams are "),a("strong",[t._v("ready to help")]),t._v(" you with your future tests and integrations.\n                                    ")],1)])])])])]),t._v(" "),a("Shape",{staticClass:"text-dark"})],1),t._v(" "),a("section",{staticClass:"section bg-dark text-white"},[a("div",{staticClass:"container"},[t._m(5),t._v(" "),a("Team",{attrs:{"team-data":t.teamData}})],1),t._v(" "),a("Shape",{staticClass:"text-bg"})],1),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"section-title"},[a("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[t._v("\n                                    Want more information?\n                                ")]),t._v(" "),a("h5",{staticClass:"text-muted para-desc mx-auto mb-0",attrs:{"data-aos":"fade-right"}},[t._v("\n                                    Any questions about Kestra or the company, please get in touch!\n                                ")]),t._v(" "),a("div",{staticClass:"mt-4"},[a("router-link",{staticClass:"btn btn-primary mt-2 mr-2",attrs:{to:"/company/contact.html","data-aos":"zoom-in"}},[a("Email",{attrs:{title:""}}),t._v("\n                                        Contact Us\n                                    ")],1)],1)])])])])])],1)]),t._v(" "),a("Footer")],1)}),i,!1,null,null,null));e.default=w.exports}}]);