/*! For license information please see 44.915a2eab.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[44],{2634:function(t,r,e){e.d(r,{AS:function(){return w},CJ:function(){return x},Dx:function(){return m},JA:function(){return Z},Wf:function(){return b},Zx:function(){return P},a5:function(){return L},cf:function(){return E},r2:function(){return j},rS:function(){return _}});var n,o,i,a,c,u,s,l,h,f,p,d,v=e(168),y=e(1087),g=e(5867),m=(g.ZP.div(n||(n=(0,v.Z)(["\n  margin: 0 auto;\n"]))),g.ZP.h1(o||(o=(0,v.Z)(["\n  margin-left: 20px;\n  font-size: 20px;\n  color: #5b5b5b;\n"])))),x=g.ZP.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  list-style: none;\n"]))),w=g.ZP.div(a||(a=(0,v.Z)(["\n  margin-left: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),b=g.ZP.img(c||(c=(0,v.Z)(["\n  width: 300px;\n"]))),j=g.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  border-bottom: 1px solid #5b5b5b;\n"]))),Z=g.ZP.div(s||(s=(0,v.Z)(["\n  margin-top: 10px;\n  border-bottom: 1px solid #5b5b5b;\n"]))),L=g.ZP.button(l||(l=(0,v.Z)(["\n  border: none;\n  padding: 4px 8px;\n  background-color: tomato;\n  color: white;\n  border-radius: 4px;\n  margin-bottom: 20px;\n  cursor: pointer;\n"]))),E=(g.ZP.div(h||(h=(0,v.Z)(["\n  margin-left: 20px;\n  margin-top: 30px;\n"]))),(0,g.ZP)(y.rU)(f||(f=(0,v.Z)(["\n  color: #5b5b5b;\n  font-weight: bold;\n  text-decoration: none;\n"])))),_=g.ZP.h2(p||(p=(0,v.Z)(["\n  margin-bottom: 30px;\n"]))),P=g.ZP.h3(d||(d=(0,v.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"])))},9044:function(t,r,e){e.r(r);var n=e(5861),o=e(9439),i=e(2791),a=e(7689),c=e(7081),u=e(2634),s=e(9263),l=e(184);function h(){h=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==e&&n.call(j,a)&&(w=j);var Z=x.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function P(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,P(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(Z,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(Z),t},r.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(Z),s(Z,u,"Generator"),s(Z,a,(function(){return this})),s(Z,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}r.default=function(){var t,r=(0,a.UO)().movieId,e=(0,i.useState)([]),f=(0,o.Z)(e,2),p=f[0],d=f[1],v=(0,i.useState)(!1),y=(0,o.Z)(v,2),g=y[0],m=y[1],x=null!==(t=(0,a.TH)().state)&&void 0!==t?t:"/",w=(0,a.s0)();(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,c.TP)(r);case 4:e=t.sent,d(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]);var b=p.original_title,j=p.genres,Z=p.overview,L=p.release_date,E=p.poster_path,_=p.vote_average,P=Number(_).toFixed(1);return(0,l.jsxs)("main",{children:[g&&(0,l.jsx)(s.Z,{}),p&&(0,l.jsxs)(u.AS,{children:[(0,l.jsx)(u.a5,{type:"button",onClick:function(){w(x)},children:"Go Back"}),(0,l.jsxs)(u.r2,{children:[(0,l.jsx)(u.Wf,{src:"https://image.tmdb.org/t/p/w500".concat(E),alt:b}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(u.rS,{children:[b,"(",L,")"]}),(0,l.jsxs)("p",{children:["User score: ",P]}),(0,l.jsx)(u.Zx,{children:"Overview"}),(0,l.jsx)("p",{children:Z}),(0,l.jsx)(u.Zx,{children:"Genres"}),(0,l.jsx)(u.CJ,{children:j&&j.map((function(t){var r=t.id,e=t.name;return(0,l.jsx)("li",{children:e},r)}))})]})]}),(0,l.jsxs)(u.JA,{children:[(0,l.jsx)("h3",{children:"Aditional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(u.cf,{to:"cast",state:x,children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(u.cf,{to:"reviews",state:x,children:"Review"})})]})]}),(0,l.jsx)(a.j3,{})]})]})}}}]);
//# sourceMappingURL=44.915a2eab.chunk.js.map