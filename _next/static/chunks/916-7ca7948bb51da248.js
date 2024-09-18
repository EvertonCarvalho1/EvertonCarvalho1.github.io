"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{28125:function(t,e,o){var r=o(23963);e.Z=void 0;var n=r(o(19118)),a=o(57437);e.Z=(0,n.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},33578:function(t,e,o){o.d(e,{Z:function(){return h}});var r=o(2265),n=o(44839),a=o(76990),i=o(48024),s=o(339),d=o(95885),l=o(72296),c=o(70587);function u(t){return(0,c.ZP)("MuiAccordionDetails",t)}(0,l.Z)("MuiAccordionDetails",["root"]);var p=o(57437);let m=t=>{let{classes:e}=t;return(0,a.Z)({root:["root"]},u,e)},v=(0,i.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(t,e)=>e.root})((0,s.Z)(t=>{let{theme:e}=t;return{padding:e.spacing(1,2,2)}}));var h=r.forwardRef(function(t,e){let o=(0,d.i)({props:t,name:"MuiAccordionDetails"}),{className:r,...a}=o,i=m(o);return(0,p.jsx)(v,{className:(0,n.Z)(i.root,r),ref:e,ownerState:o,...a})})},51847:function(t,e,o){o.d(e,{Z:function(){return y}});var r=o(2265),n=o(44839),a=o(76990),i=o(48024),s=o(339),d=o(95885),l=o(73242),c=o(53029),u=o(72296),p=o(70587);function m(t){return(0,p.ZP)("MuiAccordionSummary",t)}let v=(0,u.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var h=o(57437);let g=t=>{let{classes:e,expanded:o,disabled:r,disableGutters:n}=t;return(0,a.Z)({root:["root",o&&"expanded",r&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]},m,e)},f=(0,i.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(t,e)=>e.root})((0,s.Z)(t=>{let{theme:e}=t,o={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],o),["&.".concat(v.focusVisible)]:{backgroundColor:(e.vars||e).palette.action.focus},["&.".concat(v.disabled)]:{opacity:(e.vars||e).palette.action.disabledOpacity},["&:hover:not(.".concat(v.disabled,")")]:{cursor:"pointer"},variants:[{props:t=>!t.disableGutters,style:{["&.".concat(v.expanded)]:{minHeight:64}}}]}})),b=(0,i.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(t,e)=>e.content})((0,s.Z)(t=>{let{theme:e}=t;return{display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),["&.".concat(v.expanded)]:{margin:"20px 0"}}}]}})),x=(0,i.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(t,e)=>e.expandIconWrapper})((0,s.Z)(t=>{let{theme:e}=t;return{display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),["&.".concat(v.expanded)]:{transform:"rotate(180deg)"}}}));var y=r.forwardRef(function(t,e){let o=(0,d.i)({props:t,name:"MuiAccordionSummary"}),{children:a,className:i,expandIcon:s,focusVisibleClassName:l,onClick:u,...p}=o,{disabled:m=!1,disableGutters:v,expanded:y,toggle:Z}=r.useContext(c.Z),B={...o,expanded:y,disabled:m,disableGutters:v},R=g(B);return(0,h.jsxs)(f,{focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":y,className:(0,n.Z)(R.root,i),focusVisibleClassName:(0,n.Z)(R.focusVisible,l),onClick:t=>{Z&&Z(t),u&&u(t)},ref:e,ownerState:B,...p,children:[(0,h.jsx)(b,{className:R.content,ownerState:B,children:a}),s&&(0,h.jsx)(x,{className:R.expandIconWrapper,ownerState:B,children:s})]})})},79617:function(t,e,o){o.d(e,{Z:function(){return E}});var r=o(2265);o(12659);var n=o(44839),a=o(76990),i=o(48024),s=o(339),d=o(95885),l=o(33822),c=o(29311),u=o(22960),p=o(11355),m=o(95931),v=o(60909),h=o(72296),g=o(70587);function f(t){return(0,g.ZP)("MuiCollapse",t)}(0,h.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var b=o(57437);let x=t=>{let{orientation:e,classes:o}=t;return(0,a.Z)({root:["root","".concat(e)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(e)],wrapperInner:["wrapperInner","".concat(e)]},f,o)},y=(0,i.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.root,e[o.orientation],"entered"===o.state&&e.entered,"exited"===o.state&&!o.in&&"0px"===o.collapsedSize&&e.hidden]}})((0,s.Z)(t=>{let{theme:e}=t;return{height:0,overflow:"hidden",transition:e.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:e.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:t=>{let{ownerState:e}=t;return"exited"===e.state&&!e.in&&"0px"===e.collapsedSize},style:{visibility:"hidden"}}]}})),Z=(0,i.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),B=(0,i.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),R=r.forwardRef(function(t,e){let o=(0,d.i)({props:t,name:"MuiCollapse"}),{addEndListener:a,children:i,className:s,collapsedSize:h="0px",component:g,easing:f,in:R,onEnter:C,onEntered:w,onEntering:M,onExit:z,onExited:S,onExiting:k,orientation:P="vertical",style:j,timeout:A=p.x9.standard,TransitionComponent:E=l.ZP,...T}=o,H={...o,orientation:P,collapsedSize:h},N=x(H),W=(0,u.Z)(),I=(0,c.Z)(),O=r.useRef(null),V=r.useRef(),D="number"==typeof h?"".concat(h,"px"):h,G="horizontal"===P,L=G?"width":"height",q=r.useRef(null),F=(0,v.Z)(e,q),_=t=>e=>{if(t){let o=q.current;void 0===e?t(o):t(o,e)}},J=()=>O.current?O.current[G?"clientWidth":"clientHeight"]:0,K=_((t,e)=>{O.current&&G&&(O.current.style.position="absolute"),t.style[L]=D,C&&C(t,e)}),Q=_((t,e)=>{let o=J();O.current&&G&&(O.current.style.position="");let{duration:r,easing:n}=(0,m.C)({style:j,timeout:A,easing:f},{mode:"enter"});if("auto"===A){let e=W.transitions.getAutoHeightDuration(o);t.style.transitionDuration="".concat(e,"ms"),V.current=e}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style[L]="".concat(o,"px"),t.style.transitionTimingFunction=n,M&&M(t,e)}),U=_((t,e)=>{t.style[L]="auto",w&&w(t,e)}),X=_(t=>{t.style[L]="".concat(J(),"px"),z&&z(t)}),Y=_(S),$=_(t=>{let e=J(),{duration:o,easing:r}=(0,m.C)({style:j,timeout:A,easing:f},{mode:"exit"});if("auto"===A){let o=W.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(o,"ms"),V.current=o}else t.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");t.style[L]=D,t.style.transitionTimingFunction=r,k&&k(t)});return(0,b.jsx)(E,{in:R,onEnter:K,onEntered:U,onEntering:Q,onExit:X,onExited:Y,onExiting:$,addEndListener:t=>{"auto"===A&&I.start(V.current||0,t),a&&a(q.current,t)},nodeRef:q,timeout:"auto"===A?null:A,...T,children:(t,e)=>(0,b.jsx)(y,{as:g,className:(0,n.Z)(N.root,s,{entered:N.entered,exited:!R&&"0px"===D&&N.hidden}[t]),style:{[G?"minWidth":"minHeight"]:D,...j},ref:F,...e,ownerState:{...H,state:t},children:(0,b.jsx)(Z,{ownerState:{...H,state:t},className:N.wrapper,ref:O,children:(0,b.jsx)(B,{ownerState:{...H,state:t},className:N.wrapperInner,children:i})})})})});R&&(R.muiSupportAuto=!0);var C=o(28027),w=o(53029),M=o(75115),z=o(76830);function S(t){return(0,g.ZP)("MuiAccordion",t)}let k=(0,h.Z)("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),P=t=>{let{classes:e,square:o,expanded:r,disabled:n,disableGutters:i}=t;return(0,a.Z)({root:["root",!o&&"rounded",r&&"expanded",n&&"disabled",!i&&"gutters"],heading:["heading"],region:["region"]},S,e)},j=(0,i.ZP)(C.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[{["& .".concat(k.region)]:e.region},e.root,!o.square&&e.rounded,!o.disableGutters&&e.gutters]}})((0,s.Z)(t=>{let{theme:e}=t,o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&::before":{display:"none"}},["&.".concat(k.expanded)]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},["&.".concat(k.disabled)]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(0,s.Z)(t=>{let{theme:e}=t;return{variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{["&.".concat(k.expanded)]:{margin:"16px 0"}}}]}})),A=(0,i.ZP)("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(t,e)=>e.heading})({all:"unset"});var E=r.forwardRef(function(t,e){let o=(0,d.i)({props:t,name:"MuiAccordion"}),{children:a,className:i,defaultExpanded:s=!1,disabled:l=!1,disableGutters:c=!1,expanded:u,onChange:p,square:m=!1,slots:v={},slotProps:h={},TransitionComponent:g,TransitionProps:f,...x}=o,[y,Z]=(0,M.Z)({controlled:u,default:s,name:"Accordion",state:"expanded"}),B=r.useCallback(t=>{Z(!y),p&&p(t,!y)},[y,p,Z]),[C,...S]=r.Children.toArray(a),k=r.useMemo(()=>({expanded:y,disabled:l,disableGutters:c,toggle:B}),[y,l,c,B]),E={...o,square:m,disabled:l,disableGutters:c,expanded:y},T=P(E),H={slots:{transition:g,...v},slotProps:{transition:f,...h}},[N,W]=(0,z.Z)("heading",{elementType:A,externalForwardedProps:H,className:T.heading,ownerState:E}),[I,O]=(0,z.Z)("transition",{elementType:R,externalForwardedProps:H,ownerState:E});return(0,b.jsxs)(j,{className:(0,n.Z)(T.root,i),ref:e,ownerState:E,square:m,...x,children:[(0,b.jsx)(N,{...W,children:(0,b.jsx)(w.Z.Provider,{value:k,children:C})}),(0,b.jsx)(I,{in:y,timeout:"auto",...O,children:(0,b.jsx)("div",{"aria-labelledby":C.props.id,id:C.props["aria-controls"],role:"region",className:T.region,children:S})})]})})},53029:function(t,e,o){let r=o(2265).createContext({});e.Z=r},26460:function(t,e,o){o.d(e,{Z:function(){return y}});var r=o(2265),n=o(44839),a=o(76990),i=o(6031),s=o(12272),d=o(48024),l=o(339),c=o(95885),u=o(72296),p=o(70587);function m(t){return(0,p.ZP)("MuiButtonGroup",t)}let v=(0,u.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","horizontal","vertical","colorPrimary","colorSecondary","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var h=o(8550),g=o(61304),f=o(57437);let b=t=>{let{classes:e,color:o,disabled:r,disableElevation:n,fullWidth:i,orientation:d,variant:l}=t,c={root:["root",l,d,i&&"fullWidth",n&&"disableElevation","color".concat((0,s.Z)(o))],grouped:["grouped","grouped".concat((0,s.Z)(d)),"grouped".concat((0,s.Z)(l)),"grouped".concat((0,s.Z)(l)).concat((0,s.Z)(d)),"grouped".concat((0,s.Z)(l)).concat((0,s.Z)(o)),r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,a.Z)(c,m,e)},x=(0,d.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[{["& .".concat(v.grouped)]:e.grouped},{["& .".concat(v.grouped)]:e["grouped".concat((0,s.Z)(o.orientation))]},{["& .".concat(v.grouped)]:e["grouped".concat((0,s.Z)(o.variant))]},{["& .".concat(v.grouped)]:e["grouped".concat((0,s.Z)(o.variant)).concat((0,s.Z)(o.orientation))]},{["& .".concat(v.grouped)]:e["grouped".concat((0,s.Z)(o.variant)).concat((0,s.Z)(o.color))]},{["& .".concat(v.firstButton)]:e.firstButton},{["& .".concat(v.lastButton)]:e.lastButton},{["& .".concat(v.middleButton)]:e.middleButton},e.root,e[o.variant],!0===o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth,"vertical"===o.orientation&&e.vertical]}})((0,l.Z)(t=>{let{theme:e}=t;return{display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{variant:"contained"},style:{boxShadow:(e.vars||e).shadows[2]}},{props:{disableElevation:!0},style:{boxShadow:"none"}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"vertical"},style:{flexDirection:"column",["& .".concat(v.lastButton,",& .").concat(v.middleButton)]:{borderTopRightRadius:0,borderTopLeftRadius:0},["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderBottomRightRadius:0,borderBottomLeftRadius:0}}},{props:{orientation:"horizontal"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderTopRightRadius:0,borderBottomRightRadius:0},["& .".concat(v.lastButton,",& .").concat(v.middleButton)]:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}},{props:{variant:"text",orientation:"horizontal"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderRight:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(v.disabled)]:{borderRight:"1px solid ".concat((e.vars||e).palette.action.disabled)}}}},{props:{variant:"text",orientation:"vertical"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderBottom:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(v.disabled)]:{borderBottom:"1px solid ".concat((e.vars||e).palette.action.disabled)}}}},...Object.entries(e.palette).filter(t=>{let[,e]=t;return e&&e.main}).flatMap(t=>{let[o]=t;return[{props:{variant:"text",color:o},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderColor:e.vars?"rgba(".concat(e.vars.palette[o].mainChannel," / 0.5)"):(0,i.Fq)(e.palette[o].main,.5)}}}]}),{props:{variant:"outlined",orientation:"horizontal"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderRightColor:"transparent","&:hover":{borderRightColor:"currentColor"}},["& .".concat(v.lastButton,",& .").concat(v.middleButton)]:{marginLeft:-1}}},{props:{variant:"outlined",orientation:"vertical"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderBottomColor:"transparent","&:hover":{borderBottomColor:"currentColor"}},["& .".concat(v.lastButton,",& .").concat(v.middleButton)]:{marginTop:-1}}},{props:{variant:"contained",orientation:"horizontal"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderRight:"1px solid ".concat((e.vars||e).palette.grey[400]),["&.".concat(v.disabled)]:{borderRight:"1px solid ".concat((e.vars||e).palette.action.disabled)}}}},{props:{variant:"contained",orientation:"vertical"},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderBottom:"1px solid ".concat((e.vars||e).palette.grey[400]),["&.".concat(v.disabled)]:{borderBottom:"1px solid ".concat((e.vars||e).palette.action.disabled)}}}},...Object.entries(e.palette).filter(t=>{let[,e]=t;return e&&e.dark}).map(t=>{let[o]=t;return{props:{variant:"contained",color:o},style:{["& .".concat(v.firstButton,",& .").concat(v.middleButton)]:{borderColor:(e.vars||e).palette[o].dark}}}})],["& .".concat(v.grouped)]:{minWidth:40,boxShadow:"none",props:{variant:"contained"},style:{"&:hover":{boxShadow:"none"}}}}}));var y=r.forwardRef(function(t,e){let o=(0,c.i)({props:t,name:"MuiButtonGroup"}),{children:a,className:i,color:s="primary",component:d="div",disabled:l=!1,disableElevation:u=!1,disableFocusRipple:p=!1,disableRipple:m=!1,fullWidth:v=!1,orientation:y="horizontal",size:Z="medium",variant:B="outlined",...R}=o,C={...o,color:s,component:d,disabled:l,disableElevation:u,disableFocusRipple:p,disableRipple:m,fullWidth:v,orientation:y,size:Z,variant:B},w=b(C),M=r.useMemo(()=>({className:w.grouped,color:s,disabled:l,disableElevation:u,disableFocusRipple:p,disableRipple:m,fullWidth:v,size:Z,variant:B}),[s,l,u,p,m,v,Z,B,w.grouped]),z=r.Children.toArray(a).filter(t=>r.isValidElement(t)),S=z.length,k=t=>{let e=0===t,o=t===S-1;return e&&o?"":e?w.firstButton:o?w.lastButton:w.middleButton};return(0,f.jsx)(x,{as:d,role:"group",className:(0,n.Z)(w.root,i),ref:e,ownerState:C,...R,children:(0,f.jsx)(h.Z.Provider,{value:M,children:z.map((t,e)=>(0,f.jsx)(g.Z.Provider,{value:k(e),children:t},e))})})})},11929:function(t,e,o){o.d(e,{Z:function(){return z}});var r=o(2265),n=o(44839),a=o(76990),i=o(6031),s=o(49690),d=o(59018),l=o(57437),c=(0,d.Z)((0,l.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=(0,d.Z)((0,l.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,d.Z)((0,l.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=o(12272),v=o(41738),h=o(72296),g=o(70587);function f(t){return(0,g.ZP)("MuiCheckbox",t)}let b=(0,h.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]);var x=o(48024),y=o(339),Z=o(95885);let B=t=>{let{classes:e,indeterminate:o,color:r,size:n}=t,i={root:["root",o&&"indeterminate","color".concat((0,m.Z)(r)),"size".concat((0,m.Z)(n))]},s=(0,a.Z)(i,f,e);return{...e,...s}},R=(0,x.ZP)(s.Z,{shouldForwardProp:t=>(0,v.Z)(t)||"classes"===t,name:"MuiCheckbox",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.root,o.indeterminate&&e.indeterminate,e["size".concat((0,m.Z)(o.size))],"default"!==o.color&&e["color".concat((0,m.Z)(o.color))]]}})((0,y.Z)(t=>{let{theme:e}=t;return{color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette.action.activeChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(t=>{let[,e]=t;return e&&e.main}).map(t=>{let[o]=t;return{props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[o].mainChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(e.palette[o].main,e.palette.action.hoverOpacity)}}}}),...Object.entries(e.palette).filter(t=>{let[,e]=t;return e&&e.main}).map(t=>{let[o]=t;return{props:{color:o},style:{["&.".concat(b.checked,", &.").concat(b.indeterminate)]:{color:(e.vars||e).palette[o].main},["&.".concat(b.disabled)]:{color:(e.vars||e).palette.action.disabled}}}}),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}})),C=(0,l.jsx)(u,{}),w=(0,l.jsx)(c,{}),M=(0,l.jsx)(p,{});var z=r.forwardRef(function(t,e){var o,a;let i=(0,Z.i)({props:t,name:"MuiCheckbox"}),{checkedIcon:s=C,color:d="primary",icon:c=w,indeterminate:u=!1,indeterminateIcon:p=M,inputProps:m,size:v="medium",disableRipple:h=!1,className:g,...f}=i,b=u?p:c,x=u?p:s,y={...i,disableRipple:h,color:d,indeterminate:u,size:v},z=B(y);return(0,l.jsx)(R,{type:"checkbox",inputProps:{"data-indeterminate":u,...m},icon:r.cloneElement(b,{fontSize:null!==(o=b.props.fontSize)&&void 0!==o?o:v}),checkedIcon:r.cloneElement(x,{fontSize:null!==(a=x.props.fontSize)&&void 0!==a?a:v}),ownerState:y,ref:e,className:(0,n.Z)(z.root,g),...f,classes:z})})}}]);