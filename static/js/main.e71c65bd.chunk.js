(this.webpackJsonphygge=this.webpackJsonphygge||[]).push([[0],[,,function(e,n,t){e.exports={HyggeImage:"HyggeImage_HyggeImage__3IVgc",Circle:"HyggeImage_Circle__3xqpq",Expanded:"HyggeImage_Expanded__3v_xf",Shrunk:"HyggeImage_Shrunk__23BbW",Attribution:"HyggeImage_Attribution__1fERS"}},function(e,n,t){e.exports={Hygge:"Hygge_Hygge__2JLuE",Heading:"Hygge_Heading__2NgfT",Expanded:"Hygge_Expanded__1LLPm",Logo:"Hygge_Logo__1mM2v"}},,function(e,n,t){e.exports={Collection:"Collection_Collection__1aLpU",Heading:"Collection_Heading__150P6",Categories:"Collection_Categories__98J8f"}},function(e,n,t){e.exports={SubHeading:"Category_SubHeading__1ohBX",Collection:"Category_Collection__1b-qO",Circle:"Category_Circle__bwg8C"}},function(e,n,t){e.exports={Menu:"Menu_Menu__2X45P",Open:"Menu_Open__1iOcn"}},,,function(e,n,t){e.exports={Backdrop:"Backdrop_Backdrop__2VIvX"}},function(e,n,t){e.exports=t.p+"static/media/snowflake.f29ec4cf.png"},function(e,n,t){e.exports=t.p+"static/media/sincerely-media-9nhxEa3PK30-unsplash.863a8c70.jpg"},function(e,n,t){e.exports=t.p+"static/media/annie-spratt-OQj0chxpZOI-unsplash.844353bb.jpg"},function(e,n,t){e.exports=t.p+"static/media/clay-banks-z_DkoUqgx6M-unsplash.6d0d1780.jpg"},function(e,n,t){e.exports=t.p+"static/media/jyrki-sorjonen-WnWwzDxvA2M-unsplash.17eb292c.jpg"},function(e,n,t){e.exports=t.p+"static/media/olivier-guillard-FKJgBUDoVC0-unsplash.0851b697.jpg"},function(e,n,t){e.exports=t.p+"static/media/stephane-juban-DI8Bf6K1134-unsplash.b6bc7963.jpg"},function(e,n,t){e.exports=t.p+"static/media/aditya-vyas-PzhmEp_aDU4-unsplash.d718e664.jpg"},function(e,n,t){e.exports=t.p+"static/media/john-noonan-E-9CFTftQh4-unsplash.70905881.jpg"},function(e,n,t){e.exports=t.p+"static/media/emily-toycen-jd_YFWRkOqQ-unsplash.eaa91b6d.jpg"},function(e,n,t){e.exports={HyggeList:"HyggeList_HyggeList__3Y1uH"}},function(e,n,t){e.exports=t(28)},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(9),c=t.n(o),r=(t(27),t(1)),l=function(){var e=Object(a.useState)(null),n=Object(r.a)(e,2),t=n[0],i=n[1];Object(a.useEffect)((function(){return window.addEventListener("beforeinstallprompt",o),function(){window.removeEventListener("beforeinstallprompt",o)}}),[]);var o=function(e){return e.preventDefault(),i(e),!1};return[null!==t,function(){t&&(t.prompt(),i(null))}]},s=t(7),u=t.n(s),d=t(10),g=t.n(d),p=function(e){return e.show?i.a.createElement("div",{className:g.a.Backdrop,onClick:e.clicked}):null},m=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),o=t[0],c=t[1],l=function(){return c((function(e){return!e}))},s=[u.a.Menu],d=i.a.createElement("p",null,"...");return o&&(s.push(u.a.Open),d=i.a.createElement(i.a.Fragment,null,e.pages.map((function(n){return i.a.createElement("p",{key:n.label,onClick:function(){return e.getPage(n.element)}},n.label)})),e.canInstall?i.a.createElement("p",{onClick:e.install},"Install"):null)),i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{show:o,clicked:l}),i.a.createElement("div",{className:s.join(" "),onClick:l},d))},f=t(4),h=t(3),b=t.n(h),y=t(11),_=t.n(y),E=t(12),v=t.n(E),k=t(13),j=t.n(k),x=t(14),C=t.n(x),w=t(15),H=t.n(w),O=t(16),S=t.n(O),N=t(17),P=t.n(N),I=t(18),L=t.n(I),U=t(19),W=t.n(U),M=t(20),A=t.n(M),B=[{id:1,image:v.a,attribution:"Photo by Sincerely Media on Unsplash"},{id:2,image:j.a,attribution:"Photo by Annie Spratt on Unsplash"},{id:3,image:C.a,attribution:"Photo by Clay Banks on Unsplash"},{id:4,image:H.a,attribution:"Photo by Jyrki Sorjonen on Unsplash"},{id:5,image:S.a,attribution:"Photo by Olivier Guillard on Unsplash"},{id:6,image:P.a,attribution:"Photo by St\xe9phane Juban on Unsplash"},{id:7,image:L.a,attribution:"Photo by Aditya Vyas on Unsplash"},{id:8,image:W.a,attribution:"Photo by John Noonan on Unsplash"},{id:9,image:A.a,attribution:"Photo by Emily Toycen on Unsplash"}],F=t(21),J=t.n(F),D=t(2),q=t.n(D),R=function(e){var n=[q.a.HyggeImage];return e.isExpanded?n.push(q.a.Expanded):e.display||n.push(q.a.Shrunk),i.a.createElement("div",{className:n.join(" "),onClick:e.clicked},i.a.createElement("img",{className:q.a.Circle,src:e.image,alt:e.attribution}),e.isExpanded?i.a.createElement("span",{className:q.a.Attribution},e.attribution):null)},T=function(e){return i.a.createElement("div",{className:J.a.HyggeList},e.list.map((function(n){return i.a.createElement(R,Object.assign({key:n.id},n,{clicked:function(){return e.clickHygge(n.id)}}))})))},V=B.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{display:!0,isExpanded:!1})})),z=function(){var e=Object(a.useState)(V),n=Object(r.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(r.a)(c,2),s=l[0],u=l[1],d=[b.a.Heading];return s&&d.push(b.a.Expanded),i.a.createElement("main",{className:b.a.Hygge},i.a.createElement("h1",{className:d.join(" ")},"~ your hygge ~"),i.a.createElement("img",{className:b.a.Logo,src:_.a,alt:"Logo"}),i.a.createElement(T,{list:t,clickHygge:function(e){var n=!1,a=t.map((function(t){var a=Object(f.a)(Object(f.a)({},t),{},{display:t.id!==e?!t.display:t.display,isExpanded:t.id===e?!t.isExpanded:t.isExpanded});return n=a.isExpanded?a.isExpanded:n,a}));o(a),u(n)}}))},K=t(5),Q=t.n(K),X=t(6),Y=t.n(X),G=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:Y.a.SubHeading},e.heading),i.a.createElement("div",{className:Y.a.Collection},e.collection.map((function(e){return i.a.createElement("div",{key:e.id,className:Y.a.Circle})}))))},Z=function(e){return i.a.createElement(i.a.Fragment,null,e.list.map((function(e){return i.a.createElement(G,Object.assign({key:e.id},e))})))},$=[{id:1,heading:"Seasons",collection:[{id:1},{id:2},{id:3},{id:4},{id:5}]},{id:2,heading:"Warmth",collection:[{id:6},{id:7}]},{id:3,heading:"People and animals",collection:[{id:8}]},{id:4,heading:"Surreal",collection:[{id:9}]}],ee=function(){return i.a.createElement("main",{className:Q.a.Collection},i.a.createElement("h1",{className:Q.a.Heading},"~ my Collection ~"),i.a.createElement("section",{className:Q.a.Categories},i.a.createElement(Z,{list:$})))},ne=function(){var e=l(),n=Object(r.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(i.a.createElement(z,null)),s=Object(r.a)(c,2),u=s[0],d=s[1],g=[{label:"My hygge board",element:i.a.createElement(z,null)},{label:"My collection",element:i.a.createElement(ee,null)}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{canInstall:t,install:o,pages:g,getPage:function(e){return d(e)}}),u)},te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hygge",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/hygge","/service-worker.js");te?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(n,e)}))}}()}],[[22,1,2]]]);
//# sourceMappingURL=main.e71c65bd.chunk.js.map