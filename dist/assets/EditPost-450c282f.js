import{q as M,s as S,G as F,x as m,Q as L,a as n,o as f,j as O,b as l,w as r,k as u,t as j,c as g,n as y,m as z,N as G,i as Q}from"./.store-5800dd82.js";const $={class:"edit-post"},J={class:"post-editor"},K={class:"post-editor-title"},W=u("span",null,"正文",-1),X={class:"change-editor-type"},Y={class:"post-setting"},Z=u("span",null,"设置",-1),ee={class:"setting-inner"},te=u("span",{class:"tips"},"附件下载积分，0表示无需积分下载",-1),re={__name:"EditPost",setup(ae){const{proxy:s}=M(),V=S(),k=F(),x=window.innerHeight-80-60,C=window.innerHeight-80-140,p={loadBoard:"/forum/loadBoard4Post",postArticle:"/forum/postArticle",articleDetail4Update:"/forum/articleDetail4Update",updateArticle:"/forum/updateArticle"},_=m(null),U=()=>{G(async()=>{if(h.value.resetFields(),_.value){let a=await s.Request({url:p.articleDetail4Update,params:{articleId:_.value},showError:!1,errorCallback:v=>{Q.alert(v.info,"错误",{"show-close":!1,callback:c=>{V.go(-1)}})}});if(!a)return;let e=a.data.forumArticle;d.value=e.editorType,e.boardIds=[],e.boardIds.push(e.pBoardId),e.boardId!=null&&e.boardId!=0&&e.boardIds.push(e.boardId),e.cover&&(e.cover={imageUrl:e.cover}),a.data.attachment&&(e.attachment={name:a.data.attachment.fileName},e.integral=a.data.attachment.integral),t.value=e}else t.value={},d.value=s.VueCookies.get("editorType")||0})},B=a=>{t.value.content=a};L(()=>k,(a,e)=>{(a.path.indexOf("/editPost")!=-1||a.path.indexOf("/newPost")!=-1)&&(_.value=a.params.articleId,U())},{immediate:!0,deep:!0});const t=m({}),h=m(),E={title:[{required:!0,message:"请输入标题"}],boardIds:[{required:!0,message:"请选择板块"}],content:[{required:!0,message:"请输入正文"}],integral:[{required:!0,message:"请输入下载所需积分"},{validator:s.Verify.number,message:"积分只能是数字"}]},T=()=>{h.value.validate(async a=>{if(!a)return;let e={};if(Object.assign(e,t.value),e.boardIds.length==1?e.pBoardId=e.boardIds[0]:e.boardIds.length==2&&(e.pBoardId=e.boardIds[0],e.boardId=e.boardIds[1]),delete e.boardIds,e.editorType=d.value,e.content.replace(/<(?!img).*?>/g,"")==""){s.message.warning("正文不能为空");return}e.attachment!=null?e.attachmentType==1:e.attachmentType=0,e.cover instanceof File||delete e.cover,e.attachment instanceof File||delete e.attachment;let c=await s.Request({url:e.articleId?p.updateArticle:p.postArticle,params:e});c&&(s.Message.success("保存成功"),V.push(`/post/${c.data}`))})},A={multiple:!1,checkStrictly:!0,value:"boardId",label:"boardName"},I=m([]);(async()=>{let a=await s.Request({url:p.loadBoard});a&&(I.value=a.data)})();const d=m(null),H=()=>{s.Confirm("切换编辑器会清空正在编辑的内容，确定要切换吗？",()=>{d.value=d.value==0?1:0,t.value.content="",t.value.markdownContent="",s.VueCookies.set("editorType",d.value,-1)})};return(a,e)=>{const v=n("EditorHtml"),c=n("EditorMarkdown"),i=n("el-form-item"),w=n("el-card"),b=n("el-input"),q=n("el-cascader"),D=n("CoverUpload"),N=n("AttachmentSelector"),R=n("el-button"),P=n("el-form");return f(),O("div",$,[l(P,{model:t.value,rules:E,ref_key:"formDataRef",ref:h,class:"post-panel","label-width":"60px"},{default:r(()=>[u("div",J,[l(w,{"body-style":{padding:"5px"}},{header:r(()=>[u("div",K,[W,u("div",X,[u("span",{class:"iconfont icon-change",onClick:H}," 切换为"+j(d.value==0?"markdown编辑器":"富文本编辑器"),1)])])]),default:r(()=>[l(i,{prop:"content","label-width":"0"},{default:r(()=>[d.value==0?(f(),g(v,{key:0,height:C,modelValue:t.value.content,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.content=o)},null,8,["modelValue"])):y("",!0),d.value==1?(f(),g(c,{key:1,height:x,modelValue:t.value.markdownContent,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.markdownContent=o),onHtmlContent:B},null,8,["modelValue"])):y("",!0)]),_:1})]),_:1})]),u("div",Y,[l(w,{"body-style":{padding:"5px"}},{header:r(()=>[Z]),default:r(()=>[u("div",ee,[l(i,{label:"标题",prop:"title"},{default:r(()=>[l(b,{clearable:"",maxlength:150,placeholder:"提示信息",modelValue:t.value.title,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.title=o)},null,8,["modelValue"])]),_:1}),l(i,{label:"板块",prop:"boardIds"},{default:r(()=>[l(q,{placeholder:"请选择板块",options:I.value,props:A,clearable:"",modelValue:t.value.boardIds,"onUpdate:modelValue":e[3]||(e[3]=o=>t.value.boardIds=o),style:{width:"100%"}},null,8,["options","modelValue"])]),_:1}),l(i,{label:"封面",prop:"cover"},{default:r(()=>[l(D,{modelValue:t.value.cover,"onUpdate:modelValue":e[4]||(e[4]=o=>t.value.cover=o)},null,8,["modelValue"])]),_:1}),l(i,{label:"摘要",prop:"summary"},{default:r(()=>[l(b,{clearable:"",placeholder:"提示信息",type:"textarea",rows:5,maxlength:200,resize:"none","show-word-limit":"",modelValue:t.value.summary,"onUpdate:modelValue":e[5]||(e[5]=o=>t.value.summary=o)},null,8,["modelValue"])]),_:1}),l(i,{label:"附件",prop:"cover"},{default:r(()=>[l(N,{modelValue:t.value.attachment,"onUpdate:modelValue":e[6]||(e[6]=o=>t.value.attachment=o)},null,8,["modelValue"])]),_:1}),t.value.attachment?(f(),g(i,{key:0,label:"积分",prop:"integral"},{default:r(()=>[l(b,{clearable:"",placeholder:"请输入积分",modelValue:t.value.integral,"onUpdate:modelValue":e[7]||(e[7]=o=>t.value.integral=o)},null,8,["modelValue"]),te]),_:1})):y("",!0),l(i,{label:"",prop:""},{default:r(()=>[l(R,{type:"primary",style:{width:"100%"},onClick:T},{default:r(()=>[z("保存")]),_:1})]),_:1})])]),_:1})])]),_:1},8,["model"])])}}};export{re as default};
