(this.webpackJsonpphuongmychimusic=this.webpackJsonpphuongmychimusic||[]).push([[74],{145:function(e,t,a){},868:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(21),l=a(23),i=a(22),o=a(91),c=a(31),s=a.n(c),m=a(94),u=a.n(m),d=a(0),p=a.n(d),h=a(25),b=(a(145),Object(d.lazy)((function(){return a.e(22).then(a.bind(null,538))})),Object(d.lazy)((function(){return a.e(24).then(a.bind(null,539))})),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={error:null,isLoaded:!1,key:null,artists:[],data:{},token:"",name:"",label:"",img:"",email:"",password:"",country:""},r}return Object(r.a)(a,[{key:"checkUser",value:function(){null===localStorage.getItem("usertokenspotify")&&this.props.history.push("/LoginSpotify")}},{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("usertokenspotify");this.setState({token:t});var a=u.a.parse(this.props.location.search).albumid,n="https://api.spotify.com/v1/albums/".concat(a);s.a.get(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(t){e.setState({name:t.data.name}),e.setState({isLoaded:!0})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=u.a.parse(this.props.location.search).albumid,t="https://open.spotify.com/embed/album/".concat(e);localStorage.setItem("urlem",t);var a=this.state,n=a.error;a.items,a.isLoaded;return null==a.token?p.a.createElement("div",{style:{backgroundColor:"black",color:"white"}},p.a.createElement("div",{className:"container-fluid",style:{marginTop:"7%"}},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-sm-8"},p.a.createElement("div",{className:"wpb_raw_code wpb_content_element wpb_raw_html"},p.a.createElement("div",{className:"wpb_wrapper"},p.a.createElement(o.a,{severity:"info"},"\u0110\u1ec3 xem \u0111\u1ea7y n\u1ed9i dung n\xe0y, b\u1ea1n c\u1ea7n \u1ee7y quy\u1ec1n cho Spotify"," ",p.a.createElement(h.b,{to:"/LoginSpotify"},p.a.createElement("button",{className:"btn btn-outline-info btn-sm"},"\u0110\u0103ng nh\u1eadp"))," ","!"),p.a.createElement("iframe",{src:"https://open.spotify.com/follow/1/?uri=spotify:artist:1BcjfrXV4Oe3fK0c8dnxFF&size=detail&theme=light",width:"300",height:"56",scrolling:"no",frameborder:"0",allowtransparency:"true"})))),p.a.createElement("div",{className:"col-sm-4"},p.a.createElement("div",{className:"row"},p.a.createElement(v,null)))))):n?p.a.createElement("div",{style:{backgroundColor:"black",color:"white"}},p.a.createElement("div",{className:"container-fluid",style:{marginTop:"7%"}},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-sm-8"},p.a.createElement("div",{className:"wpb_raw_code wpb_content_element wpb_raw_html"},p.a.createElement("div",{className:"wpb_wrapper"},p.a.createElement(o.a,{severity:"error"},"Phi\xean b\u1ea3n \u0111\xe3 h\u1ebft h\u1ea1n , vui l\xf2ng"," ",p.a.createElement(h.b,{to:"/LoginSpotify"},p.a.createElement("button",{className:"btn btn-outline-info btn-sm"},"\u0110\u0103ng nh\u1eadp"))," ","l\u1ea1i !"),p.a.createElement("iframe",{src:"https://open.spotify.com/follow/1/?uri=spotify:artist:1BcjfrXV4Oe3fK0c8dnxFF&size=detail&theme=light",width:"300",height:"56",scrolling:"no",frameborder:"0",allowtransparency:"true"})))),p.a.createElement("div",{className:"col-sm-4"},p.a.createElement("div",{className:"row"},p.a.createElement(v,null)))))):p.a.createElement("div",{style:{backgroundColor:"black",color:"white"}},p.a.createElement("div",{className:"container-fluid",style:{marginTop:"7%"}},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-sm-8"},p.a.createElement("div",{className:"wpb_raw_code wpb_content_element wpb_raw_html"},p.a.createElement("div",{className:"wpb_wrapper"},p.a.createElement("iframe",{style:{borderRadius:"10px"},src:t,width:"100%",height:"350",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media"}))),p.a.createElement("iframe",{src:"https://open.spotify.com/follow/1/?uri=spotify:artist:1BcjfrXV4Oe3fK0c8dnxFF&size=detail&theme=light",width:"300",height:"56",scrolling:"no",frameborder:"0",allowtransparency:"true"})),p.a.createElement("div",{className:"col-sm-4"},p.a.createElement("div",{className:"row"},p.a.createElement(f,null))))))}}]),a}(p.a.Component));t.default=b;var f=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={error:null,isLoaded:!1,key:null,items:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("usertokenspotify");s.a.get("https://api.spotify.com/v1/artists/1BcjfrXV4Oe3fK0c8dnxFF/albums?market=VN&limit=50",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(t){for(var a=0;a<50;a++)e.setState({});e.setState({isLoaded:!0,items:t.data.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?p.a.createElement("div",null,p.a.createElement(o.a,{severity:"error"},"Phi\xean b\u1ea3n \u0111\xe3 h\u1ebft h\u1ea1n , vui l\xf2ng"," ",p.a.createElement(h.b,{to:"/LoginSpotify"},p.a.createElement("button",{className:"btn btn-outline-info btn-sm"},"\u0110\u0103ng nh\u1eadp"))," ","l\u1ea1i")):a?p.a.createElement("div",null,p.a.createElement("div",{className:"row1"},n.map((function(e){return p.a.createElement("div",{className:"col-sm-3",key:e.id},p.a.createElement(h.b,{key:e.name,to:"/Albumdetail?albumid="+e.id},p.a.createElement("img",{id:"thumbnails1",className:"thumb",alt:"Phuong My Chi Music",src:e.images[0].url})),p.a.createElement("div",{className:"details"},p.a.createElement("p",{id:"title"},e.name)))})))):p.a.createElement("div",null,"\u0110ang t\u1ea3i d\u1eef li\u1ec7u...")}}]),a}(p.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={error:null,isLoaded:!1,key:null,items:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("usertokenspotify");s.a.get("https://phuongmychi.github.io/albumlist.json").then((function(t){e.setState({isLoaded:!0,items:t.data.Album.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?p.a.createElement("div",null,p.a.createElement(o.a,{severity:"error"},"Kh\xf4ng th\u1ec3 t\u1ea3i d\u1eef li\u1ec7u")):a?p.a.createElement("div",null,p.a.createElement("div",{className:"row1"},n.map((function(e){return p.a.createElement("div",{className:"col-sm-3",key:e.name},p.a.createElement(h.b,{key:e.name,to:"/Albumdetail?albumid="+e.id},p.a.createElement("img",{id:"thumbnails1",className:"thumb",alt:"Phuong My Chi Music",src:e.image})),p.a.createElement("div",{className:"details"},p.a.createElement("p",{id:"title"},e.name)))})))):p.a.createElement("div",null,"\u0110ang t\u1ea3i d\u1eef li\u1ec7u...")}}]),a}(p.a.Component)}}]);