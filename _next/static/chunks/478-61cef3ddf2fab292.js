"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{33379:function(e,t,n){n.d(t,{s:function(){return s}});var i=n(57437),r=n(17156);n(2265);var s=e=>{let{children:t}=e;return(0,i.jsx)(r.Z,{sx:{height:"100%",overflowY:"auto"},children:t})}},91469:function(e,t,n){n.d(t,{n:function(){return g},u:function(){return b}});var i=n(57437),r=n(58438),s=n(17156);n(2265);var o=n(70397),a=n(22960),l=n(71733),c=n(79806),d=n(60335),x=n(83719),u=n(60091),p=n(24635),h=e=>{let{title:t="",btnRight:n,onClose:r,back:h}=e,m=(0,a.Z)();return(0,i.jsx)(l.Z,{position:"static",elevation:0,sx:{backgroundColor:"#fff",color:"#000",borderBottomLeftRadius:16,borderBottomRightRadius:16},children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",minHeight:"56px"},children:[(0,i.jsx)(s.Z,{sx:{width:"48px"},children:(0,i.jsx)(d.Z,{edge:"start",color:"inherit",onClick:h||r,sx:{color:m.palette.primary.main},children:(0,i.jsx)(p.E.div,{variants:{initial:{rotate:0},animate:{rotate:h?90:0}},initial:"initial",animate:"animate",transition:{duration:.5,ease:"easeInOut"},style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)(o.Z,{sx:{fontSize:32}})})})}),(0,i.jsx)(s.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"center"},children:t&&(0,i.jsx)(x.Z,{variant:"subtitle1",component:"div",sx:{fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:t.toUpperCase()})}),(0,i.jsx)(s.Z,{sx:{width:"48px"},children:(null==n?void 0:n.content)&&(0,i.jsx)(u.Z,{sx:{textTransform:"none",color:m.palette.primary.main},onClick:null==n?void 0:n.onClick,children:n.content})})]})})},m=n(33379),f=e=>{let{children:t}=e;return(0,i.jsx)(s.Z,{sx:{position:"sticky",bottom:0,width:"100%",backgroundColor:"#fff",padding:2,boxShadow:"0 -4px 10px rgba(0, 0, 0, 0.1)"},children:t})},g=e=>{let{open:t=!1,handleClose:n,title:o,children:a,footer:l,btnAction:c,handleBack:d}=e;return(0,i.jsx)(r.ZP,{variant:"temporary",anchor:"bottom",open:t,onClose:n,ModalProps:{keepMounted:!1},PaperProps:{sx:{height:"90%",borderTopLeftRadius:10,borderTopRightRadius:10,overflow:"hidden"}},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,i.jsx)(h,{title:o,onClose:n,btnRight:c,back:d}),(0,i.jsx)(m.s,{children:a}),void 0!==l&&(0,i.jsx)(f,{children:l})]})})},j=n(54056),b=e=>{let{open:t=!1,handleClose:n,handleOpen:r,title:o,children:a,footer:l,btnAction:c,backAction:d}=e;return(0,i.jsx)(j.Z,{variant:"temporary",anchor:"bottom",open:t,onOpen:r,onClose:n,ModalProps:{keepMounted:!1},PaperProps:{sx:{height:"auto",borderTopLeftRadius:10,borderTopRightRadius:10,overflow:"hidden"}},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,i.jsx)(h,{title:o,onClose:n,btnRight:c,back:d}),(0,i.jsx)(m.s,{children:a}),l&&(0,i.jsx)(f,{children:l})]})})}},6586:function(e,t,n){n.d(t,{S:function(){return x},C:function(){return h}});var i=n(57437);n(2265);var r=n(22960),s=n(79647),o=n(70270),a=n(24037),l=n(94696),c=n(83719),d=n(20768),x=e=>{let{image:t,title:n,price:x,description:u,onClick:p}=e,h=(0,r.Z)(),m=(0,s.Z)(h.breakpoints.down("xs")),f=(0,s.Z)(h.breakpoints.between("xs","sm")),g=(0,s.Z)(h.breakpoints.between("sm","md"));(0,s.Z)(h.breakpoints.up("md"));let j=m?20:f?30:g?25:30,b=m?40:f?50:g?80:100;return(0,i.jsxs)(o.Z,{sx:{borderRadius:4,position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"320px",width:"100%",paddingX:2,paddingY:1},onClick:p,children:[(0,i.jsx)(a.Z,{component:"img",image:t,alt:n,sx:{borderRadius:"50%",height:{xs:"150px",md:"120px"},margin:"0 auto",width:"auto",marginBottom:"5px"}}),(0,i.jsxs)(l.Z,{sx:{padding:0,paddingBottom:"0 !important"},children:[(0,i.jsx)(c.Z,{variant:"subtitle2",component:"div",sx:{fontWeight:"bold"},children:n.length>j?"".concat(n.substring(0,j),"..."):n}),(0,i.jsxs)(c.Z,{variant:"body1",color:"primary.main",sx:{fontWeight:"bold"},children:["R$ ",(0,d.T4)(x)]}),(0,i.jsx)(c.Z,{variant:"body2",color:"text.secondary",children:u.length>b?"".concat(u.substring(0,b),"..."):u})]})]})},u=n(17156),p=n(30487),h=()=>{let e=(0,r.Z)(),t=(0,s.Z)(e.breakpoints.down("xs")),n=(0,s.Z)(e.breakpoints.between("xs","sm")),a=(0,s.Z)(e.breakpoints.between("sm","md"));return(0,i.jsxs)(o.Z,{sx:{borderRadius:4,position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"320px",width:"100%",paddingX:2,paddingY:1},children:[(0,i.jsx)(u.Z,{sx:{borderRadius:"50%",height:{xs:"150px",md:"120px"},width:{xs:"150px",md:"120px"},margin:"0 auto",marginBottom:"5px"},children:(0,i.jsx)(p.Z,{variant:"circular",width:"100%",height:"100%"})}),(0,i.jsxs)(l.Z,{sx:{padding:0,paddingBottom:"0 !important"},children:[(0,i.jsx)(p.Z,{variant:"text",width:t?"80%":n?"85%":a?"90%":"70%",height:30,sx:{marginBottom:"10px"}}),(0,i.jsx)(p.Z,{variant:"text",width:t?"60%":n?"65%":a?"70%":"50%",height:25,sx:{marginBottom:"10px"}}),(0,i.jsx)(p.Z,{variant:"text",width:t?"90%":n?"95%":a?"100%":"80%",height:20}),(0,i.jsx)(p.Z,{variant:"text",width:t?"90%":n?"95%":a?"100%":"80%",height:20})]})]})}},5879:function(e,t,n){n.d(t,{n:function(){return F}});var i=n(57437),r=n(91469),s=n(77489),o=n(28125),a=n(79617),l=n(51847),c=n(83719),d=n(33578),x=n(32184),u=n(28743),p=n(78498),h=n(68038),m=n(18918),f=n(81136),g=n(2265),j=n(11444),b=e=>{let{data:t}=e,n=(0,j.I0)(),[r,s]=(0,g.useState)(null),b=e=>{s(e.plu_id),n((0,f.Os)([e]))};return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{expandIcon:(0,i.jsx)(o.Z,{}),"aria-controls":"complementos-content",id:"complementos-header",children:(0,i.jsx)(c.Z,{children:t.group_screen_name})}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(x.Z,{sx:{mb:2},children:(0,i.jsx)(u.Z,{value:r,children:t.group_screen_name&&t.items.map((e,t)=>(0,i.jsx)(p.ZP,{children:(0,i.jsx)(h.Z,{control:(0,i.jsx)(m.Z,{checked:r===e.plu_id,onChange:()=>{b(e)}}),label:"".concat(e.screen_description)})},t))})})})]})},v=n(79475),Z=n(95253),y=n(7590),w=n(17156),C=n(24037),_=n(67075),R=n(39516),k=n(60335),E=n(60091),T=n(11929),A=n(29164),S=n(50124),O=n(20768),I=n(98959),P=n(98725),D=n(63302);let M=e=>{let{handleClose:t,selectedItems:n,setSelectedItems:i}=e,r=(0,j.I0)(),{groupId:s,selectedItem:o}=(0,P.r)(),a=(0,j.v9)(e=>e.productsAndGroups.dynamics),l=(0,g.useRef)(null),c=(0,g.useRef)(null),d=e=>n.some(t=>t.plu_id===e.plu_id),[x,u]=(0,g.useState)(1),[p,h]=(0,g.useState)(!1),[m,b]=(0,g.useState)(""),v=(e,t)=>e.reduce((e,t)=>e+(t.best_price?t.best_price:t.price),0)*t,Z=(0,g.useMemo)(()=>v(n,x),[n,x]),y=(0,g.useMemo)(()=>o&&o.reduce((e,t)=>e+((t.best_price?t.best_price:t.price)+(Array.isArray(t.complement)?t.complement.reduce((e,t)=>{var n;return e+(null!==(n=t.amount)&&void 0!==n?n:0)},0):0))*x,0),[o,x]),w=()=>{h(!1),t(),o&&r((0,D.Vn)(o)),r((0,f.fF)([]))};return(0,j.v9)(e=>e.cart.items),(0,g.useEffect)(()=>{p&&w()},[p]),(0,g.useEffect)(()=>{if(602===s&&2===n.length){var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),r((0,f.fF)(n))}},[n]),{lastFieldRef:c,isItemSelected:d,isDisabled:e=>2===n.length&&!d(e),quantidadeTotal:x,setQuantidadeTotal:u,handleIncrement:()=>{u(e=>e+1)},handleDecrement:()=>{u(e=>Math.max(e-1,1))},selectedItems:n,setSelectedItems:i,totalPrice:Z,totalPriceComplement:y,addToCart:()=>{if(o&&o.length>1){let e=o.map(e=>{if(e){var t;let n="".concat(null!=m?m:""," ").concat(null!==(t=e.observation)&&void 0!==t?t:"").trim();return{...e,quantity:x,qtd:1,dinamics:Object.values(e.dinamics).length>0?a:{},total:e.best_price?e.best_price:e.price,observation:n,amount:e.best_price?e.best_price:e.price}}return e});JSON.stringify(o)!==JSON.stringify(e)&&r((0,f.fF)(e))}else null==o||o.forEach(e=>{if(e){var t;let n="".concat(null!=m?m:""," ").concat(null!==(t=e.observation)&&void 0!==t?t:"").trim(),i={...e,quantity:x,dinamics:Object.values(e.dinamics).length>0?a:{},total:y||Z,observation:n,amount:e.best_price?e.best_price:e.price,qtd:1};r((0,f.fF)([i]))}});h(!0)},handleInputObservationChange:e=>{b(e.target.value)},inputObservation:m,firstFieldRef:l}};var F=e=>{var t;let{open:n=!1,handleClose:o,addCart:a,setSelectedItems:l,selectedItem:d,products:u=[]}=e,{handleDecrement:h,handleIncrement:m,isDisabled:f,isItemSelected:g,lastFieldRef:j,quantidadeTotal:P,totalPrice:D,totalPriceComplement:F,addToCart:B,handleInputObservationChange:L,inputObservation:N,firstFieldRef:V}=M({handleClose:o,selectedItems:d||[],setSelectedItems:l||(()=>{})}),{selectedRemoves:q,handleToggle:W}=(0,I.C)();return(0,i.jsx)(r.n,{open:n,handleClose:o,children:d&&(null==d?void 0:d.length)===1?(0,i.jsx)(i.Fragment,{children:null===(t=Object.values(d))||void 0===t?void 0:t.map((e,t)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(w.Z,{display:"flex",justifyContent:"center",alignItems:"center",mb:5,sx:{width:"100%",height:"300px"},children:(0,i.jsx)(C.Z,{component:"img",sx:{width:300,height:300},image:"https://cibus-dev.conecto.com.br/storage"+e.images[0].url,alt:e.screen_description})}),(0,i.jsxs)(_.Z,{sx:{mb:3},children:[(0,i.jsx)(c.Z,{component:"div",variant:"h6",children:e.screen_description}),(0,i.jsx)(c.Z,{variant:"body2",color:"text.secondary",component:"div",children:e.web_description}),(0,i.jsxs)(c.Z,{variant:"caption",component:"div",sx:{fontStyle:"italic",fontWeight:"bold",mb:2},children:["C\xf3d.: ",e.plu_id]}),e.complements.length>0&&(0,i.jsx)(s.u,{data:e.complements}),e.removes.length>0&&(0,i.jsx)(v.I,{data:e.removes,onToggle:W,selectedRemoves:q}),e.dinamics.group_screen_name&&(0,i.jsx)(b,{data:e.dinamics}),(0,i.jsx)(R.Z,{ref:V,id:"outlined-multiline-static",label:"Observa\xe7\xe3o do item",multiline:!0,rows:5,sx:{width:"100%",mt:3},value:N,onChange:L}),(0,i.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",mt:3},children:[(0,i.jsx)(w.Z,{display:"flex",alignItems:"center",children:(0,i.jsxs)(w.Z,{display:"flex",alignItems:"center",children:[(0,i.jsx)(k.Z,{onClick:h,children:(0,i.jsx)(y.Z,{})}),(0,i.jsx)(R.Z,{variant:"outlined",size:"small",value:P,sx:{width:"48px",textAlign:"center"},inputProps:{min:0,style:{textAlign:"center"}}}),(0,i.jsx)(k.Z,{onClick:m,children:(0,i.jsx)(Z.Z,{})})]})}),(0,i.jsxs)(E.Z,{variant:"contained",color:"primary",sx:{height:"40px",borderRadius:"5px",textTransform:"none",fontSize:"1rem"},onClick:B,children:["Adicionar R$"," ",(0,O.T4)(null!=F?F:0)," "]})]})]})]},t))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{children:u&&u.map((e,t)=>(0,i.jsxs)(p.ZP,{secondaryAction:(0,i.jsx)(T.Z,{onChange:t=>{t.target.checked?a&&a(e):l&&l(t=>t.filter(t=>t!==e))},checked:g(e),disabled:f(e)}),children:[(0,i.jsx)(A.Z,{children:(0,i.jsx)(C.Z,{component:"img",sx:{width:60},image:"https://cibus-dev.conecto.com.br/storage"+e.images[0].url,alt:e.screen_description})}),(0,i.jsx)(S.Z,{primary:e.screen_description,secondary:e.web_description})]},t))}),(0,i.jsx)(R.Z,{ref:j,id:"outlined-multiline-static",label:"Observa\xe7\xe3o",multiline:!0,rows:5,sx:{width:"100%",mt:3},value:N,onChange:L}),(0,i.jsxs)(w.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",mt:3},children:[(0,i.jsxs)(w.Z,{display:"flex",alignItems:"center",mb:{xs:2,sm:0},children:[" ",(0,i.jsx)(k.Z,{onClick:h,children:(0,i.jsx)(y.Z,{})}),(0,i.jsx)(R.Z,{variant:"outlined",size:"small",value:P,sx:{width:"48px",textAlign:"center"},inputProps:{min:0,style:{textAlign:"center"}}}),(0,i.jsx)(k.Z,{onClick:m,children:(0,i.jsx)(Z.Z,{})})]}),(0,i.jsxs)(E.Z,{variant:"contained",color:"primary",sx:{borderRadius:"5px",textTransform:"none",fontSize:"1rem",padding:"8px 16px",lineHeight:1.5,height:"auto",width:{xs:"100%",sm:"auto"},mt:{xs:2,sm:0},alignSelf:{xs:"center",sm:"auto"}},onClick:B,children:["Adicionar R$ ",(0,O.T4)(null!=D?D:0)]})]})]})})}},63302:function(e,t,n){n.d(t,{Fi:function(){return d},Jw:function(){return h},Ks:function(){return o},UP:function(){return x},Vn:function(){return r},WE:function(){return u},XV:function(){return p},df:function(){return l},r4:function(){return c},su:function(){return a},vE:function(){return s}});var i=n(40655);let r=e=>({type:i.G2,payload:{product:e}}),s=e=>({type:i.OZ,payload:{uniqid:e}}),o=(e,t)=>({type:i.FR,payload:{uniqid:e,qtd:t}}),a=e=>({type:i.tN,payload:{bool:e}}),l=e=>({type:i.wy,payload:{bool:e}}),c=()=>({type:i.qX,payload:{}}),d=e=>({type:i.gZ,payload:{card:e}}),x=e=>({type:i.kA,payload:{alert:e}}),u=e=>({type:i.nF,payload:{currentPage:e}}),p=e=>({type:i.EY,payload:{modalRemove:e}}),h=e=>({type:i.VQ,payload:{modalSuccess:e}})},40655:function(e,t,n){n.d(t,{EY:function(){return u},FR:function(){return s},G2:function(){return i},OZ:function(){return r},VQ:function(){return p},gZ:function(){return c},kA:function(){return d},nF:function(){return x},qX:function(){return o},tN:function(){return a},wy:function(){return l}});let i="ADD_TO_CART",r="REMOVE_FROM_CART",s="UPDATE_CART_ITEM",o="CLEAR_CART",a="OPEN_CART",l="CLOSE_CART",c="SET_CARD",d="SET_ALERT",x="SET_CURRENTPAGE",u="SET_MODAL_REMOVE",p="SET_MODAL_SUCCESS"}}]);