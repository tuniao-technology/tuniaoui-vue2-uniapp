(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-table-fixed-header-index"],{"0214":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={tnNavBar:n("75e2").default,tnTable:n("5105").default,tnTr:n("e952").default,tnTd:n("3d30").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"vip-components-table__fixed-header"},[n("tn-nav-bar",{attrs:{fixed:!0}},[e._v("固定头部表格")]),n("v-uni-view",{style:{paddingTop:e.vuex_custom_bar_height+"px"}},[n("v-uni-view",[n("tn-table",{attrs:{borderTop:!1,borderLeft:!1}},[n("tn-tr",{attrs:{fixed:!0,borderTop:!0,top:e.vuex_custom_bar_height+"px"}},e._l(e.header,(function(t,i){return n("tn-td",{key:i,attrs:{height:"48rpx",bold:!0,span:8,keys:t.key}},[e._v(e._s(t.title))])})),1),e._l(e.listData,(function(t,i){return n("tn-tr",{key:i,attrs:{index:t.id,margin:0===i?"48rpx 0 0 0":""}},e._l(e.header,(function(i,a){return n("tn-td",{key:a,attrs:{span:8,keys:i.key},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleClick(n,t.id)}}},[e._v(e._s(t[i.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"配合scroll-view使用"}},[n("tn-table",[n("tn-tr",{attrs:{left:"32rpx",right:"30rpx",width:"auto"}},e._l(e.header,(function(t,i){return n("tn-td",{key:i,attrs:{height:"48rpx",bold:!0,span:8,keys:t.key}},[e._v(e._s(t.title))])})),1),n("v-uni-scroll-view",{staticStyle:{height:"400px"},attrs:{"scroll-y":!0}},e._l(e.listData,(function(t,i){return n("tn-tr",{key:i,attrs:{index:t.id}},e._l(e.header,(function(i,a){return n("tn-td",{key:a,attrs:{span:8,keys:i.key},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleClick(n,t.id)}}},[e._v(e._s(t[i.key]))])})),1)})),1)],1)],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},r=[]},"1f94":function(e,t,n){var i=n("2eb5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5d6393f0",i,!0,{sourceMap:!1,shadowMode:!1})},"2eb5":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.vip-components-table__fixed-header[data-v-724e9a3f]{background-color:#f4f4f4;min-height:100vh}',""]),e.exports=t},"55d8":function(e,t,n){"use strict";n.r(t);var i=n("f481"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"76cb":function(e,t,n){"use strict";var i=n("1f94"),a=n.n(i);a.a},7971:function(e,t,n){"use strict";n.r(t);var i=n("0214"),a=n("55d8");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("76cb");var d=n("f0c5"),o=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"724e9a3f",null,!1,i["a"],void 0);t["default"]=o.exports},f481:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af");var a=i(n("5ea4")),r={name:"VipComponentsFixedHeaderTable",components:{demoTitle:a.default},data:function(){return{header:[{title:"日期",key:"date"},{title:"金额",key:"price"},{title:"备注",key:"note"}],listData:[{id:1,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:2,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:3,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:4,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:5,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:6,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:7,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:8,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:9,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:10,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:11,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:12,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:13,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:14,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:15,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:16,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:17,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:18,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:19,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:20,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:21,date:"20220303",price:"4000",note:"今天的销售额还行啦"},{id:22,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:23,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:24,date:"20220303",price:"4000",note:"今天的销售额还行啦"}]}},methods:{handleClick:function(e,t){this.$tn.message.toast("点击了[".concat(e.key,"]id为").concat(t,"的选项"))}}};t.default=r}}]);