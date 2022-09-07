"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[107],{8412:function(n,r,e){e.d(r,{Z:function(){return w}});var i,t,o,a,s,d,l=e(1413),c=e(5987),u=e(168),p=(e(2791),e(6444)),h=e(3504),m=e(2007),f=e.n(m),x=e(184),g=p.ZP.div(i||(i=(0,u.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),b=function(n){var r=n.size,e=void 0===r?"40px":r,i=n.borderSize,t=void 0===i?"5px":i;return(0,x.jsx)(g,{size:e,borderSize:t})},v=["type","onClick","children","kind"],Z=p.ZP.button(t||(t=(0,u.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"45px"}),(function(n){return"secondary"===n.kind&&(0,p.iv)(o||(o=(0,u.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,p.iv)(a||(a=(0,u.Z)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}))}),(function(n){return"ghost"===n.kind&&(0,p.iv)(s||(s=(0,u.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 100%;\n    "])),(function(n){return n.theme.grayLight}))}),(function(n){return"ship"===n.kind&&(0,p.iv)(d||(d=(0,u.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 50%;\n    "])),(function(n){return n.theme.grayLight}))})),y=function(n){var r=n.type,e=void 0===r?"button":r,i=n.onClick,t=void 0===i?function(){}:i,o=n.children,a=n.kind,s=void 0===a?"primary":a,d=(0,c.Z)(n,v),u=d.isLoading,p=d.to,m=u?(0,x.jsx)(b,{}):o;return""!==p&&"string"===typeof p?(0,x.jsx)(h.NavLink,{to:p,style:{display:"inline-block"},children:(0,x.jsx)(Z,(0,l.Z)((0,l.Z)({type:e,kind:s},d),{},{children:m}))}):(0,x.jsx)(Z,(0,l.Z)((0,l.Z)({type:e,kind:s,onClick:t},d),{},{children:m}))};y.prototype={type:f().oneOf(["button","submit"]),onClick:f().func,children:f().node,kind:f().string,isLoading:f().bool,to:f().oneOf(["primary","secondary","ghost"])};var w=y},7157:function(n,r,e){var i,t=e(168),o=(e(2791),e(6444)),a=e(184),s=o.ZP.div(i||(i=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 20px;\n  margin-bottom: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));r.Z=function(n){var r=n.children;return(0,a.jsx)(s,{children:r})}},4321:function(n,r,e){var i,t=e(1413),o=e(5987),a=e(168),s=(e(2791),e(6444)),d=e(1134),l=e(184),c=["name","type","children","value","control"],u=s.ZP.div(i||(i=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    width: 100%;\n    padding: ",";\n    background-color: ",";\n    border-radius: 8px;\n    font-weight: 500;\n    transition: all 0.2s linear;\n    border: 1px solid transparent;\n    outline: none;\n  }\n  input:focus {\n    background-color: white;\n    border-color: var(--clr-primary-1);\n  }\n  input::-webkit-input-placeholder {\n    color: #84878b;\n  }\n  input::-moz-input-placeholder {\n    color: #84878b;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n  @media only screen and (max-width: 740px) {\n    input {\n      padding: 12px;\n    }\n    input::-webkit-input-placeholder {\n      font-size: 12px;\n    }\n    input::-moz-input-placeholder {\n      color: #84878b;\n    }\n  }\n"])),(function(n){return n.hasIcon?"10px 60px 10px 20px":"10px"}),(function(n){return n.theme.grayLight}));r.Z=function(n){var r=n.name,e=void 0===r?"":r,i=n.type,a=void 0===i?"text":i,s=n.children,p=(n.value,n.control),h=(0,o.Z)(n,c),m=(0,d.bc)({control:p,name:e,defaultValue:""}).field;return(0,l.jsxs)(u,{hasIcon:!!s,children:[(0,l.jsx)("input",(0,t.Z)((0,t.Z)({id:e,type:a},m),h)),s?(0,l.jsx)("div",{className:"input-icon",children:s}):null]})}},3014:function(n,r,e){var i,t=e(1413),o=e(5987),a=e(168),s=(e(2791),e(6444)),d=e(184),l=["htmlFor","children"],c=s.ZP.label(i||(i=(0,a.Z)(["\n  font-weight: 600;\n  cursor: pointer;\n"])));r.Z=function(n){var r=n.htmlFor,e=void 0===r?"":r,i=n.children,a=(0,o.Z)(n,l);return(0,d.jsx)(c,(0,t.Z)((0,t.Z)({htmlFor:e},a),{},{children:i}))}},3298:function(n,r,e){var i,t=e(168),o=(e(2791),e(6444)),a=e(184),s=o.ZP.h2(i||(i=(0,t.Z)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 55px;\n  color: var(--clr-primary-5);\n  @media only screen and (max-width: 740px) {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n"])));r.Z=function(n){var r=n.className,e=void 0===r?"":r,i=n.children;return(0,a.jsx)(s,{className:e,children:i})}},6107:function(n,r,e){e.r(r);var i,t=e(8214),o=e(5861),a=e(168),s=e(4569),d=e.n(s),l=(e(2791),e(1134)),c=e(6871),u=e(3504),p=e(9085),h=e(6444),m=e(1830),f=e.n(m),x=e(8412),g=e(7157),b=e(4321),v=e(3014),Z=e(1687),y=e(3298),w=e(184),j=h.ZP.div(i||(i=(0,a.Z)(["\n  min-height: 100vh;\n  padding: 40px;\n  .form {\n    max-width: 800px;\n    margin: 50px auto;\n  }\n"])));r.default=function(){var n=(0,c.s0)(),r=(0,Z.o)().dispatch,e=(0,l.cI)(),i=e.control,a=e.handleSubmit,s=e.formState.isSubmitting,h=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(i){var o,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.password===i.confirmPassword){e.next=3;break}return f().fire("Failed","Confirm Password Failed","warning"),e.abrupt("return");case 3:return e.prev=3,e.next=6,d().post("/api/users/signup",{name:i.name,email:i.email,password:i.password});case 6:o=e.sent,a=o.data,r({type:"USER_SIGNIN",payload:a}),f().fire({position:"center",icon:"success",title:"\u0110\u0103ng Nh\u1eadp Th\xe0nh C\xf4ng",showConfirmButton:!1,timer:1500}),n("/"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),p.Am.error(e.t0.message,{pauseOnHover:!1,delay:0}),f().fire("Failed","Login Failed","warning");case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsxs)(j,{children:[(0,w.jsx)(y.Z,{children:"\u0110\u0103ng K\xfd T\xe0i Kho\u1ea3n"}),(0,w.jsxs)("form",{className:"form",onSubmit:a(h),children:[(0,w.jsxs)("div",{className:"form-layout",children:[(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(v.Z,{htmlFor:"name",children:"T\xean"}),(0,w.jsx)(b.Z,{name:"name",type:"text",placeholder:"Nh\u1eadp T\xean",required:!0,control:i})]}),(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(v.Z,{htmlFor:"email",children:"Email"}),(0,w.jsx)(b.Z,{name:"email",type:"email",placeholder:"Nh\u1eadp Email",required:!0,control:i})]})]}),(0,w.jsxs)("div",{className:"form-layout",children:[(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(v.Z,{htmlFor:"password",children:"M\u1eadt Kh\u1ea9u"}),(0,w.jsx)(b.Z,{name:"password",type:"password",placeholder:"Nh\u1eadp M\u1eadt Kh\u1ea9u",control:i,required:!0})]}),(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(v.Z,{htmlFor:"confirmPassword",children:"X\xe1c Nh\u1eadn M\u1eadt Kh\u1ea9u"}),(0,w.jsx)(b.Z,{name:"confirmPassword",type:"password",placeholder:"Nh\u1eadp L\u1ea1i M\u1eadt Kh\u1ea9u",required:!0,control:i})]})]}),(0,w.jsxs)("div",{className:"flex justify-between w-full mx-auto",children:[(0,w.jsxs)("div",{className:"mb-4 font-semibold text-gray-800",children:["B\u1ea1n \u0110\xe3 C\xf3 T\xe0i Kho\u1ea3n?"," ",(0,w.jsx)(u.NavLink,{to:"/signin",className:"font-bold text-primary",children:"\u0110\u0103ng Nh\u1eadp"})," "]}),(0,w.jsx)(x.Z,{type:"submit",kind:"ship",isLoading:s,disabled:s,children:"\u0110\u0103ng K\xfd"})]})]})]})}}}]);
//# sourceMappingURL=107.9cc04964.chunk.js.map