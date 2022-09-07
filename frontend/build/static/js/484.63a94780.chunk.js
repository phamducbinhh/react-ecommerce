"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[484],{8255:function(n,e,r){r(2791);var i=r(184);e.Z=function(){return(0,i.jsx)("div",{className:"section secton-center",children:(0,i.jsx)("div",{className:"loading"})})}},1997:function(n,e,r){r.d(e,{Z:function(){return s}});var i=r(5572),t=r(184);function s(n){return(0,t.jsx)(i.Z,{variant:n.variant||"info",children:n.children})}},8412:function(n,e,r){r.d(e,{Z:function(){return E}});var i,t,s,a,o,c,d=r(1413),l=r(5987),u=r(168),h=(r(2791),r(6444)),p=r(3504),x=r(2007),Z=r.n(x),f=r(184),g=h.ZP.div(i||(i=(0,u.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),v=function(n){var e=n.size,r=void 0===e?"40px":e,i=n.borderSize,t=void 0===i?"5px":i;return(0,f.jsx)(g,{size:r,borderSize:t})},y=["type","onClick","children","kind"],j=h.ZP.button(t||(t=(0,u.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"45px"}),(function(n){return"secondary"===n.kind&&(0,h.iv)(s||(s=(0,u.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,h.iv)(a||(a=(0,u.Z)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}))}),(function(n){return"ghost"===n.kind&&(0,h.iv)(o||(o=(0,u.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 100%;\n    "])),(function(n){return n.theme.grayLight}))}),(function(n){return"ship"===n.kind&&(0,h.iv)(c||(c=(0,u.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 50%;\n    "])),(function(n){return n.theme.grayLight}))})),m=function(n){var e=n.type,r=void 0===e?"button":e,i=n.onClick,t=void 0===i?function(){}:i,s=n.children,a=n.kind,o=void 0===a?"primary":a,c=(0,l.Z)(n,y),u=c.isLoading,h=c.to,x=u?(0,f.jsx)(v,{}):s;return""!==h&&"string"===typeof h?(0,f.jsx)(p.NavLink,{to:h,style:{display:"inline-block"},children:(0,f.jsx)(j,(0,d.Z)((0,d.Z)({type:r,kind:o},c),{},{children:x}))}):(0,f.jsx)(j,(0,d.Z)((0,d.Z)({type:r,kind:o,onClick:t},c),{},{children:x}))};m.prototype={type:Z().oneOf(["button","submit"]),onClick:Z().func,children:Z().node,kind:Z().string,isLoading:Z().bool,to:Z().oneOf(["primary","secondary","ghost"])};var E=m},3298:function(n,e,r){var i,t=r(168),s=(r(2791),r(6444)),a=r(184),o=s.ZP.h2(i||(i=(0,t.Z)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 55px;\n  color: var(--clr-primary-5);\n  @media only screen and (max-width: 740px) {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n"])));e.Z=function(n){var e=n.className,r=void 0===e?"":e,i=n.children;return(0,a.jsx)(o,{className:r,children:i})}},9864:function(n,e,r){r.d(e,{E:function(){return s},I:function(){return t}});var i=r(1413),t=function(n,e){switch(e.type){case"FETCH_REQUEST":return(0,i.Z)((0,i.Z)({},n),{},{loading:!0,error:""});case"FETCH_SUCCESS":return(0,i.Z)((0,i.Z)({},n),{},{loading:!1,order:e.payload,error:""});case"FETCH_FAIL":return(0,i.Z)((0,i.Z)({},n),{},{loading:!1,error:e.payload});case"PAY_REQUEST":return(0,i.Z)((0,i.Z)({},n),{},{loadingPay:!0});case"PAY_SUCCESS":return(0,i.Z)((0,i.Z)({},n),{},{loadingPay:!1,successPay:!0});case"PAY_FAIL":return(0,i.Z)((0,i.Z)({},n),{},{loadingPay:!1});case"PAY_RESET":return(0,i.Z)((0,i.Z)({},n),{},{loadingPay:!1,successPay:!1});case"DELIVER_REQUEST":return(0,i.Z)((0,i.Z)({},n),{},{loadingDeliver:!0});case"DELIVER_SUCCESS":return(0,i.Z)((0,i.Z)({},n),{},{loadingDeliver:!1,successDeliver:!0});case"DELIVER_FAIL":return(0,i.Z)((0,i.Z)({},n),{},{loadingDeliver:!1});case"DELIVER_RESET":return(0,i.Z)((0,i.Z)({},n),{},{loadingDeliver:!1,successDeliver:!1});default:return n}},s={loading:!0,order:{},error:"",successPay:!1,loadingPay:!1}},9484:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var i,t=r(8214),s=r(5861),a=r(885),o=r(168),c=r(4569),d=r.n(c),l=r(2791),u=r(9743),h=r(2677),p=r(2144),x=r(6871),Z=r(1687),f=r(8255),g=r(1997),v=r(8419),y=r(9864),j=r(6444),m=r(184),E=function(n){var e=n.order;return(0,m.jsxs)(p.Z.Body,{children:[(0,m.jsx)(p.Z.Title,{children:"\u0110\u01a1n H\xe0ng"}),(0,m.jsxs)(p.Z.Text,{children:[(0,m.jsx)("strong",{children:"S\u1ea3n Ph\u1ea9m:"})," ",e.shippingAddress.fullName," ",(0,m.jsx)("br",{}),(0,m.jsx)("strong",{children:"\u0110\u1ecba Ch\u1ec9: "})," ",e.shippingAddress.address,e.shippingAddress.city,", ",e.shippingAddress.postalCode,",",e.shippingAddress.country]}),e.isDelivered?(0,m.jsxs)(g.Z,{variant:"success",children:["\u0110ang Giao H\xe0ng ",e.deliveredAt]}):(0,m.jsx)(g.Z,{variant:"danger",children:"Ch\u01b0a Giao H\xe0ng"})]})},b=function(n){var e=n.order;return(0,m.jsxs)(p.Z.Body,{children:[(0,m.jsx)(p.Z.Title,{children:"Thanh To\xe1n"}),(0,m.jsxs)(p.Z.Text,{children:[(0,m.jsx)("strong",{children:"Ph\u01b0\u01a1ng Th\u1ee9c:"})," ",e.paymentMethod]}),e.isPaid?(0,m.jsxs)(g.Z,{variant:"success",children:["\u0110\xe3 Thanh To\xe1n ",e.paidAt]}):(0,m.jsx)(g.Z,{variant:"danger",children:"Ch\u01b0a Thanh To\xe1n"})]})},k=r(4414),P=r(3504),S=function(n){var e=n.order;return(0,m.jsxs)(p.Z.Body,{children:[(0,m.jsx)(p.Z.Title,{children:"S\u1ea3n Ph\u1ea9m"}),(0,m.jsx)(k.Z,{variant:"flush",children:e.orderItems.map((function(n){return(0,m.jsx)(k.Z.Item,{children:(0,m.jsxs)(u.Z,{className:"align-items-center",children:[(0,m.jsxs)(h.Z,{md:6,children:[(0,m.jsx)("img",{src:n.image,alt:n.name,className:"image"})," ",(0,m.jsx)(P.Link,{to:"/product/".concat(n.slug),children:n.name})]}),(0,m.jsx)(h.Z,{md:3,children:(0,m.jsx)("span",{children:n.quantity})}),(0,m.jsxs)(h.Z,{md:3,children:["$",n.price]})]})},n._id)}))})]})},T=r(1299),C=r(8412),_=function(n){var e=n.order,r=n.isPending,i=n.loadingPay,t=n.createOrder,s=n.onApprove,a=n.onError,o=n.deliverOrderHandler,c=n.loadingDeliver,d=(0,Z.o)().state.userInfo;return(0,m.jsxs)(p.Z.Body,{children:[(0,m.jsx)(p.Z.Title,{children:"Th\xe0nh Ti\u1ec1n"}),(0,m.jsxs)(k.Z,{variant:"flush",children:[(0,m.jsx)(k.Z.Item,{children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(h.Z,{children:"Ti\u1ec1n h\xe0ng"}),(0,m.jsxs)(h.Z,{children:["$",e.itemsPrice.toFixed(2)]})]})}),(0,m.jsx)(k.Z.Item,{children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(h.Z,{children:"Ph\xed v\u1eadn chuy\u1ec3n"}),(0,m.jsxs)(h.Z,{children:["$",e.shippingPrice.toFixed(2)]})]})}),(0,m.jsx)(k.Z.Item,{children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(h.Z,{children:"Thu\u1ebf"}),(0,m.jsxs)(h.Z,{children:["$",e.taxPrice.toFixed(2)]})]})}),(0,m.jsx)(k.Z.Item,{children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(h.Z,{children:(0,m.jsx)("strong",{children:"T\u1ed5ng c\u1ed9ng"})}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)("strong",{children:["$",e.totalPrice.toFixed(2)]})})]})}),!e.isPaid&&(0,m.jsxs)(k.Z.Item,{children:[r?(0,m.jsx)(f.Z,{}):(0,m.jsx)("div",{children:(0,m.jsx)(T.ch,{createOrder:t,onApprove:s,onError:a})}),i&&(0,m.jsx)(f.Z,{})]}),d.isAdmin&&e.isPaid&&!e.isDelivered&&(0,m.jsx)(k.Z.Item,{children:(0,m.jsx)("div",{className:"d-grid",children:(0,m.jsx)(C.Z,{type:"button",kind:"ghost",onClick:o,isLoading:c,children:"X\xe1c Nh\u1eadn Giao H\xe0ng"})})})]})]})},A=r(1830),I=r.n(A),w=r(3298),L=r(9085),D=j.ZP.div(i||(i=(0,o.Z)(["\n  min-height: 100vh;\n  padding: 40px;\n  .image {\n    width: 50px;\n    height: 50px;\n    object-fit: cover;\n  }\n"]))),R=function(){var n=(0,Z.o)().state.userInfo,e=(0,x.UO)().id,r=(0,x.s0)(),i=(0,l.useReducer)(y.I,y.E),o=(0,a.Z)(i,2),c=o[0],j=c.loading,k=c.error,P=c.order,C=c.successPay,A=c.loadingPay,R=c.loadingDeliver,F=c.successDeliver,z=o[1],U=(0,T.Up)(),H=(0,a.Z)(U,2),N=H[0].isPending,B=H[1];(0,l.useEffect)((function(){var i=function(){var r=(0,s.Z)((0,t.Z)().mark((function r(){var i,s;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,z({type:"FETCH_REQUEST"}),r.next=4,d().get("/api/orders/".concat(e),{headers:{authorization:"Bearer ".concat(n.token)}});case 4:i=r.sent,s=i.data,z({type:"FETCH_SUCCESS",payload:s}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),z({type:"FETCH_FAIL",payload:(0,v.by)(r.t0)});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();if(!n)return r("/signin");if(!P._id||C||F||P._id&&P._id!==e)i(),C&&z({type:"PAY_RESET"}),F&&z({type:"DELIVER_RESET"});else{var a=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/api/keys/paypal",{headers:{authorization:"Bearer ".concat(n.token)}});case 2:r=e.sent,i=r.data,B({type:"resetOptions",value:{"client-id":i,currency:"USD"}}),B({type:"setLoadingStatus",value:"pending"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a()}}),[P,n,e,r,B,C,F]);var O=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z({type:"DELIVER_REQUEST"}),e.next=4,d().put("/api/orders/".concat(P._id,"/deliver"),{},{headers:{authorization:"Bearer ".concat(n.token)}});case 4:r=e.sent,i=r.data,z({type:"DELIVER_SUCCESS",payload:i}),I().fire("S\u1ea3n Ph\u1ea9m M\u1edbi!","Giao H\xe0ng Th\xe0nh C\xf4ng","success"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),L.Am.error((0,v.by)(e.t0)),z({type:"DELIVER_FAIL"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return j?(0,m.jsx)(f.Z,{}):k?(0,m.jsx)(g.Z,{variant:"danger",children:k}):(0,m.jsxs)(D,{children:[(0,m.jsxs)(w.Z,{children:["\u0110\u01a1n H\xe0ng ",e]}),(0,m.jsxs)(u.Z,{children:[(0,m.jsxs)(h.Z,{md:8,children:[(0,m.jsx)(p.Z,{className:"mb-3",children:(0,m.jsx)(E,{order:P})}),(0,m.jsx)(p.Z,{className:"mb-3",children:(0,m.jsx)(b,{order:P})}),(0,m.jsx)(p.Z,{className:"mb-3",children:(0,m.jsx)(S,{order:P})})]}),(0,m.jsx)(h.Z,{md:4,children:(0,m.jsx)(p.Z,{className:"mb-3",children:(0,m.jsx)(_,{order:P,isPending:N,loadingPay:A,createOrder:function(n,e){return e.order.create({purchase_units:[{amount:{value:P.totalPrice}}]}).then((function(n){return n}))},onApprove:function(e,r){return r.order.capture().then(function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r){var i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z({type:"PAY_REQUEST"}),e.next=4,d().put("/api/orders/".concat(P._id,"/pay"),r,{headers:{authorization:"Bearer ".concat(n.token)}});case 4:i=e.sent,s=i.data,z({type:"PAY_SUCCESS",payload:s}),I().fire({position:"center",icon:"success",title:"Th\xe0nh C\xf4ng",showConfirmButton:!1,timer:1500}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),z({type:"PAY_FAIL",payload:(0,v.by)(e.t0)}),I().fire("Failed","error","warning");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}())},onError:function(n){console.log((0,v.by)(n))},deliverOrderHandler:O,loadingDeliver:R})})})]})]})}}}]);
//# sourceMappingURL=484.63a94780.chunk.js.map