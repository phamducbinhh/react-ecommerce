"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[475],{7993:function(n,e,r){r(2791);var t=r(184);e.Z=function(n){var e=n.onClick,r=void 0===e?function(){}:e;return(0,t.jsx)("span",{className:"flex items-center justify-center w-10 h-10 text-red-500 border border-gray-200 rounded cursor-pointer hover:text-red-600",onClick:r,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})}},8255:function(n,e,r){r(2791);var t=r(184);e.Z=function(){return(0,t.jsx)("div",{className:"section secton-center",children:(0,t.jsx)("div",{className:"loading"})})}},3715:function(n,e,r){r.d(e,{Z:function(){return p}});var t=r(1413),i=r(5987),o=r(1694),a=r.n(o),c=r(2791),s=r(162),d=r(184),u=["bsPrefix","variant","animation","size","as","className"],l=c.forwardRef((function(n,e){var r=n.bsPrefix,o=n.variant,c=n.animation,l=n.size,h=n.as,p=void 0===h?"div":h,f=n.className,x=(0,i.Z)(n,u);r=(0,s.vE)(r,"spinner");var m="".concat(r,"-").concat(c);return(0,d.jsx)(p,(0,t.Z)((0,t.Z)({ref:e},x),{},{className:a()(f,m,l&&"".concat(m,"-").concat(l),o&&"text-".concat(o))}))}));l.displayName="Spinner";var h=l;function p(){return(0,d.jsx)(h,{animation:"border",role:"status",children:(0,d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},1997:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(5572),i=r(184);function o(n){return(0,i.jsx)(t.Z,{variant:n.variant||"info",children:n.children})}},8412:function(n,e,r){r.d(e,{Z:function(){return j}});var t,i,o,a,c,s,d=r(1413),u=r(5987),l=r(168),h=(r(2791),r(6444)),p=r(3504),f=r(2007),x=r.n(f),m=r(184),v=h.ZP.div(t||(t=(0,l.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),g=function(n){var e=n.size,r=void 0===e?"40px":e,t=n.borderSize,i=void 0===t?"5px":t;return(0,m.jsx)(v,{size:r,borderSize:i})},y=["type","onClick","children","kind"],E=h.ZP.button(i||(i=(0,l.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"45px"}),(function(n){return"secondary"===n.kind&&(0,h.iv)(o||(o=(0,l.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,h.iv)(a||(a=(0,l.Z)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}))}),(function(n){return"ghost"===n.kind&&(0,h.iv)(c||(c=(0,l.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 100%;\n    "])),(function(n){return n.theme.grayLight}))}),(function(n){return"ship"===n.kind&&(0,h.iv)(s||(s=(0,l.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 50%;\n    "])),(function(n){return n.theme.grayLight}))})),Z=function(n){var e=n.type,r=void 0===e?"button":e,t=n.onClick,i=void 0===t?function(){}:t,o=n.children,a=n.kind,c=void 0===a?"primary":a,s=(0,u.Z)(n,y),l=s.isLoading,h=s.to,f=l?(0,m.jsx)(g,{}):o;return""!==h&&"string"===typeof h?(0,m.jsx)(p.NavLink,{to:h,style:{display:"inline-block"},children:(0,m.jsx)(E,(0,d.Z)((0,d.Z)({type:r,kind:c},s),{},{children:f}))}):(0,m.jsx)(E,(0,d.Z)((0,d.Z)({type:r,kind:c,onClick:i},s),{},{children:f}))};Z.prototype={type:x().oneOf(["button","submit"]),onClick:x().func,children:x().node,kind:x().string,isLoading:x().bool,to:x().oneOf(["primary","secondary","ghost"])};var j=Z},3298:function(n,e,r){var t,i=r(168),o=(r(2791),r(6444)),a=r(184),c=o.ZP.h2(t||(t=(0,i.Z)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 55px;\n  color: var(--clr-primary-5);\n  @media only screen and (max-width: 740px) {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n"])));e.Z=function(n){var e=n.className,r=void 0===e?"":e,t=n.children;return(0,a.jsx)(c,{className:r,children:t})}},3475:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,i=r(8214),o=r(5861),a=r(2982),c=r(885),s=r(168),d=r(2791),u=r(6444),l=r(1413),h=function(n,e){switch(e.type){case"FETCH_REQUEST":case"CREATE_REQUEST":return(0,l.Z)((0,l.Z)({},n),{},{loading:!0});case"FETCH_SUCCESS":return(0,l.Z)((0,l.Z)({},n),{},{products:e.payload.products,page:e.payload.page,pages:e.payload.pages,loading:!1});case"FETCH_FAIL":return(0,l.Z)((0,l.Z)({},n),{},{loading:!1,error:e.payload});case"CREATE_SUCCESS":case"CREATE_FAIL":return(0,l.Z)((0,l.Z)({},n),{},{loading:!1});case"DELETE_REQUEST":return(0,l.Z)((0,l.Z)({},n),{},{loading:!0,successDelete:!1});case"DELETE_SUCCESS":return(0,l.Z)((0,l.Z)({},n),{},{loading:!1,successDelete:!0});case"DELETE_FAILURE":case"DELETE_RESET":return(0,l.Z)((0,l.Z)({},n),{},{loading:!1,successDelete:!1});default:throw new Error}},p={loading:!0,error:""},f=r(4569),x=r.n(f),m=r(1687),v=r(6871),g=r(3504),y=r(8412),E=r(1830),Z=r.n(E),j=r(7993),k=r(184),b=function(n){var e=n.onClick,r=void 0===e?function(){}:e;return(0,k.jsx)("span",{className:"flex items-center justify-center w-10 h-10 text-green-500 border border-gray-200 rounded cursor-pointer hover:text-green-800",onClick:r,children:(0,k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})})},w=r(8255),C=r(1997),S=r(9085),T=r(3715),N=function(n){var e=n.loading,r=n.error,t=n.products,a=n.loadingDelete,c=(n.successDelete,n.dispatch),s=(0,v.s0)(),u=(0,m.o)().state.userInfo,l=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Z().fire({text:"B\u1ea1n mu\u1ed1n x\xf3a ph\u1ea7n n\u1ea7y!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"X\xe1c Nh\u1eadn"}).then(function(){var n=(0,o.Z)((0,i.Z)().mark((function n(r){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.isConfirmed){n.next=13;break}return n.prev=1,c({type:"DELETE_REQUEST"}),n.next=5,x().delete("/api/products/".concat(e._id),{headers:{Authorization:"Bearer ".concat(u.token)}});case 5:c({type:"DELETE_SUCCESS"}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),S.Am.error(n.t0.message,{pauseOnHover:!1,delay:0}),c({type:"DELETE_FAILURE"});case 12:Z().fire("Deleted!","X\xf3a Th\xe0nh C\xf4ng.","success");case 13:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,k.jsxs)(d.Fragment,{children:[(0,k.jsxs)("table",{className:"section-center",children:[(0,k.jsx)("thead",{className:"uppercase thead",children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"\u1ea3nh"}),(0,k.jsx)("th",{children:"T\xcaN"}),(0,k.jsx)("th",{children:"GI\xc1"}),(0,k.jsx)("th",{children:"DANH M\u1ee4C"}),(0,k.jsx)("th",{children:"NH\xc3N HI\u1ec6U"}),(0,k.jsx)("th",{children:"CH\u1ec8NH S\u1eecA"})]})}),(0,k.jsx)("tbody",{children:!e&&!r&&(null===t||void 0===t?void 0:t.map((function(n){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)("div",{className:"max-w-[300px] h-[70px] overflow-hidden flex justify-center items-center mb-2",children:(0,k.jsx)("img",{src:n.image,alt:"",className:"object-cover w-[100px] h-full rounded-lg"})})}),(0,k.jsx)("td",{children:n.name}),(0,k.jsx)("td",{children:n.price}),(0,k.jsx)("td",{children:n.category}),(0,k.jsx)("td",{children:n.brand}),(0,k.jsx)("td",{children:(0,k.jsxs)("div",{className:"flex items-center justify-center gap-x-3",children:[(0,k.jsx)(b,{onClick:function(){return s("/admin/product/".concat(n._id))}}),(0,k.jsx)(j.Z,{onClick:function(){return l(n)}})]})})]},n._id)})))})]}),a&&(0,k.jsx)(T.Z,{}),e&&(0,k.jsx)(w.Z,{}),r&&(0,k.jsx)(C.Z,{variant:"danger",children:r})]})},L=r(3298),_=u.ZP.div(t||(t=(0,s.Z)(["\n  min-height: 100vh;\n  padding: 40px;\n  thead {\n    height: 50px;\n  }\n  tr {\n    height: 70px;\n  }\n  div {\n    text-align: center;\n    margin-top: 20px;\n  }\n  div a {\n    margin-right: 10px;\n  }\n  .text-bold {\n    background-color: var(--clr-primary-7);\n  }\n  @media only screen and (max-width: 740px) {\n    .add-product {\n      display: none;\n    }\n  }\n"]))),A=function(){var n=(0,m.o)().state,e=(0,v.s0)(),r=n.userInfo,t=(0,d.useReducer)(h,p),s=(0,c.Z)(t,2),u=s[0],l=u.products,f=u.loading,E=u.error,j=u.pages,b=u.loadingDelete,w=u.successDelete,C=s[1],T=(0,a.Z)(Array(j).keys()),A=(0,v.TH)().search,D=new URLSearchParams(A).get("page")||1;(0,d.useEffect)((function(){var n=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,C({type:"FETCH_REQUEST"}),n.next=4,x().get("/api/products/admin?page=".concat(D),{headers:{Authorization:"Bearer ".concat(r.token)}});case 4:e=n.sent,t=e.data,C({type:"FETCH_SUCCESS",payload:t}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),S.Am.error(n.t0.message,{pauseOnHover:!1,delay:0});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();w?C({type:"DELETE_RESET"}):n()}),[D,r,w]);var R=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Z().fire({text:"B\u1ea1n mu\u1ed1n th\xeam s\u1ea3n ph\u1ea9m m\u1edbi!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"X\xe1c Nh\u1eadn!"}).then(function(){var n=(0,o.Z)((0,i.Z)().mark((function n(t){var o,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.isConfirmed){n.next=16;break}return n.prev=1,C({type:"CREATE_REQUEST"}),n.next=5,x().post("/api/products",{},{headers:{Authorization:"Bearer ".concat(r.token)}});case 5:o=n.sent,a=o.data,C({type:"CREATE_SUCCESS"}),e("/admin/product/".concat(a.product._id)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),S.Am.error(n.t0.message,{pauseOnHover:!1,delay:0}),C({type:"CREATE_FAIL"});case 15:Z().fire("S\u1ea3n Ph\u1ea9m M\u1edbi!","Th\xeam s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng","success");case 16:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,k.jsxs)(_,{className:"artical-center",children:[(0,k.jsxs)("div",{className:"flex items-center justify-between add-product",children:[(0,k.jsx)(L.Z,{children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),(0,k.jsx)(y.Z,{kind:"ship",style:{width:"200px"},onClick:R,children:"Th\xeam S\u1ea3n Ph\u1ea9m"})]}),(0,k.jsx)(N,{loading:f,error:E,products:l,loadingDelete:b,successDelete:w,dispatch:C}),(0,k.jsx)("div",{children:T.map((function(n){return(0,k.jsx)(g.Link,{className:n+1===Number(D)?"btn text-bold":"btn",to:"/admin/products?page=".concat(n+1),children:n+1},n+1)}))})]})}}}]);
//# sourceMappingURL=475.789e2e42.chunk.js.map