(this.webpackJsonpphuongmychimusic=this.webpackJsonpphuongmychimusic||[]).push([[28],{636:function(t,e,a){"use strict";a.r(e);var n=a(20),i=a(21),r=a(37),o=a(23),s=a(22),c=a(85),l=a(127),m=a(914),h=a(74),p=a(91),u=a(848),d=a(31),g=a.n(d),b=a(92),v=(a(70),a(78),a(0)),y=a.n(v),E=a(30),f=a.n(E),x=a(895),N=a(25),A=a(72),C=a(63),M=Object(c.a)((function(){return a.e(87).then(a.bind(null,126))})),P=Object(c.a)((function(){return a.e(73).then(a.bind(null,437))})),j=Object(c.a)((function(){return a.e(66).then(a.bind(null,735))})),w=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).handleNext=function(t){var e=localStorage.getItem("usertokenspotify");i.setState({token:e});var a=i.state.page+8,n=i.state.startpage+8,r=i.state.pagecount+1,o=i.state.totalpage;i.state.btnprev=!1,i.state.btnprevi="btn btn-success btn-sm",i.setState({startpage:i.state.startpage+8,page:i.state.page+8,pagecount:i.state.pagecount+1,btnprev:!1,btnprevi:"btn btn-success btn-sm"}),g.a.get("https://api.spotify.com/v1/artists/1BcjfrXV4Oe3fK0c8dnxFF/albums?market=VN&limit=50",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(t){i.setState({isLoaded:!0,items:t.data.items.slice(n,a)})}),(function(t){alert("Kh\xf4ng c\xf2n video n\xe0o"),i.setState({isLoaded:!0,error:t})})),r==o&&(i.state.btndisable=!0,i.state.btnnext="btn btn-danger btn-sm",i.setState({btndisable:!0,btnnext:"btn btn-danger btn-sm"})),t.preventDefault()},i.hanldePrev=function(){var t=localStorage.getItem("usertokenspotify");i.setState({token:t});var e=i.state.page-8,a=i.state.startpage-8,n=i.state.pagecount-1;i.state.totalpage;i.state.btnprev=!1,i.state.btnnext="btn btn-success btn-sm",i.setState({startpage:i.state.startpage-8,page:i.state.page-8,pagecount:i.state.pagecount-1,btndisable:!1,btnnext:"btn btn-success btn-sm"}),g.a.get("https://api.spotify.com/v1/artists/1BcjfrXV4Oe3fK0c8dnxFF/albums?market=VN&limit=50",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(t){i.setState({isLoaded:!0,items:t.data.items.slice(a,e)})}),(function(t){i.setState({isLoaded:!0,error:t})})),1===n&&(i.state.btnprev=!0,i.state.btnprevi="btn btn-danger btn-sm",i.setState({btnprev:!0,btnprevi:"btn btn-danger btn-sm"}))},i.state={error:null,isLoaded:!1,key:null,vid:"",items:[],token:"",count:0,open:!1,email:"",password:"",country:"",startpage:0,page:8,pagecount:1,totalpage:8,btndisable:!1,btnprev:!0,btnnext:"btn btn-success btn-sm",btnprevi:"btn btn-danger  btn-sm"},i.handleNext=i.handleNext.bind(Object(r.a)(i)),i.hanldePrev=i.hanldePrev.bind(Object(r.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("usertokenspotify");this.setState({token:e});var a=this.state.page,n=this.state.startpage;g.a.get("https://api.spotify.com/v1/artists/1BcjfrXV4Oe3fK0c8dnxFF/albums?market=VN&limit=50",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){var i=e.data.items.length/8;t.setState({isLoaded:!0,items:e.data.items.slice(n,a),totalpage:Math.round(i)})}),(function(e){t.setState({isLoaded:!0,error:e})})),g.a.get("https://api.spotify.com/v1/me",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(a){t.setState({isLoaded:!0,email:a.data.email,password:e,country:a.data.country}),b.auth().createUserWithEmailAndPassword(a.data.email,"jsjjssjsjs").then((function(t){})).catch((function(t){t.code,t.message}))}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"render",value:function(){var t=this.state,e=t.error,a=t.items,n=t.isLoaded,i=t.token;t.country;return null==i?y.a.createElement("div",{style:{marginTop:"7%"}},y.a.createElement("h6",null,"\u0110\xe2y l\xe0 b\u1ea3n xem tr\u01b0\u1edbc, \u0111\u1ec3 xem t\u1ea5t c\u1ea3 Album b\u1ea1n c\u1ea7n \u1ee7y quy\u1ec1n cho Spotify :",y.a.createElement(N.b,{to:"/LoginSpotify"},y.a.createElement("button",{className:"btn btn-outline-info btn-sm"},"\u0110\u0103ng nh\u1eadp"))),y.a.createElement(M,null)):e?y.a.createElement("div",null,y.a.createElement(p.a,{severity:"error"},"Phi\xean b\u1ea3n \u0111\xe3 h\u1ebft h\u1ea1n , vui l\xf2ng"," ",y.a.createElement(N.b,{to:"/LoginSpotify"},y.a.createElement("button",{className:"btn btn-outline-info btn-sm"},"\u0110\u0103ng nh\u1eadp"))," ","l\u1ea1i \u0111\u1ec3 xem \u0111\u1ea7y \u0111\u1ee7 Album nh\u1ea1c"),y.a.createElement(M,null)):n?y.a.createElement(x.a,null,y.a.createElement("div",{className:"container-fluid",style:{zIndex:"20000"}},y.a.createElement(f.a,null,y.a.createElement("title",null,"Album Ca Nh\u1ea1c M\u1edbi Nh\u1ea5t c\u1ee7a Ph\u01b0\u01a1ng M\u1ef9 Chi | Phuong My Chi Music On Spotify"),y.a.createElement("meta",{name:"description",content:"Album Ph\u01b0\u01a1ng M\u1ef9 Chi , Nghe Album Ph\u01b0\u01a1ng M\u1ef9 Chi M\u1edbi Nh\u1ea5t tr\xean Ph\u01b0\u01a1ng M\u1ef9 Chi Music"}),y.a.createElement("meta",{name:"keywords",content:"Ph\u01b0\u01a1ng M\u1ef9 Chi, Album Ca s\u0129 Ph\u01b0\u01a1ng M\u1ef9 Chi , Album Th\u01b0\u01a1ng v\u1ec1 Mi\u1ec1n Trung, Album 16 xu\xe2n tr\u0103ng"}),y.a.createElement("meta",{name:"robots",content:"index, follow"}),y.a.createElement("meta",{name:"googlebot",content:"index,follow"}),y.a.createElement("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),y.a.createElement("meta",{name:"language",content:"Vietnamese"}),y.a.createElement("meta",{name:"revisit-after",content:"1 days"}),y.a.createElement("meta",{name:"author",content:"Phuong My Chi"}),y.a.createElement("meta",{property:"og:title",content:"Album Ca Nh\u1ea1c c\u1ee7a Ph\u01b0\u01a1ng M\u1ef9 Chi Ph\u01b0\u01a1ng M\u1ef9 Chi|Phuong My Chi Music"}),y.a.createElement("meta",{property:"og:description",content:"Album Ca Nh\u1ea1c c\u1ee7a Ph\u01b0\u01a1ng M\u1ef9 Chi "}),y.a.createElement("meta",{property:"og:site_name",content:"Phuong My Chi Music - Music is the voice of the soul"}),y.a.createElement("meta",{property:"og:url",content:"https://phuongmychi.vn/Album"}),y.a.createElement("meta",{property:"og:type",content:"article"}),y.a.createElement("meta",{property:"og:image",content:"https://phuongmychi.vn/img/phuongmychis.jpg"}),y.a.createElement("link",{rel:"alternate",href:"https://phuongmychi.vn/Album",hrefLang:"vi-vn"}),y.a.createElement(C.JsonLd,{item:{"@context":"http://schema.googleapis.com/","@type":"MusicGroup","@id":"https://phuongmychi.vn/Album",url:"https://phuongmychi.web.app/Album",name:"Phuong My Chi",description:"Nghe Album m\u1edbi nh\u1ea5t c\u1ee7a Ph\u01b0\u01a1ng M\u1ef9 Chi tr\xean Phuong My Chi Music",datePublished:null,potentialAction:{"@type":"ListenAction",target:[{"@type":"EntryPoint",urlTemplate:"https://phuongmychi.web.app/Album?autoplay=true",actionPlatform:["http://schema.org/DesktopWebPlatform","http://schema.org/IOSPlatform","http://schema.googleapis.com/GoogleAudioCast","http://schema.googleapis.com/GoogleVideoCast"]},"android-app://com.spotify.music/spotify/artist/1BcjfrXV4Oe3fK0c8dnxFF/play"],expectsAcceptanceOf:{"@type":"Offer",category:"free",eligibleRegion:[]}}}})),y.a.createElement("h5",{id:"hotvideo"},"Danh s\xe1ch \u0111\u0129a nh\u1ea1c"),y.a.createElement("div",{className:"row"},a.map((function(t){return y.a.createElement("div",{className:"col-sm-3",key:t.uri},y.a.createElement(m.a,{title:t.name,placement:"bottom"},y.a.createElement(N.c,{to:"/Albumdetail?albumid="+t.id},y.a.createElement("img",{id:"thumbnails",alt:"Phuong My Chi Music",className:"img-fluid img",src:t.images[0].url}))),y.a.createElement(l.a,{pr:2},y.a.createElement(h.a,{gutterBottom:!0,variant:"body2"},t.name," \u2022 ",t.album_type," \u2022 ",t.total_tracks," b\xe0i h\xe1t"),y.a.createElement(h.a,{variant:"caption",color:"textSecondary"},y.a.createElement("a",{target:"_blank",style:{textDecoration:"none"},href:t.artists[0].external_urls.spotify},t.artists[0].name)," ","\u2022 ",t.release_date)))})),y.a.createElement("hr",null))),y.a.createElement("div",{style:{textAlign:"left",marginLeft:"auto",marginRight:"auto",fontSize:"12px",marginTop:20}},y.a.createElement("button",{className:this.state.btnprevi,disabled:this.state.btnprev,onClick:this.hanldePrev},"Prev"),y.a.createElement("button",{className:this.state.btnnext,style:{marginLeft:5},disabled:this.state.btndisable,onClick:this.handleNext},"Next"),this.state.pagecount,"/ ",this.state.totalpage),y.a.createElement(j,null),y.a.createElement(P,null)):y.a.createElement(x.a,null,y.a.createElement("div",{className:"container-fluid"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})),y.a.createElement("div",{className:"col-sm-3"},y.a.createElement(u.a,{variant:"rect",height:160,width:"100%"}),y.a.createElement(u.a,{variant:"text",component:"div",style:{marginTop:"3%"},width:"80%"})))))}}]),a}(y.a.Component);e.default=Object(A.g)(w)}}]);