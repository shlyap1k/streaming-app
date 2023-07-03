import{C as v,s as w}from"./ChatComponent-d9ac92a2.js";import{_ as f,k as h}from"./VAvatar-26ba638e.js";import{V,a as N,c as y,e as I}from"./VCard-04090dfd.js";import{V as d}from"./VRow-dc63d6f3.js";import{V as i}from"./VCol-2a55624e.js";import{U as g,J as a,K as c,L as e,n as t,R as r,S as m,O as _,a6 as C,a7 as x,a8 as T}from"./index-bf525995.js";import"./index-7f83b671.js";import"./VTextField-ebe460cb.js";import"./index-cdd36948.js";import"./VBtn-0a240091.js";const S={name:"WatchingVideo",components:{ChatComponent:v},data(){return{started:!1,viewers:0,time:0,streamName:null,peerConnection:null,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"}]},socket:w,video:document.querySelector("video")}},computed:{roomName(){return this.$route.params.username},user(){return this.$store.state.auth.user}},mounted(){console.log("join room"),this.video=document.querySelector("video"),this.socket.emit("join room",{roomName:this.roomName,user:this.user}),this.socket.on("stream info",o=>{this.viewers=o.viewers,this.streamName=o.streamName}),this.started=!0,this.socket.on("end of stream",()=>{this.started=!1,this.$router.push("/")}),this.socket.on("offer",(o,l)=>{this.peerConnection=new RTCPeerConnection(this.config),this.peerConnection.setRemoteDescription(l).then(()=>this.peerConnection.createAnswer()).then(n=>this.peerConnection.setLocalDescription(n)).then(()=>{this.socket.emit("answer",o,this.peerConnection.localDescription)}),this.peerConnection.ontrack=n=>{this.started=!0,this.toggleTimer(),this.video.srcObject=n.streams[0]},this.peerConnection.onicecandidate=n=>{n.candidate&&this.socket.emit("icecandidate",o,n.candidate)}}),this.socket.on("icecandidate",(o,l)=>{this.peerConnection.addIceCandidate(new RTCIceCandidate(l)).catch(n=>console.error(n))}),window.onunload=window.onbeforeunload=()=>{this.socket.emit("left room",{roomName:this.roomName,user:this.user}),this.socket.close(),this.peerConnection.close()}},methods:{toggleTimer(){this.started?this.interval=setInterval(this.incrementTime,1e3):(clearInterval(this.interval),console.log("timer stops")),this.isRunning=!this.isRunning},incrementTime(){this.time=parseInt(this.time)+1}}},R=o=>(x("data-v-4417b850"),o=o(),T(),o),b=R(()=>C("video",{playsinline:"",autoplay:"",muted:"",id:"video"},null,-1)),W={class:"red--text"};function $(o,l,n,k,s,p){const u=g("chat-component");return a(),c(d,null,{default:e(()=>[t(i,{cols:"9"},{default:e(()=>[t(V,null,{default:e(()=>[t(N,null,{default:e(()=>[r(" Просмотр трансляции ")]),_:1}),t(y,null,{default:e(()=>[t(d,null,{default:e(()=>[t(i,null,{default:e(()=>[b]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(i,{cols:"4"},{default:e(()=>[s.started?(a(),c(h,{key:0,color:"#F44336"},{default:e(()=>[r(" mdi-play ")]),_:1})):(a(),c(h,{key:1},{default:e(()=>[r(" mdi-play-pause ")]),_:1})),r(" "+m(s.streamName),1)]),_:1}),s.started?(a(),c(i,{key:0,cols:"4"},{default:e(()=>[r(" Длительность трансляции: "+m(("0"+(s.time/3600>>0)).slice(-2))+":"+m(("0"+(s.time/60>>0)).slice(-2))+":"+m(("0"+Number(((s.time/60-(s.time/60>>0))*60).toFixed(0))).slice(-2)),1)]),_:1})):_("",!0),s.started?_("",!0):(a(),c(i,{key:1,cols:"4"})),t(i,{cols:"4"},{default:e(()=>[t(h,{color:"#F44336"},{default:e(()=>[r("mdi-account-outline")]),_:1}),C("span",W,m(s.viewers),1)]),_:1})]),_:1})]),_:1}),t(I)]),_:1})]),_:1}),t(i,null,{default:e(()=>[t(u,{socket:s.socket,"room-name":p.roomName},null,8,["socket","room-name"])]),_:1})]),_:1})}const D=f(S,[["render",$],["__scopeId","data-v-4417b850"]]),j={name:"Watcher",components:{WatchingVideo:D},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn},user(){return this.$store.state.auth.user}},mounted(){this.loggedIn||this.$router.push("/login")}};function B(o,l,n,k,s,p){const u=g("watching-video");return a(),c(d,null,{default:e(()=>[t(i,null,{default:e(()=>[t(u)]),_:1})]),_:1})}const E=f(j,[["render",B]]);export{E as default};