(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-sticky-sticky"],{"07f8":function(t,e,n){"use strict";n.r(e);var i=n("3d26"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"114c":function(t,e,n){var i=n("5f09");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("a58b4c22",i,!0,{sourceMap:!1,shadowMode:!1})},"20ce":function(t,e,n){"use strict";n.r(e);var i=n("8ee5"),s=n("07f8");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("f7af");var o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"68c1a7ca",null,!1,i["a"],void 0);e["default"]=c.exports},"2ee6":function(t,e,n){"use strict";n.r(e);var i=n("5e14"),s=n("fd7f");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("691b");var o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"5d860f10",null,!1,i["a"],void 0);e["default"]=c.exports},"3a68":function(t,e,n){"use strict";n.r(e);var i=n("ada2"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"3d26":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("2ee6")),a={name:"componentsSticky",components:{demoTitle:s.default},data:function(){return{}},methods:{}};e.default=a},"5e14":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo-title"},[n("v-uni-view",["first"===t.type?n("v-uni-view",{staticClass:"main_title"},[t.leftIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),n("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?n("v-uni-view",{staticClass:"second_title"},[n("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),n("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},s=[]},"5f09":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},"691b":function(t,e,n){"use strict";var i=n("114c"),s=n.n(i);s.a},"721c":function(t,e,n){"use strict";n.r(e);var i=n("ebbe"),s=n("3a68");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"2a35d2b6",null,!1,i["a"],void 0);e["default"]=c.exports},"8b1b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=i},"8ee5":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("5138").default,tnSticky:n("721c").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"components-sticky tn-safe-area-inset-bottom",staticStyle:{height:"200vh"}},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("sticky吸顶")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"吸顶"}},[n("tn-sticky",{attrs:{offsetTop:0,customNavHeight:t.vuex_custom_bar_height}},[n("v-uni-view",{staticClass:"sticky-content tn-bg-orangered tn-color-white"},[t._v("普通吸顶")])],1),n("v-uni-view",{staticStyle:{"margin-top":"200rpx"}},[n("tn-sticky",{attrs:{offsetTop:100,customNavHeight:t.vuex_custom_bar_height}},[n("v-uni-view",{staticClass:"sticky-content tn-bg-indigo tn-color-white"},[t._v("有距离吸顶")])],1)],1)],1),n("demo-title",{attrs:{title:"取消吸顶"}},[n("tn-sticky",{attrs:{offsetTop:0,enabled:!1,customNavHeight:t.vuex_custom_bar_height}},[n("v-uni-view",{staticClass:"sticky-content tn-bg-red tn-color-white"},[t._v("不允许吸顶")])],1)],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},a=[]},9094:function(t,e,n){var i=n("f81b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("848731f2",i,!0,{sourceMap:!1,shadowMode:!1})},ada2:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("2c3e");var i={name:"tn-sticky",props:{offsetTop:{type:Number,default:0},h5NavHeight:{type:Number,default:45},customNavHeight:{type:Number,default:0},enabled:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},zIndex:{type:Number,default:0},index:{type:[String,Number],default:""}},computed:{elZIndex:function(){return this.zIndex?this.zIndex:this.$tn.zIndex.sticky},backgroundColorStyle:function(){return this.$tn.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$tn.color.getBackgroundColorInternalClass(this.backgroundColor)},stickyClass:function(){var t="";return t+=this.elClass,this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),t},stickyStyle:function(){var t={};return t.height=this.fixed?this.height+"px":"auto",this.backgroundColorStyle&&(t.color=this.backgroundColorStyle),this.elZIndex&&(t.zIndex=this.elZIndex),t}},data:function(){return{stickyObserverName:"tnStickyObserver",elClass:this.$tn.uuid(),fixed:!1,height:"auto",width:"auto",stickyTop:0,left:0}},watch:{offsetTop:function(t){this.initObserver()},enabled:function(t){!1===t?(this.fixed=!1,this.disconnectObserver(this.stickyObserverName)):this.initObserver()},customNavHeight:function(t){this.initObserver()}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var t=this;this.enabled&&(this.stickyTop=0!=this.offsetTop?uni.upx2px(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver(this.stickyObserverName),this._tGetRect("."+this.elClass).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.connectObserver()}))})))},connectObserver:function(){var t=this;this.disconnectObserver(this.stickyObserverName);var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enabled&&t.setFixed(e.boundingClientRect.top)})),this[this.stickyObserverName]=e},setFixed:function(t){var e=t<this.stickyTop;e?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}}};e.default=i},ebbe:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-sticky-class"},[n("v-uni-view",{staticClass:"tn-sticky__wrap",class:[t.stickyClass],style:[t.stickyStyle]},[n("v-uni-view",{staticClass:"tn-sticky__item",style:{position:t.fixed?"fixed":"static",top:t.stickyTop+"px",left:t.left+"px",width:"auto"===t.width?"auto":t.width+"px",zIndex:t.elZIndex}},[t._t("default")],2)],1)],1)},s=[]},f7af:function(t,e,n){"use strict";var i=n("9094"),s=n.n(i);s.a},f81b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.components-sticky[data-v-68c1a7ca]{min-height:100vh}.sticky-content[data-v-68c1a7ca]{height:%?80?%;padding:0 %?80?%;margin:0 %?10?%;line-height:%?80?%;text-align:center;border-radius:%?10?%}',""]),t.exports=e},fd7f:function(t,e,n){"use strict";n.r(e);var i=n("8b1b"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a}}]);