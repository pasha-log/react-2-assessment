(this["webpackJsonpsnack-or-booze"]=this["webpackJsonpsnack-or-booze"]||[]).push([[0],{43:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(13),s=c.n(r),a=(c(43),c(44),c(10)),i=(c(45),c(46),c(4)),j=c(3);var o=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(i.n,{expand:"md",children:[Object(j.jsx)(a.c,{exact:!0,to:"/",className:"navbar-brand",children:"\ud83c\udf74Snack or Booze\ud83c\udf78"}),Object(j.jsxs)(i.l,{className:"ml-auto",navbar:!0,children:[Object(j.jsx)(i.m,{children:Object(j.jsx)(a.c,{to:"/snacks",children:"Snacks"})}),Object(j.jsx)(i.m,{children:Object(j.jsx)(a.c,{to:"/drinks",children:"Drinks"})}),Object(j.jsx)(i.m,{children:Object(j.jsx)(a.c,{to:"/new-product",children:"New Item"})})]})]})})},d=c(12),b=c(16),l=c(17),h=c(5);var u=function(e){var t=e.snacks,c=e.drinks;return Object(j.jsx)("section",{className:"col-md-8",children:Object(j.jsx)(i.b,{children:Object(j.jsx)(i.c,{className:"text-center",children:Object(j.jsxs)(i.e,{children:[Object(j.jsx)("h3",{className:"font-weight-bold",children:"Welcome to Silicon Valley's premier dive cafe!"}),Object(j.jsxs)("p",{children:["We have ",t.length," different snacks & ",c.length," different drinks..."]})]})})})})};c(55);var O=function(e){var t=e.products,c=e.title;return Object(j.jsx)("section",{className:"col-md-4",children:Object(j.jsx)(i.b,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsxs)(i.e,{className:"font-weight-bold text-center",children:[c," Menu"]}),Object(j.jsx)(i.d,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(j.jsx)(i.j,{children:t.map((function(e){return Object(j.jsx)(a.b,{to:"/".concat(c,"/").concat(e.id),children:Object(j.jsx)(i.k,{children:e.name})},e.id)}))})]})})})};var x=function(e){var t=e.items,c=e.cantFind,n=Object(h.h)().id,r=t.find((function(e){return e.id===n}));return r?Object(j.jsx)("section",{children:Object(j.jsx)(i.b,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.e,{className:"font-weight-bold text-center",children:r.name}),Object(j.jsx)(i.d,{className:"font-italic",children:r.description}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Recipe:"})," ",r.recipe]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Serve:"})," ",r.serve]})]})})}):Object(j.jsx)(h.a,{to:c})},p=c(18),m=c(20),f=(c(56),function(e){var t=e.addProduct,c=Object(h.g)(),r={productType:"",name:"",description:"",recipe:"",serve:""},s=Object(n.useState)(r),a=Object(l.a)(s,2),o=a[0],d=a[1],b=function(e){var t=e.target,c=t.name,n=t.value;d((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},c,n))}))},u=function(e){e.preventDefault(),t(Object(m.a)({},o)),d(r),c.push("/")};return Object(j.jsx)("section",{className:"col-md-4",children:Object(j.jsx)(i.b,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.e,{className:"font-weight-bold text-center",children:"New Menu Item Form"}),Object(j.jsxs)(i.f,{onSubmit:u,children:[Object(j.jsx)(i.i,{children:"Product Type"}),Object(j.jsxs)(i.g,{check:!0,children:[Object(j.jsx)(i.h,{name:"productType",type:"radio",value:"snacks",onChange:b})," ",Object(j.jsx)(i.i,{check:!0,children:"Snack"})]}),Object(j.jsxs)(i.g,{check:!0,children:[Object(j.jsx)(i.h,{name:"productType",type:"radio",value:"drinks",onChange:b})," ",Object(j.jsx)(i.i,{check:!0,children:"Drink"})]}),Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.i,{for:"name",children:"Product name"}),Object(j.jsx)(i.h,{id:"name",name:"name",value:o.name,placeholder:"What is the name of the product?",onChange:b})]}),Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.i,{for:"description",children:"Product description"}),Object(j.jsx)(i.h,{id:"description",name:"description",type:"textarea",value:o.description,placeholder:"What is the description of the product?",onChange:b})]}),Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.i,{for:"recipe",children:"Product recipe"}),Object(j.jsx)(i.h,{id:"recipe",name:"recipe",type:"textarea",value:o.recipe,placeholder:"What is the recipe of the product?",onChange:b})]}),Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.i,{for:"serve",children:"Product serve"}),Object(j.jsx)(i.h,{id:"serve",name:"serve",type:"textarea",value:o.serve,placeholder:"How is the product served?",onChange:b})]}),Object(j.jsx)(i.a,{onClick:u,children:"Submit"})]})]})})})}),v=c(37),k=c(38),g=c(27),w=c.n(g),y="http://localhost:5000",N=function(){function e(){Object(v.a)(this,e)}return Object(k.a)(e,null,[{key:"getProducts",value:function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(y,"/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createProduct",value:function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(y,"/").concat(t.productType),{id:"".concat(t.name.replace(/\s+/g,"-").toLowerCase()),name:"".concat(t.name),description:"".concat(t.description),recipe:"".concat(t.recipe),serve:"".concat(t.serve)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=N,P=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(l.a)(s,2),i=a[0],o=a[1],p=Object(n.useState)([]),m=Object(l.a)(p,2),v=m[0],k=m[1];Object(n.useEffect)((function(){function e(){return e=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getProducts("snacks");case 2:return t=e.sent,e.next=5,S.getProducts("drinks");case 5:c=e.sent,o(t),k(c),r(!1);case 9:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,v]);return c?Object(j.jsx)("p",{children:"Loading \u2026"}):Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.b,{exact:!0,path:"/",children:Object(j.jsx)(u,{snacks:i,drinks:v})}),Object(j.jsx)(h.b,{exact:!0,path:"/Snacks",children:Object(j.jsx)(O,{products:i,title:"Snacks"})}),Object(j.jsx)(h.b,{path:"/Snacks/:id",children:Object(j.jsx)(x,{items:i,cantFind:"/snacks"})}),Object(j.jsx)(h.b,{exact:!0,path:"/Drinks",children:Object(j.jsx)(O,{products:v,title:"Drinks"})}),Object(j.jsx)(h.b,{path:"/Drinks/:id",children:Object(j.jsx)(x,{items:v,cantFind:"/drinks"})}),Object(j.jsx)(h.b,{path:"/new-product",children:Object(j.jsx)(f,{addProduct:function(e){function t(){return(t=Object(b.a)(Object(d.a)().mark((function t(){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.createProduct(e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}})}),Object(j.jsx)(h.b,{children:Object(j.jsx)("p",{className:"Error",children:"Hmmm. I can't seem to find what you want."})})]})};var C=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{children:Object(j.jsx)(P,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.6624fe80.chunk.js.map