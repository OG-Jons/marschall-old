(function(e){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("Navbar")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{beforeLeave:e.beforeLeave,enter:e.enter,afterEnter:e.afterEnter}},[n("router-view")],1),n("div",[n("Footer")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar"},e._l(e.$router.options.routes,(function(t){return n("div",{key:t.name},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})),0)},u=[],s={name:"Navbar"},l=s,c=n("2877"),p=Object(c["a"])(l,i,u,!1,null,null,null),f=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"copyright"},[e._v(" Copyright © "+e._s((new Date).getFullYear())+" Jonas Marschall ")])])},d=[],v={name:"Footer"},b=v,m=Object(c["a"])(b,h,d,!1,null,"0fee857e",null),g=m.exports,_={components:{Navbar:f,Footer:g},methods:{beforeLeave:function(e){this.prevHeight=getComputedStyle(e).height},enter:function(e){var t=getComputedStyle(e),n=t.height;e.style.height=this.prevHeight,setTimeout((function(){e.style.height=n}))},afterEnter:function(e){e.style.height="auto"}}},y=_,j=Object(c["a"])(y,a,o,!1,null,null,null),O=j.exports,x=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(" hello "),n("vue-typer",{staticClass:"gradient-text",attrs:{text:"Jonas Marschall",repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":40,"erase-style":"backspace","caret-animation":"expand"}})],1)])},w=[],E={name:"Home"},$=E,k=Object(c["a"])($,P,w,!1,null,null,null),C=k.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")]),n("p",[e._v("I will say stuff about myself ig?")])])}],M={name:"About"},G=M,J=Object(c["a"])(G,S,H,!1,null,null,null),T=J.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("git-hub-projects")},N=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ghProjects.length>0?n("div",[n("transition-group",{attrs:{name:"fade",tag:"div",id:"github-projects"}},e._l(e.ghProjects,(function(t){return n("div",{key:t.id,staticClass:"card"},[n("a",{attrs:{href:t.html_url,target:"_blank"}},[n("h1",[e._v(e._s(t.name))]),n("p",[e._v(" "+e._s(t.description?t.description:"No Description")+" ")])])])})),0)],1):e._e()},A=[],D=(n("d3b7"),n("159b"),{name:"GitHubProjects",data:function(){return{ghProjects:[]}},methods:{getGithubProjects:function(){var e=this;this.axios.get("https://api.github.com/users/OG-Jons/repos?sort=updated&per_page=6").then((function(t){t.data.forEach((function(t){e.ghProjects.push(t)}))})).catch((function(e){console.log(e)}))}},created:function(){this.getGithubProjects()}}),I=D,Y=Object(c["a"])(I,L,A,!1,null,null,null),q=Y.exports,z={name:"Projects",components:{GitHubProjects:q}},B=z,K=Object(c["a"])(B,F,N,!1,null,null,null),Q=K.exports;r["a"].use(x["a"]);var R=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:T},{path:"/projects",name:"Projects",component:Q},{path:"*",redirect:"/"}],U=new x["a"]({routes:R}),V=U,W=(n("9536"),n("e956")),X=n.n(W),Z=n("bc3a"),ee=n.n(Z),te=n("130e");r["a"].config.productionTip=!1,r["a"].use(te["a"],ee.a),r["a"].use(X.a),new r["a"]({router:V,render:function(e){return e(O)}}).$mount("#app")},9536:function(e,t,n){}});
//# sourceMappingURL=app.98895b03.js.map