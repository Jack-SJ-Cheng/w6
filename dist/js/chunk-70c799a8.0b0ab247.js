(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c799a8"],{"1dde":function(t,e,c){var n=c("d039"),a=c("b622"),r=c("2d00"),o=a("species");t.exports=function(t){return r>=51||!n((function(){var e=[],c=e.constructor={};return c[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"360f":function(t,e,c){t.exports=c.p+"img/times-solid.2c5552a1.svg"},"65f0":function(t,e,c){var n=c("861d"),a=c("e8b5"),r=c("b622"),o=r("species");t.exports=function(t,e){var c;return a(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?n(c)&&(c=c[o],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var n=c("c04e"),a=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var o=n(e);o in t?a.f(t,o,r(0,c)):t[o]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("d039"),r=c("e8b5"),o=c("861d"),i=c("7b0b"),s=c("50c4"),u=c("8418"),l=c("65f0"),f=c("1dde"),d=c("b622"),b=c("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=b>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=f("concat"),x=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},y=!O||!v;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,n,a,r,o=i(this),f=l(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?o:arguments[e],x(r)){if(a=s(r.length),d+a>h)throw TypeError(j);for(c=0;c<a;c++,d++)c in r&&u(f,d,r[c])}else{if(d>=h)throw TypeError(j);u(f,d++,r)}return f.length=d,f}})},b789:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=c("360f"),r=c.n(a),o={class:"m-top container"},i={class:"table align-middle",id:"cart"},s=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{width:"60"},"分類"),Object(n["f"])("th",null,"品名"),Object(n["f"])("th",{class:"text-center"},"單價"),Object(n["f"])("th",{width:"50",class:"text-center"},"數量"),Object(n["f"])("th",{class:"text-center"},"總價"),Object(n["f"])("th",{class:"text-end"},"刪除")])],-1),u={class:"badge bg-secondary"},l={class:"text-center"},f=Object(n["f"])("td",{class:"text-center"},"1",-1),d={class:"text-center"},b={class:"text-end"},p=Object(n["f"])("img",{src:r.a,alt:""},null,-1),h=Object(n["f"])("td",{class:"text-end",colspan:"5"},"總計",-1),j={class:"text-center"};function O(t,e,c,a,r,O){return Object(n["o"])(),Object(n["d"])("div",o,[Object(n["f"])("button",{onClick:e[1]||(e[1]=function(){return O.deleteCart&&O.deleteCart.apply(O,arguments)}),class:"btn btn-outline-danger m-2",type:"button"}," 清空購物車 "),Object(n["f"])("table",i,[s,Object(n["f"])("tbody",null,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(r.purchase,(function(t){return Object(n["o"])(),Object(n["d"])("tr",{key:t},[Object(n["f"])("td",null,[Object(n["f"])("span",u,Object(n["v"])(t.product.category),1)]),Object(n["f"])("td",null,Object(n["v"])(t.product.title),1),Object(n["f"])("td",l,Object(n["v"])(t.product.price),1),f,Object(n["f"])("td",d,Object(n["v"])(t.final_total),1),Object(n["f"])("td",b,[Object(n["f"])("button",{class:"btn text-danger",onClick:function(e){return O.deleteCartItem(t.id)}},[p],8,["onClick"])])])})),128))]),Object(n["f"])("tfoot",null,[Object(n["f"])("tr",null,[h,Object(n["f"])("td",j,Object(n["v"])(r.finalTotal),1)])])])])}c("99af");var v={data:function(){return{purchase:[],finalTotal:""}},methods:{updateCart:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/cart")).then((function(e){t.purchase=e.data.data.carts,t.finalTotal=e.data.data.final_total})).catch((function(t){console.log(t)}))},deleteCart:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/carts")).then((function(){t.updateCart()}))},deleteCartItem:function(t){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/cart/").concat(t)).then((function(t){t.data.success&&e.updateCart()}))}},mounted:function(){this.updateCart()}};v.render=O;e["default"]=v},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-70c799a8.0b0ab247.js.map