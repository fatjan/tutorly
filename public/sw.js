if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"51f382f66d0556cfeeea431ea8916146"},{url:"/_next/static/3NydzSIcJOiM9y7yKcyAE/_buildManifest.js",revision:"3048a17ea75c4f4f8d3e0079e00918f0"},{url:"/_next/static/3NydzSIcJOiM9y7yKcyAE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-f5da7b63396f8429.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/517-ddf3a5a210816929.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/574-df893fbb928af810.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/875-c946d597a00a78d0.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(home)/layout-e2b8554d954cc56d.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(home)/page-7da05d585aedecab.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(pick-language)/language-selection/page-6326caaf6deb33a7.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(pick-language)/layout-1c3018c66bfddbf1.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(schedule-confirmation)/layout-ae65ac9f06518a90.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(schedule-confirmation)/select-schedule/%5BtutorId%5D/confirm/page-6be569c294300930.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(select-schedule-page)/layout-23e71ef25315c64d.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(select-schedule-page)/select-schedule/%5BtutorId%5D/page-146272e6ccc8c0ff.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(tutor-page)/layout-a65a9bad23d58cc0.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/(tutor-page)/tutor/%5BtutorId%5D/page-9165917bac751a48.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/app/_not-found/page-49d41845f3b26057.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/main-app-68f3206fd7e2fc62.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/main-d7391db7cf203f63.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-59c9a62e2cf31ece.js",revision:"3NydzSIcJOiM9y7yKcyAE"},{url:"/_next/static/css/34db140deab8c656.css",revision:"34db140deab8c656"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon512_maskable.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/laura.jpeg",revision:"cb1a3c472b028f422cf52a289d111f9e"},{url:"/lisa.jpg",revision:"006879d903a26b0f050f6edc31f21d10"},{url:"/manifest.json",revision:"b6aec81904c521870bb389e6e7600274"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
