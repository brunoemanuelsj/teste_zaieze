if(!self.define){let e,s={};const c=(c,f)=>(c=new URL(c+".js",f).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(f,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const n=e=>c(e,i),b={module:{uri:i},exports:r,require:n};s[i]=Promise.all(f.map((e=>b[e]||n(e)))).then((e=>(a(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"teste-quasar-zaieze"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.8031092d.js",revision:"6eb8bc9f5bef2cb39b971928943bcca5"},{url:"assets/email.2624f783.png",revision:"323d75379c8e7494a89637177aa7fe30"},{url:"assets/ErrorNotFound.a99cb137.js",revision:"77a4d0ec83e958f323b0c8582bf3b378"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.2284108f.css",revision:"5da423882645f017bba91682f5407997"},{url:"assets/index.c24e5e2d.js",revision:"28e24722c9ae8d1c94176e52f7e9d58c"},{url:"assets/IndexPage.0f513b22.css",revision:"24763e82bac9055087de8774829959c3"},{url:"assets/IndexPage.b1b5c500.js",revision:"bc8b0eb2e403087a2df8e00ad0b7682c"},{url:"assets/insta.97fe2df2.png",revision:"ab7e7f00908d6432aa9c6f9ea19f8e09"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.14effe79.js",revision:"cd9bde06de7f41c786acaddc74814b83"},{url:"assets/MainLayout.ec0e7148.css",revision:"f2677b1c14336ba7ecbe3183b1eb0f46"},{url:"assets/men.c3f49420.png",revision:"26f77cb53ae0f0c9ea82c6cf545c0351"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/QBtn.28d1bbbc.js",revision:"ec1cc270f16c79b79467d568c6f8f64a"},{url:"assets/zap.577ed82e.png",revision:"17be1a2957ebd47aca91dead418f2b68"},{url:"favicon.ico",revision:"7d324559396bc52462694721539280c4"},{url:"icons/men.png",revision:"26f77cb53ae0f0c9ea82c6cf545c0351"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"ec63f8969a6ccdf7a4853b0646a745e0"},{url:"manifest.json",revision:"73830bd09864cefe3bcb7ff596df9d19"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
