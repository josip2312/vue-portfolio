(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function s(e){return c.p+"js/"+({About:"About",FormFailure:"FormFailure",FormSuccess:"FormSuccess",Landing:"Landing",WorkDetails:"WorkDetails"}[e]||e)+"."+{About:"86debe28",FormFailure:"25a4e3e9",FormSuccess:"93830f8b",Landing:"f775eca1",WorkDetails:"288f7964"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={About:1,Landing:1,WorkDetails:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({About:"About",FormFailure:"FormFailure",FormSuccess:"FormSuccess",Landing:"Landing",WorkDetails:"WorkDetails"}[e]||e)+"."+{About:"2ba56ee9",FormFailure:"31d6cfe0",FormSuccess:"31d6cfe0",Landing:"5e9d9e2b",WorkDetails:"e82d99f9"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],f.parentNode.removeChild(f),n(a)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22a7":function(e,t,n){"use strict";var r=n("3ab1"),i=n.n(r);i.a},"277b":function(e,t,n){e.exports=n.p+"img/linkedin.97ce31c8.svg"},"3ab1":function(e,t,n){},"494a":function(e,t,n){e.exports=n.p+"img/ig.341a67c5.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("div",{staticClass:"wrap"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("TheFooter")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("nav",[n("div",{staticClass:"logo"},[e._v(" Logo ")]),n("ul",{class:{isVisible:e.isVisible}},[n("li",[n("router-link",{attrs:{to:{name:"Landing"}},on:{click:e.hideSidebar}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:{name:"WorkDetails"}},on:{click:e.hideSidebar}},[e._v("Work")])],1),n("li",[n("router-link",{attrs:{to:{name:"About"}},on:{click:e.hideSidebar}},[e._v("About me")])],1)]),n("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideSidebar,expression:"hideSidebar"}],staticClass:"nav-toggle",on:{click:e.showSidebar}},[n("span",{staticClass:"hamburger",class:{active:e.isVisible}})])]),n("TheMobileNav")],1)},s=[],c=n("e67d"),u=n.n(c),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isMobile?n("div",{staticClass:"mobile-nav"},[n("a",{attrs:{href:"#work"}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{fill:"var(--font-primary)",d:"M24 19h-1v-2.2c-1.853 4.237-6.083 7.2-11 7.2-6.623 0-12-5.377-12-12h1c0 6.071 4.929 11 11 11 4.66 0 8.647-2.904 10.249-7h-2.249v-1h4v4zm-10.772 0h-2.457c-.448-1.286-.489-1.599-.931-1.781-.468-.193-.77.044-1.922.598l-1.736-1.735c.587-1.217.786-1.473.6-1.922-.188-.451-.528-.495-1.782-.932v-2.457c1.285-.448 1.598-.488 1.782-.932.192-.465-.04-.758-.6-1.921l1.736-1.736c1.163.561 1.467.792 1.921.6.46-.191.505-.556.932-1.782h2.457c.449 1.287.49 1.599.932 1.781.466.194.776-.045 1.922-.599l1.735 1.736c-.581 1.208-.784 1.473-.599 1.921.191.46.556.505 1.782.932v2.457c-1.27.442-1.597.487-1.782.933-.187.452.022.722.599 1.921l-1.735 1.735c-1.096-.526-1.452-.798-1.916-.601-.465.193-.508.553-.938 1.784zm-.71-13h-1.036c-.243.722-.462 1.375-1.26 1.705-.744.31-1.383.032-2.098-.314l-.733.733c.363.74.644 1.303.315 2.098-.343.827-.969.991-1.706 1.259v1.046c.723.244 1.375.453 1.706 1.25.332.802.033 1.378-.315 2.1l.733.731c.711-.348 1.355-.622 2.098-.314.757.314 1.011.909 1.259 1.706h1.029c.244-.723.471-1.375 1.272-1.708.773-.32 1.4-.01 2.094.316l.731-.732c-.336-.724-.656-1.268-.313-2.098.344-.828.963-.985 1.706-1.26v-1.036c-.724-.243-1.375-.463-1.706-1.26-.33-.798-.044-1.367.315-2.098l-.732-.733c-.715.344-1.345.627-2.099.315-.789-.327-.994-.922-1.26-1.706zm-.539 8.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.979-1.5h-4v-4h1v2.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12h-1c0-6.071-4.929-11-11-11-4.66 0-8.647 2.904-10.249 7h2.249v1z"}})]),n("span",[e._v(" My Work ")])]),n("a",{attrs:{href:"#contact"}},[n("svg",{attrs:{width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{fill:"var(--font-primary)",d:"M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"}})]),n("span",[e._v(" Contact me ")])])]):e._e()},d=[],f={name:"TheMobileNav",data:function(){return{windowWidth:window.innerWidth}},computed:{isMobile:function(){return this.windowWidth<=568}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))}},h=f,m=(n("cdb9"),n("2877")),p=Object(m["a"])(h,l,d,!1,null,"60fb1da2",null),v=p.exports,b={name:"Header",components:{TheMobileNav:v},data:function(){return{windowWidth:window.innerWidth,isVisible:!1,currentRoute:""}},methods:{showSidebar:function(){this.isVisible=!this.isVisible},hideSidebar:function(){this.isVisible=!1},sendToIndex:function(){this.$router.push({name:"Index"}),this.currentRoute="Index"},sendToAbout:function(){this.$router.push({name:"About"}),this.currentRoute="About"}},mounted:function(){this.popupItem=this.$el},directives:{ClickOutside:u.a}},g=b,w=(n("890d"),Object(m["a"])(g,a,s,!1,null,"17b9a0b8",null)),y=w.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer-social"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("8211"),alt:""}})]),r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("494a"),alt:""}})]),r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("277b"),alt:""}})])]),r("div",{staticClass:"footer-copyright"},[e._v(" Developed and designed by Josip Ivancic © ")])])}],F={},S=F,A=(n("22a7"),Object(m["a"])(S,k,_,!1,null,"ac211ef2",null)),x=A.exports,L={name:"App",components:{TheHeader:y,TheFooter:x}},W=L,O=(n("5c0b"),Object(m["a"])(W,i,o,!1,null,null,null)),T=O.exports,C=(n("d3b7"),n("8c4f"));r["a"].use(C["a"]);var E=[{path:"/",name:"Landing",component:function(){return n.e("Landing").then(n.bind(null,"bede"))}},{path:"/work/details",name:"WorkDetails",component:function(){return n.e("WorkDetails").then(n.bind(null,"7124"))}},{path:"/about",name:"About",component:function(){return n.e("About").then(n.bind(null,"f820"))}},{path:"/success",name:"FormSuccess",component:function(){return n.e("FormSuccess").then(n.bind(null,"e96c"))}},{path:"/error",name:"FormFailure",component:function(){return n.e("FormFailure").then(n.bind(null,"6f36"))}}],j=new C["a"]({mode:"history",scrollBehavior:function(){return{x:0,y:0}},base:"/",routes:E}),D=j,M=(n("4160"),n("159b"),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("enter"),t.unobserve(e.target),setTimeout((function(){e.target.classList.remove("enter","before-enter")}),800))}))}))),z={bind:function(e){e.classList.add("before-enter"),M.observe(e)}};r["a"].directive("scrollanimation",z),r["a"].config.productionTip=!1,new r["a"]({router:D,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"69cd":function(e,t,n){},8211:function(e,t,n){e.exports=n.p+"img/github.1bb02710.svg"},"890d":function(e,t,n){"use strict";var r=n("69cd"),i=n.n(r);i.a},"9c0c":function(e,t,n){},cdb9:function(e,t,n){"use strict";var r=n("dd2f"),i=n.n(r);i.a},dd2f:function(e,t,n){}});
//# sourceMappingURL=app.7a95f952.js.map