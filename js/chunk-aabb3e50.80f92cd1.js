(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aabb3e50"],{"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),o=c("e8b5"),r=c("861d"),i=c("7b0b"),d=c("50c4"),s=c("8418"),l=c("65f0"),u=c("1dde"),b=c("b622"),h=c("2d00"),p=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",f=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=u("concat"),N=function(t){if(!r(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},V=!f||!g;a({target:"Array",proto:!0,forced:V},{concat:function(t){var e,c,a,n,o,r=i(this),u=l(r,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?r:arguments[e],N(o)){if(n=d(o.length),b+n>j)throw TypeError(O);for(c=0;c<n;c++,b++)c in o&&s(u,b,o[c])}else{if(b>=j)throw TypeError(O);s(u,b++,o)}return u.length=b,u}})},b789:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"m-top container"},o={class:"table align-middle",id:"cart"},r=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"60"},"分類"),Object(a["createVNode"])("th",null,"品名"),Object(a["createVNode"])("th",{class:"text-center"},"單價"),Object(a["createVNode"])("th",{width:"50",class:"text-center"},"數量"),Object(a["createVNode"])("th",{class:"text-center"},"總價"),Object(a["createVNode"])("th",{class:"text-end"},"刪除")])],-1),i={class:"badge bg-secondary"},d={class:"text-center"},s={class:"text-center"},l={class:"text-center"},u={class:"text-end"},b=Object(a["createVNode"])("i",{class:"fas fa-times"},null,-1),h=Object(a["createVNode"])("td",{class:"text-end",colspan:"5"},"總計",-1),p={class:"text-center"},j={class:"d-flex justify-content-end"};function O(t,e,c,O,f,g){var N=this,V=Object(a["resolveComponent"])("Loading");return Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])(V,{active:f.isLoading},null,8,["active"]),Object(a["createVNode"])("button",{onClick:e[1]||(e[1]=function(){return g.deleteCart&&g.deleteCart.apply(g,arguments)}),class:"btn btn-outline-danger m-2",type:"button"}," 清空購物車 "),Object(a["createVNode"])("table",o,[r,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(f.purchase,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("span",i,Object(a["toDisplayString"])(t.product.category),1)]),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("td",d,Object(a["toDisplayString"])(t.product.price),1),Object(a["createVNode"])("td",s,Object(a["toDisplayString"])(t.qty),1),Object(a["createVNode"])("td",l,Object(a["toDisplayString"])(t.final_total),1),Object(a["createVNode"])("td",u,[Object(a["createVNode"])("button",{class:"btn text-danger",onClick:function(e){return g.deleteCartItem(t.id)}},[b],8,["onClick"])])])})),128))]),Object(a["createVNode"])("tfoot",null,[Object(a["createVNode"])("tr",null,[h,Object(a["createVNode"])("td",p,Object(a["toDisplayString"])(f.finalTotal),1)])])]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[2]||(e[2]=function(t){return N.$router.push("/home/about")})},"填寫收件資料")])])}c("99af");var f={data:function(){return{purchase:[],finalTotal:"",isLoading:!1}},methods:{updateCart:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/cart")).then((function(e){t.purchase=e.data.data.carts,t.finalTotal=e.data.data.final_total,t.isLoading=!1,console.log(e)})).catch((function(t){console.log(t)}))},deleteCart:function(){var t=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/carts")).then((function(){t.updateCart(),t.isLoading=!1}))},deleteCartItem:function(t){var e=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/cart/").concat(t)).then((function(t){t.data.success&&(e.updateCart(),e.isLoading=!1)}))}},mounted:function(){this.updateCart()}};f.render=O;e["default"]=f}}]);
//# sourceMappingURL=chunk-aabb3e50.80f92cd1.js.map