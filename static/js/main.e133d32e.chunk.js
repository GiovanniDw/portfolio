(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,a,t){e.exports=t(60)},38:function(e,a,t){},48:function(e,a){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),o=t.n(r),l=(t(38),t(6)),i=t(7),s=t(8),m=t(9),u=t(1),d=t(14),p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(u.c.aside,null,c.a.createElement(u.c.nav,{className:"main-nav"},c.a.createElement(u.c.div,{style:{scale:.4},whileHover:{scale:.5},whileTap:{scale:.3},transition:{duration:.5,delay:2},animate:{x:[-100,0],duration:.5,delay:4}},c.a.createElement(d.Link,{href:"#about",to:"about",spy:!0,smooth:!0,offset:0,duration:500,hashSpy:!0,isDynamic:!0},c.a.createElement("img",{src:"/portfolio/images/logo.svg",className:"App-logo",alt:"logo"}))),c.a.createElement(u.c.div,{whileHover:{scale:1.1},whileTap:{scale:.9},transition:{duration:.5,delay:2.1},style:{rotate:90},animate:{x:[-100,0],duration:2,delay:8}},c.a.createElement(d.Link,{href:"#projects",to:"projects",spy:!0,smooth:!0,offset:-2,duration:500,hashSpy:!0,isDynamic:!0},"Projects")),c.a.createElement(u.c.div,{whileHover:{scale:1.1},whileTap:{scale:.9},transition:{duration:.5,delay:2.2},style:{rotate:90},animate:{x:[-100,0],duration:3,delay:8}},c.a.createElement(d.Link,{href:"#contact",to:"contact",spy:!0,smooth:!0,offset:0,duration:500,hashSpy:!0,isDynamic:!0},"Contact"))))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(u.c.section,{id:"about",className:"about"},c.a.createElement(u.c.h1,{animate:{scale:[.9,1],opacity:[0,1],y:[200,0]}},"Hi ",c.a.createElement("span",{role:"img"},"\ud83d\udc4b"),", ",c.a.createElement("br",null),"My name is"," ",c.a.createElement(u.c.span,{className:"my-name"},"Giovanni"),",",c.a.createElement("br",null)," I\u2019m a CMD student"))}}]),t}(n.Component),y=(t(48),t(30)),g=t(10),f=[{id:"linden-it",category:"Group Project",title:"Linden-IT",pointOfInterest:80,backgroundColor:"#EC803F"},{id:"tripping",category:"Project WEB",title:"Tripping",pointOfInterest:120,backgroundColor:"#2F80ED"},{id:"a",category:"Pedal Power",title:"Map Apps for the Superior Mode of Transport",pointOfInterest:260,backgroundColor:"#5DBCD2"},{id:"g",category:"Holidays",title:"Our Pick of Apps to Help You Escape From Apps",pointOfInterest:200,backgroundColor:"#8F986D"}],h=t(32);function v(e){var a=e.id,t=f.find((function(e){return e.id===a})),n=t.category,r=t.title,o=t.backgroundColor;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.2,delay:.15},style:{pointerEvents:"auto"},className:"overlay"},c.a.createElement(g.b,{to:"/#projects"})),c.a.createElement("div",{className:"card-content-container open"},c.a.createElement(u.c.div,{className:"card-content",layoutId:"card-container-".concat(a)},c.a.createElement(u.c.div,{style:{backgroundColor:o},className:"card-image-container",layoutId:"card-image-container-".concat(a)},c.a.createElement("img",{className:"card-image",src:"images/projects/".concat(a,"/").concat(a,".png"),alt:""})),c.a.createElement(u.c.div,{className:"title-container",layoutId:"title-container-".concat(a)},c.a.createElement("span",{className:"category"},n),c.a.createElement("h2",null,r)),c.a.createElement(u.c.div,{className:"close-icon"},c.a.createElement(g.b,{to:"/#projects"}," ",c.a.createElement(h.a,null)," ")),c.a.createElement(u.c.div,{className:"content-container",animate:!0},c.a.createElement(y.LoremIpsum,{p:6,avgWordsPerSentence:6,avgSentencesPerParagraph:4})))))}function b(e){var a=e.id,t=e.title,n=e.category;e.theme;return c.a.createElement(u.c.li,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"card ".concat(a)},c.a.createElement("div",{className:"card-content-container"},c.a.createElement(u.c.div,{className:"card-content",layoutId:"card-container-".concat(a)},c.a.createElement(u.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(a)},c.a.createElement("img",{className:"card-image",src:"images/projects/".concat(a,"/").concat(a,".png"),alt:""})),c.a.createElement(u.c.div,{className:"title-container",layoutId:"title-container-".concat(a)},c.a.createElement("span",{className:"category"},n),c.a.createElement("h2",null,t)))),c.a.createElement(g.b,{to:a,className:"card-open-link"}))}function j(e){var a=e.selectedId;return c.a.createElement("section",{id:"projects",className:"projects"},c.a.createElement("h2",null,"Projects"),c.a.createElement("ul",{className:"card-list"},f.map((function(e){return c.a.createElement(b,Object.assign({key:e.id},e,{isSelected:e.id===a}))}))))}var N=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"contact",className:"contact"},c.a.createElement("h2",null,"Contact"))}}]),t}(n.Component),k=t(2);t(59);function O(e){var a=e.match.params.id;return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{selectedId:a}),c.a.createElement(u.a,null,a&&c.a.createElement(v,{id:a,key:"item"})))}var w=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App",style:{background:"url(".concat("/portfolio/images/bg.svg",") no-repeat 10% fixed")}},c.a.createElement("main",null,c.a.createElement(u.b,{type:"crossfade"},c.a.createElement(g.a,{basename:"/portfolio"},c.a.createElement(p,null),c.a.createElement(E,null),c.a.createElement(k.a,{path:["/:id","/"],component:O}),c.a.createElement(N,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e133d32e.chunk.js.map