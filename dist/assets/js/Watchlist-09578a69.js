import{g as ge,B as Ue,C as He,a as Be,M as qe,S as Ge,t as Ye}from"./index-aaf4094a.js";import{a as A,r as Xe,b as _,j as d,F as ye}from"./vendor-9d4999d7.js";const Je="/aniwatch/assets/img/df99c9c7.svg",Ke="/aniwatch/assets/img/42db01f5.svg",De="/aniwatch/assets/img/1da9c1b3.svg";var Ee={exports:{}};(()=>{var h={296:(u,f,s)=>{var x=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,m=/^0o[0-7]+$/i,O=parseInt,M=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,J=typeof self=="object"&&self&&self.Object===Object&&self,Q=M||J||Function("return this")(),v=Object.prototype.toString,V=Math.max,Z=Math.min,G=function(){return Q.Date.now()};function W(g){var y=typeof g;return!!g&&(y=="object"||y=="function")}function le(g){if(typeof g=="number")return g;if(function(k){return typeof k=="symbol"||function($){return!!$&&typeof $=="object"}(k)&&v.call(k)=="[object Symbol]"}(g))return NaN;if(W(g)){var y=typeof g.valueOf=="function"?g.valueOf():g;g=W(y)?y+"":y}if(typeof g!="string")return g===0?g:+g;g=g.replace(x,"");var C=R.test(g);return C||m.test(g)?O(g.slice(2),C?2:8):j.test(g)?NaN:+g}u.exports=function(g,y,C){var k,$,Y,oe,I,U,X=0,ie=!1,ee=!1,te=!0;if(typeof g!="function")throw new TypeError("Expected a function");function D(E){var K=k,ce=$;return k=$=void 0,X=E,oe=g.apply(ce,K)}function re(E){return X=E,I=setTimeout(ae,y),ie?D(E):oe}function se(E){var K=E-U;return U===void 0||K>=y||K<0||ee&&E-X>=Y}function ae(){var E=G();if(se(E))return ue(E);I=setTimeout(ae,function(K){var ce=y-(K-U);return ee?Z(ce,Y-(K-X)):ce}(E))}function ue(E){return I=void 0,te&&k?D(E):(k=$=void 0,oe)}function pe(){var E=G(),K=se(E);if(k=arguments,$=this,U=E,K){if(I===void 0)return re(U);if(ee)return I=setTimeout(ae,y),D(U)}return I===void 0&&(I=setTimeout(ae,y)),oe}return y=le(y)||0,W(C)&&(ie=!!C.leading,Y=(ee="maxWait"in C)?V(le(C.maxWait)||0,y):Y,te="trailing"in C?!!C.trailing:te),pe.cancel=function(){I!==void 0&&clearTimeout(I),X=0,k=U=$=I=void 0},pe.flush=function(){return I===void 0?oe:ue(G())},pe}},96:(u,f,s)=>{var x="Expected a function",j=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,O=/^0o[0-7]+$/i,M=parseInt,J=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,Q=typeof self=="object"&&self&&self.Object===Object&&self,v=J||Q||Function("return this")(),V=Object.prototype.toString,Z=Math.max,G=Math.min,W=function(){return v.Date.now()};function le(y){var C=typeof y;return!!y&&(C=="object"||C=="function")}function g(y){if(typeof y=="number")return y;if(function($){return typeof $=="symbol"||function(Y){return!!Y&&typeof Y=="object"}($)&&V.call($)=="[object Symbol]"}(y))return NaN;if(le(y)){var C=typeof y.valueOf=="function"?y.valueOf():y;y=le(C)?C+"":C}if(typeof y!="string")return y===0?y:+y;y=y.replace(j,"");var k=m.test(y);return k||O.test(y)?M(y.slice(2),k?2:8):R.test(y)?NaN:+y}u.exports=function(y,C,k){var $=!0,Y=!0;if(typeof y!="function")throw new TypeError(x);return le(k)&&($="leading"in k?!!k.leading:$,Y="trailing"in k?!!k.trailing:Y),function(oe,I,U){var X,ie,ee,te,D,re,se=0,ae=!1,ue=!1,pe=!0;if(typeof oe!="function")throw new TypeError(x);function E(z){var ne=X,ve=ie;return X=ie=void 0,se=z,te=oe.apply(ve,ne)}function K(z){return se=z,D=setTimeout(he,I),ae?E(z):te}function ce(z){var ne=z-re;return re===void 0||ne>=I||ne<0||ue&&z-se>=ee}function he(){var z=W();if(ce(z))return we(z);D=setTimeout(he,function(ne){var ve=I-(ne-re);return ue?G(ve,ee-(ne-se)):ve}(z))}function we(z){return D=void 0,pe&&X?E(z):(X=ie=void 0,te)}function be(){var z=W(),ne=ce(z);if(X=arguments,ie=this,re=z,ne){if(D===void 0)return K(re);if(ue)return D=setTimeout(he,I),E(re)}return D===void 0&&(D=setTimeout(he,I)),te}return I=g(I)||0,le(U)&&(ae=!!U.leading,ee=(ue="maxWait"in U)?Z(g(U.maxWait)||0,I):ee,pe="trailing"in U?!!U.trailing:pe),be.cancel=function(){D!==void 0&&clearTimeout(D),se=0,X=re=ie=D=void 0},be.flush=function(){return D===void 0?te:we(W())},be}(y,C,{leading:$,maxWait:C,trailing:Y})}},703:(u,f,s)=>{var x=s(414);function j(){}function R(){}R.resetWarningCache=j,u.exports=function(){function m(J,Q,v,V,Z,G){if(G!==x){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}function O(){return m}m.isRequired=m;var M={array:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:O,element:m,elementType:m,instanceOf:O,node:m,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:R,resetWarningCache:j};return M.PropTypes=M,M}},697:(u,f,s)=>{u.exports=s(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},c={};function p(u){var f=c[u];if(f!==void 0)return f.exports;var s=c[u]={exports:{}};return h[u](s,s.exports,p),s.exports}p.n=u=>{var f=u&&u.__esModule?()=>u.default:()=>u;return p.d(f,{a:f}),f},p.d=(u,f)=>{for(var s in f)p.o(f,s)&&!p.o(u,s)&&Object.defineProperty(u,s,{enumerable:!0,get:f[s]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(u,f)=>Object.prototype.hasOwnProperty.call(u,f),p.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var w={};(()=>{p.r(w),p.d(w,{LazyLoadComponent:()=>Ne,LazyLoadImage:()=>Ae,trackWindowScroll:()=>ae});const u=A.exports;var f=p.n(u),s=p(697);const x=Xe.exports;var j=p.n(x);function R(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function m(r){return(m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function O(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(F){return Object.getOwnPropertyDescriptor(r,F).enumerable})),i.push.apply(i,o)}return i}function M(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function J(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function Q(r,e){return(Q=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function v(r,e){if(e&&(m(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function V(r){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var Z=function(r){r.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},G={},W=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Q(t,n)})(T,r);var e,i,o,F,fe=(o=T,F=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=V(o);if(F){var l=V(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return v(this,t)});function T(t){var n;if(function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,T),(n=fe.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&R(),n.supportsObserver){var l=t.threshold;n.observer=function(a){return G[a]=G[a]||new IntersectionObserver(Z,{rootMargin:a+"px"}),G[a]}(l)}return n}return e=T,(i=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,n=this.placeholder.getBoundingClientRect(),l=j().findDOMNode(this.placeholder).style,a={left:parseInt(l.getPropertyValue("margin-left"),10)||0,top:parseInt(l.getPropertyValue("margin-top"),10)||0};return{bottom:t.y+n.bottom+a.top,left:t.x+n.left+a.left,right:t.x+n.right+a.left,top:t.y+n.top+a.top}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,n=t.scrollPosition,l=t.threshold,a=this.getPlaceholderBoundingBox(n),b=n.y+window.innerHeight,P=n.x,L=n.x+window.innerWidth,N=n.y;return Boolean(N-l<=a.bottom&&b+l>=a.top&&P-l<=a.right&&L+l>=a.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,n=this.props,l=n.className,a=n.height,b=n.placeholder,P=n.style,L=n.width;if(b&&typeof b.type!="function")return f().cloneElement(b,{ref:function(S){return t.placeholder=S}});var N=function(S){for(var H=1;H<arguments.length;H++){var B=arguments[H]!=null?arguments[H]:{};H%2?O(Object(B),!0).forEach(function(q){M(S,q,B[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(B)):O(Object(B)).forEach(function(q){Object.defineProperty(S,q,Object.getOwnPropertyDescriptor(B,q))})}return S}({display:"inline-block"},P);return L!==void 0&&(N.width=L),a!==void 0&&(N.height=a),f().createElement("span",{className:l,ref:function(S){return t.placeholder=S},style:N},b)}}])&&J(e.prototype,i),T}(f().Component);W.propTypes={onVisible:s.PropTypes.func.isRequired,className:s.PropTypes.string,height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),placeholder:s.PropTypes.element,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,scrollPosition:s.PropTypes.shape({x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired}),width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string])},W.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const le=W;var g=p(296),y=p.n(g),C=p(96),k=p.n(C),$=function(r){var e=getComputedStyle(r,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const Y=function(r){if(!(r instanceof HTMLElement))return window;for(var e=r;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test($(e)))return e;e=e.parentNode}return window};function oe(r){return(oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var I=["delayMethod","delayTime"];function U(){return(U=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r}).apply(this,arguments)}function X(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function ie(r,e){return(ie=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function ee(r,e){if(e&&(oe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return te(r)}function te(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function D(r){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var re=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},se=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const ae=function(r){var e=function(i){(function(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(a&&a.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),a&&ie(l,a)})(n,i);var o,F,fe,T,t=(fe=n,T=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var l,a=D(fe);if(T){var b=D(this).constructor;l=Reflect.construct(a,arguments,b)}else l=a.apply(this,arguments);return ee(this,l)});function n(l){var a;if(function(P,L){if(!(P instanceof L))throw new TypeError("Cannot call a class as a function")}(this,n),(a=t.call(this,l)).useIntersectionObserver=l.useIntersectionObserver&&R(),a.useIntersectionObserver)return ee(a);var b=a.onChangeScroll.bind(te(a));return l.delayMethod==="debounce"?a.delayedScroll=y()(b,l.delayTime):l.delayMethod==="throttle"&&(a.delayedScroll=k()(b,l.delayTime)),a.state={scrollPosition:{x:re(),y:se()}},a.baseComponentRef=f().createRef(),a}return o=n,(F=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||Y(j().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=Y(j().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:re(),y:se()}})}},{key:"render",value:function(){var l=this.props,a=(l.delayMethod,l.delayTime,function(P,L){if(P==null)return{};var N,S,H=function(q,me){if(q==null)return{};var de,Oe,Re={},Me=Object.keys(q);for(Oe=0;Oe<Me.length;Oe++)de=Me[Oe],me.indexOf(de)>=0||(Re[de]=q[de]);return Re}(P,L);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(P);for(S=0;S<B.length;S++)N=B[S],L.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(P,N)&&(H[N]=P[N])}return H}(l,I)),b=this.useIntersectionObserver?null:this.state.scrollPosition;return f().createElement(r,U({forwardRef:this.baseComponentRef,scrollPosition:b},a))}}])&&X(o.prototype,F),n}(f().Component);return e.propTypes={delayMethod:s.PropTypes.oneOf(["debounce","throttle"]),delayTime:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function ue(r){return(ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function pe(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function E(r,e){return(E=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function K(r,e){if(e&&(ue(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function ce(r){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var he=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&E(t,n)})(T,r);var e,i,o,F,fe=(o=T,F=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=ce(o);if(F){var l=ce(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return K(this,t)});function T(t){return function(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(this,T),fe.call(this,t)}return e=T,(i=[{key:"render",value:function(){return f().createElement(le,this.props)}}])&&pe(e.prototype,i),T}(f().Component);const we=ae(he);function be(r){return(be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function z(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function ne(r,e){return(ne=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function ve(r,e){if(e&&(be(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Le(r)}function Le(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pe(r){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var je=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&ne(t,n)})(T,r);var e,i,o,F,fe=(o=T,F=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=Pe(o);if(F){var l=Pe(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return ve(this,t)});function T(t){var n;(function(L,N){if(!(L instanceof N))throw new TypeError("Cannot call a class as a function")})(this,T),n=fe.call(this,t);var l=t.afterLoad,a=t.beforeLoad,b=t.scrollPosition,P=t.visibleByDefault;return n.state={visible:P},P&&(a(),l()),n.onVisible=n.onVisible.bind(Le(n)),n.isScrollTracked=Boolean(b&&Number.isFinite(b.x)&&b.x>=0&&Number.isFinite(b.y)&&b.y>=0),n}return e=T,(i=[{key:"componentDidUpdate",value:function(t,n){n.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,n=t.className,l=t.delayMethod,a=t.delayTime,b=t.height,P=t.placeholder,L=t.scrollPosition,N=t.style,S=t.threshold,H=t.useIntersectionObserver,B=t.width;return this.isScrollTracked||H&&R()?f().createElement(le,{className:n,height:b,onVisible:this.onVisible,placeholder:P,scrollPosition:L,style:N,threshold:S,useIntersectionObserver:H,width:B}):f().createElement(we,{className:n,delayMethod:l,delayTime:a,height:b,onVisible:this.onVisible,placeholder:P,style:N,threshold:S,width:B})}}])&&z(e.prototype,i),T}(f().Component);je.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool},je.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Ne=je;function Ie(r){return(Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var We=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function _e(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(F){return Object.getOwnPropertyDescriptor(r,F).enumerable})),i.push.apply(i,o)}return i}function Ce(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(i),!0).forEach(function(o){$e(r,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):_e(Object(i)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))})}return r}function $e(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function Te(){return(Te=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r}).apply(this,arguments)}function ze(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function ke(r,e){return(ke=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function Fe(r,e){if(e&&(Ie(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function Se(r){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var xe=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&ke(t,n)})(T,r);var e,i,o,F,fe=(o=T,F=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=Se(o);if(F){var l=Se(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return Fe(this,t)});function T(t){var n;return function(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}(this,T),(n=fe.call(this,t)).state={loaded:!1},n}return e=T,(i=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(){t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,n=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(l,a){if(l==null)return{};var b,P,L=function(S,H){if(S==null)return{};var B,q,me={},de=Object.keys(S);for(q=0;q<de.length;q++)B=de[q],H.indexOf(B)>=0||(me[B]=S[B]);return me}(l,a);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(l);for(P=0;P<N.length;P++)b=N[P],a.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(l,b)&&(L[b]=l[b])}return L}(t,We));return f().createElement("img",Te({onLoad:this.onImageLoad()},n))}},{key:"getLazyLoadImage",value:function(){var t=this.props,n=t.beforeLoad,l=t.className,a=t.delayMethod,b=t.delayTime,P=t.height,L=t.placeholder,N=t.scrollPosition,S=t.style,H=t.threshold,B=t.useIntersectionObserver,q=t.visibleByDefault,me=t.width;return f().createElement(Ne,{beforeLoad:n,className:l,delayMethod:a,delayTime:b,height:P,placeholder:L,scrollPosition:N,style:S,threshold:H,useIntersectionObserver:B,visibleByDefault:q,width:me},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var n=this.props,l=n.effect,a=n.height,b=n.placeholderSrc,P=n.width,L=n.wrapperClassName,N=n.wrapperProps,S=this.state.loaded,H=S?" lazy-load-image-loaded":"",B=S||!b?{}:{backgroundImage:"url(".concat(b,")"),backgroundSize:"100% 100%"};return f().createElement("span",Te({className:L+" lazy-load-image-background "+l+H,style:Ce(Ce({},B),{},{color:"transparent",display:"inline-block",height:a,width:P})},N),t)}},{key:"render",value:function(){var t=this.props,n=t.effect,l=t.placeholderSrc,a=t.visibleByDefault,b=t.wrapperClassName,P=t.wrapperProps,L=this.getLazyLoadImage();return(n||l)&&!a||b||P?this.getWrappedLazyLoadImage(L):L}}])&&ze(e.prototype,i),T}(f().Component);xe.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,delayMethod:s.PropTypes.string,delayTime:s.PropTypes.number,effect:s.PropTypes.string,placeholderSrc:s.PropTypes.string,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool,wrapperClassName:s.PropTypes.string,wrapperProps:s.PropTypes.object},xe.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Ae=xe})(),Ee.exports=w})();function Qe({id:h,item:c,status:p,handleEdit:w,windowWidth:u}){var x,j;const[f,s]=A.exports.useState(!1);return _("tr",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>w(p,h,c),className:"item",children:[_("td",{className:"table-img",children:[f&&_("div",{className:"pop-out",children:[d("img",{style:{boxShadow:`0 4px 16px ${ge(c.cover.color,.2)}`,backgroundColor:ge(c.cover.color,.25)},src:(x=c.cover)==null?void 0:x.url}),d("div",{className:"arrow-right"})]}),d("div",{onClick:()=>w(p,h,c),className:f?"edit":"cover",children:d(Ee.exports.LazyLoadImage,{style:{backgroundColor:f?null:ge(c.cover.color,.25)},src:f?De:(j=c.cover)==null?void 0:j.url,width:48,height:48,alt:""})})]}),_("td",{className:"table-title",children:[c.title.english?c.title.english:c.title.romaji,u<=640&&_("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px"},children:[d("div",{children:c.progress?`EP ${c.progress} ${c.episodes?"/"+c.episodes:""}`:void 0}),d("div",{children:c.score})]})]}),u>640&&_(ye,{children:[d("td",{children:c.score}),d("td",{children:c.progress?`${c.progress} ${c.episodes?"/"+c.episodes:""}`:void 0}),d("td",{children:c.type})]})]},h)}function Ze({status:h,shows:c,handleEdit:p,windowWidth:w}){const[u,f]=A.exports.useState(!1),s=5,x=j=>{const R=Object.entries(j);return u?R:R.splice(0,s)};return _(ye,{children:[d("h3",{children:h}),_("table",{className:"table-show",children:[d("thead",{children:_("tr",{children:[d("th",{}),d("th",{className:"table-title",children:"Title"}),w>640&&_(ye,{children:[d("th",{className:"table-detail",children:"Score"}),d("th",{className:"table-detail",children:"Progress"}),d("th",{className:"table-detail",children:"Type"})]})]})}),_("tbody",{children:[x(c).map(([j,R])=>d(Qe,{id:j,handleEdit:p,status:h,item:R,windowWidth:w},j)),c.length>s&&d("tr",{onClick:()=>f(!u),children:d("td",{className:"expand item",colSpan:5,children:u?"Show Less":"Show More"})})]})]})]})}function et({id:h,item:c,status:p,handleEdit:w}){var s;const[u,f]=A.exports.useState(!1);return _("div",{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onClick:()=>w(p,h,c),className:"card",style:{boxShadow:u?`0 4px 16px ${ge(c.cover.color,.2)}`:"",backgroundColor:ge(c.cover.color,.25)},children:[u&&d("div",{onClick:()=>w(p,h,c),className:"edit",children:d("img",{src:De,alt:""})}),_("div",{className:"info",children:[d("div",{children:c.title.english?c.title.english:c.title.romaji}),_("div",{className:"details",children:[d("div",{children:c.progress?`EP ${c.progress} ${c.episodes?"/"+c.episodes:""}`:void 0}),d("div",{children:c.score})]})]}),d("div",{className:"cover",children:d(Ee.exports.LazyLoadImage,{src:(s=c.cover)==null?void 0:s.url,alt:""})})]},h)}function tt({status:h,shows:c,handleEdit:p}){const[w,u]=A.exports.useState(!1),f=5,s=O=>{const M=Object.entries(O);return w?M:M.splice(0,f)},x=()=>Math.floor(document.getElementById("content").clientWidth/180),[j,R]=A.exports.useState(x),m=(O,M)=>{let J;return Q=>{clearTimeout(J),J=setTimeout(v=>{J=null,O.apply(this,arguments)},M)}};return A.exports.useEffect(()=>{const O=m(function(){R(x())},10);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]),_(ye,{children:[d("h3",{children:h}),d("div",{style:{gridTemplateColumns:`repeat(${j}, 1fr)`},className:"grid-show",children:s(c).map(([O,M])=>d(et,{id:O,handleEdit:p,status:h,item:M},O))}),c.length>f+2&&d(Ue,{onClick:()=>u(!w),style:{marginBottom:"24px"},width:"100%",className:"btn btn-secondary btn-expand",label:w?"Show Less":"Show More"})]})}const rt=["TV","TV Short","Movie","Special","OVA","ONA","Music"],nt=["Action","Adventure","Comedy","Drama","Fantasy","Horror","Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi","Slice of Life","Sports","Supernatural","Thriller"];function ot({setFilters:h}){return _(ye,{children:[d("h4",{className:"title",children:"Filters"}),Object.entries({Type:rt,Genre:nt}).map(([p,w])=>d("div",{className:"filter",children:d(He,{className:"filter",filter:p,options:w,getSelected:u=>h(p.toLowerCase(),u)})},p))]})}function it({setLists:h,showStatus:c}){const[p,w]=A.exports.useState("All");return c.unshift("All"),_(ye,{children:[d("h4",{className:"title",children:"Status"}),d("ul",{className:"list",children:c.map((u,f)=>d("li",{className:p===u?"active":"",onClick:()=>{w(u),h(u)},children:u},f))})]})}const st=(h,c)=>c==="All"?h:{...{},[c]:h[c]},ct=(h,c)=>{if(!c)return h;let p={};return Object.entries(h).forEach(([u,f])=>{const s=c.toLowerCase(),x=f.filter(j=>(j.title.english?j.title.english:j.title.romaji).toLowerCase().includes(s));p={...p,[u]:x}}),p},Ve=(h,c,p)=>{if(!c)return h;let w={};return Object.entries(h).forEach(([f,s])=>{const x=s.filter(p);w={...w,[f]:x}}),w},lt=(h,c)=>Ve(h,c,p=>c.toLowerCase()===p.type.replace("_"," ").toLowerCase()),at=(h,c)=>Ve(h,c,p=>p.genres.includes(c));function pt(){const[h,c]=A.exports.useState(!0),[p,w]=A.exports.useState(!1),[u,f]=A.exports.useState(null),[s,x]=A.exports.useState(Be()),[j,R]=A.exports.useState(0),[m,O]=A.exports.useState({query:"",status:"All",type:"",genre:""}),M=(v,V,Z)=>{f({status:v,index:V,obj:Z}),w(!0)},J=()=>{let v=Be();return v=st(v,m.status),v=lt(v,m.type),v=at(v,m.genre),v=ct(v,m.query),v},Q=()=>{const v=window.innerWidth;R(v)};return A.exports.useEffect(()=>{const v=()=>{x(J)};return window.addEventListener("storage",v),()=>{window.removeEventListener("storage",v)}}),A.exports.useEffect(()=>(Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)),[]),A.exports.useEffect(()=>{x(J)},[m]),A.exports.useEffect(()=>{document.body.style.overflow=p?"hidden":""},[p]),_(ye,{children:[p&&d(qe,{objUpdate:u,index:u.index,scrollPos:window.scrollY,handleClose:()=>w(!1)}),_("main",{className:"glb-container split-container text-white",children:[j>960&&_("div",{id:"aside",className:"aside",children:[d(Ge,{placeholder:"Filter",search:v=>O({...m,query:v}),liveSearch:!0}),d(it,{setLists:v=>O({...m,status:v}),setShows:x,showStatus:Object.keys(Ye)}),d(ot,{setFilters:(v,V)=>O({...m,[v]:V})})]}),_("div",{id:"content",className:"content",children:[_("div",{className:"view-mode",children:[d("div",{onClick:()=>c(!0),className:h?"view active":"view",children:d("img",{src:Ke,width:"20px",alt:""})}),d("div",{onClick:()=>c(!1),className:h?"view":"view active",children:d("img",{src:Je,width:"20px",alt:""})})]}),!h&&Object.entries(s).map(([v,V])=>V.length!==0?d("div",{className:"table-container",children:d(tt,{status:v,shows:V,handleEdit:(Z,G,W)=>{M(Z,G,W)}})},v):null),h&&Object.entries(s).map(([v,V])=>V.length!==0?d("div",{className:"table-container",children:d(Ze,{status:v,shows:V,windowWidth:j,handleEdit:(Z,G,W)=>{M(Z,G,W)}})},v):null)]})]})]})}export{pt as default};