(this["webpackJsonpbase-react"]=this["webpackJsonpbase-react"]||[]).push([[5],{85:function(e,t,n){e.exports={reviewsList:"ReviewsStyles_reviewsList__20Nxo"}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(30),r=n(31),s=n(33),i=n(32),c=n(0),o=n.n(c),u=n(85),l=n.n(u),v=n(34),h=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={reviews:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;Object(v.d)(t).then((function(t){var n=t.data;return e.setState({reviews:n.results})}))}},{key:"render",value:function(){var e=this.state.reviews;return e.length>0?o.a.createElement("ul",{className:l.a.reviewsList},e.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("p",{className:l.a.reviewAuthor},"Author: ",e.author),o.a.createElement("p",null,e.content))}))):o.a.createElement("p",null," We don't have any reviews for this movie.")}}]),n}(c.Component)}}]);
//# sourceMappingURL=Reviews.e52d7f14.chunk.js.map