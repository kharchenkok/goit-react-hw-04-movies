(this["webpackJsonpbase-react"]=this["webpackJsonpbase-react"]||[]).push([[1],{84:function(t,e,a){t.exports={castList:"CastStyles_castList__2tXXA",castListItem:"CastStyles_castListItem__1y804",castPosterImg:"CastStyles_castPosterImg__2N0aG"}},86:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return p}));var s=a(30),n=a(31),r=a(33),c=a(32),i=a(0),l=a.n(i),o=a(84),u=a.n(o),m=a(34),p=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={cast:[],error:null},t}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.id;Object(m.a)(e).then((function(e){var a=e.data;return t.setState({cast:a.cast})})).catch((function(e){return t.setState({error:e})}))}},{key:"render",value:function(){var t=this.state.cast;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:u.a.castList},t.map((function(t){return t.profile_path&&l.a.createElement("li",{key:t.credit_id,className:u.a.castListItem},l.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.profile_path),alt:t.name,width:"75",className:u.a.castPosterImg}),l.a.createElement("p",null,t.name),l.a.createElement("p",null,t.character))}))))}}]),a}(i.Component)}}]);
//# sourceMappingURL=Cast.8e38d84e.chunk.js.map