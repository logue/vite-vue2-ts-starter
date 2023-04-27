import{d as m,u as y,w,c as b,a as $,V as h,T as x}from"./vue-722056d1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const V="modulepreload",k=function(r,e){return new URL(r,e).href},d={},C=function(e,t,i){if(!t||t.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=k(o,i),o in d)return;d[o]=!0;const l=o.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(!!i)for(let u=n.length-1;u>=0;u--){const v=n[u];if(v.href===o&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":V,l||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),l)return new Promise((u,v)=>{s.addEventListener("load",u),s.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function c(r,e,t,i,n,o,l,p){var a=typeof r=="function"?r.options:r;e&&(a.render=e,a.staticRenderFns=t,a._compiled=!0),i&&(a.functional=!0),o&&(a._scopeId="data-v-"+o);var s;if(l?(s=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),n&&n.call(this,_),_&&_._registeredComponents&&_._registeredComponents.add(l)},a._ssrRegister=s):n&&(s=p?function(){n.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(a.functional){a._injectStyles=s;var u=a.render;a.render=function(z,f){return s.call(f),u(z,f)}}else{var v=a.beforeCreate;a.beforeCreate=v?[].concat(v,s):[s]}return{exports:r,options:a}}const M={};var H=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"}},[t("path",{attrs:{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"}})])},L=[],T=c(M,H,L,!1,null,null,null,null);const R=T.exports,S={};var j=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"}},[t("path",{attrs:{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"}})])},P=[],A=c(S,j,P,!1,null,null,null,null);const E=A.exports,I={};var D=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"}},[t("path",{attrs:{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"}})])},F=[],O=c(I,D,F,!1,null,null,null,null);const W=O.exports,N={};var B=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20mm",height:"20mm",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{d:"m173.36 150.78-1.47 1.47c-.37.37-.17.95.24 1.18.16.1.3.14.35.16.05.02.05.02.13.09.05.06.09.13.1.18 0 .05 0 .1-.11.21-.1.11-.16.1-.21.1a.32.32 0 0 1-.18-.1c-.08-.07-.07-.07-.1-.12a1.26 1.26 0 0 0-.15-.35c-.23-.4-.8-.61-1.18-.23l-2.07 2.06-.02-.05a1.36 1.36 0 0 0-.28-.43c-.19-.2-.46-.35-.78-.38-.32-.02-.68.11-.95.38-.27.28-.4.63-.38.95.03.32.18.6.38.79.15.14.32.23.43.28l.04.02-1.26 1.26 1.26 1.26-.04.02a1.4 1.4 0 0 0-.43.28c-.2.2-.35.46-.38.78-.02.33.11.68.38.95.27.27.63.4.95.38.32-.02.59-.18.78-.38.15-.15.24-.31.28-.43l.02-.05 1.26 1.27h6.84l1.47-1.47c.37-.37.17-.95-.24-1.18-.16-.1-.3-.13-.34-.15-.05-.03-.05-.02-.13-.1a.32.32 0 0 1-.1-.18c0-.05 0-.1.1-.2.11-.12.16-.11.21-.11.05 0 .13.04.18.1.08.08.08.08.1.13.02.05.06.18.15.34.24.41.81.61 1.19.24l1.46-1.47-1.26-1.26.04-.01c.12-.05.28-.14.43-.29.2-.19.36-.46.38-.78a1.2 1.2 0 0 0-.38-.95c-.27-.27-.62-.4-.95-.38-.32.02-.59.18-.78.38-.14.15-.23.31-.28.43l-.02.05-1.86-1.87.04-.02c.12-.04.28-.14.43-.28.2-.2.36-.46.38-.78a1.2 1.2 0 0 0-.38-.95c-.27-.27-.63-.4-.95-.38a1.2 1.2 0 0 0-.78.38 1.3 1.3 0 0 0-.28.43l-.02.04zm-2.13 4.63v.02zm-1.26.08.82.82c.37.37.95.17 1.19-.24.09-.16.13-.3.15-.34.02-.05.01-.05.09-.13a.3.3 0 0 1 .17-.1c.05 0 .1 0 .21.12.12.11.12.16.11.21a.3.3 0 0 1-.1.18c-.07.07-.07.07-.12.08-.04.02-.18.06-.34.16-.41.23-.6.81-.23 1.18l.81.82-.6.6c0-.02 0-.03-.02-.05a1.38 1.38 0 0 0-.28-.43 1.2 1.2 0 0 0-.78-.37 1.29 1.29 0 0 0-1.33 1.33c.02.32.18.58.38.77.15.15.31.24.43.29l.04.02-.6.6-.81-.82c-.37-.37-.95-.18-1.19.24-.09.16-.13.3-.15.34-.02.05-.01.05-.09.12a.3.3 0 0 1-.17.1c-.05 0-.1 0-.21-.11-.12-.11-.12-.16-.11-.22 0-.05.04-.11.1-.17.07-.07.07-.07.12-.09.04-.02.18-.05.34-.15.41-.23.6-.81.23-1.18l-.81-.82.81-.82c.37-.37.18-.95-.23-1.18-.16-.1-.3-.13-.35-.15l-.12-.09a.3.3 0 0 1-.1-.17c0-.05 0-.1.12-.22.1-.11.16-.11.21-.1a.3.3 0 0 1 .17.09c.08.07.07.07.1.12.01.05.05.18.14.34.24.42.82.61 1.19.24zm4.39.03c.05 0 .12.04.18.1.08.08.07.08.1.13.01.05.05.18.15.35.24.4.81.6 1.19.23l.8-.8.81.82c.37.37.95.17 1.19-.24.1-.16.13-.3.15-.35.02-.04.01-.04.09-.12a.3.3 0 0 1 .17-.1c.05 0 .1 0 .22.11.1.12.11.17.1.22a.3.3 0 0 1-.09.17c-.08.08-.07.07-.12.1-.05.01-.18.05-.35.14-.4.24-.6.82-.23 1.19l.82.81-.59.59-.02-.05a1.39 1.39 0 0 0-.29-.43c-.2-.2-.46-.36-.78-.39-.32-.02-.68.1-.95.38-.27.27-.4.63-.38.95.03.32.2.58.39.78.15.15.31.24.43.29.03 0 .03.01.05.02l-.58.58-.82-.81c-.37-.37-.95-.18-1.19.23-.09.17-.13.3-.15.35-.02.05-.01.04-.09.12a.31.31 0 0 1-.17.1c-.05 0-.1 0-.21-.11-.12-.12-.12-.17-.11-.22a.3.3 0 0 1 .1-.17c.07-.08.07-.07.12-.09.04-.02.18-.06.34-.15.41-.24.6-.82.24-1.19l-.82-.81.8-.8c.37-.38.17-.95-.24-1.19-.16-.1-.3-.14-.34-.16-.05-.02-.05 0-.13-.08a.31.31 0 0 1-.1-.19c0-.05 0-.1.1-.2.11-.12.16-.11.2-.1zm-.96 2.05v.01z",transform:"translate(-163.38 -146.56)"}})])},U=[],q=c(N,B,U,!1,null,null,null,null);const Y=q.exports,G={};var X=function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"}},[t("path",{attrs:{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"}})])},J=[],K=c(G,X,J,!1,null,null,null,null);const Z=K.exports,Q={};var e1=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"iconify iconify--mdi",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"}})])},t1=[],r1=c(Q,e1,t1,!1,null,null,null,null);const n1=r1.exports;const o1={};var s1=function(){var e=this,t=e._self._c;return t("section",{staticClass:"item"},[t("i",[e._t("icon")],2),t("div",{staticClass:"details"},[t("h3",[e._t("heading")],2),e._t("default")],2)])},a1=[],l1=c(o1,s1,a1,!1,null,"dd654fa7",null,null);const c1=l1.exports,i1=m({components:{CommunityIcon:R,DocumentationIcon:E,EcosystemIcon:W,PluginIcon:Y,SupportIcon:Z,ToolingIcon:n1,WelcomeItem:c1}});var _1=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t("welcome-item",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("DocumentationIcon")]},proxy:!0},{key:"heading",fn:function(){return[e._v("Documentation")]},proxy:!0}])},[e._v(" Vue' s "),t("a",{attrs:{href:"https://v2.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v(" official documentation ")]),e._v(" provides you with all information you need to get started. ")]),t("welcome-item",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("tooling-icon")]},proxy:!0},{key:"heading",fn:function(){return[e._v("Tooling")]},proxy:!0}])},[e._v(" This project is served and bundled with "),t("a",{attrs:{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"}},[e._v(" Vite ")]),e._v(" . The recommended IDE setup is "),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"}},[e._v(" VSCode ")]),e._v(" + "),t("a",{attrs:{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"}},[e._v(" Volar ")]),t("br"),e._v(" More instructions are available in "),t("code",[e._v("README.md")]),e._v(" . ")]),t("welcome-item",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("ecosystem-icon")]},proxy:!0},{key:"heading",fn:function(){return[e._v("Ecosystem")]},proxy:!0}])},[e._v(" Get official tools and libraries for your project: "),t("a",{attrs:{href:"https://v3.vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v(" Vuex ")]),e._v(" , "),t("a",{attrs:{href:"https://v3.router.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v(" Vue Router ")]),e._v(" , "),t("a",{attrs:{href:"https://v1.test-utils.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v(" Vue Test Utils ")]),e._v(" , and "),t("a",{attrs:{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"}},[e._v(" Vue Dev Tools ")]),e._v(" . If you need more resources, we suggest paying "),t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v(" Awesome Vue ")]),e._v(" a visit. ")]),t("welcome-item",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("plugin-icon")]},proxy:!0},{key:"heading",fn:function(){return[e._v("Pre Installed Plugins")]},proxy:!0}])},[t("a",{attrs:{href:"https://vitejs.dev/guide/features.html#typescript",target:"_blank",rel:"noopener"}},[e._v(" typescript ")]),e._v(" , "),t("a",{attrs:{href:"https://github.com/fi3ework/vite-plugin-checker",target:"_blank",rel:"noopener"}},[e._v(" vite-plugin-checker ")]),e._v(" , "),t("a",{attrs:{href:"https://github.com/btd/rollup-plugin-visualizer",target:"_blank",rel:"noopener"}},[e._v(" rollup-plugin-visualizer ")]),e._v(" , "),t("a",{attrs:{href:"https://github.com/logue/vue2-helpers",target:"_blank"}},[e._v(" @logue/vue2-helpers ")]),e._v(" . ")]),t("welcome-item",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("community-icon")]},proxy:!0},{key:"heading",fn:function(){return[e._v("Community")]},proxy:!0}])},[e._v(" Got stuck? Ask your question on "),t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v(" Vue Land ")]),e._v(" , our official Discord server, or "),t("a",{attrs:{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"}},[e._v(" StackOverflow ")]),e._v(" . You should also subscribe to "),t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v(" our mailing list ")]),e._v(" and follow the official "),t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v(" @vuejs ")]),e._v(" twitter account for latest news in the Vue world. ")]),t("welcome-item",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("support-icon")]},proxy:!0},{key:"heading",fn:function(){return[e._v("Support Vue")]},proxy:!0}])},[e._v(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),t("a",{attrs:{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"}},[e._v(" becoming a sponsor ")]),e._v(" . ")])],1)},u1=[],v1=c(i1,_1,u1,!1,null,null,null,null);const m1=v1.exports,p1=m({components:{TheWelcome:m1},setup(r,e){const t=y();w(()=>t?.name,i=>{})}});var h1=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"home"},[t("the-Welcome")],1)},f1=[],d1=c(p1,h1,f1,!1,null,null,null,null);const g1=d1.exports,z1=[{path:"/",name:"Home",component:g1},{path:"/about",name:"About",component:async()=>await C(()=>import("./AboutView-e1f394fa.js"),["./AboutView-e1f394fa.js","./vue-722056d1.js","./AboutView-4d995ba2.css"],import.meta.url)}],y1=b({base:"./",mode:"history",routes:z1}),w1={exampleData:null},b1={example:r=>r.exampleData},$1={exampleMutation(r,e){r.exampleData=e}},x1={exampleAction(r,e){r.commit("exampleMutation",e)}},V1={strict:!1,state:w1,getters:b1,mutations:$1,actions:x1,modules:{},plugins:[]},k1=$(V1);const C1={version:"1.4.0-beta",date:"2023-04-27T09:20:57.344Z"},M1=m({props:{msg:{type:String,required:!0}},setup(r,e){const t=C1,i={}.VITE_APP_TITLE;return{meta:t,title:i}}});var H1=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"greetings"},[t("h1",{staticClass:"green"},[t("a",{attrs:{href:"https://github.com/logue/vite-vue2-ts-starter#readme",target:"_blank",rel:"noopener"}},[e._v(" "+e._s(e.msg)+" ")])]),t("p",[e._v(" Build: "),t("time",{attrs:{datetime:e.meta.date},domProps:{textContent:e._s(new Date(e.meta.date).toLocaleString())}})]),e.title?e._e():t("p",[e._v(" Please define "),t("code",[e._v("VITE_APP_TITLE")]),e._v(" variable in to "),t("code",[e._v(".env")]),e._v(" file. ")]),e._m(0)])},L1=[function(){var r=this,e=r._self._c;return r._self._setupProxy,e("h3",[r._v(" You've successfully created a project with "),e("a",{attrs:{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"}},[r._v("Vite")]),r._v(" + "),e("a",{attrs:{href:"https://v2.vuejs.org/",target:"_blank",rel:"noopener"}},[r._v("Vue 2")]),r._v(" . What's next? ")])}],T1=c(M1,H1,L1,!1,null,"3d0813ce",null,null);const R1=T1.exports,g=""+new URL("vue-277e0e97.svg",import.meta.url).href,S1=m({components:{HelloWorld:R1},setup(r,e){document.title={}.VITE_APP_TITLE||"Vite Vue2 Application";const t=JSON.stringify({"@schema":"https://json.schemastore.org/jsonld.json","@context":"http://schema.org","@type":"WebSite",name:"Vite Vue2 TypeScript Startar",url:"https://github.com/logue/vite-vue2-ts-starter",logo:g,description:"Vite Vue2 TypeScript Demo Page"},null,2);return{logo:g,jsonLd:t}}});var j1=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("header",[t("img",{staticClass:"logo vue",attrs:{src:e.logo,alt:"Vue logo",width:"125",height:"125"}}),t("div",{staticClass:"wrapper"},[t("hello-world",{attrs:{msg:"vite-vue2-ts-starter"}}),t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1),t("main",[t("router-view")],1),t("teleport",{attrs:{to:"head"}},[t("meta",{attrs:{name:"keyword",content:"template, typescript, vue2, vue-property-decorator, vue-class-component, vite, vite-template, composition-api, volar"}}),t("meta",{attrs:{name:"description",content:"Vite Vue2 TypeScript Demo"}}),t("link",{attrs:{rel:"icon",href:e.logo,type:"image/svg+xml"}}),t("script",{tag:"component",attrs:{type:"application/ld+json"}},[e._v(" "+e._s(e.jsonLd)+" ")])],1)],1)},P1=[],A1=c(S1,j1,P1,!1,null,null,null,null);const E1=A1.exports;h.config.productionTip=!1;h.component("Teleport",x);const I1=new h({router:y1,store:k1,render:r=>r(E1)});I1.$mount("#app");export{c as n};
