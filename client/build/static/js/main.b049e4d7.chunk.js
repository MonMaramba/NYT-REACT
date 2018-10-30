(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){},136:function(e,t,n){},144:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(56),c=n.n(l),i=(n(72),n(15)),o=n(16),s=n(20),u=n(17),h=n(19),d=n(150),m=n(147),p=n(149),f=(n(74),n(76),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),v=n(152),E=n(153),g=(n(78),function(){return r.a.createElement(v.a,{bsStyle:"pills"},r.a.createElement(E.a,{to:"/search",activeStyle:{fontWeight:"bold",color:"red"}},"Find"),r.a.createElement(E.a,{to:"/saved",activeStyle:{fontWeight:"bold",color:"red"}},"Saved"))}),b=n(62),y=n(23),j=(n(115),n(21)),O=n.n(j),S={getHeadlines:function(){return O.a.get("/api/headlines")},getHeadline:function(e){return O.a.get("/api/headlines/"+e)},deleteHeadline:function(e){return O.a.delete("/api/headlines/"+e)},saveHeadline:function(e){return O.a.post("/api/headlines",e)}},w=n(148),k=n(151),Y=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))},C=function(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right"},className:"btn btn-success"}),e.children)},_=(n(136),n(63)),A=n.n(_),R=function(e){return r.a.createElement("li",{className:"headline"},e.children,r.a.createElement("h3",null,e.headline),r.a.createElement("h4",null,e.snippet),r.a.createElement("p",null,"Published ",r.a.createElement(A.a,{format:"MM-DD-YYYY"},e.date)),r.a.createElement("a",{href:e.url,target:"_blank"},"Link"))},x="ec888836cb114c39b0c0fe6ecc738058",B=n(21),H=(new Date).getFullYear(),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",startYear:"",endYear:"",articles:[]},n.noResultsStyle={textAlign:"center"},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault();var t=Object(y.a)(Object(y.a)(n));if(n.state.topic&&n.state.startYear){var a="https://api.nytimes.com/svc/search/v2/articlesearch.json";a+="?api-key="+x,a+="&q="+n.state.topic,a+="&begin_date="+(n.state.startYear||"1900")+"0101",a+="&end_date="+(n.state.endYear||H)+"1231",B.get(a).then(function(e){console.log(e.data.response.docs),t.setState({articles:e.data.response.docs})}).catch(function(e){console.log(e)})}},n.handleSaveButton=function(e){S.saveHeadline({id:e.id,headline:e.headline,snippet:e.snippet,datePublished:e.date,url:e.url}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement("h2",null,"Search"),r.a.createElement("form",null,r.a.createElement(Y,{value:this.state.topic,onChange:this.handleInputChange,name:"topic",placeholder:"Enter topic here"}),r.a.createElement(Y,{value:this.state.startYear,onChange:this.handleInputChange,name:"startYear",placeholder:"Enter starting year of search (defaults to 1900)"}),r.a.createElement(Y,{value:this.state.endYear,onChange:this.handleInputChange,name:"endYear",placeholder:"Enter ending year of search (defaults to current year)"}),r.a.createElement(C,{disabled:!this.state.topic,onClick:this.handleFormSubmit},"Search"))),this.state.articles.length?r.a.createElement("ul",null,this.state.articles.map(function(t){var n={key:t._id,id:t._id,headline:t.headline.main,url:t.web_url,snippet:t.snippet,date:t.pub_date};return r.a.createElement(R,n,r.a.createElement(k.a,{onClick:function(){return e.handleSaveButton(n)}},"Save"))})):r.a.createElement("h2",{style:this.noResultsStyle},"There are no search results."))}}]),t}(r.a.Component),D=(n(144),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[]},n.noResultsStyle={textAlign:"center"},n.loadArticles=function(){S.getHeadlines().then(function(e){return n.setState({articles:e.data})}).catch(function(e){return console.log(e)})},n.handleRemoveButton=function(e){S.deleteHeadline(e._id).then(function(e){console.log("removeButton res =",e),n.loadArticles()}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadArticles()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"results"},this.state.articles.length?r.a.createElement("ul",null,this.state.articles.map(function(t){return r.a.createElement(R,Object.assign({key:t._id},t),r.a.createElement(k.a,{onClick:function(){return e.handleRemoveButton(t)}},"Remove"))})):r.a.createElement("h2",{style:this.noResultsStyle},"There are no saved articles."))}}]),t}(r.a.Component)),I={textAlign:"center"},F=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"The New York Times Scraper in React"),r.a.createElement("p",{style:I},"Search for articles and save them"))},T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(F,null),r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(p.a,{to:"/search"})}}),r.a.createElement(m.a,{exact:!0,path:"/search",component:N}),r.a.createElement(m.a,{exact:!0,path:"/saved",component:D}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){e.exports=n(146)},72:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){}},[[67,2,1]]]);
//# sourceMappingURL=main.b049e4d7.chunk.js.map