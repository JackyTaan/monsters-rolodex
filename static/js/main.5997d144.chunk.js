(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{231:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),s=n(80),a=n.n(s),o=(n(89),n(81)),i=n(82),h=n(26),l=n(84),u=n(83),d=(n(90),n(91),n(94),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=120x120")}),Object(d.jsx)("h2",{children:e.monster.name}),Object(d.jsx)("p",{children:e.monster.email})]})},f=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(d.jsx)(j,{monster:e},e.id)}))})},m=(n(96),function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=(n(97),n(98),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchfield:t.target.value})},e.state={monster:[],searchfield:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monster,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));this.state.searchfield;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monster Rolodex"}),Object(d.jsx)(m,{placeholder:"Search monster with ...",handleChange:this.handleChange}),Object(d.jsx)(f,{monster:r})]})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),p()},89:function(e,t,n){},90:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[231,1,2]]]);
//# sourceMappingURL=main.5997d144.chunk.js.map