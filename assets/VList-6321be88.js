import{s as M,o as $e,c as f,W as je,i as D,d as R,X as O,r as I,p as A,z as te,l as ue,b as Ee,h as Ke,Y as He,Z as B,m as _,t as k,n as v,_ as ce,$ as Ue,a0 as ne,q as de,y as qe,u as ve,a1 as ze,a2 as We,G as ae,B as le,w as Xe,a3 as Ye,a4 as x,a5 as Ze}from"./index-e5ee06f2.js";import{V as Je}from"./index-df71d2ee.js";import{m as N,a as $,u as j,i as W,M as Qe,l as fe,b as ye,n as me,o as ge,c as pe,d as Se,p as et,q as he,R as tt,r as nt,f as be,s as at,v as ke,w as Ce,g as Ve,h as we,x as lt,y as se,k as ie,z as st,e as it}from"./VAvatar-ee3fb148.js";import{V as rt}from"./VDivider-2b5f9d2a.js";function ot(){const e=M(!1);return $e(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:je(e)}}const X=Symbol.for("vuetify:list");function Ie(){const e=D(X,{hasPrepend:M(!1),updateHasPrepend:()=>null}),s={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return R(X,s),e}function Pe(){return D(X,null)}const ut={open:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(s);let i=l.get(s);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(s),n},select:()=>null},Ae={open:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(t){let a=l.get(s);for(n.add(s);a!=null&&a!==s;)n.add(a),a=l.get(a);return n}else n.delete(s);return n},select:()=>null},ct={open:Ae.open,select:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(s);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},Y=e=>{const s={select:t=>{let{id:n,value:l,selected:a}=t;if(n=O(n),e&&!l){const i=Array.from(a.entries()).reduce((o,h)=>{let[S,y]=h;return y==="on"?[...o,S]:o},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return s},Le=e=>{const s=Y(e);return{select:n=>{let{selected:l,id:a,...i}=n;a=O(a);const o=l.has(a)?new Map([[a,l.get(a)]]):new Map;return s.select({...i,id:a,selected:o})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=s.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>s.out(n,l,a)}},dt=e=>{const s=Y(e);return{select:n=>{let{id:l,selected:a,children:i,...o}=n;return l=O(l),i.has(l)?a:s.select({id:l,selected:a,children:i,...o})},in:s.in,out:s.out}},vt=e=>{const s=Le(e);return{select:n=>{let{id:l,selected:a,children:i,...o}=n;return l=O(l),i.has(l)?a:s.select({id:l,selected:a,children:i,...o})},in:s.in,out:s.out}},ft=e=>{const s={select:t=>{let{id:n,value:l,selected:a,children:i,parents:o}=t;n=O(n);const h=new Map(a),S=[n];for(;S.length;){const r=S.shift();a.set(r,l?"on":"off"),i.has(r)&&S.push(...i.get(r))}let y=o.get(n);for(;y;){const r=i.get(y),u=r.every(d=>a.get(d)==="on"),c=r.every(d=>!a.has(d)||a.get(d)==="off");a.set(y,u?"on":c?"off":"indeterminate"),y=o.get(y)}return e&&!l&&Array.from(a.entries()).reduce((u,c)=>{let[d,m]=c;return m==="on"?[...u,d]:u},[]).length===0?h:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return s},F=Symbol.for("vuetify:nested"),Be={id:M(),root:{register:()=>null,unregister:()=>null,parents:I(new Map),children:I(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:I(new Set),selected:I(new Map),selectedValues:I([])}},yt=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),mt=e=>{let s=!1;const t=I(new Map),n=I(new Map),l=te(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return vt(e.mandatory);case"leaf":return dt(e.mandatory);case"independent":return Y(e.mandatory);case"single-independent":return Le(e.mandatory);case"classic":default:return ft(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ct;case"single":return ut;case"multiple":default:return Ae}}),o=te(e,"selected",e.selected,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value));ue(()=>{s=!0});function h(r){const u=[];let c=r;for(;c!=null;)u.unshift(c),c=n.value.get(c);return u}const S=Ee("nested"),y={id:M(),root:{opened:l,selected:o,selectedValues:f(()=>{const r=[];for(const[u,c]of o.value.entries())c==="on"&&r.push(u);return r}),register:(r,u,c)=>{u&&r!==u&&n.value.set(r,u),c&&t.value.set(r,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],r])},unregister:r=>{if(s)return;t.value.delete(r);const u=n.value.get(r);if(u){const c=t.value.get(u)??[];t.value.set(u,c.filter(d=>d!==r))}n.value.delete(r),l.value.delete(r)},open:(r,u,c)=>{S.emit("click:open",{id:r,value:u,path:h(r),event:c});const d=i.value.open({id:r,value:u,opened:new Set(l.value),children:t.value,parents:n.value,event:c});d&&(l.value=d)},openOnSelect:(r,u,c)=>{const d=i.value.select({id:r,value:u,selected:new Map(o.value),opened:new Set(l.value),children:t.value,parents:n.value,event:c});d&&(l.value=d)},select:(r,u,c)=>{S.emit("click:select",{id:r,value:u,path:h(r),event:c});const d=a.value.select({id:r,value:u,selected:new Map(o.value),children:t.value,parents:n.value,event:c});d&&(o.value=d),y.root.openOnSelect(r,u,c)},children:t,parents:n}};return R(F,y),y.root},Me=(e,s)=>{const t=D(F,Be),n=Symbol(Ke()),l=f(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(i,o)=>t.root.open(l.value,i,o),openOnSelect:(i,o)=>t.root.openOnSelect(l.value,i,o),isOpen:f(()=>t.root.opened.value.has(l.value)),parent:f(()=>t.root.parents.value.get(l.value)),select:(i,o)=>t.root.select(l.value,i,o),isSelected:f(()=>t.root.selected.value.get(O(l.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,s),ue(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),s&&R(F,a),a},gt=()=>{const e=D(F,Be);R(F,{...e,isGroupActivator:!0})},pt=He({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return gt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),St=A({activeColor:String,baseColor:String,color:String,collapseIcon:{type:B,default:"$collapse"},expandIcon:{type:B,default:"$expand"},prependIcon:B,appendIcon:B,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...$()},"VListGroup"),re=_()({name:"VListGroup",props:St(),setup(e,s){let{slots:t}=s;const{isOpen:n,open:l,id:a}=Me(k(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),o=Pe(),{isBooted:h}=ot();function S(c){l(!n.value,c)}const y=f(()=>({onClick:S,class:"v-list-group__header",id:i.value})),r=f(()=>n.value?e.collapseIcon:e.expandIcon),u=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&r.value,appendIcon:e.appendIcon||!e.subgroup&&r.value,title:e.title,value:e.value}}));return j(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(W,{defaults:u.value},{default:()=>[v(pt,null,{default:()=>[t.activator({props:y.value,isOpen:n.value})]})]}),v(Qe,{transition:{component:Je},disabled:!h.value},{default:()=>{var c;return[ce(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[Ue,n.value]])]}})]})),{}}});const ht=fe("v-list-item-subtitle"),bt=fe("v-list-item-title"),kt=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:B,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ne(),onClickOnce:ne(),...ye(),...N(),...me(),...ge(),...pe(),...Se(),...et(),...$(),...de(),...he({variant:"text"})},"VListItem"),oe=_()({name:"VListItem",directives:{Ripple:tt},props:kt(),emits:{click:e=>!0},setup(e,s){let{attrs:t,slots:n,emit:l}=s;const a=nt(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:o,isSelected:h,isIndeterminate:S,isGroupActivator:y,root:r,parent:u,openOnSelect:c}=Me(i,!1),d=Pe(),m=f(()=>{var p;return e.active!==!1&&(e.active||((p=a.isActive)==null?void 0:p.value)||h.value)}),g=f(()=>e.link!==!1&&a.isLink.value),V=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),L=f(()=>e.rounded||e.nav),P=f(()=>e.color??e.activeColor),E=f(()=>({color:m.value?P.value??e.baseColor:e.baseColor,variant:e.variant}));qe(()=>{var p;return(p=a.isActive)==null?void 0:p.value},p=>{p&&u.value!=null&&r.open(u.value,!0),p&&c(p)},{immediate:!0});const{themeClasses:K}=ve(e),{borderClasses:H}=be(e),{colorClasses:U,colorStyles:w,variantClasses:b}=at(E),{densityClasses:T}=ke(e),{dimensionStyles:Fe}=Ce(e),{elevationClasses:_e}=Ve(e),{roundedClasses:Te}=we(L),Ge=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),q=f(()=>({isActive:m.value,select:o,isSelected:h.value,isIndeterminate:S.value}));function Z(p){var G;l("click",p),!(y||!V.value)&&((G=a.navigate)==null||G.call(a,p),e.value!=null&&o(!h.value,p))}function De(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),Z(p))}return j(()=>{const p=g.value?"a":e.tag,G=n.title||e.title,Re=n.subtitle||e.subtitle,J=!!(e.appendAvatar||e.appendIcon),Ne=!!(J||n.append),Q=!!(e.prependAvatar||e.prependIcon),z=!!(Q||n.prepend);return d==null||d.updateHasPrepend(z),e.activeColor&&ze("active-color",["color","base-color"]),ce(v(p,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!z&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&m.value},K.value,H.value,U.value,T.value,_e.value,Ge.value,Te.value,b.value,e.class],style:[w.value,Fe.value,e.style],href:a.href.value,tabindex:V.value?d?-2:0:void 0,onClick:Z,onKeydown:V.value&&!g.value&&De},{default:()=>{var ee;return[lt(V.value||m.value,"v-list-item"),z&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(W,{key:"prepend-defaults",disabled:!Q,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,q.value)]}}):v(ae,null,[e.prependAvatar&&v(se,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[G&&v(bt,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),Re&&v(ht,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ee=n.default)==null?void 0:ee.call(n,q.value)]),Ne&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(W,{key:"append-defaults",disabled:!J,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,q.value)]}}):v(ae,null,[e.appendIcon&&v(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(se,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[We("ripple"),V.value&&e.ripple]])}),{}}}),Ct=A({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...$()},"VListSubheader"),Vt=_()({name:"VListSubheader",props:Ct(),setup(e,s){let{slots:t}=s;const{textColorClasses:n,textColorStyles:l}=st(k(e,"color"));return j(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),wt=A({items:Array},"VListChildren"),Oe=_()({name:"VListChildren",props:wt(),setup(e,s){let{slots:t}=s;return Ie(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var c,d;let{children:i,props:o,type:h,raw:S}=a;if(h==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:o}))??v(rt,o,null);if(h==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:o}))??v(Vt,o,null);const y={subtitle:t.subtitle?m=>{var g;return(g=t.subtitle)==null?void 0:g.call(t,{...m,item:S})}:void 0,prepend:t.prepend?m=>{var g;return(g=t.prepend)==null?void 0:g.call(t,{...m,item:S})}:void 0,append:t.append?m=>{var g;return(g=t.append)==null?void 0:g.call(t,{...m,item:S})}:void 0,title:t.title?m=>{var g;return(g=t.title)==null?void 0:g.call(t,{...m,item:S})}:void 0},[r,u]=re.filterProps(o);return i?v(re,le({value:o==null?void 0:o.value},r),{activator:m=>{let{props:g}=m;return t.header?t.header({props:{...o,...g}}):v(oe,le(o,g),y)},default:()=>v(Oe,{items:i},t)}):t.item?t.item({props:o}):v(oe,o,y)}))}}}),It=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function Pt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function At(e,s){const t=x(s,e.itemType,"item"),n=Pt(s)?s:x(s,e.itemTitle),l=x(s,e.itemValue,void 0),a=x(s,e.itemChildren),i=e.itemProps===!0?Ze(s,["children"])[1]:x(s,e.itemProps),o={title:n,value:l,...i};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?xe(e,a):void 0,raw:s}}function xe(e,s){const t=[];for(const n of s)t.push(At(e,n));return t}function Lt(e){return{items:f(()=>xe(e,e.items))}}const Bt=A({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...yt({selectStrategy:"single-leaf",openStrategy:"list"}),...ye(),...N(),...me(),...ge(),...pe(),itemType:{type:String,default:"type"},...It(),...Se(),...$(),...de(),...he({variant:"text"})},"VList"),_t=_()({name:"VList",props:Bt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:n}=Lt(e),{themeClasses:l}=ve(e),{backgroundColorClasses:a,backgroundColorStyles:i}=it(k(e,"bgColor")),{borderClasses:o}=be(e),{densityClasses:h}=ke(e),{dimensionStyles:S}=Ce(e),{elevationClasses:y}=Ve(e),{roundedClasses:r}=we(e),{open:u,select:c}=mt(e),d=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=k(e,"activeColor"),g=k(e,"baseColor"),V=k(e,"color");Ie(),Xe({VListGroup:{activeColor:m,baseColor:g,color:V},VListItem:{activeClass:k(e,"activeClass"),activeColor:m,baseColor:g,color:V,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),variant:k(e,"variant")}});const L=M(!1),P=I();function E(b){L.value=!0}function K(b){L.value=!1}function H(b){var T;!L.value&&!(b.relatedTarget&&((T=P.value)!=null&&T.contains(b.relatedTarget)))&&w()}function U(b){if(P.value){if(b.key==="ArrowDown")w("next");else if(b.key==="ArrowUp")w("prev");else if(b.key==="Home")w("first");else if(b.key==="End")w("last");else return;b.preventDefault()}}function w(b){if(P.value)return Ye(P.value,b)}return j(()=>v(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,o.value,h.value,y.value,d.value,r.value,e.class],style:[i.value,S.value,e.style],tabindex:e.disabled||L.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:K,onFocus:H,onKeydown:U},{default:()=>[v(Oe,{items:n.value},t)]})),{open:u,select:c,focus:w}}});export{_t as V,oe as a,ot as u};
