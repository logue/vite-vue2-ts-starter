import{c as g,a as y,d as R,V as p,T as E}from"./vue.5ef10ace.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L="modulepreload",T=function(r,o){return new URL(r,o).href},m={},h=function(o,n,c){if(!n||n.length===0)return o();const e=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=T(t,c),t in m)return;m[t]=!0;const a=t.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(!!c)for(let u=e.length-1;u>=0;u--){const f=e[u];if(f.href===t&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${_}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":L,a||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),a)return new Promise((u,f)=>{s.addEventListener("load",u),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o())},C=[{path:"/",name:"Home",component:()=>h(()=>import("./HomePage.96c8b884.js"),["./HomePage.96c8b884.js","./vue.5ef10ace.js","./HomePage.febb501c.css"],import.meta.url)},{path:"/about",name:"About",component:()=>h(()=>import("./AboutPage.ad06f4bc.js"),["./AboutPage.ad06f4bc.js","./vue.5ef10ace.js","./AboutPage.4d995ba2.css"],import.meta.url)}],$=g({base:"./",mode:"history",routes:C}),A={exampleData:null},O={example:r=>r.exampleData},P={exampleMutation(r,o){r.exampleData=o}},b={exampleAction(r,o){r.commit("exampleMutation",o)}},k={strict:!1,state:A,getters:O,mutations:P,actions:b,modules:{},plugins:[]},V=y(k);const S=""+new URL("vue.429ac188.svg",import.meta.url).href,w=R({setup(r,o){return document.title={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_TITLE||"Vite Vue2 Application",{logo:S}}});function D(r,o,n,c,e,t,a,_){var i=typeof r=="function"?r.options:r;o&&(i.render=o,i.staticRenderFns=n,i._compiled=!0),c&&(i.functional=!0),t&&(i._scopeId="data-v-"+t);var s;if(a?(s=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),e&&e.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(a)},i._ssrRegister=s):e&&(s=_?function(){e.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:e),s)if(i.functional){i._injectStyles=s;var u=i.render;i.render=function(v,d){return s.call(d),u(v,d)}}else{var f=i.beforeCreate;i.beforeCreate=f?[].concat(f,s):[s]}return{exports:r,options:i}}var N=function(){var o=this,n=o._self._c;return o._self._setupProxy,n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[o._v("Home")]),o._v(" | "),n("router-link",{attrs:{to:"/about"}},[o._v("About")])],1),n("main",[n("router-view")],1),n("teleport",{attrs:{to:"head"}},[n("link",{attrs:{rel:"icon",href:o.logo,type:"image/svg+xml"}})])],1)},U=[],I=D(w,N,U,!1,null,"da0aa20a",null,null);const x=I.exports;p.config.productionTip=!1;p.component("Teleport",E);const B=new p({router:$,store:V,render:r=>r(x)});B.$mount("#app");export{S as _,D as n};
