import{m as y,a as S}from"./VAvatar-ee3fb148.js";import{a9 as l,aa as f,p as C,m as k,c as N,ab as h}from"./index-e5ee06f2.js";const i=(()=>l.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),d=(()=>l.reduce((e,s)=>{const t="offset"+f(s);return e[t]={type:[String,Number],default:null},e},{}))(),m=(()=>l.reduce((e,s)=>{const t="order"+f(s);return e[t]={type:[String,Number],default:null},e},{}))(),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function L(e,s,t){let o=e;if(!(t==null||t===!1)){if(s){const r=s.replace(e,"");o+=`-${r}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const P=["auto","start","end","center","baseline","stretch"],V=C({cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>P.includes(e)},...y(),...S()},"VCol"),v=k()({name:"VCol",props:V(),setup(e,s){let{slots:t}=s;const o=N(()=>{const r=[];let n;for(n in u)u[n].forEach(a=>{const g=e[a],c=L(n,a,g);c&&r.push(c)});const b=r.some(a=>a.startsWith("v-col-"));return r.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return h(e.tag,{class:[o.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});export{v as V};
