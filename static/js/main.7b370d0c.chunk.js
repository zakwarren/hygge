(this.webpackJsonphygge=this.webpackJsonphygge||[]).push([[0],{10:function(e,t,a){e.exports={Container:"AddCategory_Container__32VHG",Form:"AddCategory_Form__-wxGw",Heading:"AddCategory_Heading__3v7Ga",Controls:"AddCategory_Controls__241mK",InputContainer:"AddCategory_InputContainer__3_kun",Label:"AddCategory_Label__2Dhth",Input:"AddCategory_Input__2MIeA",ValidationError:"AddCategory_ValidationError__rAdz6",Button:"AddCategory_Button__309AH"}},111:function(e,t,a){},21:function(e,t,a){e.exports={Menu:"Menu_Menu__3BbAQ",Open:"Menu_Open__3BL1e",MenuItem:"Menu_MenuItem__20Hmz",Inactive:"Menu_Inactive__JbVuI"}},213:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(16),i=a.n(c),l=a(25),s=a(33),u=a(92),m=a(9),g=(a(111),a(6)),d=a(1),p=a(40),f=(a(112),a(94)),y=a.n(f),b=a(5),h=a(7),v=a(8),_=a.n(v),E=a(29),C="SET_ALL_HYGGE",j="SET_COLLECTION",k="SET_SELECTED",O="SET_CATEGORIES",I="Random",H={name:"All",color:"#bd8e62"},x={name:"+",color:"#deddd9"},S={surreal:{name:"Surreal",color:"#48d0e2"},warmth:{name:"Warmth",color:"#db5b5b"},seasons:{name:"Seasons",color:"#f2b61a"},aquatic:{name:"Aquatic",color:"#6ca7ec"},creatures:{name:"Creatures",color:"#7ab778"}},w=a.p+"static/media/sincerely-media-9nhxEa3PK30-unsplash.8274d1f2.jpg",N=a.p+"static/media/annie-spratt-OQj0chxpZOI-unsplash.95aef95b.jpg",A=a.p+"static/media/clay-banks-z_DkoUqgx6M-unsplash.76cd620b.jpg",L=a.p+"static/media/jyrki-sorjonen-WnWwzDxvA2M-unsplash.f84e3c7c.jpg",B=a.p+"static/media/olivier-guillard-FKJgBUDoVC0-unsplash.4b219741.jpg",M=a.p+"static/media/stephane-juban-DI8Bf6K1134-unsplash.0f33437b.jpg",U=a.p+"static/media/aditya-vyas-PzhmEp_aDU4-unsplash.612f23e0.jpg",P=a.p+"static/media/john-noonan-E-9CFTftQh4-unsplash.498b4ca3.jpg",V=a.p+"static/media/emily-toycen-jd_YFWRkOqQ-unsplash.94656feb.jpg",T=[{id:1,image:w,attribution:"Photo by Sincerely Media on Unsplash",category:S.warmth.name},{id:2,image:N,attribution:"Photo by Annie Spratt on Unsplash",category:S.warmth.name},{id:3,image:A,attribution:"Photo by Clay Banks on Unsplash",category:S.surreal.name},{id:4,image:L,attribution:"Photo by Jyrki Sorjonen on Unsplash",category:S.seasons.name},{id:5,image:B,attribution:"Photo by Olivier Guillard on Unsplash",category:S.seasons.name},{id:6,image:M,attribution:"Photo by St\xe9phane Juban on Unsplash",category:S.warmth.name},{id:7,image:U,attribution:"Photo by Aditya Vyas on Unsplash",category:S.seasons.name},{id:8,image:P,attribution:"Photo by John Noonan on Unsplash",category:S.seasons.name},{id:9,image:V,attribution:"Photo by Emily Toycen on Unsplash",category:S.seasons.name}],F=function(e,t,a){var n;t===I?n=e.sort((function(){return.5-Math.random()})).slice(0,4):n=t&&t!==H.name?e.filter((function(e){return e.category===t})):a&&a.length>0?e.filter((function(e){return a.includes(e.id)})):e;return n.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{display:!0,isExpanded:!1})}))},R=a(31),W=new(a(95).a)("hygge"),D="categories",q="images";W.version(1).stores((n={},Object(R.a)(n,D,"id, category, name, color"),Object(R.a)(n,q,"id, image, attribution, category"),n));var G=W,J="myHygge",K=function(e){return{type:C,allHygge:e}},z=function(){var e=Object(E.a)(_.a.mark((function e(){var t,a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.table(q).toArray();case 2:return t=e.sent,a=t.length>1?t:T,n=F(a),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(e){return{type:j,collection:e}},X=function(e){return{type:k,selectedIds:e}},Y=function(){return function(){var e=Object(E.a)(_.a.mark((function e(t,a){var n,r,o,c,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().hygge.allHygge){e.next=5;break}return e.next=4,z();case 4:n=e.sent;case 5:r=localStorage.getItem(J),(o=r?JSON.parse(r):null)?(t(X(o)),c=F(n,null,o),t(Q(c))):(i=F(n,I),t(Q(i)));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Z=function(e){return{type:O,categories:e}},$=function(e){return function(){var t=Object(E.a)(_.a.mark((function t(a){var n,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.keys(e),r=n.map((function(t,a){return Object(b.a)({id:a,category:t},e[t])})),t.next=4,G.table(D).clear();case 4:return t.next=6,G.table(D).bulkAdd(r);case 6:a(Z(e));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ee=function(){var e=Object(m.c)();Object(r.useEffect)((function(){e(function(){var e=Object(E.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:a=e.sent,t(K(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(E.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.table(D).toArray();case 2:a=e.sent,n={},a.forEach((function(e){n[e.category]={name:e.name,color:e.color}})),r=a.length>0?n:S,t(Z(r));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(Y())}),[e])},te=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},ae=a(21),ne=a.n(ae),re=a(96),oe=a.n(re),ce=function(e){return e.show?o.a.createElement("div",{className:oe.a.Backdrop,onClick:e.clicked}):null},ie=function(e){var t=Object(r.useState)(!1),a=Object(g.a)(t,2),n=a[0],c=a[1],i=function(){return c((function(e){return!e}))},s=[ne.a.Menu],u=o.a.createElement("p",null,"...");return n&&(s.push(ne.a.Open),u=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:ne.a.MenuItem},o.a.createElement(l.b,{to:"/",exact:!0},"My hygge board")),o.a.createElement("p",{className:ne.a.MenuItem},o.a.createElement(l.b,{to:"/collection"},"My collection")),e.canInstall?o.a.createElement("p",{className:ne.a.MenuItem,onClick:e.install},"Install"):null,o.a.createElement("p",{className:ne.a.MenuItem},o.a.createElement(l.b,{to:"/add"},"Upload file")),o.a.createElement("p",{className:[ne.a.MenuItem,ne.a.Inactive].join(" ")},"Share board"))),o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{show:n,clicked:i}),o.a.createElement("div",{className:s.join(" "),onClick:i},u))},le=a.p+"static/media/snowflake.e574fcc0.png",se=a(97),ue=a.n(se),me=function(e,t){return Object(b.a)(Object(b.a)({},e),t)},ge=function(e,t){return e.map((function(e){return me(e,{display:e.id===t?e.display:!e.display,isExpanded:e.id===t?!e.isExpanded:e.isExpanded})}))},de=a(54),pe=a.n(de),fe=a(22),ye=a.n(fe),be=function(e){var t=e.id,a=e.image,n=e.attribution,c=e.display,i=e.isExpanded,l=e.isSelected,s=e.isSmall,u=e.clicked,m=e.longClicked,d=e.removeHygge,p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.shouldPreventDefault,o=void 0===n||n,c=a.delay,i=void 0===c?300:c,l=Object(r.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1],d=Object(r.useRef)(),p=Object(r.useRef)(),f=Object(r.useCallback)((function(t){o&&t.target&&(t.target.addEventListener("touchend",te,{passive:!1}),p.current=t.target),d.current=setTimeout((function(){e(t),m(!0)}),i)}),[e,i,o]),y=Object(r.useCallback)((function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];d.current&&clearTimeout(d.current),a&&!u&&t(),m(!1),o&&p.current&&p.current.removeEventListener("touchend",te)}),[o,t,u]);return{onMouseDown:function(e){return f(e)},onTouchStart:function(e){return f(e)},onMouseUp:function(e){return y(e)},onMouseLeave:function(e){return y(e,!1)},onTouchEnd:function(e){return y(e)}}}(m,u,{shouldPreventDefault:!0,delay:500}),f=m?p:{onClick:u},y=[ye.a.HyggeImage];i?y.push(ye.a.Expanded):c||y.push(ye.a.Shrunk),s&&!i&&c&&y.push(ye.a.Small);var b=[ye.a.Circle];return l&&b.push(ye.a.Selected),o.a.createElement("div",{className:y.join(" ")},o.a.createElement("img",Object.assign({className:b.join(" "),src:a,alt:n},f)),i?o.a.createElement("span",{className:ye.a.Attribution},n):null,i||!d?null:o.a.createElement("span",{className:ye.a.Remove,onClick:function(e){e.stopPropagation(),d(t)}},"X"))},he=function(e){var t=e.list,a=e.wrap,n=e.clickHygge,r=e.longClickHygge,c=e.removeHygge,i=a?"".concat(pe.a.HyggeList," ").concat(pe.a.Wrap):pe.a.HyggeList;return o.a.createElement("div",{className:i},t.map((function(e){return o.a.createElement(be,Object.assign({key:e.id,isSmall:a},e,{clicked:function(){return n(e.id)},longClicked:r?function(){return r(e.id)}:null,removeHygge:c}))})))},ve=a(41),_e=a.n(ve),Ee=function(e){var t=e.headerText,a=e.hasExpanded,n=[_e.a.Heading],r=[_e.a.SuperHeader];return a&&(n.push(_e.a.Expanded),r.push(_e.a.Expanded)),o.a.createElement(o.a.Fragment,null,o.a.createElement("h5",{className:r.join(" ")},"my"),o.a.createElement("h1",{className:n.join(" ")},t))},Ce=Object(m.b)((function(e){return{collection:e.hygge.collection}}),(function(e){return{onGetSelection:function(){return e(Y())},onSetCollection:function(t){return e(Q(t))}}}))((function(e){var t=e.collection,a=e.onGetSelection,n=e.onSetCollection,c=Object(r.useState)(!1),i=Object(g.a)(c,2),l=i[0],s=i[1];Object(r.useEffect)((function(){a()}),[a]);return o.a.createElement("main",{className:ue.a.Hygge},o.a.createElement(Ee,{headerText:"Hygge Board",hasExpanded:l}),t&&o.a.createElement(he,{list:t,wrap:!1,clickHygge:function(e){var a=ge(t,e);n(a);var r=a.some((function(e){return e.isExpanded}));s(r)}}))})),je=a(67),ke=a.n(je),Oe=a(98),Ie=a.n(Oe),He=a(35),xe=a.n(He),Se=function(e){var t=e.name,a=e.color,n=e.collection,r=e.onClick,c=e.removeCategory;return o.a.createElement("div",{className:xe.a.Circle,style:{backgroundColor:a,opacity:t===x.name?1:.25},onClick:r},o.a.createElement("h2",{className:"".concat(xe.a.SubHeading," ").concat(t===x.name?xe.a.Big:"")},t),t===x.name?null:o.a.createElement("div",{className:xe.a.Value},"x ",n.length),[x.name,H.name].includes(t)?null:o.a.createElement("span",{className:xe.a.Remove,onClick:function(e){e.stopPropagation(),c(t)}},"X"))},we=function(e){var t=e.list,a=e.removeCategory;return o.a.createElement("section",{className:Ie.a.Collections},t.map((function(e){return o.a.createElement(Se,Object.assign({key:e.name},e,{removeCategory:a}))})))},Ne=Object(m.b)((function(e){return{allHygge:e.hygge.allHygge,categories:e.hygge.categories}}),(function(e){return{onSetCollection:function(t){return e(Q(t))},onSaveCategories:function(t){return e($(t))}}}))((function(e){var t=e.history,a=e.allHygge,n=e.categories,r=e.onSetCollection,c=e.onSaveCategories;if(!n||!a)return null;var i=function(e){var n=F(a,e);r(n),t.push("/collection/".concat(e))},l=Object.keys(n).map((function(e){var t=n[e],r=a.filter((function(e){return e.category===t.name}));return Object(b.a)(Object(b.a)({},t),{},{collection:r,onClick:function(){return i(t.name)}})}));return l.unshift({name:H.name,color:H.color,collection:a,onClick:function(){return i(H.name)}}),l.push({name:x.name,color:x.color,collection:[],onClick:function(){return t.push("/collection/add")}}),o.a.createElement("main",{className:ke.a.Collection},o.a.createElement(Ee,{headerText:"Collection",hasExpanded:!1}),o.a.createElement("section",{className:ke.a.Categories},o.a.createElement(we,{list:l,removeCategory:function(e){var t=Object(b.a)({},n);delete t[e.toLowerCase()],c(t)}})))})),Ae=a(55),Le=a.n(Ae),Be=Object(m.b)((function(e){return{collection:e.hygge.collection,selectedIds:e.hygge.selectedIds,categories:e.hygge.categories}}),(function(e){return{onSaveSelection:function(t){return e((a=t,function(e){if(0===a.length)localStorage.removeItem(J);else{var t=JSON.stringify(a);localStorage.setItem(J,t)}e(X(a))}));var a},onSetCollection:function(t){return e(Q(t))},onRemoveHygge:function(t){return e(function(e){return function(){var t=Object(E.a)(_.a.mark((function t(a,n){var r,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().hygge.allHygge,o=r.filter((function(t){return t.id!==e})),t.next=4,G.table(q).clear();case 4:return t.next=6,G.table(q).bulkAdd(o);case 6:a(K(o));case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.history,a=e.match,n=e.collection,c=e.selectedIds,i=e.categories,l=e.onSaveSelection,s=e.onSetCollection,u=e.onRemoveHygge,m=Object(r.useState)(!1),p=Object(g.a)(m,2),f=p[0],y=p[1],v=n?n.map((function(e){var t=c&&c.includes(e.id);return Object(b.a)(Object(b.a)({},e),{},{isSelected:t})})):null,_=o.a.createElement(d.a,{to:"/collection"});if(n){var E=i[a.params.category.toLowerCase()],C={backgroundColor:E?E.color:H.color};_=o.a.createElement("main",{className:Le.a.Category},o.a.createElement(Ee,{headerText:a.params.category,hasExpanded:f}),o.a.createElement("div",{className:Le.a.Backing,style:C}),o.a.createElement("span",{className:Le.a.BackButton,onClick:function(){return t.push("/collection")}},"\u2329"),o.a.createElement(he,{list:v,wrap:!0,clickHygge:function(e){var t=ge(n,e);s(t);var a=t.some((function(e){return e.isExpanded}));y(a)},longClickHygge:function(e){var t=[];t=c&&c.includes(e)?c.filter((function(t){return t!==e})):c?[].concat(Object(h.a)(c),[e]):[e];var a=Object(h.a)(new Set(t));l(a)},removeHygge:function(e){u(e);var t=n.filter((function(t){return t.id!==e}));s(t)}}))}return _})),Me=a(15),Ue=a(28),Pe=a(10),Ve=a.n(Pe),Te=Object(m.b)((function(e){return{categories:e.hygge.categories}}),(function(e){return{onSaveCategories:function(t){return e($(t))}}}))((function(e){var t=e.history,a=e.categories,n=e.onSaveCategories,r=Ue.b().shape({name:Ue.c().required("Please enter a valid collection name")});return o.a.createElement("section",{className:Ve.a.Container},o.a.createElement("h1",{className:Ve.a.Heading},"Add Collection"),o.a.createElement(Me.c,{initialValues:{name:"",color:"#ffffff"},validationSchema:r,onSubmit:function(e){var r=Object(b.a)(Object(b.a)({},a),{},Object(R.a)({},e.name.toLowerCase(),e));n(r),t.push("/collection")}},(function(e){var t=e.errors,a=e.touched,n=Object.keys(t).length>0;return o.a.createElement(Me.b,{className:Ve.a.Form},o.a.createElement("div",{className:Ve.a.InputContainer},o.a.createElement("label",{className:Ve.a.Label,htmlFor:"name"},"Collection Name"),o.a.createElement(Me.a,{className:Ve.a.Input,type:"input",id:"name",name:"name"}),t.name&&a.name?o.a.createElement("div",{className:Ve.a.ValidationError},t.name):null),o.a.createElement("div",{className:Ve.a.InputContainer},o.a.createElement("label",{className:Ve.a.Label,htmlFor:"color"},"Colour"),o.a.createElement(Me.a,{className:Ve.a.Input,type:"color",id:"color",name:"color"}),t.color&&a.color?o.a.createElement("div",{className:Ve.a.ValidationError},t.color):null),o.a.createElement("div",{className:Ve.a.Controls},o.a.createElement("button",{className:Ve.a.Button,type:"submit",disabled:n},"Add Collection")))})))})),Fe=a(4),Re=a.n(Fe),We=Object(m.b)((function(e){return{categories:e.hygge.categories}}),(function(e){return{onSaveNewHygge:function(t,a,n){return e(function(e,t,a){return function(){var n=Object(E.a)(_.a.mark((function n(r,o){var c,i,l,s;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=o().hygge.allHygge,i=c.map((function(e){return e.id})),l=i.length>0?Math.max.apply(null,i)+1:1,s=[].concat(Object(h.a)(c),[{id:l,image:e,attribution:t,category:a}]),n.next=6,G.table(q).clear();case 6:return n.next=8,G.table(q).bulkAdd(s);case 8:r(K(s));case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(t,a,n))}}}))((function(e){var t=e.history,a=e.categories,n=e.onSaveNewHygge,c=Object(r.useRef)();if(!a)return null;var i=Object.keys(a).map((function(e){return a[e].name})),l={image:"",attribution:"",category:i[0]},s=Ue.b().shape({image:Ue.a().required("Please upload a valid image"),attribution:Ue.c(),category:Ue.c().required("Please select a valid category")});return o.a.createElement("section",{className:Re.a.Container},o.a.createElement("h1",{className:Re.a.Heading},"Add Hygge Image"),o.a.createElement(Me.c,{initialValues:l,validationSchema:s,onSubmit:function(e){var a=document.getElementById("image").files[0],r=new FileReader;a&&r.readAsDataURL(a),r.addEventListener("load",(function(){c.current.src=r.result,n(r.result,e.attribution,e.category),t.push("/collection")}),!1)}},(function(e){var t=e.errors,a=e.touched,n=Object.keys(t).length>0;return o.a.createElement(Me.b,{className:Re.a.Form},o.a.createElement("div",{className:Re.a.InputContainer},o.a.createElement("label",{className:Re.a.Label,htmlFor:"image"},"Hygge image"),o.a.createElement(Me.a,{className:Re.a.Input,type:"file",accept:"image/*",id:"image",name:"image"}),t.name&&a.name?o.a.createElement("div",{className:Re.a.ValidationError},t.image):null,o.a.createElement("img",{ref:c,className:Re.a.UploadedImage,alt:"Uploaded file"})),o.a.createElement("div",{className:Re.a.InputContainer},o.a.createElement("label",{className:Re.a.Label,htmlFor:"attribution"},"Image attribution"),o.a.createElement(Me.a,{className:Re.a.Input,type:"text",id:"attribution",name:"attribution"}),t.color&&a.color?o.a.createElement("div",{className:Re.a.ValidationError},t.attribution):null),o.a.createElement("div",{className:Re.a.InputContainer},o.a.createElement("label",{className:Re.a.Label,htmlFor:"category"},"Category"),o.a.createElement(Me.a,{className:Re.a.Input,as:"select",id:"category",name:"category"},i.map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))),t.color&&a.color?o.a.createElement("div",{className:Re.a.ValidationError},t.category):null),o.a.createElement("div",{className:Re.a.Controls},o.a.createElement("button",{className:Re.a.Button,type:"submit",disabled:n},"Add Collection")))})))})),De=function(){var e=function(){var e=Object(r.useState)(null),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(r.useEffect)((function(){return window.addEventListener("beforeinstallprompt",o),function(){window.removeEventListener("beforeinstallprompt",o)}}),[]);var o=function(e){return e.preventDefault(),n(e),!1};return[null!==a,function(){a&&(a.prompt(),n(null))}]}(),t=Object(g.a)(e,2),a=t[0],n=t[1];ee();var c=o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/collection/add",exact:!0,component:Te}),o.a.createElement(d.b,{path:"/collection/:category",exact:!0,component:Be}),o.a.createElement(d.b,{path:"/collection",exact:!0,component:Ne}),o.a.createElement(d.b,{path:"/add",exact:!0,component:We}),o.a.createElement(d.b,{path:"/",exact:!0,component:Ce}),o.a.createElement(d.a,{to:"/"}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(ie,{canInstall:a,install:n}),o.a.createElement("img",{className:y.a.Logo,src:le,alt:"Logo"}),c,o.a.createElement(p.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))},qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(p.b.dark("An update is available and will be used after the next page reload.",{toastId:"sw-update"}),t&&t.onUpdate&&t.onUpdate(e)):(p.b.dark("Hygge is ready for offline use.",{toastId:"sw-offline"}),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Je={categories:null,allHygge:null,collection:null,selectedIds:null},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return me(e,{allHygge:t.allHygge});case j:return me(e,{collection:t.collection});case k:return me(e,{selectedIds:t.selectedIds});case O:return me(e,{categories:t.categories});default:return e}},ze=s.d,Qe=Object(s.c)({hygge:Ke}),Xe=Object(s.e)(Qe,ze(Object(s.a)(u.a)));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:Xe},o.a.createElement(l.a,{basename:"/hygge"},o.a.createElement(De,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hygge",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hygge","/service-worker.js");qe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ge(e,t)})).catch((function(){console.log("No internet connection found. Hygge is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ge(t,e)}))}}()},22:function(e,t,a){e.exports={HyggeImage:"HyggeImage_HyggeImage__3IVgc",Remove:"HyggeImage_Remove__rsNkx",Small:"HyggeImage_Small__3ec51",Circle:"HyggeImage_Circle__3xqpq",Expanded:"HyggeImage_Expanded__3v_xf",Shrunk:"HyggeImage_Shrunk__23BbW",Selected:"HyggeImage_Selected__18fLV",Attribution:"HyggeImage_Attribution__1fERS"}},35:function(e,t,a){e.exports={Circle:"Category_Circle__bwg8C",SubHeading:"Category_SubHeading__1ohBX",Value:"Category_Value__1z-Zb",Big:"Category_Big__afxnG",Remove:"Category_Remove__3cLKP"}},4:function(e,t,a){e.exports={Container:"AddImage_Container__2AP8c",Form:"AddImage_Form__2OPaq",Heading:"AddImage_Heading__3Suwb",Controls:"AddImage_Controls__1ae-4",InputContainer:"AddImage_InputContainer__2OK3q",Label:"AddImage_Label__1p_xv",Input:"AddImage_Input__3qJUr",ValidationError:"AddImage_ValidationError__1iNjI",UploadedImage:"AddImage_UploadedImage__238L3",Button:"AddImage_Button__13tjK"}},41:function(e,t,a){e.exports={SuperHeader:"Heading_SuperHeader__2sQiR",Heading:"Heading_Heading__3lR0m",Expanded:"Heading_Expanded__SNKwU"}},54:function(e,t,a){e.exports={HyggeList:"HyggeList_HyggeList__3Y1uH",Wrap:"HyggeList_Wrap__Gc9Au"}},55:function(e,t,a){e.exports={Category:"Category_Category__CVvHh",Backing:"Category_Backing__1HkkO",arrival:"Category_arrival__3bu6A",BackButton:"Category_BackButton__OcTCm"}},67:function(e,t,a){e.exports={Collection:"Collection_Collection__1aLpU",Heading:"Collection_Heading__150P6",Categories:"Collection_Categories__98J8f"}},94:function(e,t,a){e.exports={Logo:"App_Logo__18yHE"}},96:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2VIvX"}},97:function(e,t,a){e.exports={Hygge:"Hygge_Hygge__2JLuE"}},98:function(e,t,a){e.exports={Collections:"CategoryList_Collections__2O7Gg"}}},[[213,1,2]]]);
//# sourceMappingURL=main.7b370d0c.chunk.js.map