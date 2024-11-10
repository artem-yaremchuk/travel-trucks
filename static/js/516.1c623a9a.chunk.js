"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[516],{2712:function(t,n,e){e.r(n),e.d(n,{default:function(){return Lt}});var a=e(2791),r=e(4420),i=e(6382),o=e(6181),s=e(3763),c={filterContainer:"Filter_filterContainer__8G57N",filterForm:"Filter_filterForm__+l+6Q",locationLabel:"Filter_locationLabel__NRDc1",inputWrap:"Filter_inputWrap__XEHXz",locationInput:"Filter_locationInput__tooeS",mapIcon:"Filter_mapIcon__DqdxF",filterTitle:"Filter_filterTitle__5SDqd",searchParamsTitle:"Filter_searchParamsTitle__4fzT9",equipmentList:"Filter_equipmentList__aP4qD",typeList:"Filter_typeList__uGx9i",equipmentListItem:"Filter_equipmentListItem__mXvN4",typeListItem:"Filter_typeListItem__sjsm9",equipmentName:"Filter_equipmentName__xsM7O",typeName:"Filter_typeName__W7fxl",searchBtn:"Filter_searchBtn__H2bii"},l=e(184),u=function(){var t={AC:"icon-ac",Automatic:"icon-transmission",Kitchen:"icon-kitchen",TV:"icon-tv",Bathroom:"icon-bathroom"},n={Van:"icon-van","Fully Integrated":"icon-fully-integrated",Alcove:"icon-alcove"};return(0,l.jsx)("div",{className:c.filterContainer,children:(0,l.jsxs)("form",{className:c.filterForm,autoComplete:"off",children:[(0,l.jsx)("label",{htmlFor:"locationInput",className:c.locationLabel,children:"Location"}),(0,l.jsxs)("div",{className:c.inputWrap,children:[(0,l.jsx)("input",{type:"text",name:"location",className:c.locationInput,id:"locationInput",placeholder:"City"}),(0,l.jsx)("svg",{className:c.mapIcon,width:"20",height:"20",children:(0,l.jsx)("use",{href:"".concat(s.Z,"#icon-map")})})]}),(0,l.jsx)("p",{className:c.filterTitle,children:"Filters"}),(0,l.jsx)("h3",{className:c.searchParamsTitle,children:"Vehicle equipment"}),(0,l.jsx)("ul",{className:c.equipmentList,children:Object.keys(t).map((function(n){return(0,l.jsxs)("li",{className:c.equipmentListItem,children:[(0,l.jsx)("svg",{className:c.equipmentIcon,width:"32",height:"32",children:(0,l.jsx)("use",{href:"".concat(s.Z,"#").concat(t[n])})}),(0,l.jsx)("span",{className:c.equipmentName,children:n})]},n)}))}),(0,l.jsx)("h3",{className:c.searchParamsTitle,children:"Vehicle type"}),(0,l.jsx)("ul",{className:c.typeList,children:Object.keys(n).map((function(t){return(0,l.jsxs)("li",{className:c.typeListItem,children:[(0,l.jsx)("svg",{className:c.typeIcon,width:"32",height:"32",children:(0,l.jsx)("use",{href:"".concat(s.Z,"#").concat(n[t])})}),(0,l.jsx)("span",{className:c.typeName,children:t})]},t)}))}),(0,l.jsx)("button",{type:"submit",className:c.searchBtn,children:"Search"})]})})},p=e(545),d="CampersList_campersList__A7t8v",m=function(){var t=(0,r.v9)(o.a1);return(0,l.jsx)("ul",{className:d,children:t.map((function(t){return(0,l.jsx)(p.Z,{camper:t},t.id)}))})},f=e(2639),h={catalog:"Catalog_catalog__7Z2yq"},g=e(168),v=e(9439),y=e(3433),x=e(1413),b=e(4942),Z={data:""},_=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Z},w=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,j=/\/\*[^]*?\*\/|  +/g,N=/\n+/g,F=function t(n,e){var a="",r="",i="",o=function(o){var c=n[o];"@"==o[0]?"i"==o[1]?a=o+" "+c+";":r+="f"==o[1]?t(c,o):o+"{"+t(c,"k"==o[1]?"":e)+"}":"object"==typeof c?r+=t(c,e?e.replace(/([^,])+/g,(function(t){return o.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):o):null!=c&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=t.p?t.p(o,c):o+":"+c+";"),s=o};for(var s in n)o(s);return a+(e&&i?e+"{"+i+"}":i)+r},I={},k=function t(n){if("object"==typeof n){var e="";for(var a in n)e+=a+t(n[a]);return e}return n},L=function(t,n,e,a,r){var i=k(t),o=I[i]||(I[i]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(i));if(!I[o]){var s=i!==t?t:function(t){for(var n,e,a=[{}];n=w.exec(t.replace(j,""));)n[4]?a.shift():n[3]?(e=n[3].replace(N," ").trim(),a.unshift(a[0][e]=a[0][e]||{})):a[0][n[1]]=n[2].replace(N," ").trim();return a[0]}(t);I[o]=F(r?(0,b.Z)({},"@keyframes "+o,s):s,e?"":"."+o)}var c=e&&I.g?I.g:null;return e&&(I.g=I[o]),function(t,n,e,a){a?n.data=n.data.replace(a,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(I[o],n,a,c),o},q=function(t,n,e){return t.reduce((function(t,a,r){var i=n[r];if(i&&i.call){var o=i(e),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=s?"."+s:o&&"object"==typeof o?o.props?"":F(o,""):!1===o?"":o}return t+a+(null==i?"":i)}),"")};function E(t){var n=this||{},e=t.call?t(n.p):t;return L(e.unshift?e.raw?q(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,_(n.target),n.g,n.o,n.k)}E.bind({g:1});var C,T,z,A,O,D,P,S,B,M,V,W,H,X,G,K,Q,R,U,$=E.bind({k:1});function J(t,n){var e=this||{};return function(){var a=arguments;function r(i,o){var s=Object.assign({},i),c=s.className||r.className;e.p=Object.assign({theme:T&&T()},s),e.o=/ *go\d+/.test(c),s.className=E.apply(e,a)+(c?" "+c:""),n&&(s.ref=o);var l=t;return t[0]&&(l=s.as||t,delete s.as),z&&l[0]&&z(s),C(l,s)}return n?n(r):r}}var Y=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},tt=function(){var t=0;return function(){return(++t).toString()}}(),nt=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),et=new Map,at=function(t){if(!et.has(t)){var n=setTimeout((function(){et.delete(t),st({type:4,toastId:t})}),1e3);et.set(t,n)}},rt=function t(n,e){switch(e.type){case 0:return(0,x.Z)((0,x.Z)({},n),{},{toasts:[e.toast].concat((0,y.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=et.get(t);n&&clearTimeout(n)}(e.toast.id),(0,x.Z)((0,x.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?(0,x.Z)((0,x.Z)({},t),e.toast):t}))});case 2:var a=e.toast;return n.toasts.find((function(t){return t.id===a.id}))?t(n,{type:1,toast:a}):t(n,{type:0,toast:a});case 3:var r=e.toastId;return r?at(r):n.toasts.forEach((function(t){at(t.id)})),(0,x.Z)((0,x.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===r||void 0===r?(0,x.Z)((0,x.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?(0,x.Z)((0,x.Z)({},n),{},{toasts:[]}):(0,x.Z)((0,x.Z)({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return(0,x.Z)((0,x.Z)({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return(0,x.Z)((0,x.Z)({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return(0,x.Z)((0,x.Z)({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},it=[],ot={toasts:[],pausedAt:void 0},st=function(t){ot=rt(ot,t),it.forEach((function(t){t(ot)}))},ct=function(t){return function(n,e){var a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,x.Z)((0,x.Z)({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||tt()})}(n,t,e);return st({type:2,toast:a}),a.id}},lt=function(t,n){return ct("blank")(t,n)};lt.error=ct("error"),lt.success=ct("success"),lt.loading=ct("loading"),lt.custom=ct("custom"),lt.dismiss=function(t){st({type:3,toastId:t})},lt.remove=function(t){return st({type:4,toastId:t})},lt.promise=function(t,n,e){var a=lt.loading(n.loading,(0,x.Z)((0,x.Z)({},e),null==e?void 0:e.loading));return t.then((function(t){return lt.success(Y(n.success,t),(0,x.Z)((0,x.Z)({id:a},e),null==e?void 0:e.success)),t})).catch((function(t){lt.error(Y(n.error,t),(0,x.Z)((0,x.Z)({id:a},e),null==e?void 0:e.error))})),t};var ut=$(A||(A=(0,g.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),pt=$(O||(O=(0,g.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),dt=$(D||(D=(0,g.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),mt=J("div")(P||(P=(0,g.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),ut,pt,(function(t){return t.secondary||"#fff"}),dt),ft=$(S||(S=(0,g.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ht=J("div")(B||(B=(0,g.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),ft),gt=$(M||(M=(0,g.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),vt=$(V||(V=(0,g.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),yt=J("div")(W||(W=(0,g.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),gt,vt,(function(t){return t.secondary||"#fff"})),xt=J("div")(H||(H=(0,g.Z)(["\n  position: absolute;\n"]))),bt=J("div")(X||(X=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),Zt=$(G||(G=(0,g.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),_t=J("div")(K||(K=(0,g.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),Zt),wt=function(t){var n=t.toast,e=n.icon,r=n.type,i=n.iconTheme;return void 0!==e?"string"==typeof e?a.createElement(_t,null,e):e:"blank"===r?null:a.createElement(bt,null,a.createElement(ht,(0,x.Z)({},i)),"loading"!==r&&a.createElement(xt,null,"error"===r?a.createElement(mt,(0,x.Z)({},i)):a.createElement(yt,(0,x.Z)({},i))))},jt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Nt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Ft=J("div")(Q||(Q=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),It=J("div")(R||(R=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"])));a.memo((function(t){var n=t.toast,e=t.position,r=t.style,i=t.children,o=n.height?function(t,n){var e=t.includes("top")?1:-1,a=nt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[jt(e),Nt(e)],r=(0,v.Z)(a,2),i=r[0],o=r[1];return{animation:n?"".concat($(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat($(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=a.createElement(wt,{toast:n}),c=a.createElement(It,(0,x.Z)({},n.ariaProps),Y(n.message,n));return a.createElement(Ft,{className:n.className,style:(0,x.Z)((0,x.Z)((0,x.Z)({},o),r),n.style)},"function"==typeof i?i({icon:s,message:c}):a.createElement(a.Fragment,null,s,c))}));!function(t,n,e,a){F.p=n,C=t,T=e,z=a}(a.createElement);E(U||(U=(0,g.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])));var kt=lt,Lt=function(){var t=(0,r.I0)(),n=(0,r.v9)(o.a1),e=(0,r.v9)(o.xU),s=(0,r.v9)(o.zh);return(0,a.useEffect)((function(){t((0,i.N)())}),[t]),s&&kt.error("Oooops, something went wrong..."),(0,l.jsxs)("div",{className:h.catalog,children:[(0,l.jsx)(u,{}),e&&!s&&(0,l.jsx)(f.Z,{classname:h.loader}),n.length>0&&(0,l.jsx)(m,{})]})}}}]);
//# sourceMappingURL=516.1c623a9a.chunk.js.map