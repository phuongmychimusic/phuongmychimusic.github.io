(this.webpackJsonpphuongmychimusic=this.webpackJsonpphuongmychimusic||[]).push([[59],{131:function(e,n,t){"use strict";var a=t(12),i=t(10),r=t(0),c=(t(11),t(13)),o=t(14),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var d=r.forwardRef((function(e,n){var t=e.alignContent,o=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,d=e.className,x=e.component,m=void 0===x?"div":x,f=e.container,g=void 0!==f&&f,p=e.direction,v=void 0===p?"row":p,h=e.item,b=void 0!==h&&h,w=e.justify,j=void 0===w?"flex-start":w,y=e.lg,E=void 0!==y&&y,S=e.md,C=void 0!==S&&S,O=e.sm,W=void 0!==O&&O,k=e.spacing,M=void 0===k?0:k,N=e.wrap,z=void 0===N?"wrap":N,I=e.xl,G=void 0!==I&&I,B=e.xs,D=void 0!==B&&B,F=e.zeroMinWidth,J=void 0!==F&&F,P=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=Object(c.a)(u.root,d,g&&[u.container,0!==M&&u["spacing-xs-".concat(String(M))]],b&&u.item,J&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==z&&u["wrap-xs-".concat(String(z))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==j&&u["justify-xs-".concat(String(j))],!1!==D&&u["grid-xs-".concat(String(D))],!1!==W&&u["grid-sm-".concat(String(W))],!1!==C&&u["grid-md-".concat(String(C))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==G&&u["grid-xl-".concat(String(G))]);return r.createElement(m,Object(i.a)({className:T,ref:n},P))})),x=Object(o.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(t["spacing-".concat(n,"-").concat(a)]={margin:"-".concat(u(i,2)),width:"calc(100% + ".concat(u(i),")"),"& > $item":{padding:u(i,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var a={};l.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(i.a)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n}),{}))}),{name:"MuiGrid"})(d);n.a=x},50:function(e,n,t){},83:function(e,n,t){"use strict";var a=t(10),i=t(897),r=t(36);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(a.a)({defaultTheme:r.a},n))}},859:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var a=t(85),i=t(131),r=t(83),c=t(0),o=t.n(c),s=t(71),l=(t(50),Object(a.a)((function(){return Promise.all([t.e(56),t.e(89)]).then(t.bind(null,738))}))),u=Object(a.a)((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,118))})),d=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},theme:{backgroundColor:"whitesmoke",marginTop:"5%"}}}));function x(){var e=d();function n(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{item:!0,xs:2},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(u,null))),o.a.createElement(i.a,{item:!0,className:e.theme,xs:10},o.a.createElement(l,null)))}return s.isMobileOnly?o.a.createElement("div",null,o.a.createElement(l,null)):o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{container:!0,spacing:1},o.a.createElement(i.a,{container:!0,item:!0,xs:12,spacing:3},o.a.createElement(n,null)))))}}}]);