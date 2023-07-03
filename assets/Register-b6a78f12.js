import{U as i}from"./user-1d480d27.js";import{U as d,J as m,K as p,L as a,n as t,R as l,Q as f}from"./index-e5ee06f2.js";import{_ as h}from"./VAvatar-ee3fb148.js";import{d as V,V as g,a as w,c as R}from"./VCard-2d3a232c.js";import{V as b}from"./VCol-1397f2ac.js";import{V as y,a as o}from"./VTextField-ec68c5e6.js";import{V as C}from"./VBtn-7f686220.js";import{V as U}from"./VDivider-2b5f9d2a.js";import{V as $}from"./VRow-7ee72a6f.js";import"./index-df71d2ee.js";const k={name:"Login",data:()=>({user:new i("","","",""),show1:!1,show2:!1,repeatPassword:"",rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},firstnameRules:[e=>(e==null?void 0:e.length)>3?!0:"Имя должно содержать минимум 3 символа."],lastnameRules:[e=>(e==null?void 0:e.length)>3?!0:"Фамилия должна содержать минимум 3 символа."],usernameRules:[e=>(e==null?void 0:e.length)>3?!0:"Имя пользователя должно содержать минимум 3 символа."]}),computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},mounted(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister(){this.message="",this.submitted=!0,this.$store.dispatch("auth/register",this.user).then(e=>{this.message=e.message,this.successful=!0,this.$router.push("/login")},e=>{this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.successful=!1})},matchingPasswords:function(){return this.user.password===this.repeatPassword?!0:"Пароли не совпадают."}}};function P(e,s,T,q,B,n){const u=d("router-link");return m(),p(V,null,{default:a(()=>[t($,{align:"stretch"},{default:a(()=>[t(b,{align:"center",cols:"auto"},{default:a(()=>[t(g,null,{default:a(()=>[t(w,null,{default:a(()=>[l(" Регистрация ")]),_:1}),t(R,null,{default:a(()=>[t(y,{name:"form",onSubmit:f(n.handleRegister,["prevent"])},{default:a(()=>[t(o,{modelValue:e.user.username,"onUpdate:modelValue":s[0]||(s[0]=r=>e.user.username=r),label:"Имя пользователя",rules:e.usernameRules},null,8,["modelValue","rules"]),t(o,{modelValue:e.user.password,"onUpdate:modelValue":s[1]||(s[1]=r=>e.user.password=r),"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Пароль",hint:"At least 8 characters",counter:"","onClick:append":s[2]||(s[2]=r=>e.show1=!e.show1)},null,8,["modelValue","append-icon","rules","type"]),t(o,{modelValue:e.repeatPassword,"onUpdate:modelValue":s[3]||(s[3]=r=>e.repeatPassword=r),"append-icon":e.show2?"mdi-eye":"mdi-eye-off",rules:[n.matchingPasswords],type:e.show2?"text":"password",name:"input-10-2",label:"Повторите пароль",hint:"At least 8 characters",class:"input-group--focused","onClick:append":s[4]||(s[4]=r=>e.show2=!e.show2)},null,8,["modelValue","append-icon","rules","type"]),t(o,{modelValue:e.user.firstname,"onUpdate:modelValue":s[5]||(s[5]=r=>e.user.firstname=r),label:"Имя",rules:e.firstnameRules},null,8,["modelValue","rules"]),t(o,{modelValue:e.user.lastname,"onUpdate:modelValue":s[6]||(s[6]=r=>e.user.lastname=r),label:"Фамилия",rules:e.lastnameRules},null,8,["modelValue","rules"]),t(C,{type:"submit",block:"",class:"mt-2"},{default:a(()=>[l("Зарегистрироваться")]),_:1}),t(U),l(" Уже зарегистрированы? "),t(u,{to:"/login"},{default:a(()=>[l("Войти")]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Q=h(k,[["render",P]]);export{Q as default};
