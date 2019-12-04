(window.webpackJsonpenjoythescriptures=window.webpackJsonpenjoythescriptures||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);a(58),a(59),a(61),a(62),a(63),a(64),a(65),a(66);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=a(19),s=a.n(o),i=a(3),u=a(18),m=a(14);var f=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Enjoy the Scriptures."))};var g=function(){return r.a.createElement("img",{alt:"A pathway with trees on either side in autumn",src:"/background.jpg",style:{position:"fixed",top:0,zIndex:-1,width:"100%",height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",opacity:"0.9"}})};var p=function(){return r.a.createElement("div",{className:"col text-center"},r.a.createElement("img",{alt:"loading",src:"loader.gif"}))},h=a(35),d=a(9),E=a(10),v=a(1),b=a.n(v);var N={apiKey:"AIzaSyDcWkM-EwFO9BrLbHAiZf_NcPKT1jg_B4M",authDomain:"enjoy-the-scriptures-test.firebaseapp.com",databaseURL:"https://enjoy-the-scriptures-test.firebaseio.com",projectId:"enjoy-the-scriptures-test",storageBucket:"",messagingSenderId:"854443437513",appId:"1:854443437513:web:b0f58f35a8d4a823c64c18",measurementId:"G-EDCKCQPLL0"},y=b.a.initializeApp(N),O=(a(21),function(){function e(t,a,n,r,l){Object(d.a)(this,e),this.volume=t,this.book=a,this.chapter=n,this.n=r,this.text=l}return Object(E.a)(e,[{key:"getHref",value:function(){return["/scriptures",this.volume,this.book,this.chapter,this.n].join("/")}},{key:"getContent",value:function(){return[this.volume,this.book,this.chapter,this.n]}}]),e}()),w=function(){function e(){Object(d.a)(this,e),this.storage=null}return Object(E.a)(e,[{key:"available",value:function(){try{this.storage=window.localStorage;var e="__storage_test__";return this.storage.setItem(e,e),this.storage.removeItem(e),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&this.storage&&0!==this.storage.length}}},{key:"getItem",value:function(e,t){e="ets:"+e;var a=localStorage.getItem(e);return null==a?null:(a=JSON.parse(a),Date.now()-a.w>t?(localStorage.removeItem(e),null):a.v)}},{key:"setItem",value:function(e,t){e="ets:"+e;var a={v:t,w:Date.now()};try{localStorage.setItem(e,JSON.stringify(a))}catch(n){console.error("An error occurred writing to local storage. obj="+a+" error="+n)}}}]),e}();function k(e){return e.join("/")}var j=function(e){var t=[];return void 0===e[0]?k(t):(t.push(e[0].split("_").map((function(e){return e[0]})).join("")),void 0===e[1]?k(t):(t.push(e[1].split(/[_-]+/).map((function(e){return e.substring(0,3)})).join("-")),void 0===e[2]?k(t):(t.push(e[2]),void 0!==e[3]&&t.push(e[3]),k(t))))},x=b.a.firestore(y),I=(new w).available()?new w:null;function S(e,t,a,n){return Object.keys(n).map((function(r){return new O(e,t,a,r,n[r])}))}function D(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(void 0,a.concat(n))}}function C(e,t,a){I.setItem(t,a),e(a)}var _=function(){function e(){Object(d.a)(this,e)}return Object(E.a)(e,[{key:"getVolumes",value:function(e){var t=I.getItem("s/volumes",7776e6);null!==t?e(t):function(e){x.doc("scriptures/index").get().then((function(t){e(t.data().volumes)})).catch((function(e){console.error("Error fetching volumes: ",e)}))}(D(C,e,"s/volumes"))}},{key:"getBooks",value:function(e,t){var a="s/"+j([e]),n=I.getItem(a,7776e6);null!==n?t(n):function(e,t){x.doc("scriptures/index/volumes/"+e).get().then((function(e){t(e.data().books)})).catch((function(t){console.error("Error fetching books for volume: ",e,t)}))}(e,D(C,t,a))}},{key:"getChapterCount",value:function(e,t,a){var n="s/"+j([e,t]),r=I.getItem(n,7776e6);null!==r?a(r):function(e,t,a){x.doc("scriptures/index/volumes/"+e+"/books/"+t).get().then((function(e){a(e.data().chapters)})).catch((function(a){console.error("Error fetching chapter count for "+e+", "+t,a)}))}(e,t,D(C,a,n))}},{key:"getVerseCount",value:function(e,t,a,n){var r="s/"+j([e,t,a]),l=I.getItem(r,7776e6);null!==l?n(l):function(e,t,a,n){x.doc("scriptures/index/volumes/"+e+"/books/"+t+"/chapters/"+a).get().then((function(e){n(e.data().verses)})).catch((function(n){console.error("Error fetching verse count for "+e+", "+t+", chapter "+a,n)}))}(e,t,a,D(C,n,r))}},{key:"getVerses",value:function(e,t,a,n){this.getVerseCount(e,t,a,(function(r){var l=Object(h.a)(Array(r).keys()).map((function(n){var r="s/"+j([e,t,a,n+1]);return I.getItem(r,7776e6)}));if(l.includes(null))!function(e,t,a,n){var r={};x.collection("scriptures/index/volumes/"+e+"/books/"+t+"/chapters/"+a+"/verses").get().then((function(e){e.docs.forEach((function(e){r[e.id]=e.data().text})),n(r)})).catch((function(n){console.error("Error fetching verses for "+e+", "+t+", chapter "+a,n)}))}(e,t,a,(function(r){for(var l in r){var c="s/"+j([e,t,a,l]);I.setItem(c,r[l])}n(S(e,t,a,r))}));else{var c={};Object(h.a)(Array(r).keys()).forEach((function(e){c[e+1]=l[e]})),n(S(e,t,a,c))}}))}},{key:"getVerse",value:function(e,t,a,n,r){this.getVerses(e,t,a,(function(e){r(e[n-1])}))}}]),e}();var G=function(e){var t,a=e.match.params.volume,n=r.a.useState([]),l=Object(i.a)(n,2),c=l[0],o=l[1],s=new _;return r.a.useEffect((function(){s.getBooks(a,o)}),[]),t=0===c.length?r.a.createElement(p,null):c.map((function(e){return function(e,t){var a="#/scriptures/"+e+"/"+t;return r.a.createElement("div",{key:a,className:"col-lg-4 col-md-4 col-sm-12 text-center text-nowrap p-3"},r.a.createElement("a",{href:a,role:"button",className:"text-capitalize text-white btn btn-success btn-lg"},t.replace(/_/g," ")))}(a,e)})),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-capitalize"},a.replace(/_/g," ")),r.a.createElement("div",{className:"row"},t))};function P(e){return e.replace(/_/g," ")}var T=function(e){var t=["home"].concat(e.location.pathname.substring(1).split("/").filter((function(e){return""!==e}))),a="#",n=t.map((function(e,n){var l=n===t.length-1;n>0&&(a+="/"+e);var c=r.a.createElement("a",{href:a},P(e)),o="breadcrumb-item text-capitalize";return l&&(o+=" active",c=P(e)),r.a.createElement("li",{key:a,className:o},c)}));return r.a.createElement("div",{style:{backgroundColor:"#e9ecef"}},r.a.createElement("div",{className:"container"},r.a.createElement("ol",{className:"breadcrumb",style:{marginBottom:"0"}},n)))};function A(e,t,a){var n="#/scriptures/"+e+"/"+t+"/"+a;return r.a.createElement("div",{key:n,className:"col-lg-1 col-md-1 col-sm-12 text-center text-nowrap p-3"},r.a.createElement("a",{href:n,role:"button",className:"text-capitalize text-white btn btn-success btn-lg"},a))}var F=function(e){var t,a=e.match.params,n=a.volume,l=a.book,c=r.a.useState(0),o=Object(i.a)(c,2),s=o[0],u=o[1],m=new _;if(r.a.useEffect((function(){m.getChapterCount(n,l,u)}),[]),0===s)t=r.a.createElement(p,null);else{t=[];for(var f=1;f<=s;f++)t.push(A(n,l,f))}return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-capitalize"},l.replace(/_/g," ")),r.a.createElement("div",{className:"row"},t))},U=a(5),L=r.a.createContext({});var R=function(e){var t,a=e.verse,n=e.clickable,l=r.a.useState(),c=Object(i.a)(l,2),o=c[0],s=c[1],u=r.a.useContext(L),f="m-1 p-1 rounded ";if(n&&(f+=" clickable-verse"),n&&(t=function(){return s(a.getHref())}),void 0!==o)return r.a.createElement(m.a,{to:o});var g=a.text,p=u.highlight;if(void 0!==p&&p.first!==p.last){var h=a.text.split(" ");g=[r.a.createElement("span",{key:"before"},h.slice(0,p.first).join(" ")+" "),r.a.createElement("span",{key:"highlighted",className:"verse-highlight rounded"},h.slice(p.first,p.last).join(" ")),r.a.createElement("span",{key:"after"}," "+h.slice(p.last).join(" "))]}return r.a.createElement("div",{className:f,onClick:t},r.a.createElement("p",{className:"text-justify"},r.a.createElement("span",{className:"font-weight-bold mr-1"},a.n),r.a.createElement("span",null,g)))},z=b.a.firestore(y);function V(e){var t=e.data(),a={id:e.id,deltaOps:t.o,source:{label:t.s.l,link:t.s.a},created:t.c?t.c.toDate():null,updated:t.u?t.u.toDate():null};return void 0!==t.f&&(a.fragment=t.f),a}var H=function(){function e(){Object(d.a)(this,e)}return Object(E.a)(e,[{key:"getInsights",value:function(e,t){var a=j(e);z.collection("insights").where("cid","==",a).get().then((function(e){t(e.docs.map(V))})).catch((function(e){console.error("Error fetching insights for content. cid: ",a,e)}))}},{key:"saveInsight",value:function(e){var t={cid:j(e.content),o:e.deltaOps,s:{l:e.source.label,a:e.source.link},u:b.a.firestore.FieldValue.serverTimestamp()};return void 0!==e.fragment&&(t.f=e.fragment),void 0===e.id?(t.c=b.a.firestore.FieldValue.serverTimestamp(),z.collection("insights").add(t)):(t.c=e.created,z.collection("insights").doc(e.id).set(t))}},{key:"deleteInsight",value:function(e){return z.collection("insights").doc(e.id).delete()}}]),e}(),B=a(48),M=a(49),q=a.n(M);var Z=function(e){var t=e.insight,a=r.a.useContext(L),n=t.source.label;function l(e,n){t.fragment&&a.updateHighlight(e,n)}void 0!==t.source.link&&""!==t.source.link&&(n=r.a.createElement("a",{className:"text-danger",href:t.source.link,target:"_blank",rel:"noopener noreferrer"},t.source.label));var c=new B.QuillDeltaToHtmlConverter(t.deltaOps,{}).convert();return r.a.createElement("div",{className:"insight m-1 p-1",onMouseEnter:function(){return t.fragment?l(t.fragment[0],t.fragment[1]):null},onMouseLeave:function(){return l(0,0)}},r.a.createElement("div",{className:"text-justify"},n&&r.a.createElement("span",{className:"text-danger pr-2"},"(",n,")"),q()(c),t.created&&r.a.createElement("span",{className:"text-secondary small float-right"},t.created.getMonth()+1,"/",t.created.getDate(),"/",t.created.getFullYear()),r.a.createElement("div",{className:"clearfix"})))};var J=function(e){var t=e.user,a=e.verse,n=e.insight,l=e.toggle,c=e.setInsight,o=r.a.createElement("button",{key:"edit-"+n.id,type:"button",className:"btn btn-success float-right ml-2",onClick:function(){c(n),l()}},"Edit Insight");return r.a.createElement("li",{key:n.id},r.a.createElement(Z,{key:n.id,verse:a,insight:n}),"LOGGED_IN"===t.status?o:null,r.a.createElement("div",{style:{clear:"both"}}))},Q=a(20),K=a(50),W=a.n(K),Y=a(51),X=a.n(Y);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ee=function(e){var t=e.text,a=e.insight,n=e.setInsight,l=r.a.useContext(L),c=r.a.createRef();return r.a.useEffect((function(){var e=t.split(" ").length,r=c.current;return X.a.create(r,{start:a.fragment,connect:!0,range:{min:0,max:e},step:1}),r.noUiSlider.on("update",(function(e,t){n((function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(Q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{fragment:e.map((function(e){return 0|e}))})})),l.updateHighlight(e[0],e[1])})),function(){r.noUiSlider.destroy()}}),[]),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phrase"},"Phrase Highlight"),r.a.createElement("div",{ref:c}))};function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(Q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=function(e){var t=e.content,a=e.verse,n=e.insight,l=e.setInsight,c=e.toggle,o=r.a.createRef(),s=r.a.useState(!1),u=Object(i.a)(s,2),m=u[0],f=u[1],g=new H;return r.a.useEffect((function(){var e=new W.a(o.current,{theme:"snow",placeholder:"Record the insight here..."});return n.deltaOps&&e.setContents(n.deltaOps),e.on("text-change",(function(t,a,n){l((function(t){return ae({},t,{deltaOps:e.getContents().ops})}))})),function(){}}),[]),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){f(!0),n.content=t,g.saveInsight(n).then((function(){f(!1),c()})).catch((function(e){console.error("An error occurred while saving insight: ",e),f(!1)})),e.preventDefault()}},a&&r.a.createElement("label",null,"Verse"),a&&r.a.createElement(R,{verse:a}),a&&r.a.createElement(ee,{insight:n,setInsight:l,text:a.text}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"source-label"},"Source Label"),r.a.createElement("input",{type:"text",id:"source-label",className:"form-control",required:!0,value:n.source.label,onChange:function(e){return l(ae({},n,{source:ae({},n.source,{label:e.target.value})}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"source-link"},"Source Link"),r.a.createElement("input",{type:"url",id:"source-link",className:"form-control",value:n.source.link,onChange:function(e){return l(ae({},n,{source:ae({},n.source,{link:e.target.value})}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"insight-text"},"Insight"),r.a.createElement("div",{ref:o,id:"insight-text"})),r.a.createElement("button",{type:"submit",className:"btn btn-success float-right",disabled:m},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-danger mr-3 float-right",onClick:c,disabled:m},"Cancel")))};var re=function(e){var t=e.editing,a=e.content,n=e.verse,l=e.insight,c=e.setInsight,o=e.toggle;return r.a.createElement(s.a,{isOpen:t,onRequestClose:function(){return o()}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("h4",null,"Edit Insight"),r.a.createElement("hr",null),r.a.createElement(ne,{content:a,verse:n,insight:l,setInsight:c,toggle:o})),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("h4",null,"Preview"),r.a.createElement("hr",null),r.a.createElement(Z,{insight:l}))))},le=a(24),ce=a(52),oe=a.n(ce),se=(a(115),b.a.storage(y)),ie=b.a.firestore(y);function ue(e){var t=e.data();return se.ref("uploads/"+t.uuid+"/"+t.n).getDownloadURL().then((function(a){return{id:e.id,uuid:t.uuid,name:t.n,extension:t.e,scriptureTags:t.cids,url:a,size:t.b,created:t.c?t.c.toDate():null,updated:t.u?t.u.toDate():null}}))}var me=function(){function e(){Object(d.a)(this,e)}return Object(E.a)(e,[{key:"getFiles",value:function(e){var t=j(e);return ie.collection("uploads").where("cids","array-contains",t).where("s","==",1).get().then((function(e){return Promise.all(e.docs.map(ue))})).catch((function(e){console.error("Error fetching files for content. cid:",t,e)}))}},{key:"saveFile",value:function(e,t,a,n){var r=oe()(),l={uuid:r,n:t.name,s:0,b:e.size,e:t.extension,cids:t.scriptureTags,c:b.a.firestore.FieldValue.serverTimestamp(),u:b.a.firestore.FieldValue.serverTimestamp()};ie.collection("uploads").add(l).then((function(c){se.ref("uploads/"+r+"/"+t.name).put(e).on("state_changed",(function(e){a(0|e.bytesTransferred/e.totalBytes*100)}),(function(e){console.log("Error while uploading file. ",l,e),n(null,e)}),(function(){c.update({s:1}).then(n).catch((function(e){console.error("Error while finalizing upload: ",e),n(null,e)}))}))})).catch((function(e){console.error("Error while precommitting upload: ",e),n(null,e)}))}}]),e}(),fe=a(53),ge=a.n(fe);function pe(e){return e.replace(/_/g," ").replace(/(?:^|\s|-)\w/g,(function(e){return e.toUpperCase()}))}var he=function(e){var t=e.content,a=e.onScriptureTagChange,n=new _,l=r.a.useState(null),c=Object(i.a)(l,2),o=c[0],s=c[1],u=j(t);return r.a.useEffect((function(){!function(e,t,a){var n=[];t.getVolumes((function(r){r.forEach((function(a){var r=[];t.getBooks(a,(function(n){n.forEach((function(n){var l=[];t.getChapterCount(a,n,(function(r){for(var c=function(r){var c=[];t.getVerseCount(a,n,r,(function(t){for(var o=1;o<=t;o++){var s=j([a,n,r,o]),i={label:pe(n+" "+r+":"+o),value:s};e===s&&(i.checked=!0),c.push(i)}var u=j([a,n,r]),m={label:pe(n+" "+r),value:u,children:c};e===u&&(m.checked=!0),l.push(m)}))},o=1;o<=r;o++)c(o)})),r.push({label:pe(n),value:j([a,n]),children:l})}))})),n.push({label:pe(a),value:j([a]),children:r})})),a(n)}))}(u,n,s)}),[]),a([u]),r.a.createElement(r.a.Fragment,null,o?r.a.createElement(ge.a,{className:"tree-select",texts:{placeholder:"Search"},data:o,onChange:function(e,t){a(t.map((function(e){return e.value})))},clearSearchOnChange:!0}):r.a.createElement(p,null))};function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach((function(t){Object(Q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ve=[];var be=function(e){var t=e.toggle,a=Object(le.a)(e,["toggle"]),n=new me,l=r.a.useState({files:"",name:"",extension:""}),c=Object(i.a)(l,2),o=c[0],s=c[1],u=r.a.useState(0),m=Object(i.a)(u,2),f=m[0],g=m[1],p=r.a.useState(!1),h=Object(i.a)(p,2),d=h[0],E=h[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){var a=ve;ve=[],E(!0),n.saveFile(o.file,{name:o.name,extension:o.extension,scriptureTags:a},g,(function(e,a){a&&console.error("Error while saving file: ",a),E(!1),t()})),e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"source-label"},"File"),r.a.createElement("input",{type:"file",id:"file-item",className:"form-control-file",onChange:function(e){var t=e.target.files[0].name.split(".");s(Ee({},o,{file:e.target.files[0],extension:t[t.length-1],name:e.target.files[0].name}))},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"file-name"},"Display Name"),r.a.createElement("input",{type:"text",id:"file-name",className:"form-control",value:o.name,onChange:function(e){s(Ee({},o,{name:e.target.value}))},required:!0}),r.a.createElement("small",{id:"name-help",className:"form-text text-muted"},"This name will be used in the attachments list.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"scripture-tags"},"Scripture Tags"),r.a.createElement(he,Object.assign({onScriptureTagChange:function(e){ve=e}},a)),r.a.createElement("small",{id:"scripture-tags-help",className:"form-text text-muted"},"This file will be associated with these scripture references.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"topic-tags"},"Topic Tags"),r.a.createElement("small",{id:"topic-tags-help",className:"form-text text-muted"},"This file will be associated with these topics.")),r.a.createElement("button",{type:"submit",className:"btn btn-success float-right",disabled:d},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-danger mr-3 float-right",onClick:t,disabled:d},"Cancel"),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("div",{className:"my-3"}),d?r.a.createElement("div",null,r.a.createElement("label",null,"Upload Progress: ",f,"%"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":f,"aria-valuemin":"0","aria-valuemax":"100",style:{width:f+"%"}}))):null))};var Ne=function(e){var t=e.uploading,a=e.toggle,n=Object(le.a)(e,["uploading","toggle"]);return r.a.createElement(s.a,{isOpen:t,onRequestClose:a},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-0 col-sm-0"}),r.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},r.a.createElement("h4",null,"Upload File"),r.a.createElement("hr",null),r.a.createElement(be,Object.assign({toggle:a},n))),r.a.createElement("div",{className:"col-lg-3 col-md-0 col-sm-0"})))},ye=(a(45),b.a.firestore(y));function Oe(e,t){switch(t.type){case"LOGGED_OUT":return{user:null,status:"LOGGED_OUT"};case"PENDING":return{user:t.user,status:"PENDING"};case"LOGGED_IN":return{user:t.user,status:"LOGGED_IN"};case"UNAUTHORIZED":return{user:t.user,status:"UNAUTHORIZED"};default:throw new Error}}var we=function(){var e=r.a.useReducer(Oe,{user:null,status:"LOGGED_OUT"}),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){return b.a.auth().onAuthStateChanged((function(e){null===e?n({type:"LOGGED_OUT"}):(n({type:"PENDING",user:e}),function(e){var t=ye.collection("users").doc(e);return new Promise((function(e,a){t.get().then((function(t){t.exists&&!0===t.data().admin?e(!0):e(!1)})).catch((function(e){console.error("Error getting document: ",e),a(e)}))}))}(e.email).then((function(t){n(t?{type:"LOGGED_IN",user:e}:{type:"UNAUTHORIZED",user:e})})))}))}),[]),a},ke=a(54),je=a.n(ke);var xe=function(e){var t=e.files.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name)),r.a.createElement("td",null,je()(e.size)))}));return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-primary"},r.a.createElement("th",{scope:"col"},"File"),r.a.createElement("th",{scope:"col"},"Size"))),r.a.createElement("tbody",null,t))},Ie={source:{label:"",link:""},deltaOps:[]};var Se=function(e){var t,a,n,l=e.match.params,c=l.volume,o=l.book,s=l.chapter,u=we(),m=[c,o,s],f=r.a.useState([]),g=Object(i.a)(f,2),h=g[0],d=g[1],E=r.a.useState(null),v=Object(i.a)(E,2),b=v[0],N=v[1],y=r.a.useState(null),O=Object(i.a)(y,2),w=O[0],k=O[1],j=r.a.useState(!1),x=Object(i.a)(j,2),I=x[0],S=x[1],D=r.a.useState(!1),C=Object(i.a)(D,2),G=C[0],P=C[1],T=r.a.useState(Ie),A=Object(i.a)(T,2),F=A[0],L=A[1],z=new _,V=new H,B=new me;function M(){S(!I)}function q(){P(!G)}return r.a.useEffect((function(){z.getVerses(c,o,s,d)}),[]),r.a.useEffect((function(){V.getInsights(m,N)}),[I]),r.a.useEffect((function(){B.getFiles(m).then((function(e){return k(e)}))}),[G]),t=0===h.length?r.a.createElement(p,null):h.map((function(e){return r.a.createElement(R,{key:e.getHref(),verse:e,clickable:!0})})),a=null===b?r.a.createElement(p,null):b.map((function(e){return r.a.createElement(J,{key:e.id,user:u,insight:e,toggle:M,setInsight:L})})),n=null===w?r.a.createElement(p,null):r.a.createElement(xe,{files:w}),r.a.createElement("div",null,I?r.a.createElement(re,{editing:I,content:m,insight:F,setInsight:L,toggle:M}):null,G?r.a.createElement(Ne,{uploading:G,toggle:q,content:m}):null,r.a.createElement(U.d,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("h4",{className:"text-capitalize"},o.replace(/_/g," ")," ",s)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement(U.b,null,r.a.createElement(U.a,null,"Chapter Insights","LOGGED_IN"===u.status&&r.a.createElement("button",{className:"ml-2 btn btn-success",onClick:function(){L(Ie),M()}},"Add")),r.a.createElement(U.a,null,"Additional Resources","LOGGED_IN"===u.status&&r.a.createElement("button",{className:"ml-2 btn btn-success",onClick:function(){q()}},"Upload"))),r.a.createElement("div",{className:"clearfix"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},t),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement(U.c,null,r.a.createElement("ol",null,a)),r.a.createElement(U.c,null,n)))))};var De=Object(m.g)((function(e){var t,a=we(),n="#/login?return="+e.location.pathname;return"LOGGED_OUT"===a.status&&(t=r.a.createElement("a",{className:"text-muted",href:n},"Login")),r.a.createElement("footer",{className:"page-footer font-small bg-light fixed-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-copyright text-center py-2"},r.a.createElement("span",{className:"mr-1"},"\xa9 2019 Copyright:"),r.a.createElement("a",{href:"https://test.enjoythescriptures.org"},"https://test.enjoythescriptures.org".replace("https://",""))),r.a.createElement("div",{className:"text-center py-2"},t)))}));var Ce=function(){return null};function _e(e,t){function a(e,t){return e<t?-1:e>t?1:0}var n=a(e.fragment[0],t.fragment[0]);return 0===n&&(n=a(e.fragment[1],t.fragment[1])),0===n&&(n=e.source.label.localeCompare(t.source.label)),n}var Ge=function(e){return e.sort(_e),function(e){if(0===e.length)return e;var t=[],a=e[0].fragment,n=[];return e.forEach((function(e){var r,l;r=a,l=e.fragment,r[0]===l[0]&&r[1]===l[1]?n.push(e):(t.push(Array.from(n)),a=e.fragment,n=[e])})),0!==n.length&&t.push(n),t}(e)};var Pe=function(e){var t=e.verse,a=e.insightGroup,n=e.toggle,l=e.setInsight,c=we(),o=a[0].fragment,s=t.text.split(" ").slice(o[0],o[1]).join(" ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:o},r.a.createElement("p",{className:"text-primary font-italic"},s)),r.a.createElement("ol",null,a.map((function(e,a){return function(e,t,a,n,l){return r.a.createElement(J,{key:a.id,user:e,verse:t,insight:a,toggle:n,setInsight:l})}(c,t,e,n,l)}))),r.a.createElement("hr",null))};var Te=function(e){var t,a=e.verse,n=e.insights,l=e.toggle,c=e.setInsight;return t=void 0===n?r.a.createElement(p,null):Ge(n).map((function(e,t){return r.a.createElement(Pe,{key:t,verse:a,insightGroup:e,toggle:l,setInsight:c})})),r.a.createElement(r.a.Fragment,null,t)},Ae={source:{label:"",link:""},deltaOps:[],fragment:[0,0]};var Fe=function(e){var t,a=e.match.params,n=a.volume,l=a.book,c=a.chapter,o=a.verse,s=we(),u=[n,l,c,o],m=r.a.useState(),f=Object(i.a)(m,2),g=f[0],h=f[1],d=r.a.useState(),E=Object(i.a)(d,2),v=E[0],b=E[1],N=r.a.useState(null),y=Object(i.a)(N,2),O=y[0],w=y[1],k=r.a.useState(!1),j=Object(i.a)(k,2),x=j[0],I=j[1],S=r.a.useState(!1),D=Object(i.a)(S,2),C=D[0],G=D[1],P=r.a.useState(Ae),T=Object(i.a)(P,2),A=T[0],F=T[1],L=new _,z=new H,V=new me;function B(){I(!x)}function M(){G(!C)}return r.a.useEffect((function(){L.getVerse(n,l,c,o,h)}),[]),r.a.useEffect((function(){z.getInsights(u,b)}),[x]),r.a.useEffect((function(){V.getFiles(u).then((function(e){return w(e)}))}),[C]),t=null===O?r.a.createElement(p,null):r.a.createElement(xe,{files:O}),r.a.createElement("div",null,g?r.a.createElement(re,{editing:x,content:g.getContent(),verse:g,insight:A,setInsight:F,toggle:B}):null,C?r.a.createElement(Ne,{uploading:C,toggle:M,content:u}):null,r.a.createElement(U.d,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("h4",{className:"text-capitalize"},l.replace(/_/g," ")," ",c,":",o)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement(U.b,null,r.a.createElement(U.a,null,"Verse Insights","LOGGED_IN"===s.status&&r.a.createElement("button",{className:"ml-2 btn btn-success",onClick:function(){F(Ae),B()}},"Add")),r.a.createElement(U.a,null,"Additional Resources","LOGGED_IN"===s.status&&r.a.createElement("button",{className:"ml-2 btn btn-success",onClick:function(){M()}},"Upload"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement("div",{className:x||C?null:"sticky-top"},g?r.a.createElement(R,{verse:g}):r.a.createElement(p,null))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},r.a.createElement(U.c,null,g?null:r.a.createElement(p,null),g?r.a.createElement(Te,{verse:g,insights:v,toggle:B,setInsight:F}):null),r.a.createElement(U.c,null,t)))))},Ue=a(55),Le=a.n(Ue),Re={signInFlow:"popup",signInOptions:[b.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};var ze=function(e){var t=we();r.a.useEffect((function(){"UNAUTHORIZED"===t.status&&t.user.delete().catch((function(e){console.log("An error occurred while deleting an unauthorized user. ",e)}))}),[t]);var a=e.location.search.split("=")[1];return void 0!==a&&""!==a||(a="/"),"UNAUTHORIZED"===t.status?r.a.createElement(m.a,{to:"/unauthorized"}):"LOGGED_IN"===t.status?r.a.createElement(m.a,{to:a}):r.a.createElement("div",null,r.a.createElement(Le.a,{uiConfig:Re,firebaseAuth:b.a.auth()}))};var Ve=function(){var e=we();return"LOGGED_IN"===e.status?r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("span",{className:"text-light my-2 mr-sm-2"},e.user.email),r.a.createElement("button",{className:"btn btn-success my-2 my-sm-0",onClick:function(){return b.a.auth().signOut()},type:"submit"},"Logout")):r.a.createElement(r.a.Fragment,null)};var He=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#/"},"Enjoy the Scriptures"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/scriptures"},"Scriptures")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/topics"},"Topics")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/about"},"About"))),r.a.createElement(Ve,null))))};var Be=function(){return r.a.createElement("div",{className:"alert alert-warning"},r.a.createElement("h4",{className:"alert-heading"},"Not Found"),r.a.createElement("p",{className:"mb-0"},"The requested page does not exist."),r.a.createElement("a",{href:"#/",className:"alert-link"},"Return Home"))};var Me=function(){return r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("h4",{className:"alert-heading"},"User Not Found"),r.a.createElement("p",{className:"mb-0"},"You are not authorized to access this resource."),r.a.createElement("a",{className:"alert-link",href:"#/"},"Return Home"))};function qe(e){var t="#/scriptures/"+e;return r.a.createElement("div",{key:t,className:"col-lg-4 col-md-4 col-sm-12 text-center text-nowrap p-3"},r.a.createElement("a",{href:t,role:"button",className:"text-capitalize text-white btn btn-success btn-lg"},e.replace(/_/g," ")))}var Ze=function(){var e,t=r.a.useState([]),a=Object(i.a)(t,2),n=a[0],l=a[1],c=new _;return r.a.useEffect((function(){c.getVolumes(l)}),[]),e=0===n.length?r.a.createElement(p,null):n.map(qe),r.a.createElement("div",null,r.a.createElement("h1",null,"Scriptures"),r.a.createElement("div",{className:"row"},e))};function Je(){return r.a.createElement("header",{className:"coming-soon"},r.a.createElement("h1",{className:"py-4 font-weight-bold"},"Enjoy the Scriptures"),r.a.createElement("p",{className:"py-4 font-weight-bold"},"Coming Soon"))}var Qe=function(){var e=we(),t=r.a.useState({first:0,last:0}),a=Object(i.a)(t,2),n=a[0],l=a[1],c={highlight:n,updateHighlight:function(e,t){return l({first:e,last:t})}};return"LOGGED_OUT"===e.status?r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:ze}),r.a.createElement(m.b,{component:Je})))):r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(He,null),r.a.createElement(m.b,{path:"/",component:T}),r.a.createElement(m.b,{exact:!0,path:"/",component:g}),r.a.createElement(L.Provider,{value:c},r.a.createElement("div",{className:"container py-5"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:Ce}),r.a.createElement(m.b,{exact:!0,path:"/about",component:f}),r.a.createElement(m.b,{exact:!0,path:"/scriptures",component:Ze}),r.a.createElement(m.b,{exact:!0,path:"/scriptures/:volume",component:G}),r.a.createElement(m.b,{exact:!0,path:"/scriptures/:volume/:book",component:F}),r.a.createElement(m.b,{exact:!0,path:"/scriptures/:volume/:book/:chapter",component:Se}),r.a.createElement(m.b,{exact:!0,path:"/scriptures/:volume/:book/:chapter/:verse",component:Fe}),r.a.createElement(m.b,{exact:!0,path:"/topics"}),r.a.createElement(m.b,{exact:!0,path:"/login",component:ze}),r.a.createElement(m.b,{exact:!0,path:"/unauthorized",component:Me}),r.a.createElement(m.b,{exact:!0,path:"/not_found",component:Be}),r.a.createElement(m.a,{to:"/not_found"})))),r.a.createElement("div",{className:"my-5"}),r.a.createElement(De,null)))};s.a.setAppElement("#root"),c.a.render(r.a.createElement(Qe,null),document.getElementById("root"))},57:function(e,t,a){e.exports=a(114)},65:function(e,t,a){},66:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.f03b1454.chunk.js.map