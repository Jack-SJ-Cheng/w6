(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42ad4336"],{"80ac":function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),o={class:"container"},r={class:"table mt-3 align-middle"},n=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",{class:"text-center",width:"120"},"訂單日期"),Object(c["createVNode"])("th",{class:"text-center"},"姓名"),Object(c["createVNode"])("th",{class:"text-center",width:"120"},"付款狀態"),Object(c["createVNode"])("th",{class:"text-center"},"訂單金額"),Object(c["createVNode"])("th",{class:"text-center",width:"80"},"查看細節"),Object(c["createVNode"])("th",{class:"text-center",width:"80"},"刪除")])],-1),l={class:"text-center"},d={class:"text-center"},i={class:"text-center"},s={class:"form-check form-switch"},b={key:0,class:"text-success"},O={key:1,class:"text-danger"},j={class:"text-center"},u={class:"text-center"},p=Object(c["createVNode"])("span",{class:"material-icons"}," find_in_page ",-1),N={class:"text-center"},V=Object(c["createVNode"])("span",{class:"material-icons"}," delete_outline ",-1);function m(e,t,a,m,g,h){var f=Object(c["resolveComponent"])("Loading"),v=Object(c["resolveComponent"])("Pagination"),k=Object(c["resolveComponent"])("OrderModal"),y=Object(c["resolveComponent"])("DeleteOrderModal");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])(f,{active:g.isLoading},null,8,["active"]),Object(c["createVNode"])("table",r,[n,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(g.orders,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:t},[Object(c["createVNode"])("td",l,Object(c["toDisplayString"])(e.$timeTransformer(t.create_at)),1),Object(c["createVNode"])("td",d,Object(c["toDisplayString"])(t.user.name),1),Object(c["createVNode"])("td",i,[Object(c["createVNode"])("div",s,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return h.updatePaid(t)}},null,40,["id","onUpdate:modelValue","onChange"]),[[c["vModelCheckbox"],t.is_paid]]),t.is_paid?(Object(c["openBlock"])(),Object(c["createBlock"])("span",b,"已付款")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",O,"未付款"))])]),Object(c["createVNode"])("td",j,Object(c["toDisplayString"])(e.$toCurrency(t.total)),1),Object(c["createVNode"])("td",u,[Object(c["createVNode"])("button",{class:"btn text-primary",onClick:function(e){return h.openModal(t)},type:"button"},[p],8,["onClick"])]),Object(c["createVNode"])("td",N,[Object(c["createVNode"])("button",{class:"btn text-danger",onClick:function(e){return h.openDeleteModal(t)}},[V],8,["onClick"])])])})),128))])]),Object(c["createVNode"])(v,{page:g.pagination,onGetData:h.getData},null,8,["page","onGetData"]),Object(c["createVNode"])(k,{ref:"orderModal",order:g.order},null,8,["order"]),Object(c["createVNode"])(y,{ref:"deleteModal",order:g.order,onDelete:h.deleteOrder},null,8,["order","onDelete"])])}a("99af");var g=a("d0a4"),h={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel",ref:"modal"},f={class:"modal-dialog modal-xl"},v={class:"modal-content"},k=Object(c["createVNode"])("div",{class:"modal-header"},[Object(c["createVNode"])("h5",{class:"modal-title"},"訂單內容"),Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},x={class:"row"},B={class:"col-4"},D={class:"mb-2"},C={class:"mb-2"},S=Object(c["createTextVNode"])(" 付款狀態： "),M={key:0,class:"text-success"},_={key:1,class:"text-danger"},w={class:"mb-2"},$={class:"col-8"},L=Object(c["createVNode"])("h5",null,"客戶資料",-1),T={class:"table table-sm"},J={key:0},P=Object(c["createVNode"])("th",{style:{width:"100px"}},"姓名",-1),F=Object(c["createVNode"])("th",null,"Email",-1),G=Object(c["createVNode"])("th",null,"電話",-1),U=Object(c["createVNode"])("th",null,"地址",-1),q={class:"mb-2"},E=Object(c["createTextVNode"])(" 留言："),z=Object(c["createVNode"])("br",null,null,-1),A=Object(c["createVNode"])("h5",null,"訂單內容：",-1),H={class:"table table-hover"},I={class:"text-center"},K={class:"text-center"},Q={class:"text-center"},R=Object(c["createVNode"])("div",{class:"modal-footer"},[Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," 確定 ")],-1);function W(e,t,a,o,r,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",v,[k,Object(c["createVNode"])("div",y,[Object(c["createVNode"])("div",x,[Object(c["createVNode"])("div",B,[Object(c["createVNode"])("div",D," 訂單日期："+Object(c["toDisplayString"])(e.$timeTransformer(a.order.create_at)),1),Object(c["createVNode"])("div",C,[S,a.order.is_paid?(Object(c["openBlock"])(),Object(c["createBlock"])("span",M,"已付款")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",_,"未付款"))]),Object(c["createVNode"])("div",w," 訂單總金額：NT$ "+Object(c["toDisplayString"])(e.$toCurrency(a.order.total)),1)]),Object(c["createVNode"])("div",$,[L,Object(c["createVNode"])("table",T,[a.order.user?(Object(c["openBlock"])(),Object(c["createBlock"])("tbody",J,[Object(c["createVNode"])("tr",null,[P,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(a.order.user.name),1)]),Object(c["createVNode"])("tr",null,[F,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(a.order.user.email),1)]),Object(c["createVNode"])("tr",null,[G,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(a.order.user.tel),1)]),Object(c["createVNode"])("tr",null,[U,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(a.order.user.address),1)])])):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createVNode"])("div",q,[E,z,Object(c["createVNode"])("textarea",{readonly:"",name:"",id:"",class:"w-100",value:a.order.message},null,8,["value"])]),Object(c["createVNode"])("div",null,[A,Object(c["createVNode"])("table",H,[Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.order.products,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:t},[Object(c["createVNode"])("th",I,Object(c["toDisplayString"])(t.product.title),1),Object(c["createVNode"])("td",K,Object(c["toDisplayString"])(t.qty)+" "+Object(c["toDisplayString"])(t.product.unit),1),Object(c["createVNode"])("td",Q,Object(c["toDisplayString"])(e.$toCurrency(t.final_total)),1)])})),128))])])])]),R])])],512)}var X=a("519a"),Y={props:["order"],mixins:[X["a"]]};Y.render=W;var Z=Y,ee={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},te={class:"modal-dialog"},ae={class:"modal-content"},ce=Object(c["createVNode"])("div",{class:"modal-header bg-danger text-light"},[Object(c["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除訂單"),Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),oe={class:"modal-body"},re={class:"table"},ne=Object(c["createVNode"])("th",null,"訂單日期",-1),le=Object(c["createVNode"])("th",null,"訂購姓名",-1),de=Object(c["createVNode"])("th",null,"訂單金額",-1),ie={class:"modal-footer"},se=Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function be(e,t,a,o,r,n){var l;return Object(c["openBlock"])(),Object(c["createBlock"])("div",ee,[Object(c["createVNode"])("div",te,[Object(c["createVNode"])("div",ae,[ce,Object(c["createVNode"])("div",oe,[Object(c["createVNode"])("table",re,[Object(c["createVNode"])("tbody",null,[Object(c["createVNode"])("tr",null,[ne,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.$timeTransformer(a.order.create_at)),1)]),Object(c["createVNode"])("tr",null,[le,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(null===(l=a.order.user)||void 0===l?void 0:l.name),1)]),Object(c["createVNode"])("tr",null,[de,Object(c["createVNode"])("td",null,"NT$ "+Object(c["toDisplayString"])(e.$toCurrency(a.order.total)),1)])])])]),Object(c["createVNode"])("div",ie,[se,Object(c["createVNode"])("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=function(t){return e.$emit("delete",a.order.id)})}," 確認刪除 ")])])])],512)}var Oe={props:["order"],mixins:[X["a"]]};Oe.render=be;var je=Oe,ue={components:{OrderModal:Z,Pagination:g["a"],DeleteOrderModal:je},data:function(){return{orders:[],pagination:{},order:[],isLoading:!1}},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/orders?page=").concat(t);this.$http.get(a).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1})).catch((function(e){console.log(e)}))},openModal:function(e){this.$refs.orderModal.openModal(),this.order=JSON.parse(JSON.stringify(e))},openDeleteModal:function(e){this.$refs.deleteModal.openModal(),this.order=JSON.parse(JSON.stringify(e))},updatePaid:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/order/").concat(e.id),c={is_paid:e.is_paid};this.$http.put(a,{data:c}).then((function(){t.isLoading=!1}))},deleteOrder:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("randomno","/admin/order/").concat(e);this.$http.delete(a).then((function(){t.isLoading=!1,t.getData(t.pagination.current_page)})).catch()}},mounted:function(){this.getData()}};ue.render=m;t["default"]=ue},b0c0:function(e,t,a){var c=a("83ab"),o=a("9bf2").f,r=Function.prototype,n=r.toString,l=/^\s*function ([^ (]*)/,d="name";c&&!(d in r)&&o(r,d,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},d0a4:function(e,t,a){"use strict";var c=a("7a23"),o={"aria-label":"Page navigation example"},r={class:"pagination d-flex justify-content-center"},n=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),l=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,a,d,i,s){return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("nav",o,[Object(c["createVNode"])("ul",r,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_pre}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(t){return e.$emit("get-data",a.page.current_page-1)}),["prevent"]))},[n])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.page.total_pages,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["page-item",{active:t===a.page.current_page}],key:t},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(a){return e.$emit("get-data",t)}),["prevent"])},Object(c["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_next}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(t){return e.$emit("get-data",a.page.current_page+1)}),["prevent"]))},[l])],2)])])])}var i={props:["page"]};i.render=d;t["a"]=i}}]);
//# sourceMappingURL=chunk-42ad4336.f44cb15f.js.map