(function(t){function e(e){for(var r,i,s=e[0],u=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("Navbar")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{beforeLeave:t.beforeLeave,enter:t.enter,afterEnter:t.afterEnter}},[n("router-view")],1),n("div",[n("Footer")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isPlayground?n("nav",{staticClass:"navbar"},t._l(t.portfolioRoutes,(function(e){return n("div",{key:e.name},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),0):n("nav",{staticClass:"navbar"},t._l(t.playgroundRoutes.children,(function(e){return n("div",{key:e.name},[n("router-link",{attrs:{to:"/playground"+e.path}},[t._v(t._s(e.name))])],1)})),0)])},s=[],u=(n("4de4"),n("d3b7"),n("caad"),n("2532"),{name:"Navbar",computed:{portfolioRoutes:function(){return this.$router.options.routes.filter((function(t){return!t.path.includes("playground")}))},playgroundRoutes:function(){return this.$router.options.routes.filter((function(t){return t.path.includes("playground")}))[0]},isPlayground:function(){return!this.$route.path.includes("playground")}}}),l=u,c=n("2877"),p=Object(c["a"])(l,i,s,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"copyright"},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" Jonas Marschall ")]),n("a",{attrs:{href:"https://github.com/OG-Jons"}},[n("unicon",{attrs:{name:"github",fill:"#FFFFFF68","hover-fill":"white"}})],1),n("a",{attrs:{href:"https://www.instagram.com/jonassucksatbiking/"}},[n("unicon",{attrs:{name:"instagram",fill:"#FFFFFF68","hover-fill":"white"}})],1),n("a",{attrs:{href:"mailto:jonas@marschall.pro"}},[n("unicon",{attrs:{name:"envelope",fill:"#FFFFFF68","hover-fill":"white"}})],1)])},d=[],m={name:"Footer"},v=m,g=Object(c["a"])(v,h,d,!1,null,"7ccb22b2",null),b=g.exports,_={components:{Navbar:f,Footer:b},methods:{beforeLeave:function(t){this.prevHeight=getComputedStyle(t).height},enter:function(t){var e=getComputedStyle(t),n=e.height;t.style.height=this.prevHeight,setTimeout((function(){t.style.height=n}))},afterEnter:function(t){t.style.height="auto"}}},y=_,j=Object(c["a"])(y,a,o,!1,null,null,null),O=j.exports,P=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" hello "),n("vue-typer",{staticClass:"gradient-text",attrs:{text:"Jonas Marschall",repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":40,"erase-style":"backspace","caret-animation":"expand"}})],1)])},F=[],x={name:"Home"},S=x,E=Object(c["a"])(S,w,F,!1,null,null,null),$=E.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),n("p",[t._v("I will say stuff about myself ig?")])])}],J={name:"About"},H=J,N=Object(c["a"])(H,C,k,!1,null,null,null),G=N.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("git-hub-projects")],1)},A=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ghProjects.length>0?n("div",[n("h1",[t._v("Github")]),n("transition-group",{attrs:{name:"fade",tag:"div",id:"github-projects"}},t._l(t.ghProjects,(function(e){return n("a",{key:e.id,staticClass:"card",attrs:{href:e.html_url,target:t.hrefTarget}},[n("h2",[t._v(t._s(e.name))]),n("p",[t._v(" "+t._s(e.description?e.description:"No Description")+" ")])])})),0)],1):t._e()},R=[],L=(n("bf19"),n("99af"),n("a4d3"),n("e01a"),{name:"GitHubProjects",data:function(){return{ghProjects:[]}},methods:{getGithubProjects:function(){var t=this;this.axios.get("https://api.github.com/users/OG-Jons/repos?sort=updated&per_page=6").then((function(e){t.ghProjects=e.data})).catch((function(e){console.log(e.toJSON()),t.ghProjects.push({id:1,name:"".concat(e.toJSON().message,": ").concat(e.toJSON().code),description:e.toJSON().description})}))}},created:function(){this.getGithubProjects()},computed:{hrefTarget:function(){return 1===this.ghProjects.length?"_self":"_blank"}}}),D=L,I=Object(c["a"])(D,M,R,!1,null,null,null),Y=I.exports,q={name:"Projects",components:{GitHubProjects:Y}},z=q,B=Object(c["a"])(z,T,A,!1,null,null,null),K=B.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Here we're gonna do some animations")]),n("c-s-s-hover-animations")],1)},U=[],V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"box"})])}],X={name:"CSSHoverAnimations"},Z=X,tt=(n("5c1e"),Object(c["a"])(Z,V,W,!1,null,null,null)),et=tt.exports,nt={name:"CSSAnimations",components:{CSSHoverAnimations:et}},rt=nt,at=Object(c["a"])(rt,Q,U,!1,null,null,null),ot=at.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Playground stuff will go here")])},st=[],ut={name:"Playground"},lt=ut,ct=Object(c["a"])(lt,it,st,!1,null,null,null),pt=ct.exports;r["a"].use(P["a"]);var ft=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:G},{path:"/projects",name:"Projects",component:K},{path:"/playground",children:[{path:"/",name:"Playground",component:pt},{path:"/css-animations",name:"CSS Animations",component:ot}]}],ht=new P["a"]({routes:ft});ht.beforeEach((function(t,e,n){t.matched.length?n():n(e.path)}));var dt=ht,mt=(n("9536"),n("e956")),vt=n.n(mt),gt=n("bc3a"),bt=n.n(gt),_t=n("130e"),yt=n("cb81"),jt=n.n(yt),Ot=n("d327");jt.a.add([Ot["c"],Ot["b"],Ot["a"]]),r["a"].use(jt.a),r["a"].config.productionTip=!1,r["a"].use(_t["a"],bt.a),r["a"].use(vt.a),new r["a"]({router:dt,render:function(t){return t(O)}}).$mount("#app")},"5c1e":function(t,e,n){"use strict";n("78b3")},"78b3":function(t,e,n){},9536:function(t,e,n){}});
//# sourceMappingURL=app.bdf1ca0a.js.map