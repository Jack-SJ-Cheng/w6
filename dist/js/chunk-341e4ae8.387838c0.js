(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341e4ae8"],{2383:function(e,a,l){"use strict";l.r(a);l("b0c0");var t=l("7a23"),r={class:"container m-top"},o={class:"mb-3"},c=Object(t["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),s={class:"mb-3"},n=Object(t["createVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),d={class:"mb-3"},m=Object(t["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),i={class:"mb-3"},u=Object(t["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),b={class:"mb-3"},f=Object(t["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1),V=Object(t["createVNode"])("div",{class:"text-end"},[Object(t["createVNode"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function O(e,a,l,O,j,p){var v=Object(t["resolveComponent"])("Field"),N=Object(t["resolveComponent"])("ErrorMessage"),h=Object(t["resolveComponent"])("Form");return Object(t["openBlock"])(),Object(t["createBlock"])("div",r,[Object(t["createVNode"])(h,{ref:"form",class:"col-md-6",onSubmit:e.createOrder},{default:Object(t["withCtx"])((function(l){var r=l.errors;return[Object(t["createVNode"])("div",o,[c,Object(t["createVNode"])(v,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":r["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:e.form.user.email,"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.form.user.email=a})},null,8,["class","modelValue"]),Object(t["createVNode"])(N,{name:"email",class:"invalid-feedback"})]),Object(t["createVNode"])("div",s,[n,Object(t["createVNode"])(v,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":r["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:e.form.user.name,"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.form.user.name=a})},null,8,["class","modelValue"]),Object(t["createVNode"])(N,{name:"姓名",class:"invalid-feedback"})]),Object(t["createVNode"])("div",d,[m,Object(t["createVNode"])(v,{id:"tel",name:"電話",type:"text",class:["form-control",{"is-invalid":r["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:e.form.user.tel,"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.form.user.tel=a})},null,8,["class","modelValue"]),Object(t["createVNode"])(N,{name:"電話",class:"invalid-feedback"})]),Object(t["createVNode"])("div",i,[u,Object(t["createVNode"])(v,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":r["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:e.form.user.address,"onUpdate:modelValue":a[4]||(a[4]=function(a){return e.form.user.address=a})},null,8,["class","modelValue"]),Object(t["createVNode"])(N,{name:"地址",class:"invalid-feedback"})]),Object(t["createVNode"])("div",b,[f,Object(t["withDirectives"])(Object(t["createVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":a[5]||(a[5]=function(a){return e.form.message=a})},null,512),[[t["vModelText"],e.form.message]])]),V]})),_:1},8,["onSubmit"])])}var j={data:function(){return{user:{email:"",name:"",tel:"",address:""}}}};j.render=O;a["default"]=j},b0c0:function(e,a,l){var t=l("83ab"),r=l("9bf2").f,o=Function.prototype,c=o.toString,s=/^\s*function ([^ (]*)/,n="name";t&&!(n in o)&&r(o,n,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-341e4ae8.387838c0.js.map