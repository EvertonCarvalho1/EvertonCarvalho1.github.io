"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[992],{92030:function(e,t,r){r.d(t,{Z:function(){return b}});var i=r(2265),o=r(44839),n=r(76990),a=r(6031),l=r(48024),d=r(339),s=r(95885),u=r(72296),c=r(70587);function p(e){return(0,c.ZP)("MuiDivider",e)}(0,u.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var f=r(57437);let h=e=>{let{absolute:t,children:r,classes:i,flexItem:o,light:a,orientation:l,textAlign:d,variant:s}=e;return(0,n.Z)({root:["root",t&&"absolute",s,a&&"light","vertical"===l&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===d&&"vertical"!==l&&"textAlignRight","left"===d&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]},p,i)},v=(0,l.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((0,d.Z)(e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,a.Fq)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),borderTopStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider),borderLeftStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}})),m=(0,l.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((0,d.Z)(e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)"),variants:[{props:{orientation:"vertical"},style:{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")}}]}})),g=i.forwardRef(function(e,t){let r=(0,s.i)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:n,className:a,orientation:l="horizontal",component:d=n||"vertical"===l?"div":"hr",flexItem:u=!1,light:c=!1,role:p="hr"!==d?"separator":void 0,textAlign:g="center",variant:b="fullWidth",...S}=r,_={...r,absolute:i,component:d,flexItem:u,light:c,orientation:l,role:p,textAlign:g,variant:b},y=h(_);return(0,f.jsx)(v,{as:d,className:(0,o.Z)(y.root,a),role:p,ref:t,ownerState:_,"aria-orientation":"separator"===p&&("hr"!==d||"vertical"===l)?l:void 0,...S,children:n?(0,f.jsx)(m,{className:y.wrapper,ownerState:_,children:n}):null})});g&&(g.muiSkipListHighlight=!0);var b=g},22960:function(e,t,r){r.d(t,{Z:function(){return a}}),r(2265);var i=r(41661),o=r(87547),n=r(52737);function a(){let e=(0,i.Z)(o.Z);return e[n.Z]||e}},92293:function(e,t,r){r.d(t,{A:function(){return c}});var i=r(13608),o=r(14590),n=r(41589),a=r(19212),l=r.n(a),d=r(16463),s=r(2265),u=r(11444);let c=()=>{let{tokenResponse:e}=(0,i.a)(),t=(0,u.I0)(),{customer:r}=(0,o.O)(),a=(0,d.useRouter)(),c=(0,u.v9)(e=>e.orders.orderData),{listOrder:p,statusOrder:f,loading:h}=(0,u.v9)(e=>e.orders),[v,m]=(0,s.useState)({}),[g,b]=(0,s.useState)(null),S=[{key:1,label:"Aguardando Pagamento",description:"Seu pagamento foi confirmado com sucesso. Obrigado por escolher nossa plataforma confi\xe1vel!"},{key:2,label:"Recebemos o seu pedido",description:"\xd3timo! Recebemos o seu pedido com entusiasmo e estamos prontos para come\xe7ar."},{key:3,label:"Estamos preparando o seu pedido",description:"Estamos preparando o seu pedido com o maior carinho e aten\xe7\xe3o que voc\xea merece."},{key:4,label:"Seu pedido est\xe1 pronto",description:"Seu pedido est\xe1 pronto e fresquinho, pronto para ser entregue com um sorriso."},{key:5,label:"Seu pedido foi entregue com sucesso",description:"Seu pedido foi entregue com sucesso! Esperamos que aproveite sua refei\xe7\xe3o. Se tiver alguma d\xfavida ou precisar de algo mais, estamos aqui para ajudar."}],_=e=>l()(e,"YYYY-MM-DD").format("DD [de] MMMM YYYY");return{statusSteps:S,handleStatus:()=>{if((null==e?void 0:e.access_token)&&r){if(c){let i={customer_id:null==r?void 0:r.customer_id,fiscal_date:c.fiscal_date,request_number:null==c?void 0:c.order_id,store_key:c.store_key};t((0,n.pC)(i,null==e?void 0:e.access_token)),t((0,n.r6)(null))}else if(f){let i={customer_id:null==r?void 0:r.customer_id,fiscal_date:f.fiscal_date,request_number:null==f?void 0:f.order_id,store_key:f.store_key};t((0,n.pC)(i,null==e?void 0:e.access_token))}}},listOrderCustomer:()=>{r&&e&&t((0,n.Xm)(null==r?void 0:r.customer_id,null==e?void 0:e.access_token))},listOrder:p,formatDate:_,getStatusLabelAndDescription:function(e){let t=S.find(t=>t.key===e);return t?{label:t.label,description:t.description}:null},groupItemsByPlu:function(e){let t={};return e.forEach(e=>{t[e.plu_id]?t[e.plu_id].quantity+=e.quantity:t[e.plu_id]={...e}}),Object.values(t)},orderData:v,setOrderData:m,handleFollowUp:e=>{t((0,n.XB)(e)),a.push("/dashboard/orders/status")},statusOrder:f,lastDate:g,setLastDate:b,getFormattedDate:e=>{let t=_(e);return{formattedDate:t,showDate:t!==g}},loading:h,handleDetails:e=>{t((0,n.XB)(e)),a.push("/dashboard/orders/details")},getCardMedia:e=>{switch(e){case 6:return"Cr\xe9dito";case 72:return"Vale-refei\xe7\xe3o";case 71:return"Vale-alimenta\xe7\xe3o";case 7:return"D\xe9bito";case 37:return"PIX";default:return null}},groupCardNumber:function(e){let t={};return e.forEach(e=>{t[e.card_number]?t[e.card_number].detail.card_number+=e.card_number:t[e.card_number]={...e}}),Object.values(t)}}}},13608:function(e,t,r){r.d(t,{a:function(){return o}});var i=r(11444);let o=()=>{let{tokenResponse:e,loading:t,qrCodeData:r}=(0,i.v9)(e=>e.auth);return{tokenResponse:e,loading:t,qrCodeData:r}}},14590:function(e,t,r){r.d(t,{O:function(){return o}});var i=r(11444);let o=()=>{let{loading:e,guestMode:t,customer:r,error:o,otpData:n,opt_error:a}=(0,i.v9)(e=>e.customer);return{loading:e,guestMode:t,customer:r,error:o,otpData:n,opt_error:a}}},41589:function(e,t,r){r.d(t,{XB:function(){return l},Xm:function(){return d},pC:function(){return a},r6:function(){return n},ur:function(){return o}});var i=r(42742);let o=(e,t)=>({type:i.mU,payload:{order:e,token:t}}),n=e=>({type:i.vZ,payload:{orderData:e}}),a=(e,t)=>({type:i.Pc,payload:{dataStatus:e,token:t}}),l=e=>({type:i.zv,payload:{statusOrder:e}}),d=(e,t)=>({type:i.Af,payload:{idCustomer:e,token:t}})},42742:function(e,t,r){r.d(t,{Af:function(){return s},Dk:function(){return u},LX:function(){return n},Md:function(){return d},Pc:function(){return a},YF:function(){return c},mU:function(){return i},vZ:function(){return o},zv:function(){return l}});let i="ORDERS_REQUEST",o="ORDER_SUCCESS",n="ORDER_FAILURE",a="STATUS_ORDER_REQUEST",l="STATUS_SUCCESS",d="STATUS_FAILURE",s="LIST_ORDER_REQUEST",u="LIST_SUCCESS",c="LIST_FAILURE"}}]);