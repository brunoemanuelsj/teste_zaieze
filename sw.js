if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const n=e=>a(e,i),d={module:{uri:i},exports:r,require:n};s[i]=Promise.all(f.map((e=>d[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"teste-quasar-zaieze"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.dd6244fa.js",revision:"70c83f79c5d06aa1e10c7523c4df4b9a"},{url:"assets/email.2624f783.png",revision:"323d75379c8e7494a89637177aa7fe30"},{url:"assets/ErrorNotFound.014f365d.js",revision:"21eb29cd549a781ca80ee4a66fb90a37"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.2284108f.css",revision:"5da423882645f017bba91682f5407997"},{url:"assets/index.eccbb587.js",revision:"60c88d952e0403585b7abd92b4a78439"},{url:"assets/IndexPage.0f513b22.css",revision:"24763e82bac9055087de8774829959c3"},{url:"assets/IndexPage.36a1f727.js",revision:"7f4ff5e01e372ad951291e3263925fec"},{url:"assets/insta.97fe2df2.png",revision:"ab7e7f00908d6432aa9c6f9ea19f8e09"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.218a7eab.css",revision:"63cbfe23440f82071e161b3f133d1f00"},{url:"assets/MainLayout.edccf917.js",revision:"8a52586713ad7c3999004322e736470b"},{url:"assets/men.c3f49420.png",revision:"26f77cb53ae0f0c9ea82c6cf545c0351"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/QBtn.41410252.js",revision:"77fc7f0c00601a8dbf5cab0043e3a296"},{url:"assets/zap.577ed82e.png",revision:"17be1a2957ebd47aca91dead418f2b68"},{url:"favicon.ico",revision:"7d324559396bc52462694721539280c4"},{url:"icons/men.png",revision:"26f77cb53ae0f0c9ea82c6cf545c0351"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"4b01ea4e6556bf54e3fa3bc2e9c86732"},{url:"manifest.json",revision:"73830bd09864cefe3bcb7ff596df9d19"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
