import{p as N,i as de,c,r as le,a as F,b as me,s as B,o as oe,d as ke,e as A,f as Xe,h as Ue,j as je,k as Fe,l as ue,m as D,n as r,q as fe,t as q,u as ge,v as he,w as Be,x as Ze,y as H,z as Ce,A as qe,B as K,C as Ke,D as Ge,E as Je,F as Qe,T as et,G as Me,H as tt,I as at,J as j,K as Z,L as E,M as nt,N as lt,O as ot,P as ut,Q as st,R as X,S as it,U as rt}from"./index-bf525995.js";import{m as G,a as se,u as O,b as Ee,c as Pe,d as Le,e as ce,f as Ne,g as Re,h as Ae,V as ct,i as re,j as vt,t as dt,_ as mt,k as we}from"./VAvatar-26ba638e.js";import{u as ft,m as gt,V as ve}from"./VBtn-0a240091.js";import{u as ye,V as Se,a as Ve}from"./VList-1fb48ba3.js";import{V as ht}from"./VDivider-4ff2a4f4.js";import{V as yt}from"./index-cdd36948.js";import{V as pt}from"./VCol-2a55624e.js";const ne=Symbol.for("vuetify:layout"),He=Symbol.for("vuetify:layout-item"),xe=1e3,bt=N({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),$e=N({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function wt(){const e=de(ne);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ze(e){const l=de(ne);if(!l)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${Ue()}`,o=me("useLayoutItem");ke(He,{id:n});const a=B(!1);je(()=>a.value=!0),Fe(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:u}=l.register(o,{...e,active:c(()=>a.value?!1:e.active.value),id:n});return ue(()=>l.unregister(n)),{layoutItemStyles:t,layoutRect:l.layoutRect,layoutItemScrimStyles:u}}const St=(e,l,n,o)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const u of e){const h=l.get(u),w=n.get(u),p=o.get(u);if(!h||!w||!p)continue;const s={...a,[h.value]:parseInt(a[h.value],10)+(p.value?parseInt(w.value,10):0)};t.push({id:u,layer:s}),a=s}return t};function Vt(e){const l=de(ne,null),n=c(()=>l?l.rootZIndex.value-100:xe),o=le([]),a=F(new Map),t=F(new Map),u=F(new Map),h=F(new Map),w=F(new Map),{resizeRef:p,contentRect:s}=ft(),b=c(()=>{const i=new Map,v=e.overlaps??[];for(const d of v.filter(x=>x.includes(":"))){const[x,V]=d.split(":");if(!o.value.includes(x)||!o.value.includes(V))continue;const P=a.get(x),R=a.get(V),$=t.get(x),Y=t.get(V);!P||!R||!$||!Y||(i.set(V,{position:P.value,amount:parseInt($.value,10)}),i.set(x,{position:R.value,amount:-parseInt(Y.value,10)}))}return i}),m=c(()=>{const i=[...new Set([...u.values()].map(d=>d.value))].sort((d,x)=>d-x),v=[];for(const d of i){const x=o.value.filter(V=>{var P;return((P=u.get(V))==null?void 0:P.value)===d});v.push(...x)}return St(v,a,t,h)}),f=c(()=>!Array.from(w.values()).some(i=>i.value)),y=c(()=>m.value[m.value.length-1].layer),C=c(()=>({"--v-layout-left":A(y.value.left),"--v-layout-right":A(y.value.right),"--v-layout-top":A(y.value.top),"--v-layout-bottom":A(y.value.bottom),...f.value?void 0:{transition:"none"}})),T=c(()=>m.value.slice(1).map((i,v)=>{let{id:d}=i;const{layer:x}=m.value[v],V=t.get(d),P=a.get(d);return{id:d,...x,size:Number(V.value),position:P.value}})),S=i=>T.value.find(v=>v.id===i),I=me("createLayout"),k=B(!1);oe(()=>{k.value=!0}),ke(ne,{register:(i,v)=>{let{id:d,order:x,position:V,layoutSize:P,elementSize:R,active:$,disableTransitions:Y,absolute:J}=v;u.set(d,x),a.set(d,V),t.set(d,P),h.set(d,$),Y&&w.set(d,Y);const Q=Xe(He,I==null?void 0:I.vnode).indexOf(i);Q>-1?o.value.splice(Q,0,d):o.value.push(d);const ee=c(()=>T.value.findIndex(z=>z.id===d)),_=c(()=>n.value+m.value.length*2-ee.value*2),te=c(()=>{const z=V.value==="left"||V.value==="right",W=V.value==="right",We=V.value==="bottom",be={[V.value]:0,zIndex:_.value,transform:`translate${z?"X":"Y"}(${($.value?0:-110)*(W||We?-1:1)}%)`,position:J.value||n.value!==xe?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!k.value)return be;const L=T.value[ee.value];if(!L)throw new Error(`[Vuetify] Could not find layout item "${d}"`);const ie=b.value.get(d);return ie&&(L[ie.position]+=ie.amount),{...be,height:z?`calc(100% - ${L.top}px - ${L.bottom}px)`:R.value?`${R.value}px`:void 0,left:W?void 0:`${L.left}px`,right:W?`${L.right}px`:void 0,top:V.value!=="bottom"?`${L.top}px`:void 0,bottom:V.value!=="top"?`${L.bottom}px`:void 0,width:z?R.value?`${R.value}px`:void 0:`calc(100% - ${L.left}px - ${L.right}px)`}}),ae=c(()=>({zIndex:_.value-1}));return{layoutItemStyles:te,layoutItemScrimStyles:ae,zIndex:_}},unregister:i=>{u.delete(i),a.delete(i),t.delete(i),h.delete(i),w.delete(i),o.value=o.value.filter(v=>v!==i)},mainRect:y,mainStyles:C,getLayoutItem:S,items:T,layoutRect:s,rootZIndex:n});const M=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),g=c(()=>({zIndex:n.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:M,layoutStyles:g,getLayoutItem:S,items:T,layoutRect:s,layoutRef:p}}const De=N({text:String,...G(),...se()},"VToolbarTitle"),Oe=D()({name:"VToolbarTitle",props:De(),setup(e,l){let{slots:n}=l;return O(()=>{const o=!!(n.default||n.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[o&&r("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(a=n.default)==null?void 0:a.call(n)])]}})}),{}}}),xt=[null,"prominent","default","comfortable","compact"],Ye=N({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>xt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ee(),...G(),...Pe(),...Le(),...se({tag:"header"}),...fe()},"VToolbar"),Ie=D()({name:"VToolbar",props:Ye(),setup(e,l){var f;let{slots:n}=l;const{backgroundColorClasses:o,backgroundColorStyles:a}=ce(q(e,"color")),{borderClasses:t}=Ne(e),{elevationClasses:u}=Re(e),{roundedClasses:h}=Ae(e),{themeClasses:w}=ge(e),{rtlClasses:p}=he(),s=B(!!(e.extended||(f=n.extension)!=null&&f.call(n))),b=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=c(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Be({VBtn:{variant:"text"}}),O(()=>{var S;const y=!!(e.title||n.title),C=!!(n.image||e.image),T=(S=n.extension)==null?void 0:S.call(n);return s.value=!!(e.extended||T),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,t.value,u.value,h.value,w.value,p.value,e.class],style:[a.value,e.style]},{default:()=>[C&&r("div",{key:"image",class:"v-toolbar__image"},[n.image?r(re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):r(ct,{key:"image-img",cover:!0,src:e.image},null)]),r(re,{defaults:{VTabs:{height:A(b.value)}}},{default:()=>{var I,k,M;return[r("div",{class:"v-toolbar__content",style:{height:A(b.value)}},[n.prepend&&r("div",{class:"v-toolbar__prepend"},[(I=n.prepend)==null?void 0:I.call(n)]),y&&r(Oe,{key:"title",text:e.title},{text:n.title}),(k=n.default)==null?void 0:k.call(n),n.append&&r("div",{class:"v-toolbar__append"},[(M=n.append)==null?void 0:M.call(n)])])]}}),r(re,{defaults:{VTabs:{height:A(m.value)}}},{default:()=>[r(yt,null,{default:()=>[s.value&&r("div",{class:"v-toolbar__extension",style:{height:A(m.value)}},[T])]})]})]})}),{contentHeight:b,extensionHeight:m}}}),It=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Tt(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=l;let o=0;const a=le(null),t=B(0),u=B(0),h=B(0),w=B(!1),p=B(!1),s=c(()=>Number(e.scrollThreshold)),b=c(()=>Ze((s.value-t.value)/s.value||0)),m=()=>{const f=a.value;!f||n&&!n.value||(o=t.value,t.value="window"in f?f.pageYOffset:f.scrollTop,p.value=t.value<o,h.value=Math.abs(t.value-s.value))};return H(p,()=>{u.value=u.value||t.value}),H(w,()=>{u.value=0}),oe(()=>{H(()=>e.scrollTarget,f=>{var C;const y=f?document.querySelector(f):window;y&&y!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",m),a.value=y,a.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),ue(()=>{var f;(f=a.value)==null||f.removeEventListener("scroll",m)}),n&&H(n,m,{immediate:!0}),{scrollThreshold:s,currentScroll:t,currentThreshold:h,isScrollActive:w,scrollRatio:b,isScrollingUp:p,savedScroll:u}}const _t=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ye(),...$e(),...It(),height:{type:[Number,String],default:64}},"VAppBar"),kt=D()({name:"VAppBar",props:_t(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const o=le(),a=Ce(e,"modelValue"),t=c(()=>{var I;const S=new Set(((I=e.scrollBehavior)==null?void 0:I.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),u=c(()=>{const S=t.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!a.value}),{currentScroll:h,scrollThreshold:w,isScrollingUp:p,scrollRatio:s}=Tt(e,{canScroll:u}),b=c(()=>e.collapse||t.value.collapse&&(t.value.inverted?s.value>0:s.value===0)),m=c(()=>e.flat||t.value.elevate&&(t.value.inverted?h.value>0:h.value===0)),f=c(()=>t.value.fadeImage?t.value.inverted?1-s.value:s.value:void 0),y=c(()=>{var k,M;if(t.value.hide&&t.value.inverted)return 0;const S=((k=o.value)==null?void 0:k.contentHeight)??0,I=((M=o.value)==null?void 0:M.extensionHeight)??0;return S+I});qe(()=>{t.value.hide?t.value.inverted?a.value=h.value>w.value:a.value=p.value||h.value<w.value:a.value=!0});const{ssrBootStyles:C}=ye(),{layoutItemStyles:T}=ze({id:e.name,order:c(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:y,elementSize:B(void 0),active:a,absolute:q(e,"absolute")});return O(()=>{const[S]=Ie.filterProps(e);return r(Ie,K({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":f.value,height:void 0,...C.value},e.style]},S,{collapse:b.value,flat:m.value}),n)}),{}}}),Bt=N({...gt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ct=D()({name:"VAppBarNavIcon",props:Bt(),setup(e,l){let{slots:n}=l;return O(()=>r(ve,K(e,{class:["v-app-bar-nav-icon"]}),n)),{}}}),Mt=D()({name:"VAppBarTitle",props:De(),setup(e,l){let{slots:n}=l;return O(()=>r(Oe,K(e,{class:"v-app-bar-title"}),n)),{}}});function Et(e){let{rootEl:l,isSticky:n,layoutItemStyles:o}=e;const a=B(!1),t=B(0),u=c(()=>{const p=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[p]:A(t.value)}:{top:o.value.top}]});oe(()=>{H(n,p=>{p?window.addEventListener("scroll",w,{passive:!0}):window.removeEventListener("scroll",w)},{immediate:!0})}),ue(()=>{document.removeEventListener("scroll",w)});let h=0;function w(){const p=h>window.scrollY?"up":"down",s=l.value.getBoundingClientRect(),b=parseFloat(o.value.top??0),m=window.scrollY-Math.max(0,t.value-b),f=s.height+Math.max(t.value,b)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(l.value).getPropertyValue("--v-body-scroll-y"))||0;s.height<window.innerHeight-b?(a.value="top",t.value=b):p==="up"&&a.value==="bottom"||p==="down"&&a.value==="top"?(t.value=window.scrollY+s.top-y,a.value=!0):p==="down"&&f<=0?(t.value=0,a.value="bottom"):p==="up"&&m<=0&&(y?a.value!=="top"&&(t.value=-m+y+b,a.value="top"):(t.value=s.top+m,a.value="top")),h=window.scrollY}return{isStuck:a,stickyStyles:u}}const Pt=100,Lt=20;function Te(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function _e(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const o=Te(l),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);l+=(a-o)*Math.abs(a),n===e.length-1&&(l*=.5)}return Te(l)*1e3}function Nt(){const e={};function l(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new Ke(Lt))).push([a.timeStamp,t])})}function n(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function o(a){var p;const t=(p=e[a])==null?void 0:p.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const u=t[0],h=[],w=[];for(const s of t){if(u[0]-s[0]>Pt)break;h.push({t:s[0],d:s[1].clientX}),w.push({t:s[0],d:s[1].clientY})}return{x:_e(h),y:_e(w),get direction(){const{x:s,y:b}=this,[m,f]=[Math.abs(s),Math.abs(b)];return m>f&&s>=0?"right":m>f&&s<=0?"left":f>m&&b>=0?"down":f>m&&b<=0?"up":Rt()}}}return{addMovement:l,endTouch:n,getVelocity:o}}function Rt(){throw new Error}function At(e){let{isActive:l,isTemporary:n,width:o,touchless:a,position:t}=e;oe(()=>{window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",k,{passive:!0})}),ue(()=>{window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",k)});const u=c(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:w,getVelocity:p}=Nt();let s=!1;const b=B(!1),m=B(0),f=B(0);let y;function C(g,i){return(t.value==="left"?g:t.value==="right"?document.documentElement.clientWidth-g:t.value==="top"?g:t.value==="bottom"?document.documentElement.clientHeight-g:U())-(i?o.value:0)}function T(g){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const v=t.value==="left"?(g-f.value)/o.value:t.value==="right"?(document.documentElement.clientWidth-g-f.value)/o.value:t.value==="top"?(g-f.value)/o.value:t.value==="bottom"?(document.documentElement.clientHeight-g-f.value)/o.value:U();return i?Math.max(0,Math.min(1,v)):v}function S(g){if(a.value)return;const i=g.changedTouches[0].clientX,v=g.changedTouches[0].clientY,d=25,x=t.value==="left"?i<d:t.value==="right"?i>document.documentElement.clientWidth-d:t.value==="top"?v<d:t.value==="bottom"?v>document.documentElement.clientHeight-d:U(),V=l.value&&(t.value==="left"?i<o.value:t.value==="right"?i>document.documentElement.clientWidth-o.value:t.value==="top"?v<o.value:t.value==="bottom"?v>document.documentElement.clientHeight-o.value:U());(x||V||l.value&&n.value)&&(s=!0,y=[i,v],f.value=C(u.value?i:v,l.value),m.value=T(u.value?i:v),w(g),h(g))}function I(g){const i=g.changedTouches[0].clientX,v=g.changedTouches[0].clientY;if(s){if(!g.cancelable){s=!1;return}const x=Math.abs(i-y[0]),V=Math.abs(v-y[1]);(u.value?x>V&&x>3:V>x&&V>3)?(b.value=!0,s=!1):(u.value?V:x)>3&&(s=!1)}if(!b.value)return;g.preventDefault(),h(g);const d=T(u.value?i:v,!1);m.value=Math.max(0,Math.min(1,d)),d>1?f.value=C(u.value?i:v,!0):d<0&&(f.value=C(u.value?i:v,!1))}function k(g){if(s=!1,!b.value)return;h(g),b.value=!1;const i=p(g.changedTouches[0].identifier),v=Math.abs(i.x),d=Math.abs(i.y);(u.value?v>d&&v>400:d>v&&d>3)?l.value=i.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||U()):l.value=m.value>.5}const M=c(()=>b.value?{transform:t.value==="left"?`translateX(calc(-100% + ${m.value*o.value}px))`:t.value==="right"?`translateX(calc(100% - ${m.value*o.value}px))`:t.value==="top"?`translateY(calc(-100% + ${m.value*o.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${m.value*o.value}px))`:U(),transition:"none"}:void 0);return{isDragging:b,dragProgress:m,dragStyles:M}}function U(){throw new Error}function Ht(){const l=me("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}const $t=["start","end","left","right","top","bottom"],zt=N({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>$t.includes(e)},sticky:Boolean,...Ee(),...G(),...Pe(),...$e(),...Le(),...se({tag:"nav"}),...fe()},"VNavigationDrawer"),Dt=D()({name:"VNavigationDrawer",props:zt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,l){let{attrs:n,emit:o,slots:a}=l;const{isRtl:t}=he(),{themeClasses:u}=ge(e),{borderClasses:h}=Ne(e),{backgroundColorClasses:w,backgroundColorStyles:p}=ce(q(e,"color")),{elevationClasses:s}=Re(e),{mobile:b}=Ge(),{roundedClasses:m}=Ae(e),f=vt(),y=Ce(e,"modelValue",null,_=>!!_),{ssrBootStyles:C}=ye(),{scopeId:T}=Ht(),S=le(),I=B(!1),k=c(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=c(()=>dt(e.location,t.value)),g=c(()=>!e.permanent&&(b.value||e.temporary)),i=c(()=>e.sticky&&!g.value&&M.value!=="bottom");e.expandOnHover&&e.rail!=null&&H(I,_=>o("update:rail",!_)),e.disableResizeWatcher||H(g,_=>!e.permanent&&Je(()=>y.value=!_)),!e.disableRouteWatcher&&f&&H(f.currentRoute,()=>g.value&&(y.value=!1)),H(()=>e.permanent,_=>{_&&(y.value=!0)}),Qe(()=>{e.modelValue!=null||g.value||(y.value=e.permanent||!b.value)});const{isDragging:v,dragProgress:d,dragStyles:x}=At({isActive:y,isTemporary:g,width:k,touchless:q(e,"touchless"),position:M}),V=c(()=>{const _=g.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):k.value;return v.value?_*d.value:_}),{layoutItemStyles:P,layoutItemScrimStyles:R}=ze({id:e.name,order:c(()=>parseInt(e.order,10)),position:M,layoutSize:V,elementSize:k,active:c(()=>y.value||v.value),disableTransitions:c(()=>v.value),absolute:c(()=>e.absolute||i.value&&typeof $.value!="string")}),{isStuck:$,stickyStyles:Y}=Et({rootEl:S,isSticky:i,layoutItemStyles:P}),J=ce(c(()=>typeof e.scrim=="string"?e.scrim:null)),pe=c(()=>({...v.value?{opacity:d.value*.2,transition:"none"}:void 0,...R.value}));Be({VList:{bgColor:"transparent"}});function Q(){I.value=!0}function ee(){I.value=!1}return O(()=>{const _=a.image||e.image;return r(Me,null,[r(e.tag,K({ref:S,onMouseenter:Q,onMouseleave:ee,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":g.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":i.value},u.value,w.value,h.value,s.value,m.value,e.class],style:[p.value,P.value,x.value,C.value,Y.value,e.style]},T,n),{default:()=>{var te,ae,z,W;return[_&&r("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(te=a.image)==null?void 0:te.call(a,{image:e.image}):r("img",{src:e.image,alt:""},null)]),a.prepend&&r("div",{class:"v-navigation-drawer__prepend"},[(ae=a.prepend)==null?void 0:ae.call(a)]),r("div",{class:"v-navigation-drawer__content"},[(z=a.default)==null?void 0:z.call(a)]),a.append&&r("div",{class:"v-navigation-drawer__append"},[(W=a.append)==null?void 0:W.call(a)])]}}),r(et,{name:"fade-transition"},{default:()=>[g.value&&(v.value||y.value)&&!!e.scrim&&r("div",K({class:["v-navigation-drawer__scrim",J.backgroundColorClasses.value],style:[pe.value,J.backgroundColorStyles.value],onClick:()=>y.value=!1},T),null)]})])}),{isStuck:$}}}),Ot={data(){return{store:tt(),drawer:!1,pages:[{icon:"mdi-apps",title:"Главная",to:"/"},{icon:"mdi-account",title:"Профиль",to:"/profile"},{icon:"mdi-video-wireless-outline",title:"Трансляция",to:"/broadcaster"}]}},methods:{logout(){this.$store.dispatch("auth/logout").then(()=>{console.log("login"),at.push("/login")})},login(){this.$router.push("login")}},computed:{user(){return this.$store.state.auth.user},loggedIn(){return this.$store.state.auth.status.loggedIn}},mounted(){this.loggedIn&&this.$store.dispatch("auth/setProfileData")}};function Yt(e,l,n,o,a,t){return j(),Z(pt,null,{default:E(()=>[t.loggedIn?(j(),Z(Dt,{key:0,modelValue:a.drawer,"onUpdate:modelValue":l[0]||(l[0]=u=>a.drawer=u)},{default:E(()=>[r(Se,null,{default:E(()=>[r(Ve,{"prepend-avatar":"https://randomuser.me/api/portraits/men/73.jpg",title:t.user.firstname+" "+t.user.lastname,subtitle:t.user.username},null,8,["title","subtitle"])]),_:1}),r(ht),(j(!0),nt(Me,null,lt(a.pages,u=>(j(),Z(Se,{density:"compact",nav:""},{default:E(()=>[r(Ve,{"prepend-icon":u.icon,title:u.title,value:u.to,to:u.to},null,8,["prepend-icon","title","value","to"])]),_:2},1024))),256))]),_:1},8,["modelValue"])):ot("",!0),r(kt,{density:"compact"},ut({default:E(()=>[r(Ct,{variant:"text",onClick:l[1]||(l[1]=st(u=>a.drawer=!a.drawer,["stop"]))}),r(Mt,null,{default:E(()=>[X("watch and stream")]),_:1})]),_:2},[t.loggedIn?{name:"append",fn:E(()=>[X(it(t.user.username)+" ",1),r(ve,{onClick:l[2]||(l[2]=u=>t.logout())},{default:E(()=>[X(" Выйти "),r(we,null,{default:E(()=>[X(" mdi-logout ")]),_:1})]),_:1})]),key:"0"}:{name:"append",fn:E(()=>[r(ve,{onClick:l[3]||(l[3]=u=>t.login())},{default:E(()=>[X(" Войти "),r(we,null,{default:E(()=>[X(" mdi-login ")]),_:1})]),_:1})]),key:"1"}]),1024)]),_:1})}const Wt=mt(Ot,[["render",Yt]]);const Xt=N({scrollable:Boolean,...G(),...se({tag:"main"})},"VMain"),Ut=D()({name:"VMain",props:Xt(),setup(e,l){let{slots:n}=l;const{mainStyles:o}=wt(),{ssrBootStyles:a}=ye();return O(()=>r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,a.value,e.style]},{default:()=>{var t,u;return[e.scrollable?r("div",{class:"v-main__scroller"},[(t=n.default)==null?void 0:t.call(n)]):(u=n.default)==null?void 0:u.call(n)]}})),{}}}),jt={__name:"View",setup(e){return(l,n)=>{const o=rt("router-view");return j(),Z(Ut,null,{default:E(()=>[r(o)]),_:1})}}};const Ft=N({...G(),...bt({fullHeight:!0}),...fe()},"VApp"),Zt=D()({name:"VApp",props:Ft(),setup(e,l){let{slots:n}=l;const o=ge(e),{layoutClasses:a,layoutStyles:t,getLayoutItem:u,items:h,layoutRef:w}=Vt(e),{rtlClasses:p}=he();return O(()=>{var s;return r("div",{ref:w,class:["v-application",o.themeClasses.value,a.value,p.value,e.class],style:[t.value,e.style]},[r("div",{class:"v-application__wrap"},[(s=n.default)==null?void 0:s.call(n)])])}),{getLayoutItem:u,items:h,theme:o}}}),aa={__name:"Default",setup(e){return(l,n)=>(j(),Z(Zt,null,{default:E(()=>[r(Wt),r(jt)]),_:1}))}};export{aa as default};