(this.webpackJsonpphuongmychimusic=this.webpackJsonpphuongmychimusic||[]).push([[98],{851:function(e,t,a){"use strict";a.r(t);var n=a(20),i=a(21),l=a(37),r=a(23),o=a(22),u=a(0),s=a.n(u),c=a(31),m=a.n(c),h=a(91),d=a(94),p=a.n(d),g=a(25),b=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={error:null,isLoaded:!1,key:null,vid:"",items:[],count:0,open:!1,url:"",boot:"",timeLigth:"",bootime:{}},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"componentDidMount",value:function(){var e=this,t=p.a.parse(this.props.location.search),a=(window.location.href,"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url="+t.qurl);m.a.get(a).then((function(t){e.setState({isLoaded:!0,bootime:t.data.lighthouseResult.audits["bootup-time"],boot:t.data.lighthouseResult.audits["bootup-time"].description,timeLigth:t.data.lighthouseResult.audits["bootup-time"].displayValue})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.url,a=e.boot,n=e.timeLigth,i=e.error,l=e.isLoaded;return s.a.createElement("div",null,s.a.createElement("div",{className:"container-fluid",style:{marginTop:"12%"}},s.a.createElement("h1",null,"Ki\u1ec3m tra t\u1ed1c \u0111\u1ed9 webiste"),s.a.createElement("form",{className:"form",action:"PageSpeed"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"url",placeholder:"nh\u1eadp url",name:"qurl",value:t,onChange:this.handleChange,className:"form form-control md"}),s.a.createElement(g.b,{to:"?qurl=".concat(this.state.url)},s.a.createElement("button",{className:"btn btn-primary"},"Search")))),s.a.createElement("p",null,"Trang web ki\u1ec3m tra: ",t),s.a.createElement("p",null,"Th\u1eddi gian th\u1ef1c thi JS : ",n," ")),i?s.a.createElement("div",null):l?s.a.createElement("div",null,s.a.createElement("div",{id:"result"},s.a.createElement("p",null,"K\u1ebft qu\u1ea3:",a),s.a.createElement("p",null,"Th\u1eddi gian th\u1ef1c thi JS : ",n," "))):s.a.createElement(h.a,{severity:"info"},"\u0110ang ki\u1ec3m tra webiste : ",t))}}]),a}(s.a.Component);t.default=b}}]);