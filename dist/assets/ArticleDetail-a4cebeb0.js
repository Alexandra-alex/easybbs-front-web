import{a as f,o as i,c as P,q as G,x as v,j as d,b as m,k as e,w as $,n as _,s as Q,t as c,u as B,L as z,m as S,F as j,p as Z,G as ee,y as te,Q as J,P as X,R as ie,v as W,N as O,H as ce}from"./.pnpm-d8f10c30.js";const oe={__name:"CommentImage",props:{src:{type:String},imgList:{type:Array}},setup(o){return(h,y)=>{const p=f("el-image");return i(),P(p,{class:"comment-img",src:o.src,"zoom-rate":1.2,"preview-src-list":o.imgList?o.imgList:[o.src],"initial-index":0,fit:"scale-down",loading:"lazy","hide-on-click-modal":""},null,8,["src","zoom-rate","preview-src-list"])}}};const de={class:"post-comment-panel"},re={class:"comment-form"},ue={key:0,class:"insert-img"},me={key:0,class:"pre-img"},ve=e("span",{class:"iconfont icon-image"},null,-1),ne={__name:"CommentPost",props:{articleId:{type:String},pCommentId:{type:Number},replyUserId:{type:String},avatarWidth:{type:Number},userId:{type:String},showInsertImg:{type:Boolean},placeholderInfo:{type:String,default:"轻轻敲醒沉睡的心灵，让我看看你的点评"}},emits:["postCommentFinish"],setup(o,{emit:h}){const y=o,{proxy:p}=G(),U={postComment:"/comment/postComment"},T=(g,a,n)=>{a==null&&t.value.image==null?n(new Error(g.message)):n()},t=v({}),r=v(),k={content:[{required:!0,message:"请输入评论内容",validator:T},{min:5,message:"评论至少5个字"}]},C=()=>{r.value.validate(async g=>{if(!g)return;let a=Object.assign({},t.value);a.articleId=y.articleId,a.pCommentId=y.pCommentId,a.replyUserId=y.replyUserId;let n=await p.Request({url:U.postComment,params:a});n&&(p.Message.success("评论发表成功"),r.value.resetFields(),A(),h("postCommentFinish",n.data))})},I=v(null),b=g=>{g=g.file;let a=new FileReader;a.readAsDataURL(g),a.onload=({target:n})=>{let D=n.result;I.value=D,t.value.image=g}},A=()=>{I.value=null,t.value.image=null};return(g,a)=>{const n=f("Avatar"),D=f("el-input"),x=f("el-upload"),R=f("el-form-item"),E=f("el-form");return i(),d("div",de,[m(n,{width:o.avatarWidth,userId:o.userId},null,8,["width","userId"]),e("div",re,[m(E,{model:t.value,rules:k,ref_key:"formDataRef",ref:r},{default:$(()=>[m(R,{prop:"content"},{default:$(()=>[m(D,{clearable:"",placeholder:o.placeholderInfo,type:"textarea",maxlength:800,resize:"none","show-word-limit":"",modelValue:t.value.content,"onUpdate:modelValue":a[0]||(a[0]=u=>t.value.content=u)},null,8,["placeholder","modelValue"]),o.showInsertImg?(i(),d("div",ue,[I.value?(i(),d("div",me,[m(oe,{src:I.value},null,8,["src"]),e("span",{class:"iconfont icon-remove",onClick:A})])):(i(),P(x,{key:1,name:"file","show-file-list":!1,accept:".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.gif,.GIF,.bmp,.BMP",multiple:!1,"http-request":b},{default:$(()=>[ve]),_:1}))])):_("",!0)]),_:1})]),_:1},8,["model"])]),e("div",{class:"send-btn",onClick:C},"发表")])}}};const pe={class:"comment-item"},_e={class:"comment-info"},he={class:"nick-name"},ge={key:0,class:"tag-author"},fe={class:"comment-content"},Ie={key:0,class:"tag tag-topping"},ye={key:1,class:"tag no-audit"},ke=["innerHTML"],Ce={class:"op-panel"},we={class:"time"},$e={class:"address"},De=e("div",{class:"iconfont icon-more"},null,-1),Le={key:0,class:"comment-sub-list"},Te={class:"comment-sub-item"},Ue={class:"comment-sub-info"},be={class:"nick-name"},Ae=["onClick"],Re={key:0,class:"tag-author"},Se=e("span",{class:"reply-name"},"回复",-1),xe=["onClick"],Ne=e("span",null,"：",-1),qe=["innerHTML"],Pe={class:"op-panel"},He={class:"time"},Ve={class:"address"},ze=["onClick"],Ee=["onClick"],Be={key:1,class:"reply-info"},Fe={__name:"CommentListItem",props:{articleId:{type:String},commentData:{type:Object},articleUserId:{type:String},currentUserId:{type:String}},emits:["hiddenAllReply","reloadData"],setup(o,{emit:h}){const y=o,{proxy:p}=G(),U=Q(),T={doLike:"/comment/doLike",changeTopType:"/comment/changeTopType"},t=v(0),r=v(null),k=v(null),C=(a,n)=>{const D=y.commentData.showReply==null?!1:y.commentData.showReply;h("hiddenAllReply"),n==0?y.commentData.showReply=!D:y.commentData.showReply=!0,t.value=y.commentData.commentId,r.value=a.userId,k.value="回复 @"+a.nickName},I=a=>{y.commentData.children=a,k.value=void 0},b=a=>{U.push(`/user/${a}`)},A=async a=>{let n=await p.Request({url:T.doLike,showLoading:!1,params:{commentId:a.commentId}});n&&(a.goodCount=n.data.goodCount,a.likeType=n.data.likeType)},g=async a=>{await p.Request({url:T.changeTopType,params:{commentId:a.commentId,topType:a.topType==1?0:1}})&&h("reloadData")};return(a,n)=>{const D=f("Avatar"),x=f("el-dropdown-item"),R=f("el-dropdown-menu"),E=f("el-dropdown");return i(),d("div",pe,[m(D,{userId:o.commentData.userId,width:50},null,8,["userId"]),e("div",_e,[e("div",he,[e("span",{class:"name",onClick:n[0]||(n[0]=u=>b(o.commentData.userId))},c(o.commentData.nickName),1),o.commentData.userId==o.articleUserId?(i(),d("span",ge,"作者")):_("",!0)]),e("div",fe,[e("div",null,[o.commentData.topType==1?(i(),d("span",Ie,"置顶")):_("",!0),o.commentData.status==0?(i(),d("span",ye,"待审核")):_("",!0),e("span",{innerHTML:o.commentData.content},null,8,ke)]),o.commentData.imgPath?(i(),P(oe,{key:0,style:{"margin-top":"10px"},src:B(p).globalInfo.imageUrl+o.commentData.imgPath.replace(".","_."),imgList:[B(p).globalInfo.imageUrl+o.commentData.imgPath]},null,8,["src","imgList"])):_("",!0)]),e("div",Ce,[e("div",we,[e("span",null,c(o.commentData.postTime),1),e("span",$e," · "+c(o.commentData.userIpAddress),1)]),e("div",{class:z(["iconfont icon-good",o.commentData.likeType==1?"active":""]),onClick:n[1]||(n[1]=u=>A(o.commentData))},c(o.commentData.goodCount>0?o.commentData.goodCount:"点赞"),3),e("div",{class:"iconfont icon-comment",onClick:n[2]||(n[2]=u=>C(o.commentData,0))}," 回复 "),o.articleUserId==o.currentUserId?(i(),P(E,{key:0},{dropdown:$(()=>[m(R,null,{default:$(()=>[m(x,{onClick:n[3]||(n[3]=u=>g(o.commentData))},{default:$(()=>[S(c(o.commentData.topType==0?"设为置顶":"取消置顶"),1)]),_:1})]),_:1})]),default:$(()=>[De]),_:1})):_("",!0)]),o.commentData.children?(i(),d("div",Le,[(i(!0),d(j,null,Z(o.commentData.children,u=>(i(),d("div",Te,[m(D,{userId:u.userId,width:30},null,8,["userId"]),e("div",Ue,[e("div",be,[e("span",{class:"name",onClick:L=>b(u.userId)},c(u.nickName),9,Ae),u.userId==o.articleUserId?(i(),d("span",Re,"作者")):_("",!0),Se,e("span",{onClick:L=>b(u.replyUserId),class:"a-link"},"@"+c(u.replyNickName),9,xe),Ne,e("span",{class:"sub-content",innerHTML:u.content},null,8,qe)]),e("div",Pe,[e("div",He,[e("span",null,c(u.postTime),1),e("span",Ve," · "+c(u.userIpAddress),1)]),e("div",{class:z(["iconfont icon-good",u.likeType==1?"active":""]),onClick:L=>A(u)},c(u.goodCount>0?u.goodCount:"点赞"),11,ze),e("div",{class:"iconfont icon-comment",onClick:L=>C(u,1)}," 回复 ",8,Ee)])])]))),256))])):_("",!0),o.commentData.showReply?(i(),d("div",Be,[m(ne,{placeholderInfo:k.value,articleId:o.articleId,pCommentId:t.value,replyUserId:r.value,avatarWidth:30,userId:o.currentUserId,showInsertImg:!1,onPostCommentFinish:I},null,8,["placeholderInfo","articleId","pCommentId","replyUserId","userId"])])):_("",!0)])])}}};const Me={class:"comment-body"},We={class:"comment-title"},je={class:"title"},Ge={class:"count"},Oe={class:"tab"},Je={class:"comment-form-panel"},Qe={class:"comment-list"},Ye={__name:"CommentList",props:{articleId:{type:String},articleUserId:{type:String}},emits:["updateCommentCount"],setup(o,{emit:h}){const y=o,{proxy:p}=G();Q(),ee();const U=te(),T={loadComment:"/comment/loadComment"},t=v(0),r=a=>{t.value=a,I()},k=v(null),C=v({}),I=async()=>{let a={pageNo:C.value.pageNo,articleId:y.articleId,orderType:t.value};k.value=!0;let n=await p.Request({url:T.loadComment,showLoading:!1,params:a});k.value=!1,n&&(C.value=n.data)};I();const b=()=>{C.value.list.forEach(a=>{a.showReply=!1})},A=a=>{C.value.list.unshift(a);const n=C.value.totalCount+1;C.value.totalCount=n,h("updateCommentCount",n)},g=v({});return J(()=>U.state.loginUserInfo,(a,n)=>{g.value=a||{}},{immediate:!0,deep:!0}),(a,n)=>{const D=f("el-divider"),x=f("DataList");return i(),d("div",Me,[e("div",We,[e("div",je,[S(" 评论"),e("span",Ge,c(C.value.totalCount),1)]),e("div",Oe,[e("span",{onClick:n[0]||(n[0]=R=>r(0)),class:z(["tab-item",t.value==0?"active":""])},"热榜",2),m(D,{direction:"vertical"}),e("span",{onClick:n[1]||(n[1]=R=>r(1)),class:z(["tab-item",t.value==1?"active":""])},"最新",2)])]),e("div",Je,[m(ne,{articleId:o.articleId,pCommentId:0,avatarWidth:50,userId:g.value.userId,showInsertImg:g.value.userId!=null,onPostCommentFinish:A},null,8,["articleId","userId","showInsertImg"])]),e("div",Qe,[m(x,{dataSource:C.value,loading:k.value,onLoadData:I,noDataMsg:"暂无评论，赶紧占沙发吧！"},{default:$(({data:R})=>[m(Fe,{articleId:o.articleId,commentData:R,articleUserId:o.articleUserId,currentUserId:g.value.userId,onHiddenAllReply:b,onReloadData:I},null,8,["articleId","commentData","articleUserId","currentUserId"])]),_:1},8,["dataSource","loading"])])])}}};const Ke={class:"board-info"},Xe=e("span",{class:"iconfont icon-right"},null,-1),Ze=e("span",{class:"iconfont icon-right"},null,-1),et={class:"article-detail"},tt={class:"title"},ot={key:0,class:"tag tag-no-audit"},nt={class:"user-info"},at={class:"user-info-detail"},st={class:"time-info"},lt={class:"address"},it={class:"iconfont icon-eye-solid"},ct=e("span",{class:"iconfont icon-edit"},"编辑",-1),dt=["innerHTML"],rt={key:0,class:"attachment-panel",id:"view-attachment"},ut=e("div",{class:"title"},"附件",-1),mt={class:"attachment-info"},vt=e("div",{class:"iconfont icon-zip item"},null,-1),pt={class:"file-name item"},_t={class:"size item"},ht={class:"item"},gt={class:"integral"},ft={class:"download-count item"},It={class:"download-btn item"},yt={key:1,class:"comment-panel",id:"view-comment"},kt={class:"toc-panel"},Ct={class:"top-containner"},wt=e("div",{class:"toc-title"},"目录",-1),$t={class:"toc-list"},Dt={key:0,class:"no-toc"},Lt=["onClick"],Tt=e("span",{class:"iconfont icon-comment"},null,-1),Ut=[Tt],bt=e("span",{class:"iconfont icon-attachment"},null,-1),At=[bt],xt={__name:"ArticleDetail",setup(o){const{proxy:h}=G();Q();const y=ee(),p=te(),U={getArticleDetail:"/forum/getArticleDetail",doLike:"/forum/doLike",getUserDownloadInfo:"/forum/getUserDownloadInfo",attachmentDownload:"/api/forum/attachmentDownload"},T=v({}),t=v({}),r=v({}),k=v(!1),C=async l=>{let s=await h.Request({url:U.getArticleDetail,params:{articleId:l}});s&&(t.value=s.data.forumArticle,r.value=s.data.attachment,k.value=s.data.haveLike,p.commit("setActivePboardId",s.data.forumArticle.pBoardId),p.commit("setActiveBoardId",s.data.forumArticle.boardId),R(),E(),ae())};J(()=>p.state.loginUserInfo,(l,s)=>{T.value=l||{}},{immediate:!0,deep:!0}),X(()=>{C(y.params.articleId)});const I=v((window.innerWidth-h.globalInfo.bodyWidth)/2-110),b=()=>{I.value=(window.innerWidth-h.globalInfo.bodyWidth)/2-110,console.log(I.value)},A=l=>{document.querySelector("#"+l).scrollIntoView()},g=async()=>{if(!p.getters.getLoginUserInfo){p.commit("showLogin",!0);return}if(!await h.Request({url:U.doLike,params:{articleId:t.value.articleId}}))return;k.value=!k.value;let s=1;k.value||(s=-1),t.value.goodCount=t.value.goodCount+s},a=async l=>{if(!T.value){p.commit("showLogin",!0);return}if(r.value.integral==0||T.value.userId==t.value.userId){n(l);return}let s=await h.Request({url:U.getUserDownloadInfo,params:{fileId:l}});if(s){if(s.data.haveDownload){n(l);return}if(s.data.userIntegral<r.value.integral){h.Message.warning("你的积分不够，无法下载");return}h.Confirm(`你还有${s.data.userIntegral}积分，当前下载会扣除${r.value.integral}积分，确定要下载吗？`,()=>{n(l)})}},n=l=>{document.location.href=U.attachmentDownload+"?fileId="+l,r.value.downloadCount=r.value.downloadCount+1},D=v(null),x=v([]),R=()=>{O(()=>{const l=document.querySelector("#detail").querySelectorAll("img"),s=[];l.forEach((w,H)=>{const N=w.getAttribute("src");s.push(N),w.addEventListener("click",()=>{D.value.show(H)})}),x.value=s})},E=()=>{O(()=>{document.querySelectorAll("pre code").forEach(s=>{ce.highlightBlock(s)})})},u=l=>{t.value.commentCount=l},L=v([]),ae=()=>{O(()=>{const l=["H1","H2","H3","H4","H5","H6"],w=document.querySelector("#detail").childNodes;let H=0;w.forEach(N=>{let V=N.tagName;if(V==null||!l.includes(V.toUpperCase()))return!0;H++;let M="toc"+H;N.setAttribute("id",M),L.value.push({id:M,title:N.innerText,level:Number.parseInt(V.substring(1)),offsetTop:N.offsetTop})})})},Y=v(null),se=l=>{document.querySelector("#"+l).scrollIntoView({behavior:"smooth",block:"start"})},K=()=>{let l=le();L.value.some((s,w)=>{if(w<L.value.length-1&&l>=L.value[w].offsetTop&&l<L.value[w+1].offsetTop||w==L.value.length-1&&l<L.value[w].offsetTop)return Y.value=s.id,!0})},le=()=>document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;X(()=>{window.addEventListener("scroll",K,!1),window.addEventListener("resize",b,!1)}),ie(()=>{window.removeEventListener("scroll",K,!1),window.removeEventListener("resize",b,!1)});const F=v(!1);return J(()=>p.state.sysSetting,(l,s)=>{l&&(F.value=l.commentOpen)},{immediate:!0,deep:!0}),(l,s)=>{const w=f("router-link"),H=f("Avatar"),N=f("el-button"),V=f("el-badge"),M=f("ImageViewer");return i(),d(j,null,[Object.keys(t.value).length>0?(i(),d("div",{key:0,class:"container-body article-detail-body",style:W({width:B(h).globalInfo.bodyWidth+"px"})},[e("div",Ke,[m(w,{to:`/forum/${t.value.pBoardId}`,class:"a-link"},{default:$(()=>[S(c(t.value.pBoardName),1)]),_:1},8,["to"]),Xe,t.value.boardId?(i(),d(j,{key:0},[m(w,{class:"a-link",to:`/forum/${t.value.pBoardId}/${t.value.boardId}`},{default:$(()=>[S(c(t.value.boardName),1)]),_:1},8,["to"]),Ze],64)):_("",!0),e("span",null,c(t.value.title),1)]),e("div",{class:"detail-container",style:W({width:B(h).globalInfo.bodyWidth-300+"px"})},[e("div",et,[e("div",tt,[t.value.status==0?(i(),d("span",ot,"待审核")):_("",!0),S(" "+c(t.value.title),1)]),e("div",nt,[m(H,{userId:t.value.userId,width:50},null,8,["userId"]),e("div",at,[m(w,{class:"nick-name a-link",to:`/user/${t.value.userId}`},{default:$(()=>[S(c(t.value.nickName),1)]),_:1},8,["to"]),e("div",st,[e("span",null,c(t.value.postTime),1),e("span",lt," · "+c(t.value.userIpAddress),1),e("span",it,c(t.value.readCount==0?"阅读":t.value.readCount),1),t.value.userId==T.value.userId?(i(),P(w,{key:0,to:`/editPost/${t.value.articleId}`,class:"a-link btn-edit"},{default:$(()=>[ct]),_:1},8,["to"])):_("",!0)])])]),e("div",{class:"detail",id:"detail",innerHTML:t.value.content},null,8,dt)]),r.value?(i(),d("div",rt,[ut,e("div",mt,[vt,e("div",pt,c(r.value.fileName),1),e("div",_t,c(B(h).Utils.sizeToStr(r.value.fileSize)),1),e("div",ht,[S(" 需要"),e("span",gt,c(r.value.integral),1),S("积分 ")]),e("div",ft," 已下载"+c(r.value.downloadCount)+"次 ",1),e("div",It,[m(N,{type:"primary",size:"small",onClick:s[0]||(s[0]=q=>a(r.value.fileId))},{default:$(()=>[S("下载")]),_:1})])])])):_("",!0),F.value&&t.value.status==1?(i(),d("div",yt,[t.value.articleId?(i(),P(Ye,{key:0,articleId:t.value.articleId,articleUserId:t.value.userId,onUpdateCommentCount:u},null,8,["articleId","articleUserId"])):_("",!0)])):_("",!0)],4),e("div",kt,[e("div",Ct,[wt,e("div",$t,[L.value.length==0?(i(),d("div",Dt,"未解析到目录")):(i(!0),d(j,{key:1},Z(L.value,q=>(i(),d("div",null,[e("span",{onClick:Rt=>se(q.id),class:z(["toc-item",q.id==Y.value?"active":""]),style:W({"padding-left":q.level*15+"px"})},c(q.title),15,Lt)]))),256))])])])],4)):_("",!0),I.value>0?(i(),d("div",{key:1,class:"quick-panel",style:W({left:I.value+"px"})},[m(V,{value:t.value.goodCount,type:"info",hidden:!t.value.goodCount>0},{default:$(()=>[e("div",{class:"quick-item",onClick:g},[e("span",{class:z(["iconfont icon-good",k.value?"have-like":""])},null,2)])]),_:1},8,["value","hidden"]),F.value?(i(),P(V,{key:0,value:t.value.commentCount,type:"info",hidden:!t.value.commentCount>0},{default:$(()=>[F.value?(i(),d("div",{key:0,class:"quick-item",onClick:s[1]||(s[1]=q=>A("view-comment"))},Ut)):_("",!0)]),_:1},8,["value","hidden"])):_("",!0),e("div",{class:"quick-item",onClick:s[2]||(s[2]=q=>A("view-attachment"))},At),m(M,{ref_key:"imageViewerRef",ref:D,imageList:x.value},null,8,["imageList"])],4)):_("",!0)],64)}}};export{xt as default};