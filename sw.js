if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const f=e=>n(e,c),d={module:{uri:c},exports:o,require:f};i[c]=Promise.all(r.map((e=>d[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.21c8f337.css",revision:null},{url:"assets/index.d59ade18.js",revision:null},{url:"index.html",revision:"d92db613cdc54f18cf93182fb3708546"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"favicon.ico",revision:"90d163cb62b4afae40bd0a59985de66c"},{url:"browserconfig.xml",revision:"14eea48b2785b34b5278ff84f59b2840"},{url:"img/favicon.svg",revision:"c3859771cedc352addec693e974a88d7"},{url:"img/favicon-16x16.png",revision:"1c4cc01734a1a64a9b20ac22930375f2"},{url:"img/favicon-32x32.png",revision:"105f4b40e72d995b87411c0b3aee84a7"},{url:"img/mstile-150x150.png",revision:"62d6e7a56072d1958bbb512937b7b211"},{url:"img/apple-touch-icon.png",revision:"ced5b157dc8f1f5f4584173b63973207"},{url:"img/pwa-192x192.png",revision:"ca585a527f688c6de0024f38e97b4fa8"},{url:"img/pwa-512x512.png",revision:"159e701bafccddd7cbf66984c870194c"},{url:"manifest.webmanifest",revision:"158bb44361839c0fa8f2a10e852412e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
