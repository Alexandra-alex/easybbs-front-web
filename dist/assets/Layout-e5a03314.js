import{q as ae,s as ne,G as ie,y as re,x as w,r as ee,a as v,o as i,j as c,b as l,w as t,c as q,k as e,L as T,n as k,m as I,M as fe,t as b,N as oe,O as ve,P as ge,Q as B,F as A,p as J,v as X,u as le}from"./.store-5800dd82.js";const he=e("span",{class:"iconfont icon-account"},null,-1),we=e("span",{class:"iconfont icon-password"},null,-1),ke={key:1},ye={class:"send-emali-panel"},Ce=e("span",{class:"iconfont icon-checkcode"},null,-1),be=e("div",null,[e("p",null,"1、在垃圾箱中查找邮箱验证码"),e("p",null,"2、在邮箱中头像->设置->反垃圾->白名单->设置邮件地址白名单"),e("p",null," 3、将邮箱【laoluo@wuhancoder.com】添加到白名单不知道怎么设置？ ")],-1),$e=e("span",{class:"a-link",style:{"font-size":"14px"}},"未收到邮箱验证码？",-1),xe=e("span",{class:"iconfont icon-account"},null,-1),Ie=e("span",{class:"iconfont icon-password"},null,-1),Ve=e("span",{class:"iconfont icon-password"},null,-1),Pe={class:"check-code-panel"},Re=e("span",{class:"iconfont icon-checkcode"},null,-1),Me=["src"],Se={class:"rememberme-panel"},Ue={class:"no-account"},Ee={key:0},Le={key:1},Oe={key:2},Be={class:"check-code-panel"},qe=e("span",{class:"iconfont icon-checkcode"},null,-1),Te=["src"],Fe={__name:"LoginAndRegister",setup(de,{expose:$}){const{proxy:g}=ae();ne(),ie();const K=re(),_={checkCode:"/api/checkCode",sendMailCode:"/sendEmailCode",register:"/register",login:"/login",resetPwd:"/resetPwd"},a=w(),x=p=>{a.value=p,E()};$({showPanel:x});const F=w(_.checkCode),j=w(_.checkCode),V=p=>{p==0?F.value=_.checkCode+"?type="+p+"&time="+new Date().getTime():j.value=_.checkCode+"?type="+p+"&time="+new Date().getTime()},y=ee({passwordEyeOpen:!1,registerPasswordEyeOpen:!1,reRegisterPasswordEyeOpen:!1}),P=p=>{y[p]=!y[p]},M=w({}),z=w(),S=ee({show:!1,title:"发送邮箱验证码",buttons:[{type:"primary",text:"发送验证码",click:()=>{W()}}]}),U=()=>{N.value.validateField("email",p=>{p&&(S.show=!0,oe(()=>{V(1),z.value.resetFields(),M.value={email:d.value.email}}))})},W=()=>{z.value.validate(async p=>{if(!p)return;const s=Object.assign({},M.value);s.type=a.value==0?0:1,await g.Request({url:_.sendMailCode,params:s,errorCallback:()=>{V(1)}})&&(g.Message.success("验证码发送成功，请登录邮箱查看"),S.show=!1)})},C=ee({show:!1,title:"标题"}),D=(p,s,h)=>{s!==d.value.registerPassword?h(new Error(p.message)):h()},d=w({}),N=w(),G={email:[{required:!0,message:"请输入邮箱"},{validator:g.Verify.email,message:"请输入正确的邮箱"}],password:[{required:!0,message:"请输入密码"}],emailCode:[{required:!0,message:"请输入邮箱验证码"}],nickName:[{required:!0,message:"请输入昵称"}],registerPassword:[{required:!0,message:"请输入密码"},{validator:g.Verify.password,message:"密码只能是数字，字母，特殊字符 8-18位"}],reRegisterPassword:[{required:!0,message:"请再次输入密码"},{validator:D,message:"两次输入的密码不一致"}],checkCode:[{required:!0,message:"请输入图片验证码"}]},E=()=>{C.show=!0,a.value==0?C.title="注册":a.value==1?C.title="登录":a.value==2&&(C.title="重置密码"),oe(()=>{if(V(0),N.value.resetFields(),d.value={},a.value==1){const p=g.VueCookies.get("loginInfo");p&&(d.value=p)}})},u=()=>{N.value.validate(async p=>{if(!p)return;let s={};if(Object.assign(s,d.value),(a.value==0||a.value==2)&&(s.password=s.registerPassword,delete s.registerPassword,delete s.reRegisterPassword),a.value==1){let o=g.VueCookies.get("loginInfo"),n=o==null?null:o.password;s.password!==n&&(s.password=ve(s.password))}let h=null;a.value==0?h=_.register:a.value==1?h=_.login:a.value==2&&(h=_.resetPwd);let f=await g.Request({url:h,params:s,errorCallback:()=>{V(0)}});if(f)if(a.value==0)g.Message.success("注册成功,请登录"),x(1);else if(a.value==1){if(s.rememberMe){const o={email:s.email,password:s.password,rememberMe:s.rememberMe};g.VueCookies.set("loginInfo",o,"7d")}else g.VueCookies.remove("loginInfo");C.show=!1,g.Message.success("登录成功"),K.commit("updateLoginUserInfo",f.data)}else a.value==2&&(g.Message.success("重置密码成功,请登录"),x(1))})},Z=()=>{C.show=!1,K.commit("showLogin",!1)};return(p,s)=>{const h=v("el-input"),f=v("el-form-item"),o=v("el-button"),n=v("el-popover"),R=v("el-checkbox"),Q=v("el-form"),L=v("Dialog");return i(),c("div",null,[l(L,{show:C.show,title:C.title,buttons:C.buttons,width:"400px",showCancel:!1,onClose:Z},{default:t(()=>[l(Q,{class:"login-register",model:d.value,rules:G,ref_key:"formDataRef",ref:N},{default:t(()=>[l(f,{prop:"email"},{default:t(()=>[l(h,{size:"large",clearable:"",placeholder:"请输入邮箱",modelValue:d.value.email,"onUpdate:modelValue":s[0]||(s[0]=r=>d.value.email=r),maxLength:"150"},{prefix:t(()=>[he]),_:1},8,["modelValue"])]),_:1}),a.value==1?(i(),q(f,{key:0,prop:"password"},{default:t(()=>[l(h,{type:y.passwordEyeOpen?"text":"password",size:"large",placeholder:"请输入密码",modelValue:d.value.password,"onUpdate:modelValue":s[2]||(s[2]=r=>d.value.password=r)},{prefix:t(()=>[we]),suffix:t(()=>[e("span",{onClick:s[1]||(s[1]=r=>P("passwordEyeOpen")),class:T(["iconfont",y.passwordEyeOpen?"icon-eye":"icon-close-eye"])},null,2)]),_:1},8,["type","modelValue"])]),_:1})):k("",!0),a.value==0||a.value==2?(i(),c("div",ke,[l(f,{prop:"emailCode"},{default:t(()=>[e("div",ye,[l(h,{size:"large",placeholder:"请输入邮箱验证码",modelValue:d.value.emailCode,"onUpdate:modelValue":s[3]||(s[3]=r=>d.value.emailCode=r)},{prefix:t(()=>[Ce]),_:1},8,["modelValue"]),l(o,{class:"send-mail-btn",type:"primary",size:"large",onClick:U},{default:t(()=>[I("获取验证码")]),_:1})]),l(n,{placement:"left",width:500,trigger:"click"},{reference:t(()=>[$e]),default:t(()=>[be]),_:1})]),_:1}),a.value==0?(i(),q(f,{key:0,prop:"nickName"},{default:t(()=>[l(h,{size:"large",clearable:"",placeholder:"请输入昵称",modelValue:d.value.nickName,"onUpdate:modelValue":s[4]||(s[4]=r=>d.value.nickName=r),maxLength:"20"},{prefix:t(()=>[xe]),_:1},8,["modelValue"])]),_:1})):k("",!0),l(f,{prop:"registerPassword"},{default:t(()=>[l(h,{type:y.registerPasswordEyeOpen?"text":"password",size:"large",placeholder:"请输入密码",modelValue:d.value.registerPassword,"onUpdate:modelValue":s[6]||(s[6]=r=>d.value.registerPassword=r)},{prefix:t(()=>[Ie]),suffix:t(()=>[e("span",{onClick:s[5]||(s[5]=r=>P("registerPasswordEyeOpen")),class:T(["iconfont",y.registerPasswordEyeOpen?"icon-eye":"icon-close-eye"])},null,2)]),_:1},8,["type","modelValue"])]),_:1}),l(f,{prop:"reRegisterPassword"},{default:t(()=>[l(h,{type:y.reRegisterPasswordEyeOpen?"text":"password",size:"large",placeholder:"请再次输入密码",modelValue:d.value.reRegisterPassword,"onUpdate:modelValue":s[8]||(s[8]=r=>d.value.reRegisterPassword=r)},{prefix:t(()=>[Ve]),suffix:t(()=>[e("span",{onClick:s[7]||(s[7]=r=>P("reRegisterPasswordEyeOpen")),class:T(["iconfont",y.reRegisterPasswordEyeOpen?"icon-eye":"icon-close-eye"])},null,2)]),_:1},8,["type","modelValue"])]),_:1})])):k("",!0),l(f,{prop:"checkCode"},{default:t(()=>[e("div",Pe,[l(h,{size:"large",placeholder:"请输入验证码",modelValue:d.value.checkCode,"onUpdate:modelValue":s[9]||(s[9]=r=>d.value.checkCode=r),onKeyup:fe(u,["enter"])},{prefix:t(()=>[Re]),_:1},8,["modelValue","onKeyup"]),e("img",{src:F.value,class:"check-code",onClick:s[10]||(s[10]=r=>V(0))},null,8,Me)])]),_:1}),a.value==1?(i(),q(f,{key:2},{default:t(()=>[e("div",Se,[l(R,{modelValue:d.value.rememberMe,"onUpdate:modelValue":s[11]||(s[11]=r=>d.value.rememberMe=r)},{default:t(()=>[I("记住我")]),_:1},8,["modelValue"])]),e("div",Ue,[e("a",{href:"javascript:void(0)",class:"a-link",onClick:s[12]||(s[12]=r=>x(2))},"忘记密码？"),e("a",{href:"javascript:void(0)",class:"a-link",onClick:s[13]||(s[13]=r=>x(0))},"没有账号？")])]),_:1})):k("",!0),a.value==0?(i(),q(f,{key:3},{default:t(()=>[e("a",{href:"javascript:void(0)",class:"a-link",onClick:s[14]||(s[14]=r=>x(1))},"已有账号?")]),_:1})):k("",!0),a.value==2?(i(),q(f,{key:4},{default:t(()=>[e("a",{href:"javascript:void(0)",class:"a-link",onClick:s[15]||(s[15]=r=>x(1))},"去登录?")]),_:1})):k("",!0),l(f,null,{default:t(()=>[l(o,{type:"primary",class:"op-btn",onClick:u},{default:t(()=>[a.value==0?(i(),c("span",Ee,"注册")):k("",!0),a.value==1?(i(),c("span",Le,"登录")):k("",!0),a.value==2?(i(),c("span",Oe,"重置密码")):k("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title","buttons"]),l(L,{show:S.show,title:S.title,buttons:S.buttons,width:"500px",showCancel:!1,onClose:s[18]||(s[18]=r=>S.show=!1)},{default:t(()=>[l(Q,{model:M.value,rules:G,ref_key:"formData4SendMailCodeRef",ref:z,"label-width":"80px"},{default:t(()=>[l(f,{label:"邮箱"},{default:t(()=>[I(b(d.value.email),1)]),_:1}),l(f,{label:"验证码",prop:"checkCode"},{default:t(()=>[e("div",Be,[l(h,{size:"large",placeholder:"请输入验证码",modelValue:M.value.checkCode,"onUpdate:modelValue":s[16]||(s[16]=r=>M.value.checkCode=r)},{prefix:t(()=>[qe]),_:1},8,["modelValue"]),e("img",{src:j.value,class:"check-code",onClick:s[17]||(s[17]=r=>V(1))},null,8,Te)])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title","buttons"])])}}};const ze={key:0,class:"header"},De={class:"menu-panel"},Ne=["onClick"],Ae={class:"sub-board-list"},je=["onClick"],He=["onClick"],Ke={class:"user-info-panel"},We={class:"op-btn"},Ge=e("span",{class:"iconfont icon-add"},null,-1),Qe=e("span",{class:"iconfont icon-search"},null,-1),Ye={class:"message-info"},Je=e("div",{class:"iconfont icon-message"},null,-1),Xe=e("span",{class:"text"},"回复我的",-1),Ze={key:0,class:"count-tag"},et=e("span",{class:"text"},"赞了我的文章",-1),tt={key:0,class:"count-tag"},st=e("span",{class:"text"},"下载了我的附件",-1),ot={key:0,class:"count-tag"},lt=e("span",{class:"text"},"赞了我的评论",-1),at={key:0,class:"count-tag"},nt=e("span",{class:"text"},"系统消息",-1),it={key:0,class:"count-tag"},rt={class:"user-info"},dt={class:"body-content"},ut={key:1,class:"footer"},ct={class:"logo"},pt={class:"logo-letter"},mt=e("div",{class:"info"},"像素人！！启动！！！",-1),_t=e("div",{class:"title"},"网站相关",-1),ft=e("div",null,[e("a",{href:"https://bbs.3dmgame.com/forum.php"},"3dm论坛")],-1),vt=e("div",null,[e("a",{href:"https://www.nexusmods.com"},"nexusmods")],-1),gt=e("div",null,[e("a",{href:"https://www.bilibili.com/"},"bilibili")],-1),ht=e("div",{class:"title"},"友情链接",-1),wt=e("div",null,[e("a",{href:"https://www.curseforge.com/minecraft"},"curseforge")],-1),kt=e("div",null,[e("a",{href:"https://www.mcbbs.net/portal.php"},"MCBBS")],-1),yt=e("div",null,[e("a",{href:"https://terraria.wiki.gg/zh/wiki"},"Terraria wiki")],-1),Ct=e("div",{class:"title"},"关注站长",-1),bt=e("div",null,[e("a",{href:"https://space.bilibili.com/34856976"},"しゃろ")],-1),$t=e("div",null,[e("a",null,"彧渊")],-1),xt=e("div",null,[e("a",null,"猎麓履刑者")],-1),Pt={__name:"Layout",setup(de){const{proxy:$}=ae(),g=ne(),K=ie(),_=re(),a={getUserInfo:"/getUserInfo",loadBoard:"/board/loadBoard",loadMessageCount:"/userCenter/getMessageCount",logout:"/logout",getSysSetting:"/getSysSetting"},x=w([{letter:"M",color:"#3285FF"},{letter:"c",color:"#FB3624"},{letter:"b",color:"#FFBA02"},{letter:"b",color:"#3285FF"},{letter:"s",color:"#25B24E"}]),F=w(!0),j=()=>document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,V=()=>{let o=j(),n=0;window.addEventListener("scroll",()=>{let R=j();R>o?n=1:n=0,o=R,n==1&&R>100?F.value=!1:F.value=!0})},y=w(),P=o=>{y.value.showPanel(o)};ge(()=>{V(),M(),s()});const M=async()=>{let o=await $.Request({url:a.getUserInfo});o&&_.commit("updateLoginUserInfo",o.data)},z=w([]);(async()=>{let o=await $.Request({url:a.loadBoard});o&&(z.value=o.data,_.commit("saveBoardList",o.data))})();const U=w({});B(()=>_.state.loginUserInfo,(o,n)=>{o!=null&&o!=null?U.value=o:U.value={}},{immediate:!0,deep:!0}),B(()=>_.state.showLogin,(o,n)=>{o&&P(1)},{immediate:!0,deep:!0});const W=o=>{g.push(`/forum/${o.boardId}`)},C=o=>{g.push(`/forum/${o.pBoardId}/${o.boardId}`)},D=w(0);B(()=>_.state.activePboardId,(o,n)=>{o!==0&&(D.value=o)},{immediate:!0,deep:!0});const d=w(0);B(()=>_.state.activeBoardId,(o,n)=>{d.value=o},{immediate:!0,deep:!0});const N=()=>{_.getters.getLoginUserInfo?g.push("/newPost"):P(1)},G=o=>{g.push(`/user/${o}`)},E=o=>{g.push(`/user/message/${o}`)},u=w({}),Z=async()=>{let o=await $.Request({url:a.loadMessageCount});o&&(u.value=o.data,_.commit("updateMessageCountInfo",o.data))};B(()=>_.state.messageCountInfo,(o,n)=>{u.value=o||{}},{immediate:!0,deep:!0}),B(()=>_.state.loginUserInfo,(o,n)=>{o&&Z()},{immediate:!0,deep:!0});const p=()=>{$.Confirm("确定要退出吗?",async()=>{await $.Request({url:a.logout})&&_.commit("updateLoginUserInfo",null)})},s=async()=>{let o=await $.Request({url:a.getSysSetting});o&&_.commit("saveSysSetting",o.data)},h=()=>{g.push("/search")},f=w(!0);return B(()=>K.path,(o,n)=>{o.indexOf("newPost")!=-1||o.indexOf("editPost")!=-1?f.value=!1:f.value=!0},{immediate:!0,deep:!0}),(o,n)=>{const R=v("router-link"),Q=v("el-popover"),L=v("el-button"),r=v("el-badge"),O=v("el-dropdown-item"),te=v("el-dropdown-menu"),se=v("el-dropdown"),ue=v("avatar"),ce=v("el-button-group"),pe=v("router-view"),Y=v("el-col"),me=v("el-row"),_e=v("el-backtop");return i(),c("div",null,[F.value?(i(),c("div",ze,[e("div",{class:"header-content",style:X({width:le($).globalInfo.bodyWidth+"px"})},[l(R,{to:"/",class:"logo"},{default:t(()=>[(i(!0),c(A,null,J(x.value,m=>(i(),c("span",{style:X({color:m.color})},b(m.letter),5))),256))]),_:1}),e("div",De,[l(R,{class:T(["menu-item home",D.value==null?"active":""]),to:"/"},{default:t(()=>[I("首页")]),_:1},8,["class"]),(i(!0),c(A,null,J(z.value,m=>(i(),c(A,null,[m.children.length>0?(i(),q(Q,{key:0,placement:"bottom-start",width:300,trigger:"hover"},{reference:t(()=>[e("span",{class:T(["menu-item",m.boardId==D.value?"active":""]),onClick:H=>W(m)},b(m.boardName),11,Ne)]),default:t(()=>[e("div",Ae,[(i(!0),c(A,null,J(m.children,H=>(i(),c("span",{class:T(["sub-board",H.boardId==d.value?"active":""]),onClick:It=>C(H)},b(H.boardName),11,je))),256))])]),_:2},1024)):(i(),c("span",{key:1,class:T(["menu-item",m.boardId==D.value?"active":""]),onClick:H=>W(m)},b(m.boardName),11,He))],64))),256))]),e("div",Ke,[e("div",We,[l(L,{type:"primary",class:"op-btn",onClick:N},{default:t(()=>[I(" 发帖"),Ge]),_:1}),l(L,{type:"primary",class:"op-btn",onClick:h},{default:t(()=>[I(" 搜索"),Qe]),_:1})]),U.value.userId?(i(),c(A,{key:0},[e("div",Ye,[l(se,null,{dropdown:t(()=>[l(te,null,{default:t(()=>[l(O,{onClick:n[0]||(n[0]=m=>E("reply")),class:"message-item"},{default:t(()=>[Xe,u.value.reply>0?(i(),c("span",Ze,b(u.value.reply>99?"99+":u.value.reply),1)):k("",!0)]),_:1}),l(O,{onClick:n[1]||(n[1]=m=>E("likePost")),class:"message-item"},{default:t(()=>[et,u.value.likePost>0?(i(),c("span",tt,b(u.value.likePost>99?"99+":u.value.likePost),1)):k("",!0)]),_:1}),l(O,{onClick:n[2]||(n[2]=m=>E("downloadAttachment")),class:"message-item"},{default:t(()=>[st,u.value.downloadAttachment>0?(i(),c("span",ot,b(u.value.downloadAttachment>99?"99+":u.value.downloadAttachment),1)):k("",!0)]),_:1}),l(O,{onClick:n[3]||(n[3]=m=>E("likeComment")),class:"message-item"},{default:t(()=>[lt,u.value.likeComment>0?(i(),c("span",at,b(u.value.likeComment>99?"99+":u.value.likeComment),1)):k("",!0)]),_:1}),l(O,{onClick:n[4]||(n[4]=m=>E("sys")),class:"message-item"},{default:t(()=>[nt,u.value.sys>0?(i(),c("span",it,b(u.value.sys>99?"99+":u.value.sys),1)):k("",!0)]),_:1})]),_:1})]),default:t(()=>[l(r,{value:u.value.total,class:"item",hidden:u.value.total==null||u.value.total==0},{default:t(()=>[Je]),_:1},8,["value","hidden"])]),_:1})]),e("div",rt,[l(se,null,{dropdown:t(()=>[l(te,null,{default:t(()=>[l(O,{onClick:n[5]||(n[5]=m=>G(U.value.userId))},{default:t(()=>[I("我的主页")]),_:1}),l(O,{onClick:p},{default:t(()=>[I("退出")]),_:1})]),_:1})]),default:t(()=>[l(ue,{userId:U.value.userId,width:50,addLink:!1},null,8,["userId"])]),_:1})])],64)):(i(),q(ce,{key:1,style:{"margin-left":"10px"}},{default:t(()=>[l(L,{type:"primary",plain:"",onClick:n[6]||(n[6]=m=>P(1))},{default:t(()=>[I("登录")]),_:1}),l(L,{type:"primary",plain:"",onClick:n[7]||(n[7]=m=>P(0))},{default:t(()=>[I("注册")]),_:1})]),_:1}))])],4)])):k("",!0),e("div",dt,[l(pe)]),f.value?(i(),c("div",ut,[e("div",{class:"footer-content",style:X({width:le($).globalInfo.bodyWidth+"px"})},[l(me,null,{default:t(()=>[l(Y,{span:6,class:"item"},{default:t(()=>[e("div",ct,[e("div",pt,[(i(!0),c(A,null,J(x.value,m=>(i(),c("span",{style:X({color:m.color})},b(m.letter),5))),256))]),mt])]),_:1}),l(Y,{span:6,class:"item"},{default:t(()=>[_t,ft,vt,gt]),_:1}),l(Y,{span:6,class:"item"},{default:t(()=>[ht,wt,kt,yt]),_:1}),l(Y,{span:6,class:"item"},{default:t(()=>[Ct,bt,$t,xt]),_:1})]),_:1})],4)])):k("",!0),l(Fe,{ref_key:"loginRegisterRef",ref:y},null,512),l(_e,{right:100,bottom:100})])}}};export{Pt as default};
