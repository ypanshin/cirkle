(this["webpackJsonpadmin-app"]=this["webpackJsonpadmin-app"]||[]).push([[1],{58:function(e,n,t){var i={"./ion-action-sheet.entry.js":[90,5],"./ion-alert.entry.js":[91,6],"./ion-app_8.entry.js":[92,7],"./ion-avatar_3.entry.js":[93,17],"./ion-back-button.entry.js":[94,18],"./ion-backdrop.entry.js":[95,43],"./ion-button_2.entry.js":[96,19],"./ion-card_5.entry.js":[97,20],"./ion-checkbox.entry.js":[98,21],"./ion-chip.entry.js":[99,22],"./ion-col_3.entry.js":[100,44],"./ion-datetime_3.entry.js":[101,10],"./ion-fab_3.entry.js":[102,23],"./ion-img.entry.js":[103,45],"./ion-infinite-scroll_2.entry.js":[104,46],"./ion-input.entry.js":[105,24],"./ion-item-option_3.entry.js":[106,25],"./ion-item_8.entry.js":[107,26],"./ion-loading.entry.js":[108,27],"./ion-menu_3.entry.js":[109,28],"./ion-modal.entry.js":[110,8],"./ion-nav_2.entry.js":[111,14],"./ion-popover.entry.js":[112,9],"./ion-progress-bar.entry.js":[113,29],"./ion-radio_2.entry.js":[114,30],"./ion-range.entry.js":[115,31],"./ion-refresher_2.entry.js":[116,11],"./ion-reorder_2.entry.js":[117,16],"./ion-ripple-effect.entry.js":[118,47],"./ion-route_4.entry.js":[119,32],"./ion-searchbar.entry.js":[120,33],"./ion-segment_2.entry.js":[121,34],"./ion-select_3.entry.js":[122,35],"./ion-slide_2.entry.js":[123,48],"./ion-spinner.entry.js":[124,13],"./ion-split-pane.entry.js":[125,49],"./ion-tab-bar_2.entry.js":[126,36],"./ion-tab_2.entry.js":[127,15],"./ion-text.entry.js":[128,37],"./ion-textarea.entry.js":[129,38],"./ion-toast.entry.js":[130,39],"./ion-toggle.entry.js":[131,12],"./ion-virtual-scroll.entry.js":[132,50]};function c(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(i)},c.id=58,e.exports=c},60:function(e,n,t){var i={"./ion-icon.entry.js":[133,57]};function c(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(i)},c.id=60,e.exports=c},75:function(e,n,t){},76:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),r=t(28),s=t.n(r),o=t(2),j=t(47),l=t(21),a=t(24),d=t(14),b=t(20);function h(e,n){var t=Object(i.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(i){return console.log(i),n}})),c=Object(b.a)(t,2),r=c[0],s=c[1];return[r,function(n){try{var t=n instanceof Function?n(r):n;s(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(i){console.log(i)}}]}var u=t(8),O=t(1),x=function(e){var n=Object.assign({},e),t=Object(a.b)().loginWithPopup;return Object(O.jsxs)(o.c,Object(l.a)(Object(l.a)({},n),{},{onClick:function(){return t()},children:[Object(O.jsx)(o.i,{slot:"start",icon:u.m}),"Log In"]}))},f=function(){Object(d.f)().name;return Object(O.jsxs)(o.r,{children:[Object(O.jsx)(o.h,{children:Object(O.jsxs)(o.z,{children:[Object(O.jsx)(o.d,{slot:"start",children:Object(O.jsx)(o.p,{})}),Object(O.jsx)(o.y,{children:"Home"})]})}),Object(O.jsxs)(o.f,{fullscreen:!0,children:[Object(O.jsx)(o.h,{collapse:"condense",children:Object(O.jsx)(o.z,{children:Object(O.jsx)(o.y,{size:"large",children:"Home"})})}),Object(O.jsx)(x,{})]})]})},p=function(e){var n=e.skip,t=h("introDisplayed",!1),i=Object(b.a)(t,2);i[0],i[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(o.u,{class:"ion-padding",children:[Object(O.jsx)(o.e,{"col-12":!0,children:"Intro Page"}),Object(O.jsx)(o.e,{"col-12":!0,children:Object(O.jsx)(o.c,{fill:"clear",routerLink:"/",onClick:n,children:"Home"})})]})})},m=(t(75),function(e){var n=e.skip,t=[{icon:void 0,title:"Feature Title",text:"Text"}].map((function(e){return Object(O.jsxs)(o.v,{children:[Object(O.jsx)(o.i,{name:e.icon}),Object(O.jsx)("h4",{children:e.title}),Object(O.jsx)("p",{children:e.text})]})}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.f,{class:"ion-padding",children:Object(O.jsxs)(o.w,{pager:!0,children:[Object(O.jsxs)(o.v,{children:[Object(O.jsx)(o.j,{src:"../../../assets/icons/icon-192x192.png"}),Object(O.jsx)("h4",{children:"Cirkle"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "})]}),t,Object(O.jsxs)(o.v,{children:[Object(O.jsx)(o.j,{src:"../../../assets/icons/icon-192x192.png"}),Object(O.jsx)("h4",{children:"Lorem ipsum 3"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "}),Object(O.jsx)(o.u,{class:"ion-padding",children:Object(O.jsx)(o.e,{"col-12":!0,children:Object(O.jsx)(o.c,{fill:"clear",routerLink:"/",onClick:n,children:"Home"})})})]})]})}),Object(O.jsx)(o.g,{vertical:"top",horizontal:"end",slot:"fixed",children:Object(O.jsx)(o.c,{fill:"clear",routerLink:"/",onClick:n,children:"Skip"})})]})}),g=function(){Object(d.f)().name;var e=Object(o.I)("mobile")||Object(o.I)("mobileweb"),n=h("introDisplayed",!1),t=Object(b.a)(n,2),i=(t[0],t[1]),c=function(){i(!0)};return Object(O.jsx)(o.f,{class:"ion-padding",children:e?Object(O.jsx)(m,{skip:c}):Object(O.jsx)(p,{skip:c})})},y=function(e){var n=Object.assign({},e),t=h("introDisplayed",!1),i=Object(b.a)(t,1)[0];return Object(O.jsx)(d.b,Object(l.a)(Object(l.a)({},n),{},{children:i?Object(O.jsx)(f,{}):Object(O.jsx)(g,{})}))},v=function(e){var n=Object.assign({},e),t=Object(a.b)().isAuthenticated;return Object(O.jsx)(d.b,Object(l.a)(Object(l.a)({},n),{},{children:t?Object(O.jsx)(d.a,{to:"/dashboard"}):Object(O.jsx)(y,{})}))},k=t(52),w=["children"],I=function(e){var n=e.children,t=Object(k.a)(e,w),i=Object(a.b)().isAuthenticated;return Object(O.jsx)(d.b,Object(l.a)(Object(l.a)({},t),{},{children:i?n:Object(O.jsx)(d.a,{to:"/"})}))},_=(t(76),[{title:"Dashboard",url:"/dashboard",iosIcon:u.o,mdIcon:u.p},{title:"Campaigns",url:"/campaigns",iosIcon:u.s,mdIcon:u.t},{title:"Favorites",url:"/page/Favorites",iosIcon:u.k,mdIcon:u.l},{title:"Archived",url:"/page/Archived",iosIcon:u.a,mdIcon:u.b},{title:"Trash",url:"/page/Trash",iosIcon:u.y,mdIcon:u.z},{title:"Settings",url:"/settings",iosIcon:u.A,mdIcon:u.B}]),C=["Family","Friends","Notes","Work","Travel","Reminders"],z=function(){var e=Object(d.e)(),n=Object(a.b)(),t=n.logout,i=n.isAuthenticated,c=n.user,r=i?Object(O.jsx)(o.m,{id:"other-list",children:Object(O.jsx)(o.q,{autoHide:!1,children:Object(O.jsxs)(o.k,{lines:"none",onClick:function(){return t({returnTo:window.location.origin})},children:[Object(O.jsx)(o.i,{slot:"start",icon:u.n}),Object(O.jsx)(o.l,{children:"Log Out"})]})})}):null;return Object(O.jsxs)(o.o,{contentId:"main",type:"overlay",children:[Object(O.jsxs)(o.z,{children:[Object(O.jsx)(o.b,{slot:"start",class:"ion-margin",children:Object(O.jsx)("img",{src:null===c||void 0===c?void 0:c.picture,alt:null===c||void 0===c?void 0:c.name})}),Object(O.jsx)(o.y,{children:"Cirkle Admin"}),Object(O.jsx)(o.y,{size:"small",children:null===c||void 0===c?void 0:c.name})]}),Object(O.jsxs)(o.f,{children:[Object(O.jsx)(o.m,{id:"inbox-list",children:_.map((function(n,t){return Object(O.jsx)(o.q,{autoHide:!1,children:Object(O.jsxs)(o.k,{className:e.pathname===n.url?"selected":"",routerLink:n.url,routerDirection:"none",lines:"none",detail:!1,children:[Object(O.jsx)(o.i,{slot:"start",ios:n.iosIcon,md:n.mdIcon}),Object(O.jsx)(o.l,{children:n.title})]})},t)}))}),Object(O.jsxs)(o.m,{id:"labels-list",children:[Object(O.jsx)(o.n,{children:"Labels"}),C.map((function(e,n){return Object(O.jsxs)(o.k,{lines:"none",children:[Object(O.jsx)(o.i,{slot:"start",icon:u.d}),Object(O.jsx)(o.l,{children:e})]},n)}))]}),r]})]})},L=function(e){var n=e.children;return Object(O.jsxs)(o.x,{contentId:"main",children:[Object(O.jsx)(z,{}),Object(O.jsx)(o.t,{id:"main",children:n})]})},A=function(){Object(d.f)().name;return Object(O.jsxs)(o.r,{children:[Object(O.jsx)(o.h,{children:Object(O.jsxs)(o.z,{children:[Object(O.jsx)(o.d,{slot:"start",children:Object(O.jsx)(o.p,{})}),Object(O.jsx)(o.y,{children:"Settings"})]})}),Object(O.jsx)(o.f,{fullscreen:!0,children:Object(O.jsx)(o.h,{collapse:"condense",children:Object(O.jsx)(o.z,{children:Object(O.jsx)(o.y,{size:"large",children:"Settings"})})})})]})},S=function(){Object(d.f)().name;return Object(O.jsxs)(o.r,{children:[Object(O.jsx)(o.h,{children:Object(O.jsxs)(o.z,{children:[Object(O.jsx)(o.d,{slot:"start",children:Object(O.jsx)(o.p,{})}),Object(O.jsx)(o.y,{children:"Campaigns"})]})}),Object(O.jsx)(o.f,{fullscreen:!0,children:Object(O.jsx)(o.h,{collapse:"condense",children:Object(O.jsx)(o.z,{children:Object(O.jsx)(o.y,{size:"large",children:"Campaigns"})})})})]})},F=(t(77),t(78),t(79),t(80),t(81),t(82),t(83),t(84),t(85),t(86),t(87),function(){Object(d.f)().name;return Object(O.jsxs)(o.r,{children:[Object(O.jsx)(o.h,{children:Object(O.jsxs)(o.z,{children:[Object(O.jsx)(o.d,{slot:"start",children:Object(O.jsx)(o.p,{})}),Object(O.jsx)(o.y,{children:"Dashboard"})]})}),Object(O.jsx)(o.f,{fullscreen:!0,children:Object(O.jsx)(o.h,{collapse:"condense",children:Object(O.jsx)(o.z,{children:Object(O.jsx)(o.y,{size:"large",children:"Dashboard"})})})})]})}),D=function(){var e;return Object(O.jsx)(o.a,{children:Object(O.jsx)(j.a,{basename:null!==(e="/cirkle")?e:"/",children:Object(O.jsxs)(o.t,{children:[Object(O.jsx)(v,{path:"/",exact:!0}),Object(O.jsxs)(L,{children:[Object(O.jsx)(I,{path:"dashboard",exact:!0,children:Object(O.jsx)(F,{})}),Object(O.jsx)(I,{path:"/settings",exact:!0,children:Object(O.jsx)(A,{})}),Object(O.jsx)(I,{path:"/campaigns",exact:!0,children:Object(O.jsx)(S,{})})]})]})})})},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,150)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),i(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(a.a,{domain:"dev-4h5aicvo.us.auth0.com",clientId:"qobdEwhRAJh9Nb1ZXxMYnZ7kfbY4CtGw",redirectUri:window.location.href,children:Object(O.jsx)(D,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cirkle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/cirkle","/service-worker.js");T?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(n,e)}))}}(),W()}},[[88,3,4]]]);
//# sourceMappingURL=main.1f9d6a30.chunk.js.map