import{w as u}from"./index.056d9b94.js";var _;const v=((_=globalThis.__sveltekit_1oviw7o)==null?void 0:_.base)??"/AOGearBuilder";var g;const k=((g=globalThis.__sveltekit_1oviw7o)==null?void 0:g.assets)??v,w="1699920275728",R="sveltekit:snapshot",T="sveltekit:scroll",y="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:a,download:l}}function U(e){let t=null,n=null,a=null,r=null,l=null,o=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=c(s,"preload-code")),r===null&&(r=c(s,"preload-data")),t===null&&(t=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),o===null&&(o=c(s,"replacestate")),s=h(s);function i(b){switch(b){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[a??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(e){const t=u(e);let n=!0;function a(){n=!0,t.update(o=>o)}function r(o){n=!1,t.set(o)}function l(o){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&o(s=i)})}return{notify:a,set:r,subscribe:l}}function m(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==w;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:a}}function A(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function L(e){e.client}const N={url:p({}),page:p({}),navigating:u(null),updated:m()};export{y as I,f as P,T as S,R as a,x as b,U as c,N as d,v as e,O as f,I as g,L as h,A as i,S as s};
