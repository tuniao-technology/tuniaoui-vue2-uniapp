(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-table-index"],{"0ffa":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"multiple-options"},[e("v-uni-view",{staticClass:"list"},[t._l(t.listData,(function(n,i){return[e("v-uni-view",{key:i+"_0",staticClass:"list__item",class:["tn-main-gradient-"+t.tuniaoColorList[n.bgColorIndex]+"--light"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navOptionsPage(n.url)}}},[e("v-uni-view",{staticClass:"list__content"},[e("v-uni-view",{staticClass:"list__content__title"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"list__content__desc"},[t._v(t._s(n.desc))])],1),e("v-uni-view",{staticClass:"list__icon"},[e("v-uni-view",{staticClass:"list__icon__main",class:["tn-icon-"+n.mainIcon,"tn-main-gradient-"+t.tuniaoColorList[n.bgColorIndex]]}),e("v-uni-view",{staticClass:"list__icon__sub",class:["tn-icon-"+n.subIcon,"tn-main-gradient-"+t.tuniaoColorList[n.bgColorIndex]]})],1)],1)]}))],2)],1)},a=[]},"1c24":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d81d");var i={name:"multiple-options-demo",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{tuniaoColorList:["red","purplered","purple","bluepurple","aquablue","blue","indigo","cyan","teal","green","orange","orangered"],listData:[]}},watch:{list:function(t){this.initList()}},created:function(){this.initList()},methods:{initList:function(){var t=this;this.listData=this.list.map((function(n,e){return n.bgColorIndex=t.getBgNum(),n.mainIcon=(null===n||void 0===n?void 0:n.mainIcon)||"computer-fill",n.subIcon=(null===n||void 0===n?void 0:n.subIcon)||"share",n}))},navOptionsPage:function(t){uni.navigateTo({url:t})},getBgNum:function(){return Math.floor(Math.random()*this.tuniaoColorList.length)}}};n.default=i},"29de":function(t,n,e){"use strict";e.r(n);var i=e("1c24"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"2b54":function(t,n,e){"use strict";e.r(n);var i=e("d62e"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},3218:function(t,n,e){"use strict";e.r(n);var i=e("b5a1"),a=e("2b54");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);var o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"db483204",null,!1,i["a"],void 0);n["default"]=r.exports},3942:function(t,n,e){"use strict";e.r(n);var i=e("0ffa"),a=e("29de");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("7c53");var o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3be4dde5",null,!1,i["a"],void 0);n["default"]=r.exports},"66ed":function(t,n,e){var i=e("76d1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("517e30a6",i,!0,{sourceMap:!1,shadowMode:!1})},"76d1":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.list__item[data-v-3be4dde5]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:calc(100% - %?60?%);margin:%?108?% %?30?% %?0?% %?30?%;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?20?%}.list__content[data-v-3be4dde5]{flex:1;margin:%?34?% %?0?% %?27?% %?37?%}.list__content__title[data-v-3be4dde5]{font-size:%?36?%;font-weight:700;margin-bottom:%?12?%}.list__content__desc[data-v-3be4dde5]{font-size:%?28?%}.list__icon[data-v-3be4dde5]{flex:1;margin-right:%?26?%;position:relative}.list__icon__main[data-v-3be4dde5], .list__icon__sub[data-v-3be4dde5]{-webkit-background-clip:text;color:transparent;position:absolute;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.list__icon__main[data-v-3be4dde5]{font-size:%?200?%;width:%?190?%;line-height:%?200?%;top:0;right:%?0?%;-webkit-transform:translateY(-60%);transform:translateY(-60%)}.list__icon__sub[data-v-3be4dde5]{font-size:%?70?%;top:0;right:%?175?%;-webkit-transform:translateY(%?-5?%);transform:translateY(%?-5?%)}',""]),t.exports=n},"7c53":function(t,n,e){"use strict";var i=e("66ed"),a=e.n(i);a.a},b5a1:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("5138").default},a=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"vip-component-table tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[this._v("表格")]),n("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[n("multiple-options-demo",{attrs:{list:this.optionsList}}),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},s=[]},d62e:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("3942")),s={name:"VipComponentsTable",components:{multipleOptionsDemo:a.default},data:function(){return{optionsList:[{title:"普通表格",desc:"表格基本使用",url:"/vipPage/components/table/basic/index"},{title:"斑马纹表格",desc:"带斑马纹的表格",url:"/vipPage/components/table/stripe/index"},{title:"固定头部表格",desc:"固定头部表格",url:"/vipPage/components/table/fixed-header/index"},{title:"固定列表格",desc:"固定列表格",url:"/vipPage/components/table/fixed-column/index"},{title:"多表头表格",desc:"多表头表格",url:"/vipPage/components/table/multi-header/index"},{title:"复杂表格",desc:"复杂表格",url:"/vipPage/components/table/complex/index"}]}}};n.default=s}}]);