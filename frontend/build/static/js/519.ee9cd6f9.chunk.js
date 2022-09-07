/*! For license information please see 519.ee9cd6f9.chunk.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[519],{3715:function(n,r,e){"use strict";e.d(r,{Z:function(){return f}});var t=e(1413),i=e(5987),o=e(1694),a=e.n(o),s=e(2791),c=e(162),u=e(184),d=["bsPrefix","variant","animation","size","as","className"],l=s.forwardRef((function(n,r){var e=n.bsPrefix,o=n.variant,s=n.animation,l=n.size,p=n.as,f=void 0===p?"div":p,h=n.className,m=(0,i.Z)(n,d);e=(0,c.vE)(e,"spinner");var x="".concat(e,"-").concat(s);return(0,u.jsx)(f,(0,t.Z)((0,t.Z)({ref:r},m),{},{className:a()(h,x,l&&"".concat(x,"-").concat(l),o&&"text-".concat(o))}))}));l.displayName="Spinner";var p=l;function f(){return(0,u.jsx)(p,{animation:"border",role:"status",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},8412:function(n,r,e){"use strict";e.d(r,{Z:function(){return w}});var t,i,o,a,s,c,u=e(1413),d=e(5987),l=e(168),p=(e(2791),e(6444)),f=e(3504),h=e(2007),m=e.n(h),x=e(184),v=p.ZP.div(t||(t=(0,l.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),g=function(n){var r=n.size,e=void 0===r?"40px":r,t=n.borderSize,i=void 0===t?"5px":t;return(0,x.jsx)(v,{size:e,borderSize:i})},b=["type","onClick","children","kind"],Z=p.ZP.button(i||(i=(0,l.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"45px"}),(function(n){return"secondary"===n.kind&&(0,p.iv)(o||(o=(0,l.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,p.iv)(a||(a=(0,l.Z)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}))}),(function(n){return"ghost"===n.kind&&(0,p.iv)(s||(s=(0,l.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 100%;\n    "])),(function(n){return n.theme.grayLight}))}),(function(n){return"ship"===n.kind&&(0,p.iv)(c||(c=(0,l.Z)(["\n      color: ",";\n      background-color: var(--clr-primary-5);\n      border: none;\n      width: 50%;\n    "])),(function(n){return n.theme.grayLight}))})),y=function(n){var r=n.type,e=void 0===r?"button":r,t=n.onClick,i=void 0===t?function(){}:t,o=n.children,a=n.kind,s=void 0===a?"primary":a,c=(0,d.Z)(n,b),l=c.isLoading,p=c.to,h=l?(0,x.jsx)(g,{}):o;return""!==p&&"string"===typeof p?(0,x.jsx)(f.NavLink,{to:p,style:{display:"inline-block"},children:(0,x.jsx)(Z,(0,u.Z)((0,u.Z)({type:e,kind:s},c),{},{children:h}))}):(0,x.jsx)(Z,(0,u.Z)((0,u.Z)({type:e,kind:s,onClick:i},c),{},{children:h}))};y.prototype={type:m().oneOf(["button","submit"]),onClick:m().func,children:m().node,kind:m().string,isLoading:m().bool,to:m().oneOf(["primary","secondary","ghost"])};var w=y},7157:function(n,r,e){"use strict";var t,i=e(168),o=(e(2791),e(6444)),a=e(184),s=o.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 20px;\n  margin-bottom: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));r.Z=function(n){var r=n.children;return(0,a.jsx)(s,{children:r})}},4321:function(n,r,e){"use strict";var t,i=e(1413),o=e(5987),a=e(168),s=(e(2791),e(6444)),c=e(1134),u=e(184),d=["name","type","children","value","control"],l=s.ZP.div(t||(t=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    width: 100%;\n    padding: ",";\n    background-color: ",";\n    border-radius: 8px;\n    font-weight: 500;\n    transition: all 0.2s linear;\n    border: 1px solid transparent;\n    outline: none;\n  }\n  input:focus {\n    background-color: white;\n    border-color: var(--clr-primary-1);\n  }\n  input::-webkit-input-placeholder {\n    color: #84878b;\n  }\n  input::-moz-input-placeholder {\n    color: #84878b;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n  @media only screen and (max-width: 740px) {\n    input {\n      padding: 12px;\n    }\n    input::-webkit-input-placeholder {\n      font-size: 12px;\n    }\n    input::-moz-input-placeholder {\n      color: #84878b;\n    }\n  }\n"])),(function(n){return n.hasIcon?"10px 60px 10px 20px":"10px"}),(function(n){return n.theme.grayLight}));r.Z=function(n){var r=n.name,e=void 0===r?"":r,t=n.type,a=void 0===t?"text":t,s=n.children,p=(n.value,n.control),f=(0,o.Z)(n,d),h=(0,c.bc)({control:p,name:e,defaultValue:""}).field;return(0,u.jsxs)(l,{hasIcon:!!s,children:[(0,u.jsx)("input",(0,i.Z)((0,i.Z)({id:e,type:a},h),f)),s?(0,u.jsx)("div",{className:"input-icon",children:s}):null]})}},3014:function(n,r,e){"use strict";var t,i=e(1413),o=e(5987),a=e(168),s=(e(2791),e(6444)),c=e(184),u=["htmlFor","children"],d=s.ZP.label(t||(t=(0,a.Z)(["\n  font-weight: 600;\n  cursor: pointer;\n"])));r.Z=function(n){var r=n.htmlFor,e=void 0===r?"":r,t=n.children,a=(0,o.Z)(n,u);return(0,c.jsx)(d,(0,i.Z)((0,i.Z)({htmlFor:e},a),{},{children:t}))}},3298:function(n,r,e){"use strict";var t,i=e(168),o=(e(2791),e(6444)),a=e(184),s=o.ZP.h2(t||(t=(0,i.Z)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 55px;\n  color: var(--clr-primary-5);\n  @media only screen and (max-width: 740px) {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n"])));r.Z=function(n){var r=n.className,e=void 0===r?"":r,t=n.children;return(0,a.jsx)(s,{className:e,children:t})}},8519:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return C}});var t,i=e(8214),o=e(5861),a=e(885),s=e(168),c=e(4569),u=e.n(c),d=e(2791),l=e(1134),p=e(6444),f=e(8412),h=e(7157),m=e(4321),x=e(3014),v=e(1687),g=e(1413),b={loadingUpdate:!1},Z=function(n,r){switch(r.type){case"UPDATE_REQUEST":return(0,g.Z)((0,g.Z)({},n),{},{loadingUpdate:!0});case"UPDATE_SUCCESS":case"UPDATE_FAIL":return(0,g.Z)((0,g.Z)({},n),{},{loadingUpdate:!1});default:return n}},y=e(1830),w=e.n(y),k=e(3298),j=e(3715),S=e(184),P=p.ZP.div(t||(t=(0,s.Z)(["\n  min-height: 100vh;\n  padding: 40px;\n  .form {\n    max-width: 400px;\n    margin: 50px auto;\n  }\n"]))),C=function(){var n=(0,v.o)(),r=n.state,e=n.dispatch,t=r.userInfo,s=(0,d.useReducer)(Z,b),c=(0,a.Z)(s,2),p=c[0].loadingUpdate,g=c[1],y=(0,l.cI)({defaultValues:{}}),C=y.control,z=y.handleSubmit,N=y.reset,E=y.formState.isSubmitting;(0,d.useEffect)((function(){N({name:t.name,email:t.email})}),[]);var F=function(){var n=(0,o.Z)((0,i.Z)().mark((function n(r){var o,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.password===r.confirmPassword){n.next=3;break}return w().fire("Failed","Confirm Password Failed","warning"),n.abrupt("return");case 3:return n.prev=3,n.next=6,u().put("/api/users/profile",{name:r.name,email:r.email,password:r.password,confirmPassword:r.confirmPassword},{headers:{Authorization:"Bearer ".concat(t.token)}});case 6:o=n.sent,a=o.data,g({type:"UPDATE_SUCCESS"}),e({type:"USER_SIGNIN",payload:a}),w().fire({position:"center",icon:"success",title:"update success",showConfirmButton:!1,timer:1500}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(3),g({type:"FETCH_FAIL"}),w().fire("Failed","Update Failed","danger");case 17:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(r){return n.apply(this,arguments)}}();return(0,S.jsxs)(P,{children:[(0,S.jsx)(k.Z,{children:"Th\xf4ng Tin T\xe0i Kho\u1ea3n"}),(0,S.jsxs)("form",{className:"form",onSubmit:z(F),children:[(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(x.Z,{htmlFor:"name",children:"T\xean"}),(0,S.jsx)(m.Z,{name:"name",type:"text",placeholder:"Nh\u1eadp T\xean",required:!0,control:C})]}),(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(x.Z,{htmlFor:"email",children:"Email"}),(0,S.jsx)(m.Z,{name:"email",type:"email",placeholder:"Nh\u1eadp Email",required:!0,control:C})]}),(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(x.Z,{htmlFor:"password",children:"M\u1eadt Kh\u1ea9u"}),(0,S.jsx)(m.Z,{name:"password",type:"password",placeholder:"Nh\u1eadp M\u1eadt Kh\u1ea9u",required:!0,control:C})]}),(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(x.Z,{htmlFor:"confirmPassword",children:"X\xe1c Nh\u1eadn M\u1eadt Kh\u1ea9u"}),(0,S.jsx)(m.Z,{name:"confirmPassword",type:"password",placeholder:"Nh\u1eadp L\u1ea1i M\u1eadt Kh\u1ea9u",required:!0,control:C})]}),(0,S.jsx)(f.Z,{type:"submit",kind:"ghost",isLoading:E,disabled:E,children:"X\xe1c Nh\u1eadn"}),p&&(0,S.jsx)(j.Z,{})]})]})}},1694:function(n,r){var e;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var n=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var o=typeof e;if("string"===o||"number"===o)n.push(e);else if(Array.isArray(e)){if(e.length){var a=i.apply(null,e);a&&n.push(a)}}else if("object"===o)if(e.toString===Object.prototype.toString)for(var s in e)t.call(e,s)&&e[s]&&n.push(s);else n.push(e.toString())}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(e=function(){return i}.apply(r,[]))||(n.exports=e)}()},162:function(n,r,e){"use strict";e.d(r,{SC:function(){return u},pi:function(){return s},vE:function(){return a},zG:function(){return c}});var t=e(2791),i=(e(184),["xxl","xl","lg","md","sm","xs"]),o=t.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});o.Consumer,o.Provider;function a(n,r){var e=(0,t.useContext)(o).prefixes;return n||e[r]||r}function s(){return(0,t.useContext)(o).breakpoints}function c(){return(0,t.useContext)(o).minBreakpoint}function u(){return"rtl"===(0,t.useContext)(o).dir}}}]);
//# sourceMappingURL=519.ee9cd6f9.chunk.js.map