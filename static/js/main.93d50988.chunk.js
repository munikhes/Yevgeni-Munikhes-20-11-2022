(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},26:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),o=n.n(c),i=(n(34),n(6)),l=n(3),u=(n(36),n(16)),s=n(0),f=(n(10),n(7));var h=Object(f.b)(function(e){return{username:e.reducerName.name,cityKey:e.reducerKey.key}},null)(function(e){var t="XxyAf9OWsykmBjtvQpOQI5Tala9beV5U   ",n=(e.username,e.cityKey),c=Object(r.useState)([]),o=Object(l.a)(c,2),i=(o[0],o[1]),u=Object(r.useState)("Cloudly"),s=Object(l.a)(u,2),f=(s[0],s[1]),h=Object(r.useState)(""),m=Object(l.a)(h,2),d=(m[0],m[1]),p=Object(r.useState)([]),v=Object(l.a)(p,2),y=v[0],b=v[1],g=Object(r.useState)("true"),E=Object(l.a)(g,2),w=E[0],j=E[1],O=Object(r.useState)("\xb0C"),x=Object(l.a)(O,2),N=x[0],k=x[1];return Object(r.useEffect)(function(){fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(n,"?apikey=").concat(t,"&details=true&")).then(function(e){return e.json()}).then(function(e){i(Math.round(e[0].Temperature.Metric.Value)),f(e[0].WeatherText),d(e[0].WeatherIcon)})},[n]),Object(r.useEffect)(function(){fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(n,"?apikey=").concat(t,"&metric=").concat(w)).then(function(e){return e.json()}).then(function(e){b(e.DailyForecasts)})},[n]),a.a.createElement("div",null,a.a.createElement("h2",{className:"title"},"Forecast for the next 5 days:"),y&&y.map(function(e){return a.a.createElement("div",{className:"daily-item"},a.a.createElement("img",{alt:"weather",className:"icon-small",src:"icons/".concat(e.Day.Icon,"-s.png")}),a.a.createElement("label",{className:"day"},e.Date.slice(0,10)),a.a.createElement("label",{className:"description"},e.Day.IconPhrase),a.a.createElement("label",{className:"max"},Math.round(e.Temperature.Maximum.Value),N))}),a.a.createElement("div",null,"  ",a.a.createElement("button",{onClick:function(){"true"==w?(y.forEach(function(e){var t=9*e.Temperature.Maximum.Value/5+32;e.Temperature.Maximum.Value=t}),k("F"),j("false")):(j("true"),k("\xb0C"),y.forEach(function(e){var t=5*(e.Temperature.Maximum.Value-32)/9;e.Temperature.Maximum.Value=t}))}},"Change Units")))}),m=n(5),d="SET_NAME",p="SET_KEY",v="ADD_CITY",y="DELETE_CITY";function b(){b=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var c=t&&t.prototype instanceof h?t:h,o=Object.create(c.prototype),i=new k(a||[]);return r(o,"_invoke",{value:j(e,n,i)}),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var f={};function h(){}function m(){}function d(){}var p={};l(p,c,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&n.call(y,c)&&(p=y);var g=d.prototype=h.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;r(this,"_invoke",{value:function(r,c){function o(){return new t(function(a,o){!function r(a,c,o,i){var l=s(e[a],e,c);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,o,i)},function(e){r("throw",e,o,i)}):t.resolve(f).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,i)})}i(l.arg)}(r,c,a,o)})}return a=a?a.then(o,o):o()}})}function j(e,t,n){var r="suspendedStart";return function(a,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw c;return T()}for(n.method=a,n.arg=c;;){var o=n.delegate;if(o){var i=O(o,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function O(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=d,r(g,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:m,configurable:!0}),m.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,c){void 0===c&&(c=Promise);var o=new w(u(t,n,r,a),c);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(g),l(g,i,"Generator"),l(g,c,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],o=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var g=Object(f.b)(void 0,{changeName:function(e){return{type:d,payload:e}},changeKey:function(e){return{type:p,payload:e}},addCityToFavorites:function(e,t,n,r){return{type:v,payload:{name:e,forecast:t,description:n,icon:r}}}})(function(e){var t=Object(r.useState)("Tel Aviv"),n=Object(l.a)(t,2),c=n[0],o=n[1],i=[],u=Object(r.useState)("215854"),s=Object(l.a)(u,2),f=s[0],h=s[1],d=Object(r.useState)([]),p=Object(l.a)(d,2),v=p[0],y=p[1],g=Object(r.useState)("Mostly Cloudly"),E=Object(l.a)(g,2),w=E[0],j=E[1],O="XxyAf9OWsykmBjtvQpOQI5Tala9beV5U ",x=Object(r.useState)(),N=Object(l.a)(x,2),k=N[0],L=N[1],T=Object(r.useState)(""),C=Object(l.a)(T,2),S=C[0],_=C[1],F=function(){var e=Object(m.a)(b().mark(function e(t){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o(t.target.value);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(O,"&q=").concat(c)).then(function(e){return e.json()}).then(function(e){y(e)})},[c]),Object(r.useEffect)(function(){fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(f,"?apikey=").concat(O,"&details=true&")).then(function(e){return e.json()}).then(function(e){j(e[0].WeatherText),_(e[0].WeatherIcon),L(Math.round(e[0].Temperature.Metric.Value))})},[f]),a.a.createElement("div",null,a.a.createElement("input",{className:"container",type:"text",onChange:F,placeholder:"Search for City",size:"100"}),v&&v.map(function(t){return a.a.createElement("div",{onClick:function(){!function(t,n){o(n),i.push(n),console.log(i),h(t);var r={name:n,key:t};e.changeName(r.name),e.changeKey(r.key),-1!==i.indexOf(n)&&(document.getElementById("div1").style.backgroundColor="lightblue")}(t.Key,t.LocalizedName)}},a.a.createElement("h3",{id:"div1"},t.LocalizedName)," ")}),a.a.createElement("div",{className:"weather"},a.a.createElement("div",{className:"top"},a.a.createElement("p",{className:"city"},c),a.a.createElement("p",{className:"city"},w),a.a.createElement("img",{alt:"weather",className:"icon-small",src:"icons/".concat(S,"-s.png")}),a.a.createElement("p",{className:"city-temp"},k,"\xb0C"))),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return alert("City Added/Removed"),e.addCityToFavorites(c,k,w,S)}},"Add City To Favorites")))});function E(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1];return a.a.createElement("div",null,a.a.createElement("div",{style:{backgroundColor:c?"black":"white",color:c?"white":"black"},onClick:function(){o(function(e){return!e})}},"Help Bar"))}function w(e){var t=Object(s.l)();return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){t("/favorites")}},"To Favorites")),a.a.createElement("img",{alt:"weather",className:"icon-img",src:"icons/46023.jpg"}))}function j(e){return a.a.createElement("div",null,a.a.createElement(E,null),a.a.createElement(g,null),a.a.createElement(h,null),a.a.createElement(w,null))}var O=Object(f.b)(function(e){return{newcity:e.reducerAddCancel}},null)(function(e){var t=Object(r.useState)(e.newcity),n=Object(l.a)(t,2),c=n[0],o=(n[1],Object(s.l)());return a.a.createElement("div",null,a.a.createElement("h2",{className:"title"},"My Favorites"),c.map(function(e,t){return a.a.createElement("div",{className:"daily-item"},a.a.createElement("label",{className:"icon-small"}," ",t+1,"."),a.a.createElement("label",{className:"day"},e.city),a.a.createElement("img",{alt:"weather",className:"icon-small",src:"icons/".concat(e.icon,"-s.png")}),a.a.createElement("label",{className:"description"},e.description),a.a.createElement("label",{className:"max"},e.forecast))}),a.a.createElement("button",{onClick:function(){o("/")}},"back to main"))});var x=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return console.log(n),a.a.createElement("div",{className:"App"},a.a.createElement(u.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",element:a.a.createElement(j,{addToFavorites:function(e){c([e].concat(Object(i.a)(n)))}})}),a.a.createElement(s.a,{path:"/favorites",element:a.a.createElement(O,{favoriteCities:n})}))))},N=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,45)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)})},k=n(12),L=n(17),T={name:"Tel Aviv"};var C={key:"215854"};var S=[];var _=Object(k.combineReducers)({reducerName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(L.a)({},e,{name:t.payload});default:return e}},reducerKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(L.a)({},e,{key:t.payload});default:return e}},reducerAddCancel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var n=e.findIndex(function(e){return e.city===t.payload.name});if(-1===n)return[].concat(Object(i.a)(e),[{city:t.payload.name,forecast:t.payload.forecast,description:t.payload.description,icon:t.payload.icon}]);if(-1!==n)return e.filter(function(e){return e.city!==t.payload.name});case y:return e.filter(function(e){return e.city!==t.payload.name});default:return e}}}),F=n(25),I=Object(k.legacy_createStore)(_,Object(F.composeWithDevTools)());t.default=I;o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f.a,{store:I},a.a.createElement(x,null)))),N()}},[[26,3,2]]]);
//# sourceMappingURL=main.93d50988.chunk.js.map