(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-modal-modal"],{"0704":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e},"0f9f":function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var i=o(n("31cb")),a={mixins:[i.default],name:"tn-input",props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:"color: #AAAAAA"},disabled:{type:Boolean,default:!1},maxLength:{type:Number,default:255},height:{type:Number,default:0},autoHeight:{type:Boolean,default:!0},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},selectOpen:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},cursorSpacing:{type:Number,default:0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},trim:{type:Boolean,default:!0},showConfirmBar:{type:Boolean,default:!0},showRightIcon:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},computed:{inputStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"===this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},elSelectionStart:function(){return String(this.selectionStart)},elSelectionEnd:function(){return String(this.selectionEnd)}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!==e&&"select"===this.type&&this.handleInput({detail:{value:t}})}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$tn.string.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("tn-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this,n=t.detail.value;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",n),setTimeout((function(){e.dispatch("tn-form-item","on-form-blur",n)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=a},1516:function(t,e,n){"use strict";var o=n("5c20"),i=n.n(o);i.a},1578:function(t,e,n){"use strict";var o=n("b7da"),i=n.n(o);i.a},"1a31":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={tnNavBar:n("5138").default,tnButton:n("9bb4").default,tnModal:n("8ef2").default,tnForm:n("ca82").default,tnFormItem:n("58c6").default,tnInput:n("612b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"modal"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("模态框")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("弹出模态框")])],1)],1),n("tn-modal",{attrs:{backgroundColor:t.backgroundColor,width:t.width,padding:t.padding,radius:t.radius,fontColor:t.fontColor,fontSize:t.fontSize,title:t.title,content:t.content,button:t.button,showCloseBtn:t.closeBtn||!t.maskCloseable,maskCloseable:t.maskCloseable,zoom:t.zoom,custom:t.custom},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickBtn.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.custom?n("v-uni-view",[n("v-uni-view",{staticClass:"custom-modal-content"},[n("tn-form",{attrs:{labelWidth:140}},[n("tn-form-item",{attrs:{label:"手机号码",borderBottom:!1}},[n("tn-input",{attrs:{placeholder:"请输入手机号码"}})],1),n("tn-form-item",{attrs:{label:"验证码",borderBottom:!1}},[n("tn-input",{attrs:{placeholder:"请输入验证码"}}),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-center",attrs:{slot:"right"},slot:"right"},[n("tn-button",{attrs:{fontSize:20,padding:"10rpx",height:"46rpx",backgroundColor:"#01BEFF",fontColor:"tn-color-white"}},[t._v("获取验证码")])],1)],1)],1)],1)],1):t._e()],1)],1)},a=[]},"219e":function(t,e,n){"use strict";var o=n("9287"),i=n.n(o);i.a},"2cab2":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-form-class tn-form"},[this._t("default")],2)},i=[]},"2e54":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-input-class tn-input",class:{"tn-input--border":t.border,"tn-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"===t.type?n("v-uni-textarea",{staticClass:"tn-input__input tn-input__textarea",style:[t.inputStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"tn-input__input",style:[t.inputStyle],attrs:{type:"password"===t.type?"text":t.type,value:t.defaultValue,password:"password"===t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,focus:t.focus,confirmType:t.confirmType,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"tn-input__right-icon tn-flex tn-flex-col-center"},[t.clearable&&""!==t.value&&t.focused?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon tn-icon-close"})],1):"text"===t.type&&!t.focused&&t.showRightIcon&&""!==t.rightIcon?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear"},[n("v-uni-view",{staticClass:"icon",class:["tn-icon-"+t.rightIcon]})],1):t._e(),t.passwordIcon&&"password"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[t.showPassword?n("v-uni-view",{staticClass:"icon tn-icon-eye"}):n("v-uni-view",{staticClass:"tn-icon-eye-hide"})],1):t._e(),"select"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__select",class:{"tn-input__right-icon__select--reverse":t.selectOpen}},[n("v-uni-view",{staticClass:"icon tn-icon-up-triangle"})],1):t._e()],1)],1)},i=[]},"2f1b":function(t,e,n){"use strict";n.r(e);var o=n("fa61"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"407b":function(t,e,n){"use strict";n.r(e);var o=n("0f9f"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},4795:function(t,e,n){"use strict";n.r(e);var o=n("ccb4"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"5c20":function(t,e,n){var o=n("623c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("f0cba3b4",o,!0,{sourceMap:!1,shadowMode:!1})},"612b":function(t,e,n){"use strict";n.r(e);var o=n("2e54"),i=n("407b");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1578");var r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"4a3a2be0",null,!1,o["a"],void 0);e["default"]=l.exports},"623c":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-modal-class .custom-modal-content[data-v-022d920c]{width:100%;height:100%;padding:%?40?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.tn-modal-class .custom-modal-content .icon[data-v-022d920c]{font-size:%?100?%;margin-bottom:%?20?%;color:#01beff}.tn-modal-class .custom-modal-content .text[data-v-022d920c]{font-size:%?40?%}',""]),t.exports=e},9287:function(t,e,n){var o=n("0704");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("0047900a",o,!0,{sourceMap:!1,shadowMode:!1})},"9bb4":function(t,e,n){"use strict";n.r(e);var o=n("aeb7"),i=n("2f1b");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("219e");var r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"778c77a3",null,!1,o["a"],void 0);e["default"]=l.exports},"9d94":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-input[data-v-4a3a2be0]{display:flex;flex-direction:row;position:relative;flex:1}.tn-input__input[data-v-4a3a2be0]{font-size:%?28?%;color:#080808;flex:1}.tn-input__textarea[data-v-4a3a2be0]{width:auto;font-size:%?28?%;color:#080808;padding:%?10?% 0;line-height:normal;flex:1}.tn-input--border[data-v-4a3a2be0]{border-radius:%?6?%;border:%?2?% solid rgba(0,0,0,.1)}.tn-input--error[data-v-4a3a2be0]{border-color:#e83a30!important}.tn-input__right-icon[data-v-4a3a2be0]{line-height:1}.tn-input__right-icon .icon[data-v-4a3a2be0]{color:#aaa}.tn-input__right-icon__item[data-v-4a3a2be0]{margin-left:%?10?%}.tn-input__right-icon__clear .icon[data-v-4a3a2be0]{font-size:%?32?%}.tn-input__right-icon__select[data-v-4a3a2be0]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.tn-input__right-icon__select .icon[data-v-4a3a2be0]{font-size:%?26?%}.tn-input__right-icon__select--reverse[data-v-4a3a2be0]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},aea3:function(t,e,n){"use strict";n.r(e);var o=n("1a31"),i=n("bfa5");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1516");var r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"022d920c",null,!1,o["a"],void 0);e["default"]=l.exports},aeb7:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},b7da:function(t,e,n){var o=n("9d94");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("094732cc",o,!0,{sourceMap:!1,shadowMode:!1})},baa5:function(t,e,n){var o=n("23e7"),i=n("e58c");o({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bfa5:function(t,e,n){"use strict";n.r(e);var o=n("cb6a"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},ca82:function(t,e,n){"use strict";n.r(e);var o=n("2cab2"),i=n("4795");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var r=n("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"2d8b6782",null,!1,o["a"],void 0);e["default"]=l.exports},cb6a:function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i=o(n("7c77")),a={name:"componentsModal",components:{dynamicDemoTemplate:i.default},data:function(){return{title:"使用提醒",content:"确定不使用TuniaoUI",show:!1,backgroundColor:"",width:"84%",padding:"",radius:12,fontColor:"",fontSize:0,button:[{text:"取消",backgroundColor:"#A4E82F",fontColor:"#FFFFFF"},{text:"确定",backgroundColor:"tn-bg-indigo",fontColor:"#FFFFFF"}],closeBtn:!0,maskCloseable:!0,zoom:!0,custom:!1,tips:["无需依赖额外的样式文件","使用tn-modal组件"],sectionList:[{name:"参数切换",section:[{title:"自定义颜色",optional:["默认","自定义"],methods:"colorChange"},{title:"自定义大小",optional:["默认","自定义"],methods:"sizeChange"},{title:"自定义内容",optional:["是","否"],methods:"customChange",current:1},{title:"圆角",optional:["默认","60"],methods:"radiusChange"},{title:"标题",optional:["显示","隐藏"],methods:"titleChange"},{title:"按钮",optional:["显示","隐藏"],methods:"buttonChange"},{title:"右上角关闭按钮",optional:["显示","隐藏"],methods:"closeBtnChange"},{title:"点击mask关闭",optional:["是","否"],methods:"maskCloseableChange"},{title:"动画",optional:["有","无"],methods:"zoomChange"}]}]}},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},showModal:function(t){this.openModal()},colorChange:function(t){0===t.index?(this.backgroundColor="",this.fontColor=""):(this.backgroundColor="#E4E9EC",this.fontColor="#BA7027"),this.openModal()},sizeChange:function(t){0===t.index?(this.padding="",this.fontSize=0):(this.padding="30rpx 26rpx",this.fontSize=35),this.openModal()},customChange:function(t){0===t.index?(this.custom=!0,this.$refs.demoTemplate.updateSectionBtnsState([4,5],!1)):(this.custom=!1,this.$refs.demoTemplate.updateSectionBtnsState([4,5],!0)),this.openModal()},radiusChange:function(t){this.radius=0===t.index?12:Number(t.name),this.openModal()},titleChange:function(t){this.title=0===t.index?"使用提醒":"",this.openModal()},buttonChange:function(t){this.button=0===t.index?[{text:"取消",backgroundColor:"#E6E6E6",fontColor:"#FFFFFF"},{text:"确定",backgroundColor:"tn-bg-indigo",fontColor:"#FFFFFF"}]:[],this.openModal()},closeBtnChange:function(t){this.closeBtn=0===t.index,this.openModal()},maskCloseableChange:function(t){0===t.index?this.maskCloseable=!0:(this.maskCloseable=!1,this.closeBtn=!0,this.$refs.demoTemplate.updateSectionBtnsValue(0,6,0)),this.openModal()},zoomChange:function(t){this.zoom=0===t.index,this.openModal()},openModal:function(){this.show=!0},clickBtn:function(t){this.show=!1,this.$tn.message.toast("点击了第"+(t.index+1)+"个按钮")}}};e.default=a},ccb4:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d81d"),n("d3b7"),n("c975");var o={name:"tn-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:Number,default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{tnForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[]},methods:{setRules:function(t){this.rules=t},resetFields:function(){this.fields.map((function(t){t.resetField()}))},validate:function(t){var e=this;return new Promise((function(n){var o=!0,i=0,a=[];e.fields.map((function(r){r.validation("",(function(r){r&&(o=!1,a.push(r)),++i===e.fields.length&&(n(o),-1===e.errorType.indexOf("none")&&e.errorType.indexOf("toast")>=0&&a.length>0&&e.$tn.message.toast(a[0]),"function"==typeof t&&t(o))}))}))}))}}};e.default=o},fa61:function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad"),n("2532");var i=o(n("7882")),a={mixins:[i.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=a}}]);