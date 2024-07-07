import{k as s,l as V,m as v,n as F,q as ce,s as D,t as de,u as fe,v as ae,w as ve,r as H,a as ge,x as me,y as P,T as he,z as be,A as ye}from"./index.84be5f77.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ue(e,t=Q){return s(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function ke(e,t){return e!==void 0&&e()||t}function z(e,t){return e!==void 0?t.concat(e()):t}const U="0 0 24 24",W=e=>e,N=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":N,"ion-ios":N,"ion-logo":N,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},pe=new RegExp("^("+Object.keys(le).join("|")+")"),xe=new RegExp("^("+Object.keys(ie).join("|")+")"),X=new RegExp("^("+Object.keys(oe).join("|")+")"),qe=/^[Mm]\s?[-+]?\.?\d/,$e=/^img:/,Ee=/^svguse:/,Se=/^ion-/,we=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=V({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=F(),n=ue(e),i=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=s(()=>{let c,u=e.name;if(u==="none"||!u)return{none:!0};if(a.iconMapFn!==null){const o=a.iconMapFn(u);if(o!==void 0)if(o.icon!==void 0){if(u=o.icon,u==="none"||!u)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(qe.test(u)===!0){const[o,y=U]=u.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(l=>{const[k,h,p]=l.split("@@");return v("path",{style:h,d:k,transform:p})})}}if($e.test(u)===!0)return{img:!0,src:u.substring(4)};if(Ee.test(u)===!0){const[o,y=U]=u.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const b=u.match(pe);if(b!==null)c=le[b[1]](u);else if(we.test(u)===!0)c=u;else if(Se.test(u)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${u.substring(3)}`;else if(X.test(u)===!0){c="notranslate material-symbols";const o=u.match(X);o!==null&&(u=u.substring(6),c+=oe[o[1]]),q=u}else{c="notranslate material-icons";const o=u.match(xe);o!==null&&(u=u.substring(2),c+=ie[o[1]]),q=u}return{cls:c,content:q}});return()=>{const c={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,ke(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Re={size:{type:[String,Number],default:"1em"},color:String};function Le(e){return{cSize:s(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Be=V({name:"QSpinner",props:{...Re,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Le(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Ce(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function _e(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function G(e,t,a,n){a.modifiers.stop===!0&&ae(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),u=document.createElement("span"),q=ve(e),{left:b,top:o,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(l-k)/2}px`,_=f?x:`${q.top-o-h}px`;u.className="q-ripple__inner",Ce(u,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${i?" text-"+i:""}`,c.setAttribute("dir","ltr"),c.appendChild(u),t.appendChild(c);const B=()=>{c.remove(),clearTimeout(C)};a.abort.push(B);let C=setTimeout(()=>{u.classList.add("q-ripple__inner--enter"),u.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,u.style.opacity=.2,C=setTimeout(()=>{u.classList.remove("q-ripple__inner--enter"),u.classList.add("q-ripple__inner--leave"),u.style.opacity=0,C=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function J(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Pe=ce({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&G(i,e,n,i.qKeyEvent===!0)},keystart:_e(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&G(i,e,n,!0)},300)};J(n,t),e.__qripple=n,de(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&J(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),fe(t,"main"),delete e._qripple)}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Te=Object.keys(se),Oe={align:{type:String,validator:e=>Te.includes(e)}};function Ae(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}function Me(e){return e.appContext.config.globalProperties.$router!==void 0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function je(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,c)=>f!==i[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function ze(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(ze(e[a],t[a])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Ne({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=F(),{props:n,proxy:i,emit:f}=a,c=Me(a),u=s(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?s(()=>c===!0&&n.disable!==!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>c===!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=s(()=>q.value===!0?_(n.to):null),o=s(()=>b.value!==null),y=s(()=>u.value===!0||o.value===!0),l=s(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=s(()=>u.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:b.value.href,target:n.target}:{}),h=s(()=>{if(o.value===!1)return-1;const{matched:g}=b.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=i.$route.matched;if(R.length===0)return-1;const L=R.findIndex(ee.bind(null,S));if(L!==-1)return L;const K=Z(g[$-2]);return $>1&&Z(S)===K&&R[R.length-1].path!==K?R.findIndex(ee.bind(null,g[$-2])):L}),p=s(()=>o.value===!0&&h.value!==-1&&je(i.$route.params,b.value.params)),d=s(()=>p.value===!0&&h.value===i.$route.matched.length-1&&Ke(i.$route.params,b.value.params)),x=s(()=>o.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(g){try{return i.$router.resolve(g)}catch{}return null}function B(g,{returnRouterError:$,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=i.$router[R===!0?"replace":"push"](S);return $===!0?L:L.then(()=>{}).catch(()=>{})}function C(g){if(o.value===!0){const $=S=>B(g,S);f("click",g,$),g.defaultPrevented!==!0&&$()}else f("click",g)}return{hasRouterLink:o,hasHrefLink:u,hasLink:y,linkTag:l,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Fe=["flat","outline","push","unelevated"];function He(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Ue={...re,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Fe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},We={...Ue,round:Boolean};function Xe(e){const t=ue(e,De),a=Ae(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:c,navigateOnClick:u}=Ne({fallbackTag:"button"}),q=s(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>o.value===!0?e.tabindex||0:-1),l=s(()=>He(e,"standard")),k=s(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,c.value):Qe.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=s(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:u,isActionable:o}}const{passiveCapture:E}=be;let T=null,O=null,A=null;var Ge=V({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=F(),{classes:i,style:f,innerClasses:c,attributes:u,hasLink:q,linkTag:b,navigateOnClick:o,isActionable:y}=Xe(e),l=H(null),k=H(null);let h=null,p,d=null;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=s(()=>({center:e.round})),C=s(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),g=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const r={onClick:S,onKeydown:R,onMousedown:K};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${m}`]=L}return r}return{onClick:P}}),$=s(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...u.value,...g.value}));function S(r){if(l.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,E),l.value!==null&&l.value.removeEventListener("blur",I,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,E),l.value.addEventListener("blur",I,E)}}o(r)}}function R(r){l.value!==null&&(a("keydown",r),D(r,[13,32])===!0&&O!==l.value&&(O!==null&&M(),r.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),l.value.addEventListener("blur",w,E)),P(r)))}function L(r){l.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&M(),T=l.value,h=r.target,h.addEventListener("touchcancel",w,E),h.addEventListener("touchend",w,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function K(r){l.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&A!==l.value&&(A!==null&&M(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(r){if(l.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===l.value)){if(r!==void 0&&r.type==="keyup"){if(O===l.value&&D(r,[13,32])===!0){const m=new MouseEvent("click",r);m.qKeyEvent=!0,r.defaultPrevented===!0&&ye(m),r.cancelBubble===!0&&ae(m),l.value.dispatchEvent(m),P(r),r.qKeyEvent=!0}a("keyup",r)}M()}}function M(r){const m=k.value;r!==!0&&(T===l.value||A===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===l.value&&(h!==null&&(h.removeEventListener("touchcancel",w,E),h.removeEventListener("touchend",w,E)),T=h=null),A===l.value&&(document.removeEventListener("mouseup",w,E),A=null),O===l.value&&(document.removeEventListener("keyup",w,!0),l.value!==null&&l.value.removeEventListener("blur",w,E),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(r){P(r),r.qSkipRipple=!0}return ge(()=>{M(!0)}),Object.assign(n,{click:r=>{y.value===!0&&S(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&r.push(v("span",{class:"block"},[e.label])),r=z(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},r)),e.loading!==null&&m.push(v(he,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Be)])]:null)),me(v(b.value,$.value,m),[[Pe,_.value,void 0,B.value]])}}});export{Ge as Q};