(this.webpackJsonpphuongmychimusic=this.webpackJsonpphuongmychimusic||[]).push([[71],{176:function(e,t,a){"use strict";var o=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a(0)),n=(0,o(a(27)).default)(i.default.createElement("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");t.default=n},66:function(e,t,a){"use strict";var o=a(12),i=a(10),n=a(0),r=(a(11),a(13)),c=a(14),l=n.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=e.square,p=void 0!==d&&d,h=e.elevation,m=void 0===h?1:h,u=e.variant,g=void 0===u?"elevation":u,b=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(s,Object(i.a)({className:Object(r.a)(a.root,c,"outlined"===g?a.outlined:a["elevation".concat(m)],!p&&a.rounded),ref:t},b))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(i.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},74:function(e,t,a){"use strict";var o=a(10),i=a(12),n=a(0),r=(a(11),a(13)),c=a(14),l=a(26),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=n.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,d=e.classes,p=e.className,h=e.color,m=void 0===h?"initial":h,u=e.component,g=e.display,b=void 0===g?"initial":g,y=e.gutterBottom,v=void 0!==y&&y,f=e.noWrap,j=void 0!==f&&f,O=e.paragraph,w=void 0!==O&&O,N=e.variant,x=void 0===N?"body1":N,C=e.variantMapping,E=void 0===C?s:C,B=Object(i.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),M=u||(w?"p":E[x]||s[x])||"span";return n.createElement(M,Object(o.a)({className:Object(r.a)(d.root,p,"inherit"!==x&&d[x],"initial"!==m&&d["color".concat(Object(l.a)(m))],j&&d.noWrap,v&&d.gutterBottom,w&&d.paragraph,"inherit"!==c&&d["align".concat(Object(l.a)(c))],"initial"!==b&&d["display".concat(Object(l.a)(b))]),ref:t},B))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},780:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var o=a(10),i=a(12),n=a(0),r=a.n(n),c=(a(11),a(13)),l=a(66),s=a(14),d=n.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.raised,d=void 0!==s&&s,p=Object(i.a)(e,["classes","className","raised"]);return n.createElement(l.a,Object(o.a)({className:Object(c.a)(a.root,r),elevation:d?8:1,ref:t},p))})),p=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d),h=n.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,l=e.classes,s=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(o.a)({className:Object(c.a)(l.root,s,!r&&l.spacing),ref:t},d))})),m=Object(s.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(h),u=n.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.component,s=void 0===l?"div":l,d=Object(i.a)(e,["classes","className","component"]);return n.createElement(s,Object(o.a)({className:Object(c.a)(a.root,r),ref:t},d))})),g=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(u),b=["video","audio","picture","iframe","img"],y=n.forwardRef((function(e,t){var a=e.children,r=e.classes,l=e.className,s=e.component,d=void 0===s?"div":s,p=e.image,h=e.src,m=e.style,u=Object(i.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==b.indexOf(d),y=!g&&p?Object(o.a)({backgroundImage:'url("'.concat(p,'")')},m):m;return n.createElement(d,Object(o.a)({className:Object(c.a)(r.root,l,g&&r.media,-1!=="picture img".indexOf(d)&&r.img),ref:t,style:y,src:g?p||h:void 0},u),a)})),v=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(y),f=a(83),j=a(148),O=a(74),w=a(176),N=a.n(w),x=a(25),C=Object(f.a)((function(e){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:155},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function E(){var e=C();Object(j.a)();return r.a.createElement(p,{className:e.root},r.a.createElement("div",{className:e.details},r.a.createElement(g,{className:e.content},r.a.createElement(O.a,{component:"h5",variant:"h5"},"Ph\u01b0\u01a1ng M\u1ef9 Chi"),r.a.createElement(O.a,{variant:"subtitle1",color:"textSecondary"},"Ph\u01b0\u01a1ng M\u1ef9 Chi sinh ng\xe0y 13/01/2003 v\u1edbi bi\u1ec7t danh Ch\u1ecb B\u1ea3y l\xe0 n\u1eef ca s\u0129 n\u1ed5i ti\u1ebfng h\xe1t nh\u1ea1c d\xe2n ca, tr\u1eef t\xecnh t\u1ea1i Vi\u1ec7t Nam, M\u1ef9 Chi n\u1ed5i ti\u1ebfng t\u1eeb khi b\u1eaft \u0111\u1ea7u tham gia ch\u01b0\u01a1ng tr\xecnh gi\u1ecdng h\xe1t vi\u1ec7t nh\xed 2013 m\xf9a \u0111\u1ea7u ti\xean,",r.a.createElement(x.b,{to:"/Tieusu"},r.a.createElement("button",{className:"btn btn-outline-dark btn-sm"},"\u0110\u1ecdc th\xeam ",r.a.createElement(N.a,null)," ")))),r.a.createElement(m,null)),r.a.createElement(v,{className:e.cover,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/B%C3%A9_Y%C3%AAu_Ph%C6%B0%C6%A1ng_M%E1%BB%B9_Chi.jpg/800px-B%C3%A9_Y%C3%AAu_Ph%C6%B0%C6%A1ng_M%E1%BB%B9_Chi.jpg",title:"Ca s\u0129 Ph\u01b0\u01a1ng M\u1ef9 Chi"}))}}}]);