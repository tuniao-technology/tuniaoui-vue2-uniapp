(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-life-start-start"],{"0b16":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e},"1bad":function(t,e,n){"use strict";n.r(e);var r=n("3d76"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},2440:function(t,e,n){var r=n("f8fc");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("79243bc3",r,!0,{sourceMap:!1,shadowMode:!1})},2691:function(t,e,n){"use strict";var r=n("2440"),i=n.n(r);i.a},"3d76":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("62dd")),a={name:"TemplateStart",mixins:[i.default],data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",name:"总有你想不到的创意",text:"海量分享",color:"#00C3E3",url:"https://tnuiimage.tnkjapp.com/swiper/guide-bg1.jpg",pngurl:"https://tnuiimage.tnkjapp.com/swiper/c4d7.png"},{id:1,type:"image",name:"寻找一起成长的小伙伴",text:"愉快玩耍",color:"#FE5141",url:"https://tnuiimage.tnkjapp.com/swiper/guide-bg2.jpg",pngurl:"https://tnuiimage.tnkjapp.com/swiper/c4d8.png"},{id:2,type:"image",name:"更多彩蛋等你探索",text:"酷炫多彩",color:"#EF9A01",url:"https://tnuiimage.tnkjapp.com/swiper/guide-bg3.jpg",pngurl:"https://tnuiimage.tnkjapp.com/swiper/c4d9.png"},{id:3,type:"image",name:"商业合作请联系作者",text:"免费开源",color:"#D960C7",url:"https://tnuiimage.tnkjapp.com/swiper/guide-bg4.jpg",pngurl:"https://tnuiimage.tnkjapp.com/swiper/c4d10.png"}]}},methods:{cardSwiper:function(t){this.cardCur=t.detail.current}}};e.default=a},"4fc9":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad"),n("2532");var i=r(n("c846")),a={mixins:[i.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=a},"62dd":function(t,e,n){var r=n("7ec2").default,i=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(r().mark((function e(){var n,i,a;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:a=e.sent,n=a.customBarHeight,i=a.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",i),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function i(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(T){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),s=new L(r||[]);return o(a,"_invoke",{value:_(t,n,s)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=f;var h={};function v(){}function g(){}function b(){}var m={};d(m,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(O([])));w&&w!==n&&a.call(w,c)&&(m=w);var x=b.prototype=v.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;o(this,"_invoke",{value:function(i,o){function s(){return new e((function(n,s){(function n(i,o,s,c){var u=p(t[i],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==r(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)})(i,o,n,s)}))}return n=n?n.then(s,s):s()}})}function _(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return F()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=p(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:F}}function F(){return{value:void 0,done:!0}}return g.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=d(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(C.prototype),d(C.prototype,u,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new C(f(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(x),d(x,l,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},"7f9f":function(t,e,n){"use strict";n.r(e);var r=n("4fc9"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"82bf":function(t,e,n){var r=n("0b16");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("07c9ec84",r,!0,{sourceMap:!1,shadowMode:!1})},baa5:function(t,e,n){var r=n("23e7"),i=n("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},c973:function(t,e,n){function r(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},ce46:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},e510:function(t,e,n){"use strict";var r=n("82bf"),i=n.n(r);i.a},ef28:function(t,e,n){"use strict";n.r(e);var r=n("ce46"),i=n("7f9f");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("e510");var o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"778c77a3",null,!1,r["a"],void 0);e["default"]=s.exports},f8fc:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-2aa51b3e]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-2aa51b3e]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-2aa51b3e]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 轮播视觉差 start */.card-swiper[data-v-2aa51b3e]{height:100vh!important}.card-swiper uni-swiper-item[data-v-2aa51b3e]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-2aa51b3e]{width:100%;display:block;height:100%;border-radius:%?0?%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item[data-v-2aa51b3e]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s}.card-swiper uni-swiper-item .swiper-item-png[data-v-2aa51b3e]{margin-top:-85vh;display:block;border-radius:%?0?%;-webkit-transform:translate(%?40?%,%?20?%) scale(.8);transform:translate(%?40?%,%?20?%) scale(.8);transition:all .6s ease 0s;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-png[data-v-2aa51b3e]{margin-top:-85vh;-webkit-transform:translate(%?0?%,%?0?%) scale(1);transform:translate(%?0?%,%?0?%) scale(1);transition:all .6s ease 0s}.card-swiper uni-swiper-item .swiper-item-text[data-v-2aa51b3e]{margin-top:%?0?%;width:100%;display:block;height:50%;border-radius:%?10?%;-webkit-transform:translate(%?30?%,%?-40?%) scale(.7);transform:translate(%?30?%,%?-40?%) scale(.7);transition:all .6s ease 0s;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-text[data-v-2aa51b3e]{margin-top:%?-60?%;width:100%;-webkit-transform:translate(%?30?%,%?0?%) scale(.9);transform:translate(%?30?%,%?0?%) scale(.9);transition:all .6s ease 0s}.image-banner[data-v-2aa51b3e]{display:flex;align-items:center;justify-content:center}.image-banner uni-image[data-v-2aa51b3e]{width:100%}\r\n/* 轮播指示点 start*/.indication[data-v-2aa51b3e]{z-index:9999;width:100%;height:%?36?%;position:fixed;display:flex;flex-direction:row;align-items:center;justify-content:center}.spot[data-v-2aa51b3e]{background-color:#fff;opacity:.4;width:%?10?%;height:%?10?%;border-radius:%?20?%;margin:0 %?8?%!important;right:%?-270?%;top:%?-180?%;position:relative}.spot.active[data-v-2aa51b3e]{opacity:1;width:%?30?%;background-color:#fff}\r\n/* 立即体验 start*/.go[data-v-2aa51b3e]{z-index:9999;width:100%;position:fixed;display:flex;flex-direction:row;align-items:center;justify-content:center;bottom:10vh}',""]),t.exports=e},fae6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("75e2").default,tnButton:n("ef28").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-start"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,autoplay:!1,duration:"500",interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,r){return n("v-uni-swiper-item",{key:r,class:t.cardCur==r?"cur":""},[n("v-uni-view",{staticClass:"swiper-item image-banner",style:"background-color: "+e.color},["image"==e.type?n("v-uni-image",{staticStyle:{height:"100vh",width:"100vw"},attrs:{src:e.url,mode:"aspectFill"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item-png image-banner"},["image"==e.type?n("v-uni-image",{attrs:{src:e.pngurl,mode:"widthFix"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item-text"},[n("v-uni-view",{staticClass:"tn-text-xxl tn-text-bold tn-color-white"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"tn-text-xl tn-text-bold tn-color-white tn-padding-top-xs"},[t._v(t._s(e.text))])],1)],1)})),1),n("v-uni-view",{staticClass:"indication"},[t._l(t.swiperList,(function(e,r){return[n("v-uni-view",{key:r+"_0",staticClass:"spot",class:t.cardCur==r?"active":""})]}))],2),n("v-uni-view",{staticClass:"go"},[n("tn-button",{attrs:{plain:!0,shape:"round",backgroundColor:"#FFFFFF",fontColor:"#FFFFFF",width:"40vw",height:"70rpx"}},[t._v("立即体验")])],1)],1)},a=[]},ffea:function(t,e,n){"use strict";n.r(e);var r=n("fae6"),i=n("1bad");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("2691");var o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"2aa51b3e",null,!1,r["a"],void 0);e["default"]=s.exports}}]);