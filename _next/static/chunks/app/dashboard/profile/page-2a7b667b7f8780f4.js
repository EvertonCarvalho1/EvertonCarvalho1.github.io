(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{31450:function(t,e,r){Promise.resolve().then(r.bind(r,95652))},37920:function(t,e,r){"use strict";let n=r(2265).createContext(void 0);e.Z=n},88875:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(2265),o=r(37920);function a(){return n.useContext(o.Z)}},74583:function(t,e,r){"use strict";r.d(e,{Z:function(){return Z}});var n=r(2265),o=r(44839),a=r(76990),i=r(6031),c=r(12272),l=r(49690),s=r(48024),u=r(339),d=r(95885),h=r(72296),p=r(70587);function m(t){return(0,p.ZP)("MuiSwitch",t)}let f=(0,h.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var v=r(57437);let g=t=>{let{classes:e,edge:r,size:n,color:o,checked:i,disabled:l}=t,s={root:["root",r&&"edge".concat((0,c.Z)(r)),"size".concat((0,c.Z)(n))],switchBase:["switchBase","color".concat((0,c.Z)(o)),i&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,a.Z)(s,m,e);return{...e,...u}},y=(0,s.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.edge&&e["edge".concat((0,c.Z)(r.edge))],e["size".concat((0,c.Z)(r.size))]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,["& .".concat(f.thumb)]:{width:16,height:16},["& .".concat(f.switchBase)]:{padding:4,["&.".concat(f.checked)]:{transform:"translateX(16px)"}}}}]}),S=(0,s.ZP)(l.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.switchBase,{["& .".concat(f.input)]:e.input},"default"!==r.color&&e["color".concat((0,c.Z)(r.color))]]}})((0,u.Z)(t=>{let{theme:e}=t;return{position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:"".concat("light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]),transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),["&.".concat(f.checked)]:{transform:"translateX(20px)"},["&.".concat(f.disabled)]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:"".concat("light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600])},["&.".concat(f.checked," + .").concat(f.track)]:{opacity:.5},["&.".concat(f.disabled," + .").concat(f.track)]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:"".concat("light"===e.palette.mode?.12:.2)},["& .".concat(f.input)]:{left:"-100%",width:"300%"}}}),(0,u.Z)(t=>{let{theme:e}=t;return{"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette.action.activeChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(t=>{let[,e]=t;return e&&e.main&&e.light}).map(t=>{let[r]=t;return{props:{color:r},style:{["&.".concat(f.checked)]:{color:(e.vars||e).palette[r].main,"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[r].mainChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(e.palette[r].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(f.disabled)]:{color:e.vars?e.vars.palette.Switch["".concat(r,"DisabledColor")]:"".concat("light"===e.palette.mode?(0,i.$n)(e.palette[r].main,.62):(0,i._j)(e.palette[r].main,.55))}},["&.".concat(f.checked," + .").concat(f.track)]:{backgroundColor:(e.vars||e).palette[r].main}}}})]}})),b=(0,s.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,e)=>e.track})((0,u.Z)(t=>{let{theme:e}=t;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:"".concat("light"===e.palette.mode?e.palette.common.black:e.palette.common.white),opacity:e.vars?e.vars.opacity.switchTrack:"".concat("light"===e.palette.mode?.38:.3)}})),k=(0,s.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,e)=>e.thumb})((0,u.Z)(t=>{let{theme:e}=t;return{boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}));var Z=n.forwardRef(function(t,e){let r=(0,d.i)({props:t,name:"MuiSwitch"}),{className:n,color:a="primary",edge:i=!1,size:c="medium",sx:l,...s}=r,u={...r,color:a,edge:i,size:c},h=g(u),p=(0,v.jsx)(k,{className:h.thumb,ownerState:u});return(0,v.jsxs)(y,{className:(0,o.Z)(h.root,n),sx:l,ownerState:u,children:[(0,v.jsx)(S,{type:"checkbox",icon:p,checkedIcon:p,ref:e,ownerState:u,...s,classes:{...h,root:h.switchBase}}),(0,v.jsx)(b,{className:h.track,ownerState:u})]})})},49690:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(2265),o=r(44839),a=r(76990),i=r(12272),c=r(41738),l=r(48024),s=r(75115),u=r(88875),d=r(73242),h=r(72296),p=r(70587);function m(t){return(0,p.ZP)("PrivateSwitchBase",t)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=r(57437);let v=t=>{let{classes:e,checked:r,disabled:n,edge:o}=t,c={root:["root",r&&"checked",n&&"disabled",o&&"edge".concat((0,i.Z)(o))],input:["input"]};return(0,a.Z)(c,m,e)},g=(0,l.ZP)(d.Z)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:t=>{let{edge:e,ownerState:r}=t;return"start"===e&&"small"!==r.size},style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:t=>{let{edge:e,ownerState:r}=t;return"end"===e&&"small"!==r.size},style:{marginRight:-12}}]}),y=(0,l.ZP)("input",{shouldForwardProp:c.Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var S=n.forwardRef(function(t,e){let{autoFocus:r,checked:n,checkedIcon:a,className:i,defaultChecked:c,disabled:l,disableFocusRipple:d=!1,edge:h=!1,icon:p,id:m,inputProps:S,inputRef:b,name:k,onBlur:Z,onChange:w,onFocus:E,readOnly:x,required:C=!1,tabIndex:R,type:T,value:P,...M}=t,[_,O]=(0,s.Z)({controlled:n,default:!!c,name:"SwitchBase",state:"checked"}),U=(0,u.Z)(),j=l;U&&void 0===j&&(j=U.disabled);let B="checkbox"===T||"radio"===T,F={...t,checked:_,disabled:j,disableFocusRipple:d,edge:h},I=v(F);return(0,f.jsxs)(g,{component:"span",className:(0,o.Z)(I.root,i),centerRipple:!0,focusRipple:!d,disabled:j,tabIndex:null,role:void 0,onFocus:t=>{E&&E(t),U&&U.onFocus&&U.onFocus(t)},onBlur:t=>{Z&&Z(t),U&&U.onBlur&&U.onBlur(t)},ownerState:F,ref:e,...M,children:[(0,f.jsx)(y,{autoFocus:r,checked:n,defaultChecked:c,className:I.input,disabled:j,id:B?m:void 0,name:k,onChange:t=>{if(t.nativeEvent.defaultPrevented)return;let e=t.target.checked;O(e),w&&w(t,e)},readOnly:x,ref:b,required:C,ownerState:F,tabIndex:R,type:T,..."checkbox"===T&&void 0===P?{}:{value:P},...S}),_?a:p]})})},49969:function(t,e,r){"use strict";function n(t,e){"function"==typeof t?t(e):t&&(t.current=e)}r.d(e,{Z:function(){return n}})},7740:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(2265),o=r(49969);function a(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.useMemo(()=>e.every(t=>null==t)?null:t=>{e.forEach(e=>{(0,o.Z)(e,t)})},e)}},16463:function(t,e,r){"use strict";var n=r(71169);r.o(n,"usePathname")&&r.d(e,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(e,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(e,{useSearchParams:function(){return n.useSearchParams}})},95652:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(57437),o=r(17156),a=r(74583),i=r(60091),c=r(51120),l=r(11444);let s=()=>{let{themeData:t,loading:e}=(0,l.v9)(t=>t.theme),{mode:r,toggleMode:n}=(0,c.r)();return{changeTheme:()=>{n()},themeData:t,mode:r,loading:e}};var u=()=>{let{mode:t}=s(),{toggleMode:e}=(0,c.r)();return{mode:t,toggleMode:e}},d=r(9944),h=r(16463),p=()=>{let{mode:t,toggleMode:e}=u(),r=(0,h.useRouter)(),c=(0,l.I0)();return(0,n.jsxs)(o.Z,{color:"primary.contrastText",p:2,flexShrink:0,children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(a.Z,{checked:"dark"===t,onChange:e,color:"default",inputProps:{"aria-label":"toggle theme mode"}})}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(i.Z,{onClick:()=>{c((0,d.Wp)()),r.push("/dashboard")},children:"Logout"})})]})},m=()=>(0,n.jsx)(p,{})},51120:function(t,e,r){"use strict";r.d(e,{d:function(){return m},r:function(){return f}});var n=r(57437),o=r(2265),a=r(90632),i=r(68396),c=r(1513),l=r(20124),s=r(11444),u=r(96165);let d=(t,e)=>({type:u.E,payload:{mode:t,themeColors:e}});var h=r(65179);let p=o.createContext(void 0),m=t=>{let{children:e}=t,[r,u]=(0,o.useState)(()=>localStorage.getItem("theme-mode")||"light"),m=(0,s.I0)(),{configData:f}=(0,h.Z)(),v=(0,s.v9)(t=>t.theme.themeData),g=(0,o.useMemo)(()=>{var t,e;let n;return n="light"===r?null==v?void 0:null===(t=v.colors)||void 0===t?void 0:t.light:null==v?void 0:null===(e=v.colors)||void 0===e?void 0:e.dark,(0,a.Z)({palette:{mode:r||"light",primary:{main:(null==n?void 0:n.primary.main)||"#000000",contrastText:(null==n?void 0:n.primary.contrastText)||"#FFFFFF"}}})},[v,r]);return(0,o.useEffect)(()=>{(null==f?void 0:f.CB_THEME)&&m(d(r,f.CB_THEME))},[null==f?void 0:f.CB_THEME,r,m]),(0,n.jsx)(p.Provider,{value:{mode:r,toggleMode:()=>{let t="light"===r?"dark":"light";u(t),localStorage.setItem("theme-mode",t),m(d(t,v))}},children:(0,n.jsxs)(i.Z,{theme:g,children:[(0,n.jsx)(c.Z,{styles:{}}),(0,n.jsx)(l.ZP,{enableColorScheme:!0}),e]})})},f=()=>{let t=(0,o.useContext)(p);if(!t)throw Error("useThemeMode deve ser usado dentro de um ThemeModeProvider");return t}},65179:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(11444);let o=()=>{let{configData:t,loading:e,pageName:r}=(0,n.v9)(t=>t.config);return{configData:t,loading:e,pageName:r}}},9944:function(t,e,r){"use strict";r.d(e,{G:function(){return s},Wp:function(){return d},cQ:function(){return c},gT:function(){return o},gl:function(){return a},ic:function(){return u},mA:function(){return i},pB:function(){return l}});var n=r(24193);let o=(t,e,r,o,a,i)=>({type:n.GE,payload:{customerConfig:t,token:e,customer_id:r,customer_name:o,customer_phone:a,otpData:i}}),a=t=>({type:n.F0,payload:{customer:t}}),i=()=>({type:n.kv,payload:{}}),c=(t,e,r,o)=>({type:n.Iy,payload:{token:t,customerConfig:e,customer:o,otpData:r}}),l=t=>({type:n.mg,payload:{otpData:t}}),s=t=>({type:n.xA,payload:{message:t}}),u=t=>({type:n.CU,payload:{active:t}}),d=()=>({type:n.p4,payload:{}})},24193:function(t,e,r){"use strict";r.d(e,{CU:function(){return s},F0:function(){return o},GE:function(){return n},Iy:function(){return i},kv:function(){return a},mg:function(){return l},p4:function(){return u},xA:function(){return c}});let n="CUSTOMER_REQUEST",o="CUSTOMER_SUCCESS",a="CUSTOMER_FAILURE",i="CUSTOMER_OTP_REQUEST",c="CUSTOMER_OTP_FAILURE",l="CUSTOMER_OTP_SUCCESS",s="CUSTOMER_GUESTMODE",u="CLEAR_CUSTOMER_STATE"},96165:function(t,e,r){"use strict";r.d(e,{E:function(){return n},u:function(){return o}});let n="UPDATE_THEME_COLORS",o="UPDATE_THEME_COLORS_FAILURE"}},function(t){t.O(0,[444,570,593,91,629,971,23,744],function(){return t(t.s=31450)}),_N_E=t.O()}]);