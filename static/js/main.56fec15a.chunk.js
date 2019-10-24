(window.webpackJsonpenjoythescriptures=window.webpackJsonpenjoythescriptures||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);a(52),a(53),a(55),a(56),a(57);var n=a(0),r=a.n(n),c=a(43),l=a.n(c),s=a(16),o=a(10);var i=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Enjoy the Scriptures."))};var u=function(){return r.a.createElement("img",{alt:"A pathway with trees on either side in autumn",src:"/background.jpg",style:{position:"fixed",top:0,zIndex:-1,width:"100%",height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",opacity:"0.9"}})},m=a(3);var f=function(){return r.a.createElement("div",{className:"col text-center"},r.a.createElement("img",{alt:"loading",src:"loader.gif"}))},p=a(15),h=a(19),v=a(1),g=a.n(v);var d={apiKey:"AIzaSyDcWkM-EwFO9BrLbHAiZf_NcPKT1jg_B4M",authDomain:"enjoy-the-scriptures-test.firebaseapp.com",databaseURL:"https://enjoy-the-scriptures-test.firebaseio.com",projectId:"enjoy-the-scriptures-test",storageBucket:"",messagingSenderId:"854443437513",appId:"1:854443437513:web:b0f58f35a8d4a823c64c18",measurementId:"G-EDCKCQPLL0"},E=g.a.initializeApp(d),b=(a(33),function(){function e(t,a,n,r,c){Object(p.a)(this,e),this.volume=t,this.book=a,this.chapter=n,this.n=r,this.text=c}return Object(h.a)(e,[{key:"getHref",value:function(){return["/scriptures",this.volume,this.book,this.chapter,this.n].join("/")}},{key:"getVerseId",value:function(){return[this.volume.split("_").map((function(e){return e[0]})).join(""),this.book.split("_").map((function(e){return e.substring(0,3)})).join("-"),this.chapter,this.n].join("/")}}]),e}()),N=function e(t,a,n,r,c){Object(p.a)(this,e),this.id=t,this.verseId=a,this.text=n,this.fragment=r,this.source=c},y=g.a.firestore(E),x=[],k={},O={},w={},j={};function I(e,t,a){return Object.keys(j[e][t][a]).map((function(n){return new b(e,t,a,n,j[e][t][a][n])}))}function S(e){var t=e.data(),a=new N(e.id,t.vid,t.t,t.f,{label:t.s.l,link:t.s.a});return a.created=t.c?t.c.toDate():null,a.updated=t.u?t.u.toDate():null,a}var D=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,[{key:"getVolumes",value:function(e){0===x.length?function(e){y.doc("scriptures/index").get().then((function(t){x=t.data().volumes,e(x)})).catch((function(e){console.error("Error fetching volumes: ",e)}))}(e):e(x)}},{key:"getBooks",value:function(e,t){void 0===k[e]||0===k[e].length?function(e,t){y.doc("scriptures/index/volumes/"+e).get().then((function(a){k[e]=a.data().books,t(k[e])})).catch((function(t){console.error("Error fetching books for volume: ",e,t)}))}(e,t):t(k[e])}},{key:"getChapterCount",value:function(e,t,a){void 0===O[e]||void 0===O[e][t]?function(e,t,a){y.doc("scriptures/index/volumes/"+e+"/books/"+t).get().then((function(n){var r=n.data().chapters;O[e]={},O[e][t]=r,a(r)})).catch((function(a){console.error("Error fetching chapter count for "+e+", "+t,a)}))}(e,t,a):a(O[e][t])}},{key:"getVerseCount",value:function(e,t,a,n){void 0===w[e]||void 0===w[e][t]||void 0===w[e][t][a]?function(e,t,a,n){y.doc("scriptures/index/volumes/"+e+"/books/"+t+"/chapters/"+a).get().then((function(r){var c=r.data().verses;w[e]={},w[e][t]={},w[e][t][a.toString()]=c,n(c)})).catch((function(n){console.error("Error fetching verse count for "+e+", "+t+", chapter "+a,n)}))}(e,t,a,n):n(w[e][t][a])}},{key:"getVerses",value:function(e,t,a,n){void 0===j[e]||void 0===j[e][t]||void 0===j[e][t][a]?function(e,t,a,n){void 0===j[e]&&(j[e]={}),void 0===j[e][t]&&(j[e][t]={}),void 0===j[e][t][a]&&(j[e][t][a]={}),y.collection("scriptures/index/volumes/"+e+"/books/"+t+"/chapters/"+a+"/verses").get().then((function(r){r.docs.forEach((function(n){j[e][t][a][n.id]=n.data().text})),n(I(e,t,a))})).catch((function(n){console.error("Error fetching verses for "+e+", "+t+", chapter "+a,n)}))}(e,t,a,n):n(I(e,t,a))}},{key:"getVerse",value:function(e,t,a,n,r){this.getVerses(e,t,a,(function(e){r(e[n-1])}))}},{key:"getInsights",value:function(e,t,a,n,r){!function(e,t){var a=e.getVerseId();y.collection("insights").where("vid","==",a).get().then((function(e){t(e.docs.map(S))})).catch((function(e){console.error("Error fetching insights for verse. verseId: ",a,e)}))}(new b(e,t,a,n),r)}},{key:"saveNewInsight",value:function(e){return y.collection("insights").add({vid:e.verseId,t:e.text,f:e.fragment,s:{l:e.source.label,a:e.source.link},c:g.a.firestore.FieldValue.serverTimestamp()})}}]),e}();var G=function(e){var t,a=e.match.params.volume,n=r.a.useState([]),c=Object(m.a)(n,2),l=c[0],s=c[1],o=new D;return r.a.useEffect((function(){o.getBooks(a,s)}),[]),t=0===l.length?r.a.createElement(f,null):l.map((function(e){return function(e,t){var a="#/scriptures/"+e+"/"+t;return r.a.createElement("div",{key:a,className:"col-sm text-center text-nowrap p-3"},r.a.createElement("a",{href:a,role:"button",className:"text-capitalize text-white btn btn-success btn-lg"},t.replace(/_/g," ")))}(a,e)})),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-capitalize"},a.replace(/_/g," ")),r.a.createElement("div",{className:"row"},t))};function C(e){return e.replace(/_/g," ")}var _=function(e){var t=["home"].concat(e.location.pathname.substring(1).split("/").filter((function(e){return""!==e}))),a="#",n=t.map((function(e,n){var c=n===t.length-1;n>0&&(a+="/"+e);var l=r.a.createElement("a",{href:a},C(e)),s="breadcrumb-item text-capitalize";return c&&(s+=" active",l=C(e)),r.a.createElement("li",{key:a,className:s},l)}));return r.a.createElement("div",{style:{backgroundColor:"#e9ecef"}},r.a.createElement("div",{className:"container"},r.a.createElement("ol",{className:"breadcrumb",style:{marginBottom:"0"}},n)))};function L(e,t,a){var n="#/scriptures/"+e+"/"+t+"/"+a;return r.a.createElement("div",{key:n,className:"col text-center text-nowrap p-3"},r.a.createElement("a",{href:n,role:"button",className:"text-capitalize text-white btn btn-success btn-lg"},a))}var P=function(e){var t,a=e.match.params,n=a.volume,c=a.book,l=r.a.useState(0),s=Object(m.a)(l,2),o=s[0],i=s[1],u=new D;if(r.a.useEffect((function(){u.getChapterCount(n,c,i)}),[]),0===o)t=r.a.createElement(f,null);else{t=[];for(var p=1;p<=o;p++)t.push(L(n,c,p))}return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-capitalize"},c.replace(/_/g," ")),r.a.createElement("div",{className:"row"},t))},A=r.a.createContext({});var U=function(e){var t,a=e.verse,n=e.clickable,c=r.a.useState(),l=Object(m.a)(c,2),s=l[0],i=l[1],u=r.a.useContext(A),f="m-1 p-1 rounded ";if(n&&(f+=" clickable-verse"),n&&(t=function(){return i(a.getHref())}),void 0!==s)return r.a.createElement(o.a,{to:s});var p=a.text,h=u.highlight;if(void 0!==h&&h.first!==h.last){var v=a.text.split(" ");p=[r.a.createElement("span",{key:"before"},v.slice(0,h.first).join(" ")+" "),r.a.createElement("span",{key:"highlighted",className:"verse-highlight rounded"},v.slice(h.first,h.last).join(" ")),r.a.createElement("span",{key:"after"}," "+v.slice(h.last).join(" "))]}return r.a.createElement("div",{className:f,onClick:t},r.a.createElement("p",{className:"text-justify"},r.a.createElement("span",{className:"font-weight-bold mr-1"},a.n),r.a.createElement("span",null,p)))};var z=function(e){var t,a=e.match.params,n=a.volume,c=a.book,l=a.chapter,s=r.a.useState([]),o=Object(m.a)(s,2),i=o[0],u=o[1],p=new D;return r.a.useEffect((function(){p.getVerses(n,c,l,u)}),[]),t=0===i.length?r.a.createElement(f,null):i.map((function(e){return r.a.createElement(U,{key:e.getHref(),verse:e,clickable:!0})})),r.a.createElement("div",null,r.a.createElement("h4",{className:"text-capitalize"},c.replace(/_/g," ")," ",l),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"}),r.a.createElement("div",{className:"col-sm-6"},t),r.a.createElement("div",{className:"col-3"})))},H=(a(34),g.a.firestore(E));function T(e,t){switch(t.type){case"LOGGED_OUT":return{user:null,status:"LOGGED_OUT"};case"PENDING":return{user:t.user,status:"PENDING"};case"LOGGED_IN":return{user:t.user,status:"LOGGED_IN"};case"UNAUTHORIZED":return{user:t.user,status:"UNAUTHORIZED"};default:throw new Error}}var V=function(){var e=r.a.useReducer(T,{user:null,status:"LOGGED_OUT"}),t=Object(m.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){return g.a.auth().onAuthStateChanged((function(e){null===e?n({type:"LOGGED_OUT"}):(n({type:"PENDING",user:e}),function(e){var t=H.collection("users").doc(e);return new Promise((function(e,a){t.get().then((function(t){t.exists&&!0===t.data().admin?e(!0):e(!1)})).catch((function(e){console.error("Error getting document: ",e),a(e)}))}))}(e.email).then((function(t){n(t?{type:"LOGGED_IN",user:e}:{type:"UNAUTHORIZED",user:e})})))}))}),[]),a};var R=Object(o.g)((function(e){var t,a=V(),n="#/login?return="+e.location.pathname;return"LOGGED_OUT"===a.status&&(t=r.a.createElement("a",{className:"text-muted",href:n},"Login")),r.a.createElement("footer",{className:"page-footer font-small bg-light fixed-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-copyright text-center py-2"},r.a.createElement("span",{className:"mr-1"},"\xa9 2019 Copyright:"),r.a.createElement("a",{href:"https://test.enjoythescriptures.org"},"https://test.enjoythescriptures.org".replace("https://",""))),r.a.createElement("div",{className:"text-center py-2"},t)))}));var F=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("div",{className:"display-3 text-truncate display-inline"},"Welcome"),r.a.createElement("div",{className:"my-4"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"#/scriptures",role:"button"},"Study by Verse"))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"#/topics",role:"button"},"Study by Topic")))))},B=a(46),Z=a(47),M=a.n(Z);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(B.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){var t=e.verse,a=e.insight,n=e.setInsight,c=e.toggle,l=r.a.useContext(A),s=r.a.createRef(),o=r.a.useState(!1),i=Object(m.a)(o,2),u=i[0],f=i[1],p=new D;return r.a.useEffect((function(){var e=t.text.split(" ").length+1,r=s.current;return M.a.create(r,{start:[1,e],connect:!0,range:{min:1,max:e},step:1}),r.noUiSlider.on("update",(function(e,t){n(K({},a,{fragment:[e[0]-1,e[1]-1]})),l.updateHighlight(e[0]-1,e[1]-1)})),function(){return r.noUiSlider.destroy()}}),[]),r.a.createElement("div",null,r.a.createElement("h4",null,"New Insight"),r.a.createElement("form",{onSubmit:function(){f(!0);var e=new N(null,t.getVerseId(),a.text,a.fragment,a.source);p.saveNewInsight(e).then((function(){f(!1),c()})).catch((function(e){console.error("An error occurred while saving insight: ",e),f(!1)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"source-label"},"Source Label"),r.a.createElement("input",{type:"text",id:"source-label",className:"form-control",required:!0,value:a.source.label,onChange:function(e){return n(K({},a,{source:K({},a.source,{label:e.target.value})}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"source-link"},"Source Link"),r.a.createElement("input",{type:"url",id:"source-link",className:"form-control",value:a.source.link,onChange:function(e){return n(K({},a,{source:K({},a.source,{link:e.target.value})}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phrase"},"Phrase Highlight"),r.a.createElement("div",{ref:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"insight-text"},"Insight"),r.a.createElement("textarea",{id:"insight-text",className:"small form-control",rows:"10",required:!0,value:a.text,onChange:function(e){return n(K({},a,{text:e.target.value}))}})),r.a.createElement("button",{type:"button",className:"btn btn-danger mr-3",onClick:c,disabled:u},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-success",disabled:u},"Save")))},J=a(48),Y=a.n(J);var Q=function(e){var t=e.verse,a=e.insight,n=r.a.useContext(A),c=t.text.split(" ").slice(a.fragment[0],a.fragment[1]).join(" "),l=a.source.label;return void 0!==a.source.link&&""!==a.source.link&&(l=r.a.createElement("a",{className:"text-danger",href:a.source.link,target:"_blank",rel:"noopener noreferrer"},a.source.label)),r.a.createElement("div",{className:"insight m-1 p-1",onMouseEnter:function(){return n.updateHighlight(a.fragment[0],a.fragment[1])},onMouseLeave:function(){return n.updateHighlight(0,0)}},r.a.createElement("div",{className:"text-justify"},r.a.createElement("span",{className:"text-danger pr-2"},"(",l,")"),r.a.createElement("span",{className:"text-success pr-2"},c),r.a.createElement(Y.a,{source:a.text}),r.a.createElement("br",null),a.created&&r.a.createElement("span",{className:"text-secondary small float-right"},a.created.getMonth()+1,"/",a.created.getDate(),"/",a.created.getFullYear())))};function X(e,t){function a(e,t){return e<t?-1:e>t?1:0}var n=a(e.fragment[0],t.fragment[0]);return 0===n&&(n=a(e.fragment[1],t.fragment[1])),n}var $=function(e){var t,a=e.verse,n=e.insights;if(void 0===n)t=r.a.createElement(f,null);else{t=[],n.sort(X);for(var c=[0,0],l=0;l<n.length;l++){var s=n[l];if(c[0]!==s.fragment[0]||c[1]!==s.fragment[1]){c=s.fragment;var o=a.text.split(" ").slice(s.fragment[0],s.fragment[1]).join(" ");t.push(r.a.createElement("div",{key:s.fragment},r.a.createElement("hr",null),r.a.createElement("p",{className:"text-primary font-italic"},'"',o,'"')))}t.push(r.a.createElement(Q,{key:s.id,verse:a,insight:s}))}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"text-capitalize"},"insights"),t)};var ee=function(e){var t=e.match.params,a=t.volume,n=t.book,c=t.chapter,l=t.verse,s=V(),o=r.a.useState(),i=Object(m.a)(o,2),u=i[0],p=i[1],h=r.a.useState(),v=Object(m.a)(h,2),g=v[0],d=v[1],E=r.a.useState({source:{label:"",link:""},text:"",fragment:[0,0]}),b=Object(m.a)(E,2),y=b[0],x=b[1],k=r.a.useState(!1),O=Object(m.a)(k,2),w=O[0],j=O[1],I=r.a.useState({first:0,last:0}),S=Object(m.a)(I,2),G=S[0],C=S[1],_={highlight:G,updateHighlight:function(e,t){return C({first:e,last:t})}};function L(){j(!w)}var P=new D;return r.a.useEffect((function(){P.getVerse(a,n,c,l,p)}),[]),r.a.useEffect((function(){P.getInsights(a,n,c,l,d)}),[w]),r.a.createElement(A.Provider,{value:_},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("h4",{className:"text-capitalize"},n.replace(/_/g," ")," ",c,":",l),r.a.createElement("hr",null),r.a.createElement("div",{className:"sticky-top"},u?r.a.createElement(U,{verse:u}):r.a.createElement(f,null),r.a.createElement("hr",null),!w&&u&&"LOGGED_IN"===s.status&&r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:L},"Add Insight"),w&&u?r.a.createElement(W,{verse:u,insight:y,setInsight:x,toggle:L}):null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},u?null:r.a.createElement(f,null),!w&&u?r.a.createElement($,{verse:u,insights:g,toggle:L}):null,w&&u?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Preview"),r.a.createElement(Q,{verse:u,insight:new N(null,u.getVerseId(),y.text,y.fragment,y.source)})):null)))},te=a(49),ae=a.n(te),ne={signInFlow:"popup",signInOptions:[g.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};var re=function(e){var t=V();r.a.useEffect((function(){"UNAUTHORIZED"===t.status&&t.user.delete().catch((function(e){console.log("An error occurred while deleting an unauthorized user. ",e)}))}),[t]);var a=e.location.search.split("=")[1];return void 0!==a&&""!==a||(a="/"),"UNAUTHORIZED"===t.status?r.a.createElement(o.a,{to:"/unauthorized"}):"LOGGED_IN"===t.status?r.a.createElement(o.a,{to:a}):r.a.createElement("div",null,r.a.createElement(ae.a,{uiConfig:ne,firebaseAuth:g.a.auth()}))};var ce=function(){var e=V();return"LOGGED_IN"===e.status?r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("span",{className:"text-light my-2 mr-sm-2"},e.user.email),r.a.createElement("button",{className:"btn btn-success my-2 my-sm-0",onClick:function(){return g.a.auth().signOut()},type:"submit"},"Logout")):r.a.createElement(r.a.Fragment,null)};var le=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#/"},"Enjoy the Scriptures"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/scriptures"},"Scriptures")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/topics"},"Topics")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/about"},"About"))),r.a.createElement(ce,null))))};var se=function(){return r.a.createElement("div",{className:"alert alert-warning"},r.a.createElement("h4",{className:"alert-heading"},"Not Found"),r.a.createElement("p",{className:"mb-0"},"The requested page does not exist."),r.a.createElement("a",{href:"#/",className:"alert-link"},"Return Home"))};var oe=function(){return r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("h4",{className:"alert-heading"},"User Not Found"),r.a.createElement("p",{className:"mb-0"},"You are not authorized to access this resource."),r.a.createElement("a",{className:"alert-link",href:"#/"},"Return Home"))};function ie(e){var t="#/scriptures/"+e;return r.a.createElement("div",{key:t,className:"col-sm text-center text-nowrap p-3"},r.a.createElement("a",{href:t,role:"button",className:"text-capitalize text-white btn btn-success btn-lg"},e.replace(/_/g," ")))}var ue=function(){var e,t=r.a.useState([]),a=Object(m.a)(t,2),n=a[0],c=a[1],l=new D;return r.a.useEffect((function(){l.getVolumes(c)}),[]),e=0===n.length?r.a.createElement(f,null):n.map(ie),r.a.createElement("div",null,r.a.createElement("h1",null,"Scriptures"),r.a.createElement("div",{className:"row"},e))};var me=function(){return r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(le,null),r.a.createElement(o.b,{path:"/",component:_}),r.a.createElement(o.b,{exact:!0,path:"/",component:u}),r.a.createElement("div",{className:"container py-5"},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:F}),r.a.createElement(o.b,{exact:!0,path:"/about",component:i}),r.a.createElement(o.b,{exact:!0,path:"/scriptures",component:ue}),r.a.createElement(o.b,{exact:!0,path:"/scriptures/:volume",component:G}),r.a.createElement(o.b,{exact:!0,path:"/scriptures/:volume/:book",component:P}),r.a.createElement(o.b,{exact:!0,path:"/scriptures/:volume/:book/:chapter",component:z}),r.a.createElement(o.b,{exact:!0,path:"/scriptures/:volume/:book/:chapter/:verse",component:ee}),r.a.createElement(o.b,{exact:!0,path:"/topics"}),r.a.createElement(o.b,{exact:!0,path:"/login",component:re}),r.a.createElement(o.b,{exact:!0,path:"/unauthorized",component:oe}),r.a.createElement(o.b,{exact:!0,path:"/not_found",component:se}),r.a.createElement(o.a,{to:"/not_found"}))),r.a.createElement("div",{className:"my-5"}),r.a.createElement(R,null)))};l.a.render(r.a.createElement(me,null),document.getElementById("root"))},51:function(e,t,a){e.exports=a(151)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.56fec15a.chunk.js.map