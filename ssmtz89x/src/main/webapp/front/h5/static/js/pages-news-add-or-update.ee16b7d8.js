(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-add-or-update"],{"0686":function(r,e,t){"use strict";var i=t("5d2e"),a=t.n(i);a.a},"5d2e":function(r,e,t){var i=t("a344");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=t("4f06").default;a("09fee5fc",i,!0,{sourceMap:!1,shadowMode:!1})},"8ad2":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("96cf");var a=i(t("3b8d")),n=i(t("e2b1")),o={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var t,i,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=13;break}return this.ruleForm.id=e.id,r.next=11,this.$api.info("news",this.ruleForm.id);case 11:i=r.sent,this.ruleForm=i.data;case 13:if(this.cross=e.cross,!e.cross){r.next=37;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 17:if((r.t1=r.t0()).done){r.next=37;break}if(n=r.t1.value,"title"!=n){r.next=23;break}return this.ruleForm.title=a[n],this.ro.title=!0,r.abrupt("continue",17);case 23:if("introduction"!=n){r.next=27;break}return this.ruleForm.introduction=a[n],this.ro.introduction=!0,r.abrupt("continue",17);case 27:if("picture"!=n){r.next=31;break}return this.ruleForm.picture=a[n],this.ro.picture=!0,r.abrupt("continue",17);case 31:if("content"!=n){r.next=35;break}return this.ruleForm.content=a[n],this.ro.content=!0,r.abrupt("continue",17);case 35:r.next=17;break;case 37:this.styleChange();case 38:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.picture="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,t,i,a,n,o,d,s,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.title){r.next=3;break}return this.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(this.ruleForm.picture){r.next=6;break}return this.$utils.msg("图片不能为空"),r.abrupt("return");case 6:if(this.ruleForm.content){r.next=9;break}return this.$utils.msg("内容不能为空"),r.abrupt("return");case 9:if(!this.cross){r.next=25;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=25;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=21;break}for(d in o)d==a&&(o[d]=n);return s=uni.getStorageSync("crossTable"),r.next=19,this.$api.update("".concat(s),o);case 19:r.next=25;break;case 21:e=Number(uni.getStorageSync("userid")),t=o["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!t||!e){r.next=47;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=t,c={page:1,limit:10,crossuserid:e,crossrefid:t},r.next=31,this.$api.list("news",c);case 31:if(u=r.sent,!(u.data.total>=i)){r.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!this.ruleForm.id){r.next=42;break}return r.next=40,this.$api.update("news",this.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,this.$api.add("news",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!this.ruleForm.id){r.next=52;break}return r.next=50,this.$api.update("news",this.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,this.$api.add("news",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},"956f":function(r,e,t){"use strict";var i,a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("标题")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(33, 2, 255, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed",height:"60rpx"},attrs:{disabled:r.ro.title,placeholder:"标题"},model:{value:r.ruleForm.title,callback:function(e){r.$set(r.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 12rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.pictureTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.picture?t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.picture,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("简介")]),t("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(33, 2, 255, 1)",borderRadius:"20rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed",height:"280rpx"},attrs:{placeholder:"简介"},model:{value:r.ruleForm.introduction,callback:function(e){r.$set(r.ruleForm,"introduction",e)},expression:"ruleForm.introduction"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("内容")]),t("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(33, 2, 255, 1)",borderRadius:"20rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed",height:"280rpx"},attrs:{placeholder:"内容"},model:{value:r.ruleForm.content,callback:function(e){r.$set(r.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"20rpx auto",backgroundColor:"rgba(33, 2, 255, 1)",borderColor:"#409EFF",borderRadius:"88rpx",color:"#fff",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}))},"9e70":function(r,e,t){"use strict";t.r(e);var i=t("956f"),a=t("e23c");for(var n in a)"default"!==n&&function(r){t.d(e,r,(function(){return a[r]}))}(n);t("0686");var o,d=t("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"062edc6a",null,!1,i["a"],o);e["default"]=s.exports},a344:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-062edc6a]{padding:%?20?%}.content[data-v-062edc6a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220225/201bb4ffa4414a888d192e917ae9f84b.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-062edc6a]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-062edc6a]{width:%?180?%}.avator[data-v-062edc6a]{width:%?150?%;height:%?60?%}.right-input[data-v-062edc6a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-062edc6a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-062edc6a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-062edc6a]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-062edc6a]{border:0}.cu-form-group uni-input[data-v-062edc6a]{padding:0 %?30?%}.uni-input[data-v-062edc6a]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-062edc6a]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-062edc6a]::after{line-height:%?60?%}.select .uni-input[data-v-062edc6a]{line-height:%?60?%}.input .right-input[data-v-062edc6a]{line-height:%?60?%}',""]),r.exports=e},e23c:function(r,e,t){"use strict";t.r(e);var i=t("8ad2"),a=t.n(i);for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);e["default"]=a.a}}]);