if(!self.define){let e,c={};const s=(s,i)=>(s=new URL(s+".js",i).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let a={};const o=e=>s(e,n),r={module:{uri:n},exports:a,require:o};c[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(f(...e),a)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"teste-quasar-zaieze"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.54ac1c8a.js",revision:"6458e80c7ab762c5ecdfddc979f4d496"},{url:"assets/ErrorNotFound.c61c225a.js",revision:"ef8a57319eba3f595a689d941ecf7862"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.2284108f.css",revision:"5da423882645f017bba91682f5407997"},{url:"assets/index.4e5df5ac.js",revision:"35cc2830c0ada6a3562c497f17da5093"},{url:"assets/IndexPage.0cd2c035.css",revision:"688eb9c2b362fb1cf7c8f3eb3195c8a6"},{url:"assets/IndexPage.e2e62cd5.js",revision:"482ec0a61eb55fbdcbf871e052c8b0c8"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.5638bd78.js",revision:"83a46db8939d210c3e3d16f42efcb830"},{url:"assets/MainLayout.e25a3e81.css",revision:"651ec2bfcf82bc0835d1197da9bce8b5"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/QBtn.774b8f67.js",revision:"8ea260306f1738ecd40a763fef3fb26e"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"7f44f78564249bb05626ca1c99cdc13b"},{url:"manifest.json",revision:"4e4066205cc6ec01db10bc1e86e48c35"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
