(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order/logistics"],{"1ed0":function(n,t,e){},"33b7":function(n,t,e){"use strict";e.r(t);var r=e("8f2b"),u=e("578c");for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("ebdf");var i,c=e("f0c5"),a=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=a.exports},"578c":function(n,t,e){"use strict";e.r(t);var r=e("6276"),u=e.n(r);for(var o in r)"default"!==o&&function(n){e.d(t,n,(function(){return r[n]}))}(o);t["default"]=u.a},6276:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,r,u,o,i){try{var c=n[o](i),a=c.value}catch(f){return void e(f)}c.done?t(a):Promise.resolve(a).then(r,u)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var i=n.apply(t,e);function c(n){o(i,r,u,c,a,"next",n)}function a(n){o(i,r,u,c,a,"throw",n)}c(void 0)}))}}var c={data:function(){return{logistics:""}},onLoad:function(n){var t=this;return i(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.id){e.next=6;break}return e.next=3,t.$api.info("orders",n.id);case 3:u=e.sent,t.logistics=u.data.logistics,console.log(t.logistics);case 6:case"end":return e.stop()}}),e)})))()},onUnload:function(){},methods:{}};t.default=c},"8f2b":function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return r}));var u=function(){var n=this,t=n.$createElement;n._self._c},o=[]},e6de:function(n,t,e){"use strict";(function(n){e("7cd5");r(e("66fd"));var t=r(e("33b7"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},ebdf:function(n,t,e){"use strict";var r=e("1ed0"),u=e.n(r);u.a}},[["e6de","common/runtime","common/vendor"]]]);