"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{3621:function(t,e,n){n.d(e,{x7:function(){return $},X5:function(){return G},Me:function(){return Q},oo:function(){return et},US:function(){return N},RR:function(){return _},Cp:function(){return Y},Qo:function(){return U},dr:function(){return tt},cv:function(){return j},Jv:function(){return q},uY:function(){return I},dp:function(){return X}});var r=n(9439),i=n(1413),o=n(5861),u=n(3433),a=n(4687),c=n(5207),f=n(4925),l=n(4942),s=["crossAxis","alignment","allowedPlacements","autoAlignment"],p=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],d=["strategy"],h=["mainAxis","crossAxis","limiter"],m=["apply"];function v(t,e,n){var r,i=t.reference,o=t.floating,u=(0,c.Qq)(e),a=(0,c.Wh)(e),f=(0,c.I4)(a),l=(0,c.k3)(e),s="y"===u,p=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,h=i[f]/2-o[f]/2;switch(l){case"top":r={x:p,y:i.y-o.height};break;case"bottom":r={x:p,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch((0,c.hp)(e)){case"start":r[a]-=h*(n&&s?-1:1);break;case"end":r[a]+=h*(n&&s?-1:1)}return r}var x=function(){var t=(0,o.Z)(a.mark((function t(e,n,r){var o,u,c,f,s,p,d,h,m,x,g,y,b,w,k,Z,R,A,F,L,T,D,P,V,E,O;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.placement,u=void 0===o?"bottom":o,c=r.strategy,f=void 0===c?"absolute":c,s=r.middleware,p=void 0===s?[]:s,d=r.platform,h=p.filter(Boolean),t.next=4,null==d.isRTL?void 0:d.isRTL(n);case 4:return m=t.sent,t.next=7,d.getElementRects({reference:e,floating:n,strategy:f});case 7:x=t.sent,g=v(x,u,m),y=g.x,b=g.y,w=u,k={},Z=0,R=0;case 13:if(!(R<h.length)){t.next=45;break}return A=h[R],F=A.name,L=A.fn,t.next=17,L({x:y,y:b,initialPlacement:u,placement:w,strategy:f,middlewareData:k,rects:x,platform:d,elements:{reference:e,floating:n}});case 17:if(T=t.sent,D=T.x,P=T.y,V=T.data,E=T.reset,y=null!=D?D:y,b=null!=P?P:b,k=(0,i.Z)((0,i.Z)({},k),{},(0,l.Z)({},F,(0,i.Z)((0,i.Z)({},k[F]),V))),!(E&&Z<=50)){t.next=42;break}if(Z++,"object"!==typeof E){t.next=41;break}if(E.placement&&(w=E.placement),!E.rects){t.next=38;break}if(!0!==E.rects){t.next=36;break}return t.next=33,d.getElementRects({reference:e,floating:n,strategy:f});case 33:t.t0=t.sent,t.next=37;break;case 36:t.t0=E.rects;case 37:x=t.t0;case 38:O=v(x,w,m),y=O.x,b=O.y;case 41:R=-1;case 42:R++,t.next=13;break;case 45:return t.abrupt("return",{x:y,y:b,placement:w,strategy:f,middlewareData:k});case 46:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function g(t,e){return y.apply(this,arguments)}function y(){return y=(0,o.Z)(a.mark((function t(e,n){var r,i,o,u,f,l,s,p,d,h,m,v,x,g,y,b,w,k,Z,R,A,F,L,T,D,P;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),i=e.x,o=e.y,u=e.platform,f=e.rects,l=e.elements,s=e.strategy,p=(0,c.ku)(n,e),d=p.boundary,h=void 0===d?"clippingAncestors":d,m=p.rootBoundary,v=void 0===m?"viewport":m,x=p.elementContext,g=void 0===x?"floating":x,y=p.altBoundary,b=void 0!==y&&y,w=p.padding,k=void 0===w?0:w,Z=(0,c.yd)(k),R="floating"===g?"reference":"floating",A=l[b?R:g],t.t0=c.JB,t.t1=u,t.next=10,null==u.isElement?void 0:u.isElement(A);case 10:if(t.t2=r=t.sent,null==t.t2){t.next=15;break}t.t3=r,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=A,t.next=26;break;case 20:if(t.t5=A.contextElement,t.t5){t.next=25;break}return t.next=24,null==u.getDocumentElement?void 0:u.getDocumentElement(l.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=h,t.t8=v,t.t9=s,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:return t.t11=t.sent,F=(0,t.t0)(t.t11),L="floating"===g?{x:i,y:o,width:f.floating.width,height:f.floating.height}:f.reference,t.next=38,null==u.getOffsetParent?void 0:u.getOffsetParent(l.floating);case 38:return T=t.sent,t.next=41,null==u.isElement?void 0:u.isElement(T);case 41:if(!t.sent){t.next=50;break}return t.next=44,null==u.getScale?void 0:u.getScale(T);case 44:if(t.t13=t.sent,t.t13){t.next=47;break}t.t13={x:1,y:1};case 47:t.t12=t.t13,t.next=51;break;case 50:t.t12={x:1,y:1};case 51:if(D=t.t12,t.t14=c.JB,!u.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=59;break}return t.next=56,u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:L,offsetParent:T,strategy:s});case 56:t.t15=t.sent,t.next=60;break;case 59:t.t15=L;case 60:return t.t16=t.t15,P=(0,t.t14)(t.t16),t.abrupt("return",{top:(F.top-P.top+Z.top)/D.y,bottom:(P.bottom-F.bottom+Z.bottom)/D.y,left:(F.left-P.left+Z.left)/D.x,right:(P.right-F.right+Z.right)/D.x});case 63:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function b(t,e,n){return(t?[].concat((0,u.Z)(n.filter((function(e){return(0,c.hp)(e)===t}))),(0,u.Z)(n.filter((function(e){return(0,c.hp)(e)!==t})))):n.filter((function(t){return(0,c.k3)(t)===t}))).filter((function(n){return!t||((0,c.hp)(n)===t||!!e&&(0,c.Go)(n)!==n)}))}function w(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function k(t){return c.mA.some((function(e){return t[e]>=0}))}function Z(t){var e=c.VV.apply(void 0,(0,u.Z)(t.map((function(t){return t.left})))),n=c.VV.apply(void 0,(0,u.Z)(t.map((function(t){return t.top}))));return{x:e,y:n,width:c.Fp.apply(void 0,(0,u.Z)(t.map((function(t){return t.right}))))-e,height:c.Fp.apply(void 0,(0,u.Z)(t.map((function(t){return t.bottom}))))-n}}function R(t){for(var e=t.slice().sort((function(t,e){return t.y-e.y})),n=[],r=null,i=0;i<e.length;i++){var o=e[i];!r||o.y-r.y>r.height/2?n.push([o]):n[n.length-1].push(o),r=o}return n.map((function(t){return(0,c.JB)(Z(t))}))}function A(t,e){return F.apply(this,arguments)}function F(){return F=(0,o.Z)(a.mark((function t(e,n){var r,i,o,u,f,l,s,p,d,h,m,v,x,g;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,i=e.platform,o=e.elements,t.next=3,null==i.isRTL?void 0:i.isRTL(o.floating);case 3:return u=t.sent,f=(0,c.k3)(r),l=(0,c.hp)(r),s="y"===(0,c.Qq)(r),p=["left","top"].includes(f)?-1:1,d=u&&s?-1:1,h=(0,c.ku)(n,e),m="number"===typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis},v=m.mainAxis,x=m.crossAxis,g=m.alignmentAxis,l&&"number"===typeof g&&(x="end"===l?-1*g:g),t.abrupt("return",s?{x:x*d,y:v*p}:{x:v*p,y:x*d});case 13:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}var L=n(1495);function T(t){var e=(0,L.Dx)(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=(0,L.Re)(t),o=i?t.offsetWidth:n,u=i?t.offsetHeight:r,a=(0,c.NM)(n)!==o||(0,c.NM)(r)!==u;return a&&(n=o,r=u),{width:n,height:r,$:a}}function D(t){return(0,L.kK)(t)?t:t.contextElement}function P(t){var e=D(t);if(!(0,L.Re)(e))return(0,c.ze)(1);var n=e.getBoundingClientRect(),r=T(e),i=r.width,o=r.height,u=r.$,a=(u?(0,c.NM)(n.width):n.width)/i,f=(u?(0,c.NM)(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),f&&Number.isFinite(f)||(f=1),{x:a,y:f}}var V=(0,c.ze)(0);function E(t){var e=(0,L.Jj)(t);return(0,L.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:V}function O(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=!1);var i=t.getBoundingClientRect(),o=D(t),u=(0,c.ze)(1);e&&(r?(0,L.kK)(r)&&(u=P(r)):u=P(t));var a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==(0,L.Jj)(t))&&e}(o,n,r)?E(o):(0,c.ze)(0),f=(i.left+a.x)/u.x,l=(i.top+a.y)/u.y,s=i.width/u.x,p=i.height/u.y;if(o)for(var d=(0,L.Jj)(o),h=r&&(0,L.kK)(r)?(0,L.Jj)(r):r,m=d,v=(0,L.wK)(m);v&&r&&h!==m;){var x=P(v),g=v.getBoundingClientRect(),y=(0,L.Dx)(v),b=g.left+(v.clientLeft+parseFloat(y.paddingLeft))*x.x,w=g.top+(v.clientTop+parseFloat(y.paddingTop))*x.y;f*=x.x,l*=x.y,s*=x.x,p*=x.y,f+=b,l+=w,m=(0,L.Jj)(v),v=(0,L.wK)(m)}return(0,c.JB)({width:s,height:p,x:f,y:l})}function C(t,e){var n=(0,L.Lw)(t).scrollLeft;return e?e.left+n:O((0,L.tF)(t)).left+n}function S(t,e,n){void 0===n&&(n=!1);var r=t.getBoundingClientRect();return{x:r.left+e.scrollLeft-(n?0:C(t,r)),y:r.top+e.scrollTop}}function W(t,e,n){var r;if("viewport"===e)r=function(t,e){var n=(0,L.Jj)(t),r=(0,L.tF)(t),i=n.visualViewport,o=r.clientWidth,u=r.clientHeight,a=0,c=0;if(i){o=i.width,u=i.height;var f=(0,L.Pf)();(!f||f&&"fixed"===e)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:o,height:u,x:a,y:c}}(t,n);else if("document"===e)r=function(t){var e=(0,L.tF)(t),n=(0,L.Lw)(t),r=t.ownerDocument.body,i=(0,c.Fp)(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=(0,c.Fp)(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),u=-n.scrollLeft+C(t),a=-n.scrollTop;return"rtl"===(0,L.Dx)(r).direction&&(u+=(0,c.Fp)(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:u,y:a}}((0,L.tF)(t));else if((0,L.kK)(e))r=function(t,e){var n=O(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=(0,L.Re)(t)?P(t):(0,c.ze)(1);return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{var i=E(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return(0,c.JB)(r)}function B(t,e){var n=(0,L.Ow)(t);return!(n===e||!(0,L.kK)(n)||(0,L.Py)(n))&&("fixed"===(0,L.Dx)(n).position||B(n,e))}function K(t,e,n){var r=(0,L.Re)(e),i=(0,L.tF)(e),o="fixed"===n,u=O(t,!0,o,e),a={scrollLeft:0,scrollTop:0},f=(0,c.ze)(0);if(r||!r&&!o)if(("body"!==(0,L.wk)(e)||(0,L.ao)(i))&&(a=(0,L.Lw)(e)),r){var l=O(e,!0,o,e);f.x=l.x+e.clientLeft,f.y=l.y+e.clientTop}else i&&(f.x=C(i));var s=!i||r||o?(0,c.ze)(0):S(i,a);return{x:u.left+a.scrollLeft-f.x-s.x,y:u.top+a.scrollTop-f.y-s.y,width:u.width,height:u.height}}function z(t){return"static"===(0,L.Dx)(t).position}function H(t,e){if(!(0,L.Re)(t)||"fixed"===(0,L.Dx)(t).position)return null;if(e)return e(t);var n=t.offsetParent;return(0,L.tF)(t)===n&&(n=n.ownerDocument.body),n}function J(t,e){var n=(0,L.Jj)(t);if((0,L.tR)(t))return n;if(!(0,L.Re)(t)){for(var r=(0,L.Ow)(t);r&&!(0,L.Py)(r);){if((0,L.kK)(r)&&!z(r))return r;r=(0,L.Ow)(r)}return n}for(var i=H(t,e);i&&(0,L.Ze)(i)&&z(i);)i=H(i,e);return i&&(0,L.Py)(i)&&z(i)&&!(0,L.hT)(i)?n:i||(0,L.gQ)(t)||n}var M=function(){var t=(0,o.Z)(a.mark((function t(e){var n,r,i;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getOffsetParent||J,r=this.getDimensions,t.next=4,r(e.floating);case 4:return i=t.sent,t.t0=K,t.t1=e.reference,t.next=9,n(e.floating);case 9:return t.t2=t.sent,t.t3=e.strategy,t.t4=(0,t.t0)(t.t1,t.t2,t.t3),t.t5={x:0,y:0,width:i.width,height:i.height},t.abrupt("return",{reference:t.t4,floating:t.t5});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();var q={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.elements,n=t.rect,r=t.offsetParent,i="fixed"===t.strategy,o=(0,L.tF)(r),u=!!e&&(0,L.tR)(e.floating);if(r===o||u&&i)return n;var a={scrollLeft:0,scrollTop:0},f=(0,c.ze)(1),l=(0,c.ze)(0),s=(0,L.Re)(r);if((s||!s&&!i)&&(("body"!==(0,L.wk)(r)||(0,L.ao)(o))&&(a=(0,L.Lw)(r)),(0,L.Re)(r))){var p=O(r);f=P(r),l.x=p.x+r.clientLeft,l.y=p.y+r.clientTop}var d=!o||s||i?(0,c.ze)(0):S(o,a,!0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-a.scrollLeft*f.x+l.x+d.x,y:n.y*f.y-a.scrollTop*f.y+l.y+d.y}},getDocumentElement:L.tF,getClippingRect:function(t){var e=t.element,n=t.boundary,r=t.rootBoundary,i=t.strategy,o="clippingAncestors"===n?(0,L.tR)(e)?[]:function(t,e){var n=e.get(t);if(n)return n;for(var r=(0,L.Kx)(t,[],!1).filter((function(t){return(0,L.kK)(t)&&"body"!==(0,L.wk)(t)})),i=null,o="fixed"===(0,L.Dx)(t).position,u=o?(0,L.Ow)(t):t;(0,L.kK)(u)&&!(0,L.Py)(u);){var a=(0,L.Dx)(u),c=(0,L.hT)(u);c||"fixed"!==a.position||(i=null),(o?!c&&!i:!c&&"static"===a.position&&i&&["absolute","fixed"].includes(i.position)||(0,L.ao)(u)&&!c&&B(t,u))?r=r.filter((function(t){return t!==u})):i=a,u=(0,L.Ow)(u)}return e.set(t,r),r}(e,this._c):[].concat(n),a=[].concat((0,u.Z)(o),[r]),f=a[0],l=a.reduce((function(t,n){var r=W(e,n,i);return t.top=(0,c.Fp)(r.top,t.top),t.right=(0,c.VV)(r.right,t.right),t.bottom=(0,c.VV)(r.bottom,t.bottom),t.left=(0,c.Fp)(r.left,t.left),t}),W(e,f,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:J,getElementRects:M,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){var e=T(t);return{width:e.width,height:e.height}},getScale:P,isElement:L.kK,isRTL:function(t){return"rtl"===(0,L.Dx)(t).direction}};function Q(t,e,n,o){void 0===o&&(o={});var a=o,f=a.ancestorScroll,l=void 0===f||f,s=a.ancestorResize,p=void 0===s||s,d=a.elementResize,h=void 0===d?"function"===typeof ResizeObserver:d,m=a.layoutShift,v=void 0===m?"function"===typeof IntersectionObserver:m,x=a.animationFrame,g=void 0!==x&&x,y=D(t),b=l||p?[].concat((0,u.Z)(y?(0,L.Kx)(y):[]),(0,u.Z)((0,L.Kx)(e))):[];b.forEach((function(t){l&&t.addEventListener("scroll",n,{passive:!0}),p&&t.addEventListener("resize",n)}));var w,k=y&&v?function(t,e){var n,r=null,o=(0,L.tF)(t);function u(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}return function a(f,l){void 0===f&&(f=!1),void 0===l&&(l=1),u();var s=t.getBoundingClientRect(),p=s.left,d=s.top,h=s.width,m=s.height;if(f||e(),h&&m){var v={rootMargin:-(0,c.GW)(d)+"px "+-(0,c.GW)(o.clientWidth-(p+h))+"px "+-(0,c.GW)(o.clientHeight-(d+m))+"px "+-(0,c.GW)(p)+"px",threshold:(0,c.Fp)(0,(0,c.VV)(1,l))||1},x=!0;try{r=new IntersectionObserver(g,(0,i.Z)((0,i.Z)({},v),{},{root:o.ownerDocument}))}catch(y){r=new IntersectionObserver(g,v)}r.observe(t)}function g(t){var e=t[0].intersectionRatio;if(e!==l){if(!x)return a();e?a(!1,e):n=setTimeout((function(){a(!1,1e-7)}),1e3)}x=!1}}(!0),u}(y,n):null,Z=-1,R=null;h&&(R=new ResizeObserver((function(t){var i=(0,r.Z)(t,1)[0];i&&i.target===y&&R&&(R.unobserve(e),cancelAnimationFrame(Z),Z=requestAnimationFrame((function(){var t;null==(t=R)||t.observe(e)}))),n()})),y&&!g&&R.observe(y),R.observe(e));var A=g?O(t):null;return g&&function e(){var r=O(t);!A||r.x===A.x&&r.y===A.y&&r.width===A.width&&r.height===A.height||n();A=r,w=requestAnimationFrame(e)}(),n(),function(){var t;b.forEach((function(t){l&&t.removeEventListener("scroll",n),p&&t.removeEventListener("resize",n)})),null==k||k(),null==(t=R)||t.disconnect(),R=null,g&&cancelAnimationFrame(w)}}var N=g,j=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,o,u,c,f,l,s;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.x,c=e.y,f=e.placement,l=e.middlewareData,n.next=3,A(e,t);case 3:if(s=n.sent,f!==(null==(r=l.offset)?void 0:r.placement)||null==(o=l.arrow)||!o.alignmentOffset){n.next=6;break}return n.abrupt("return",{});case 6:return n.abrupt("return",{x:u+s.x,y:c+s.y,data:(0,i.Z)((0,i.Z)({},s),{},{placement:f})});case 7:case"end":return n.stop()}}),n)})))()}}},G=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,i,o,l,p,d,h,m,v,x,y,w,k,Z,R,A,F,L,T,D,P,V,E,O,C,S,W,B;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=e.rects,p=e.middlewareData,d=e.placement,h=e.platform,m=e.elements,v=(0,c.ku)(t,e),x=v.crossAxis,y=void 0!==x&&x,w=v.alignment,k=v.allowedPlacements,Z=void 0===k?c.Ct:k,R=v.autoAlignment,A=void 0===R||R,F=(0,f.Z)(v,s),L=void 0!==w||Z===c.Ct?b(w||null,A,Z):Z,n.next=5,g(e,F);case 5:if(T=n.sent,D=(null==(r=p.autoPlacement)?void 0:r.index)||0,null!=(P=L[D])){n.next=10;break}return n.abrupt("return",{});case 10:return n.t0=c.i8,n.t1=P,n.t2=l,n.next=15,null==h.isRTL?void 0:h.isRTL(m.floating);case 15:if(n.t3=n.sent,V=(0,n.t0)(n.t1,n.t2,n.t3),d===P){n.next=19;break}return n.abrupt("return",{reset:{placement:L[0]}});case 19:if(E=[T[(0,c.k3)(P)],T[V[0]],T[V[1]]],O=[].concat((0,u.Z)((null==(i=p.autoPlacement)?void 0:i.overflows)||[]),[{placement:P,overflows:E}]),!(C=L[D+1])){n.next=24;break}return n.abrupt("return",{data:{index:D+1,overflows:O},reset:{placement:C}});case 24:if(S=O.map((function(t){var e=(0,c.hp)(t.placement);return[t.placement,e&&y?t.overflows.slice(0,2).reduce((function(t,e){return t+e}),0):t.overflows[0],t.overflows]})).sort((function(t,e){return t[1]-e[1]})),W=S.filter((function(t){return t[2].slice(0,(0,c.hp)(t[0])?2:3).every((function(t){return t<=0}))})),(B=(null==(o=W[0])?void 0:o[0])||S[0][0])===d){n.next=29;break}return n.abrupt("return",{data:{index:D+1,overflows:O},reset:{placement:B}});case 29:return n.abrupt("return",{});case 30:case"end":return n.stop()}}),n)})))()}}},I=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,o,u,s,p,d,m,v,x,y,b,w,k,Z,R,A,F,L,T,D,P,V,E,O,C,S;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.x,s=e.y,p=e.placement,d=(0,c.ku)(t,e),m=d.mainAxis,v=void 0===m||m,x=d.crossAxis,y=void 0!==x&&x,b=d.limiter,w=void 0===b?{fn:function(t){return{x:t.x,y:t.y}}}:b,k=(0,f.Z)(d,h),Z={x:u,y:s},n.next=5,g(e,k);case 5:return R=n.sent,A=(0,c.Qq)((0,c.k3)(p)),F=(0,c.Rn)(A),L=Z[F],T=Z[A],v&&(D="y"===F?"bottom":"right",P=L+R["y"===F?"top":"left"],V=L-R[D],L=(0,c.uZ)(P,L,V)),y&&(E="y"===A?"bottom":"right",O=T+R["y"===A?"top":"left"],C=T-R[E],T=(0,c.uZ)(O,T,C)),S=w.fn((0,i.Z)((0,i.Z)({},e),{},(r={},(0,l.Z)(r,F,L),(0,l.Z)(r,A,T),r))),n.abrupt("return",(0,i.Z)((0,i.Z)({},S),{},{data:{x:S.x-u,y:S.y-s,enabled:(o={},(0,l.Z)(o,F,v),(0,l.Z)(o,A,y),o)}}));case 14:case"end":return n.stop()}}),n)})))()}}},_=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,i,o,l,s,d,h,m,v,x,y,b,w,k,Z,R,A,F,L,T,D,P,V,E,O,C,S,W,B,K,z,H,J,M,q,Q,N,j,G;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.placement,l=e.middlewareData,s=e.rects,d=e.initialPlacement,h=e.platform,m=e.elements,v=(0,c.ku)(t,e),x=v.mainAxis,y=void 0===x||x,b=v.crossAxis,w=void 0===b||b,k=v.fallbackPlacements,Z=v.fallbackStrategy,R=void 0===Z?"bestFit":Z,A=v.fallbackAxisSideDirection,F=void 0===A?"none":A,L=v.flipAlignment,T=void 0===L||L,D=(0,f.Z)(v,p),null==(r=l.arrow)||!r.alignmentOffset){n.next=4;break}return n.abrupt("return",{});case 4:return P=(0,c.k3)(o),V=(0,c.Qq)(d),E=(0,c.k3)(d)===d,n.next=9,null==h.isRTL?void 0:h.isRTL(m.floating);case 9:return O=n.sent,C=k||(E||!T?[(0,c.pw)(d)]:(0,c.gy)(d)),S="none"!==F,!k&&S&&C.push.apply(C,(0,u.Z)((0,c.KX)(d,T,F,O))),W=[d].concat((0,u.Z)(C)),n.next=16,g(e,D);case 16:if(B=n.sent,K=[],z=(null==(i=l.flip)?void 0:i.overflows)||[],y&&K.push(B[P]),w&&(H=(0,c.i8)(o,s,O),K.push(B[H[0]],B[H[1]])),z=[].concat((0,u.Z)(z),[{placement:o,overflows:K}]),K.every((function(t){return t<=0}))){n.next=39;break}if(q=((null==(J=l.flip)?void 0:J.index)||0)+1,!(Q=W[q])){n.next=27;break}return n.abrupt("return",{data:{index:q,overflows:z},reset:{placement:Q}});case 27:if(N=null==(M=z.filter((function(t){return t.overflows[0]<=0})).sort((function(t,e){return t.overflows[1]-e.overflows[1]}))[0])?void 0:M.placement){n.next=37;break}n.t0=R,n.next="bestFit"===n.t0?32:"initialPlacement"===n.t0?35:37;break;case 32:return G=null==(j=z.filter((function(t){if(S){var e=(0,c.Qq)(t.placement);return e===V||"y"===e}return!0})).map((function(t){return[t.placement,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:j[0],G&&(N=G),n.abrupt("break",37);case 35:return N=d,n.abrupt("break",37);case 37:if(o===N){n.next=39;break}return n.abrupt("return",{reset:{placement:N}});case 39:return n.abrupt("return",{});case 40:case"end":return n.stop()}}),n)})))()}}},X=function(t){return void 0===t&&(t={}),{name:"size",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,o,u,l,s,p,d,h,v,x,y,b,w,k,Z,R,A,F,L,T,D,P,V,E,O,C,S,W,B,K,z;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.placement,l=e.rects,s=e.platform,p=e.elements,d=(0,c.ku)(t,e),h=d.apply,v=void 0===h?function(){}:h,x=(0,f.Z)(d,m),n.next=4,g(e,x);case 4:if(y=n.sent,b=(0,c.k3)(u),w=(0,c.hp)(u),k="y"===(0,c.Qq)(u),Z=l.floating,R=Z.width,A=Z.height,"top"!==b&&"bottom"!==b){n.next=28;break}return F=b,n.t0=w,n.next=14,null==s.isRTL?void 0:s.isRTL(p.floating);case 14:if(!n.sent){n.next=18;break}n.t1="start",n.next=19;break;case 18:n.t1="end";case 19:if(n.t2=n.t1,n.t0!==n.t2){n.next=24;break}n.t3="left",n.next=25;break;case 24:n.t3="right";case 25:L=n.t3,n.next=30;break;case 28:L=b,F="end"===w?"top":"bottom";case 30:return T=A-y.top-y.bottom,D=R-y.left-y.right,P=(0,c.VV)(A-y[F],T),V=(0,c.VV)(R-y[L],D),E=!e.middlewareData.shift,O=P,C=V,null!=(r=e.middlewareData.shift)&&r.enabled.x&&(C=D),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(O=T),E&&!w&&(S=(0,c.Fp)(y.left,0),W=(0,c.Fp)(y.right,0),B=(0,c.Fp)(y.top,0),K=(0,c.Fp)(y.bottom,0),k?C=R-2*(0!==S||0!==W?S+W:(0,c.Fp)(y.left,y.right)):O=A-2*(0!==B||0!==K?B+K:(0,c.Fp)(y.top,y.bottom))),n.next=42,v((0,i.Z)((0,i.Z)({},e),{},{availableWidth:C,availableHeight:O}));case 42:return n.next=44,s.getDimensions(p.floating);case 44:if(z=n.sent,R===z.width&&A===z.height){n.next=47;break}return n.abrupt("return",{reset:{rects:!0}});case 47:return n.abrupt("return",{});case 48:case"end":return n.stop()}}),n)})))()}}},Y=function(t){return void 0===t&&(t={}),{name:"hide",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,o,u,l,s,p,h,m,v;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.rects,o=(0,c.ku)(t,e),u=o.strategy,l=void 0===u?"referenceHidden":u,s=(0,f.Z)(o,d),n.t0=l,n.next="referenceHidden"===n.t0?5:"escaped"===n.t0?10:15;break;case 5:return n.next=7,g(e,(0,i.Z)((0,i.Z)({},s),{},{elementContext:"reference"}));case 7:return p=n.sent,h=w(p,r.reference),n.abrupt("return",{data:{referenceHiddenOffsets:h,referenceHidden:k(h)}});case 10:return n.next=12,g(e,(0,i.Z)((0,i.Z)({},s),{},{altBoundary:!0}));case 12:return m=n.sent,v=w(m,r.floating),n.abrupt("return",{data:{escapedOffsets:v,escaped:k(v)}});case 15:return n.abrupt("return",{});case 16:case"end":return n.stop()}}),n)})))()}}},$=function(t){return{name:"arrow",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,o,u,f,s,p,d,h,m,v,x,g,y,b,w,k,Z,R,A,F,L,T,D,P,V,E,O,C,S,W,B,K,z,H,J,M;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=e.x,f=e.y,s=e.placement,p=e.rects,d=e.platform,h=e.elements,m=e.middlewareData,v=(0,c.ku)(t,e)||{},x=v.element,g=v.padding,y=void 0===g?0:g,null!=x){n.next=4;break}return n.abrupt("return",{});case 4:return b=(0,c.yd)(y),w={x:u,y:f},k=(0,c.Wh)(s),Z=(0,c.I4)(k),n.next=10,d.getDimensions(x);case 10:return R=n.sent,F=(A="y"===k)?"top":"left",L=A?"bottom":"right",T=A?"clientHeight":"clientWidth",D=p.reference[Z]+p.reference[k]-w[k]-p.floating[Z],P=w[k]-p.reference[k],n.next=19,null==d.getOffsetParent?void 0:d.getOffsetParent(x);case 19:if(V=n.sent,E=V?V[T]:0,n.t0=!E,n.t0){n.next=26;break}return n.next=25,null==d.isElement?void 0:d.isElement(V);case 25:n.t0=!n.sent;case 26:if(!n.t0){n.next=28;break}E=h.floating[T]||p.floating[Z];case 28:return O=D/2-P/2,C=E/2-R[Z]/2-1,S=(0,c.VV)(b[F],C),W=(0,c.VV)(b[L],C),B=S,K=E-R[Z]-W,z=E/2-R[Z]/2+O,H=(0,c.uZ)(B,z,K),J=!m.arrow&&null!=(0,c.hp)(s)&&z!==H&&p.reference[Z]/2-(z<B?S:W)-R[Z]/2<0,M=J?z<B?z-B:z-K:0,n.abrupt("return",(o={},(0,l.Z)(o,k,w[k]+M),(0,l.Z)(o,"data",(0,i.Z)((r={},(0,l.Z)(r,k,H),(0,l.Z)(r,"centerOffset",z-H-M),r),J&&{alignmentOffset:M})),(0,l.Z)(o,"reset",J),o));case 39:case"end":return n.stop()}}),n)})))()}}},U=function(t){return void 0===t&&(t={}),{name:"inline",options:t,fn:function(e){return(0,o.Z)(a.mark((function n(){var r,i,o,f,l,s,p,d,h,m,v,x,g,y,b,w;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b=function(){if(2===x.length&&x[0].left>x[1].right&&null!=h&&null!=m)return x.find((function(t){return h>t.left-y.left&&h<t.right+y.right&&m>t.top-y.top&&m<t.bottom+y.bottom}))||g;if(x.length>=2){if("y"===(0,c.Qq)(r)){var t=x[0],e=x[x.length-1],n="top"===(0,c.k3)(r),i=t.top,o=e.bottom,a=n?t.left:e.left,f=n?t.right:e.right;return{top:i,bottom:o,left:a,right:f,width:f-a,height:o-i,x:a,y:i}}var l="left"===(0,c.k3)(r),s=c.Fp.apply(void 0,(0,u.Z)(x.map((function(t){return t.right})))),p=c.VV.apply(void 0,(0,u.Z)(x.map((function(t){return t.left})))),d=x.filter((function(t){return l?t.left===p:t.right===s})),v=d[0].top,b=d[d.length-1].bottom;return{top:v,bottom:b,left:p,right:s,width:s-p,height:b-v,x:p,y:v}}return g},r=e.placement,i=e.elements,o=e.rects,f=e.platform,l=e.strategy,s=(0,c.ku)(t,e),p=s.padding,d=void 0===p?2:p,h=s.x,m=s.y,n.t0=Array,n.next=6,null==f.getClientRects?void 0:f.getClientRects(i.reference);case 6:if(n.t1=n.sent,n.t1){n.next=9;break}n.t1=[];case 9:return n.t2=n.t1,v=n.t0.from.call(n.t0,n.t2),x=R(v),g=(0,c.JB)(Z(v)),y=(0,c.yd)(d),n.next=16,f.getElementRects({reference:{getBoundingClientRect:b},floating:i.floating,strategy:l});case 16:if(w=n.sent,o.reference.x===w.reference.x&&o.reference.y===w.reference.y&&o.reference.width===w.reference.width&&o.reference.height===w.reference.height){n.next=19;break}return n.abrupt("return",{reset:{rects:w}});case 19:return n.abrupt("return",{});case 20:case"end":return n.stop()}}),n)})))()}}},tt=function(t){return void 0===t&&(t={}),{options:t,fn:function(e){var n,r=e.x,o=e.y,u=e.placement,a=e.rects,f=e.middlewareData,s=(0,c.ku)(t,e),p=s.offset,d=void 0===p?0:p,h=s.mainAxis,m=void 0===h||h,v=s.crossAxis,x=void 0===v||v,g={x:r,y:o},y=(0,c.Qq)(u),b=(0,c.Rn)(y),w=g[b],k=g[y],Z=(0,c.ku)(d,e),R="number"===typeof Z?{mainAxis:Z,crossAxis:0}:(0,i.Z)({mainAxis:0,crossAxis:0},Z);if(m){var A="y"===b?"height":"width",F=a.reference[b]-a.floating[A]+R.mainAxis,L=a.reference[b]+a.reference[A]-R.mainAxis;w<F?w=F:w>L&&(w=L)}if(x){var T,D,P="y"===b?"width":"height",V=["top","left"].includes((0,c.k3)(u)),E=a.reference[y]-a.floating[P]+(V&&(null==(T=f.offset)?void 0:T[y])||0)+(V?0:R.crossAxis),O=a.reference[y]+a.reference[P]+(V?0:(null==(D=f.offset)?void 0:D[y])||0)-(V?R.crossAxis:0);k<E?k=E:k>O&&(k=O)}return n={},(0,l.Z)(n,b,w),(0,l.Z)(n,y,k),n}}},et=function(t,e,n){var r=new Map,o=(0,i.Z)({platform:q},n),u=(0,i.Z)((0,i.Z)({},o.platform),{},{_c:r});return x(t,e,(0,i.Z)((0,i.Z)({},o),{},{platform:u}))}},1495:function(t,e,n){function r(){return"undefined"!==typeof window}function i(t){return a(t)?(t.nodeName||"").toLowerCase():"#document"}function o(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function u(t){var e;return null==(e=(a(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function a(t){return!!r()&&(t instanceof Node||t instanceof o(t).Node)}function c(t){return!!r()&&(t instanceof Element||t instanceof o(t).Element)}function f(t){return!!r()&&(t instanceof HTMLElement||t instanceof o(t).HTMLElement)}function l(t){return!(!r()||"undefined"===typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof o(t).ShadowRoot)}function s(t){var e=g(t),n=e.overflow,r=e.overflowX,i=e.overflowY,o=e.display;return/auto|scroll|overlay|hidden|clip/.test(n+i+r)&&!["inline","contents"].includes(o)}function p(t){return["table","td","th"].includes(i(t))}function d(t){return[":popover-open",":modal"].some((function(e){try{return t.matches(e)}catch(n){return!1}}))}function h(t){var e=v(),n=c(t)?g(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((function(t){return(n.willChange||"").includes(t)}))||["paint","layout","strict","content"].some((function(t){return(n.contain||"").includes(t)}))}function m(t){for(var e=b(t);f(e)&&!x(e);){if(h(e))return e;if(d(e))return null;e=b(e)}return null}function v(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function x(t){return["html","body","#document"].includes(i(t))}function g(t){return o(t).getComputedStyle(t)}function y(t){return c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function b(t){if("html"===i(t))return t;var e=t.assignedSlot||t.parentNode||l(t)&&t.host||u(t);return l(e)?e.host:e}function w(t){var e=b(t);return x(e)?t.ownerDocument?t.ownerDocument.body:t.body:f(e)&&s(e)?e:w(e)}function k(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);var i=w(t),u=i===(null==(r=t.ownerDocument)?void 0:r.body),a=o(i);if(u){var c=Z(a);return e.concat(a,a.visualViewport||[],s(i)?i:[],c&&n?k(c):[])}return e.concat(i,k(i,[],n))}function Z(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}n.d(e,{Dx:function(){return g},Jj:function(){return o},Kx:function(){return k},Lw:function(){return y},Ow:function(){return b},Pf:function(){return v},Py:function(){return x},Re:function(){return f},Ze:function(){return p},Zq:function(){return l},ao:function(){return s},gQ:function(){return m},hT:function(){return h},kK:function(){return c},tF:function(){return u},tR:function(){return d},wK:function(){return Z},wk:function(){return i}})},5207:function(t,e,n){n.d(e,{Ct:function(){return u},Fp:function(){return c},GW:function(){return l},Go:function(){return R},I4:function(){return y},JB:function(){return T},KX:function(){return A},NM:function(){return f},Qq:function(){return b},Rn:function(){return g},VV:function(){return a},Wh:function(){return w},gy:function(){return Z},hp:function(){return x},i8:function(){return k},k3:function(){return v},ku:function(){return m},mA:function(){return i},pw:function(){return F},uZ:function(){return h},yd:function(){return L},ze:function(){return s}});var r=n(1413),i=["top","right","bottom","left"],o=["start","end"],u=i.reduce((function(t,e){return t.concat(e,e+"-"+o[0],e+"-"+o[1])}),[]),a=Math.min,c=Math.max,f=Math.round,l=Math.floor,s=function(t){return{x:t,y:t}},p={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function h(t,e,n){return c(t,a(e,n))}function m(t,e){return"function"===typeof t?t(e):t}function v(t){return t.split("-")[0]}function x(t){return t.split("-")[1]}function g(t){return"x"===t?"y":"x"}function y(t){return"y"===t?"height":"width"}function b(t){return["top","bottom"].includes(v(t))?"y":"x"}function w(t){return g(b(t))}function k(t,e,n){void 0===n&&(n=!1);var r=x(t),i=w(t),o=y(i),u="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(u=F(u)),[u,F(u)]}function Z(t){var e=F(t);return[R(t),e,R(e)]}function R(t){return t.replace(/start|end/g,(function(t){return d[t]}))}function A(t,e,n,r){var i=x(t),o=function(t,e,n){var r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(v(t),"start"===n,r);return i&&(o=o.map((function(t){return t+"-"+i})),e&&(o=o.concat(o.map(R)))),o}function F(t){return t.replace(/left|right|bottom|top/g,(function(t){return p[t]}))}function L(t){return"number"!==typeof t?function(t){return(0,r.Z)({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function T(t){var e=t.x,n=t.y,r=t.width,i=t.height;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}}}]);
//# sourceMappingURL=621.eb65bbc5.chunk.js.map