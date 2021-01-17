!function(n){function r(r){for(var e,a,A=r[0],s=r[1],d=r[2],l=0,p=[];l<A.length;l++)a=A[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);for(c&&c(r);p.length;)p.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var n,r=0;r<i.length;r++){for(var t=i[r],e=!0,A=1;A<t.length;A++){var s=t[A];0!==o[s]&&(e=!1)}e&&(i.splice(r--,1),n=a(a.s=t[0]))}return n}var e={},o={2:0,3:0,4:0},i=[];function a(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=e,a.d=function(n,r,t){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,r){if(1&r&&(n=a(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)a.d(t,e,function(r){return n[r]}.bind(null,e));return t},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var A=window.webpackJsonp=window.webpackJsonp||[],s=A.push.bind(A);A.push=r,A=A.slice();for(var d=0;d<A.length;d++)r(A[d]);var c=s;i.push([24,0,1]),t()}([function(n,r,t){"use strict";t.d(r,"a",(function(){return e})),t.d(r,"f",(function(){return o})),t.d(r,"c",(function(){return i})),t.d(r,"e",(function(){return a})),t.d(r,"b",(function(){return A})),t.d(r,"d",(function(){return s}));const e=document.querySelectorAll("#air-quality"),o=document.querySelectorAll("#local-time"),i=document.querySelectorAll("#city"),a=document.querySelector("input"),A=document.querySelector("button"),s=document.getElementById("details-container");document.getElementById("slider-container")},function(n,r,t){"use strict";t.d(r,"d",(function(){return o})),t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return s}));var e=t(0);const o=()=>{const n=document.createElement("span");n.setAttribute("id","error-message"),e.d.appendChild(n),e.d.classList.add("hide-details")},i=()=>{const n=document.getElementById("error-message");n&&(e.d.removeChild(n),e.d.classList.remove("hide-details"))},a=(n,r)=>{Array.from(n).forEach(n=>{n.innerHTML=r})},A=(n,r)=>{Array.from(n).forEach(n=>{n.classList.add(r)})},s=n=>{var r;r=e.a,Array.from(r).forEach(n=>{n.removeAttribute("class")}),n<50?A(e.a,"good"):n>50&&n<100?A(e.a,"moderate"):n>100&&n<150&&A(e.a,"unhealthy-sensitive")}},,,function(n,r,t){"use strict";t.r(r),t.d(r,"mymap",(function(){return A})),t.d(r,"iconMarker",(function(){return d})),t.d(r,"changeLocation",(function(){return c}));var e=t(2),o=t.n(e),i=t(6),a=t(7);t(12);let A=o.a.map("mapid",{zoomControl:!1}),s={};A.setView([51.505,-.09],13),o.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiZ25vbW15cyIsImEiOiJja2pibDFmY2wwbHNoMnVzY2s4cXlrNmtvIn0.0iJX7gXFiTMCqaQHrtwkLA"}).addTo(A);const d=o.a.icon({iconUrl:i.a,iconSize:[30,50],iconAnchor:[22,96],shadowUrl:a.a});A.panBy([0,-100]);const c=n=>{A.flyTo(n,13),A.once("moveend",()=>{A.panBy([0,-100]),s=o.a.marker(n,{icon:d}).addTo(A)})};A.dragging.disable(),A.scrollWheelZoom.disable(),A.touchZoom.disable()},,,,,function(n,r,t){"use strict";t.r(r),t.d(r,"fetchAutoGeolocation",(function(){return d})),t.d(r,"fetchOnInput",(function(){return c}));var e=t(8),o=t.n(e),i=t(4),a=t(0);var A=t(1),s=function(n,r,t,e){return new(t||(t=Promise))((function(o,i){function a(n){try{s(e.next(n))}catch(n){i(n)}}function A(n){try{s(e.throw(n))}catch(n){i(n)}}function s(n){var r;n.done?o(n.value):(r=n.value,r instanceof t?r:new t((function(n){n(r)}))).then(a,A)}s((e=e.apply(n,r||[])).next())}))};const d=n=>s(void 0,void 0,void 0,(function*(){try{o.a.get(n).then(n=>{var r,t,e;console.log(n),Object(A.a)(n.data.data.aqi),Object(A.c)(a.a,null!==(r=n.data.data.aqi)&&void 0!==r?r:"Not Found"),Object(A.c)(a.f,null!==(t=n.data.data.time.s)&&void 0!==t?t:"Not Found"),Object(A.c)(a.c,null!==(e=n.data.data.city.name)&&void 0!==e?e:"Not Found")})}catch(n){throw new Error(n)}})),c=n=>s(void 0,void 0,void 0,(function*(){try{o.a.get(n).then(n=>{var r,t,e;if("ok"!=n.data.status)(()=>{const n=document.getElementById("toast"),r=document.createElement("span");r.classList.add("show-toast"),r.innerHTML="City not found...",n.appendChild(r)})();else{Object(A.a)(n.data.data.aqi),Object(A.c)(a.a,null!==(r=n.data.data.aqi)&&void 0!==r?r:"Not Found"),Object(A.c)(a.f,null!==(t=n.data.data.time.s)&&void 0!==t?t:"Not Found"),Object(A.c)(a.c,null!==(e=n.data.data.city.name)&&void 0!==e?e:"Not Found");const o=[n.data.data.city.geo[0],n.data.data.city.geo[1]];Object(i.changeLocation)(o),Object(A.b)()}})}catch(n){throw new Error(n)}}))},,,,,,,,,,,,,,,function(n,r,t){"use strict";t.r(r);t(25),t(27);var e=t(4),o=t(9),i=t(0),a=t(1),A=function(n,r,t,e){return new(t||(t=Promise))((function(o,i){function a(n){try{s(e.next(n))}catch(n){i(n)}}function A(n){try{s(e.throw(n))}catch(n){i(n)}}function s(n){var r;n.done?o(n.value):(r=n.value,r instanceof t?r:new t((function(n){n(r)}))).then(a,A)}s((e=e.apply(n,r||[])).next())}))};let s="";i.e.addEventListener("input",n=>{s=n.target.value}),i.b.addEventListener("click",n=>{n.preventDefault(),s.trim().length>0&&Object(o.fetchOnInput)(`https://api.waqi.info/feed/${s}/?token=c8f3fb8806f350497f7a43ce886f000306bced4a`)});const d=n=>{Object(a.d)();const r=document.getElementById("error-message");switch(n.code){case n.PERMISSION_DENIED:r.innerHTML="Unable to access your location.",r.style.display="block";break;case n.POSITION_UNAVAILABLE:r.innerHTML="Location information is unavailable.",r.style.display="block";break;case n.TIMEOUT:r.innerHTML="The request to get user location timed out.",r.style.display="block";break;case n.UNKNOWN_ERROR:r.innerHTML="An unknown error occurred.",r.style.display="block"}};"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(n=>{const r=[n.coords.latitude,n.coords.longitude],t=n.coords.latitude,i=n.coords.longitude;Object(e.changeLocation)(r),Object(o.fetchAutoGeolocation)(`https://api.waqi.info/feed/geo:${t};${i}/?token=c8f3fb8806f350497f7a43ce886f000306bced4a`)},d),A(void 0,void 0,void 0,(function*(){const n=window.matchMedia("(max-width: 1024px)").matches,r=yield navigator.permissions.query({name:"geolocation"}).then(n=>n.state);n&&"prompt"!==r?i.d.classList.add("show-details-container"):(navigator.permissions.query({name:"geolocation"}).then((function(n){("granted"==n.state||"denied"==n.state)&&i.d.classList.add("show-details-container")})),navigator.permissions.query({name:"geolocation"}).then(n=>{n.onchange=function(){switch(this.state){case"granted":case"denied":i.d.classList.add("show-details-container")}}}))}))},function(n,r,t){var e=t(11),o=t(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){"use strict";t.r(r);var e=t(5),o=t.n(e)()(!0);o.push([n.i,"/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default padding */\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul[class],\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  scroll-behavior: smooth;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a class attribute */\r\nul[class],\r\nol[class] {\r\n  list-style: none;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Natural flow and rhythm in articles by default */\r\narticle > * + * {\r\n  margin-top: 1em;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n","",{version:3,sources:["webpack://src/reset.css"],names:[],mappings:"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,2BAA2B;AAC3B;;EAEE,UAAU;AACZ;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;;;EAcE,SAAS;AACX;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,uBAAuB;EACvB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,iEAAiE;AACjE;;EAEE,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,mDAAmD;AACnD;EACE,eAAe;AACjB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf",sourcesContent:["/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default padding */\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul[class],\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  scroll-behavior: smooth;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a class attribute */\r\nul[class],\r\nol[class] {\r\n  list-style: none;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Natural flow and rhythm in articles by default */\r\narticle > * + * {\r\n  margin-top: 1em;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n"],sourceRoot:""}]),r.default=o},function(n,r,t){var e=t(11),o=t(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){"use strict";t.r(r);var e=t(5),o=t.n(e)()(!0);o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap);"]),o.push([n.i,'body {\r\n  font-family: "Rubik", sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  background: darkcyan;\r\n}\r\n\r\n#top-container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 40vh;\r\n}\r\n#mapid {\r\n  height: 60vh;\r\n}\r\n\r\n.input-section {\r\n  display: flex;\r\n}\r\n\r\nheader {\r\n  font-size: 5vw;\r\n  font-weight: 700;\r\n  border: 0;\r\n  margin: 2rem 0 1rem 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\ninput {\r\n  width: 350px;\r\n  height: 3rem;\r\n  border: 0;\r\n  border-top-left-radius: 8px;\r\n  border-bottom-left-radius: 8px;\r\n  padding: 1rem;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\ninput:focus {\r\n  outline: 0;\r\n}\r\n\r\nbutton {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  font-size: 1.5rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  background-color: #000;\r\n  border-top-right-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nbutton:focus {\r\n  outline: 0;\r\n}\r\n\r\nbutton p {\r\n  transition: 300ms margin-left ease-in-out;\r\n}\r\n\r\nbutton p:hover {\r\n  margin-left: 6px;\r\n}\r\n\r\n.city-details-container {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  top: 150%;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  width: 70vw;\r\n  height: 30vh;\r\n  background-color: #fff;\r\n  border-radius: 25px;\r\n  z-index: 900;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  /* animation: show 1s ease-in-out 1s forwards; */\r\n}\r\n\r\n.city-details-container div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 2rem;\r\n}\r\n\r\n.city-details-container div h2 {\r\n  font-size: 2.5vw;\r\n}\r\n\r\n.city-details-container div p {\r\n  font-size: 1.5vw;\r\n  font-style: italic;\r\n}\r\n\r\n#city {\r\n  word-break: keep-all;\r\n}\r\n\r\np#air-quality {\r\n  font-weight: bold;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\np.good {\r\n  color: green;\r\n}\r\n\r\np.moderate {\r\n  color: rgb(240, 240, 0);\r\n}\r\n\r\np.unhealthy-sensitive {\r\n  color: orange;\r\n}\r\n\r\np.unhealthy {\r\n  color: red !important;\r\n}\r\n\r\np.very-unhealthy {\r\n  color: darkmagenta;\r\n}\r\n\r\np.hazardous {\r\n  color: darkred;\r\n}\r\n\r\n.show-details-container {\r\n  /* animation: show 1s linear 1s forwards; */\r\n  animation-name: show;\r\n  animation-duration: 1s;\r\n  animation-timing-function: linear;\r\n  animation-delay: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes show {\r\n  0% {\r\n    top: 150%;\r\n  }\r\n  100% {\r\n    top: 30%;\r\n  }\r\n}\r\n\r\n.hide-details div {\r\n  display: none !important;\r\n}\r\n\r\n#error-message {\r\n  display: none;\r\n  color: red;\r\n  font-size: 2vw;\r\n  font-style: italic;\r\n}\r\n\r\n#toast span {\r\n  position: absolute;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  z-index: 1000;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  font-size: 1rem;\r\n  padding: 1rem;\r\n  color: #fff;\r\n  background-color: rgba(255, 0, 0, 0.7);\r\n  border-radius: 8px;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#toast span.show-toast {\r\n  visibility: visible;\r\n  /* animation: toast-animation 3s linear; */\r\n  animation-name: toast-animation;\r\n  animation-duration: 3s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n@keyframes toast-animation {\r\n  0% {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n  25% {\r\n    bottom: 50px;\r\n    opacity: 1;\r\n  }\r\n  75% {\r\n    bottom: 50px;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n#slider-container {\r\n  display: none;\r\n}\r\n\r\n/******** MEDIA QUERIES ********/\r\n\r\n@media screen and (max-width: 900px) {\r\n  #slider-container {\r\n    display: flex;\r\n  }\r\n\r\n  .city-details-container div:not(.slider-container) {\r\n    display: none;\r\n  }\r\n\r\n  #slider-container div.show {\r\n    display: flex;\r\n    animation: slide-on 0.5s linear forwards;\r\n  }\r\n\r\n  .fa-arrow-left {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 2rem;\r\n    transform: translate(-50%);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .fa-arrow-right {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 2rem;\r\n    transform: translate(-50%);\r\n    cursor: pointer;\r\n  }\r\n\r\n  @keyframes slide-on {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes slide-on {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  .city-details-container div h2 {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .city-details-container div p {\r\n    font-size: 2vw;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  header {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .city-details-container div h2 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .city-details-container div p {\r\n    font-size: 4vw;\r\n  }\r\n  #error-message {\r\n    font-size: 4vw;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n  input {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  input {\r\n    width: 250px;\r\n  }\r\n}\r\n',"",{version:3,sources:["webpack://src/style.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");\r\n\r\nbody {\r\n  font-family: "Rubik", sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  background: darkcyan;\r\n}\r\n\r\n#top-container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 40vh;\r\n}\r\n#mapid {\r\n  height: 60vh;\r\n}\r\n\r\n.input-section {\r\n  display: flex;\r\n}\r\n\r\nheader {\r\n  font-size: 5vw;\r\n  font-weight: 700;\r\n  border: 0;\r\n  margin: 2rem 0 1rem 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\ninput {\r\n  width: 350px;\r\n  height: 3rem;\r\n  border: 0;\r\n  border-top-left-radius: 8px;\r\n  border-bottom-left-radius: 8px;\r\n  padding: 1rem;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\ninput:focus {\r\n  outline: 0;\r\n}\r\n\r\nbutton {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  font-size: 1.5rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  background-color: #000;\r\n  border-top-right-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nbutton:focus {\r\n  outline: 0;\r\n}\r\n\r\nbutton p {\r\n  transition: 300ms margin-left ease-in-out;\r\n}\r\n\r\nbutton p:hover {\r\n  margin-left: 6px;\r\n}\r\n\r\n.city-details-container {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  top: 150%;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  width: 70vw;\r\n  height: 30vh;\r\n  background-color: #fff;\r\n  border-radius: 25px;\r\n  z-index: 900;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  /* animation: show 1s ease-in-out 1s forwards; */\r\n}\r\n\r\n.city-details-container div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 2rem;\r\n}\r\n\r\n.city-details-container div h2 {\r\n  font-size: 2.5vw;\r\n}\r\n\r\n.city-details-container div p {\r\n  font-size: 1.5vw;\r\n  font-style: italic;\r\n}\r\n\r\n#city {\r\n  word-break: keep-all;\r\n}\r\n\r\np#air-quality {\r\n  font-weight: bold;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\np.good {\r\n  color: green;\r\n}\r\n\r\np.moderate {\r\n  color: rgb(240, 240, 0);\r\n}\r\n\r\np.unhealthy-sensitive {\r\n  color: orange;\r\n}\r\n\r\np.unhealthy {\r\n  color: red !important;\r\n}\r\n\r\np.very-unhealthy {\r\n  color: darkmagenta;\r\n}\r\n\r\np.hazardous {\r\n  color: darkred;\r\n}\r\n\r\n.show-details-container {\r\n  /* animation: show 1s linear 1s forwards; */\r\n  animation-name: show;\r\n  animation-duration: 1s;\r\n  animation-timing-function: linear;\r\n  animation-delay: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes show {\r\n  0% {\r\n    top: 150%;\r\n  }\r\n  100% {\r\n    top: 30%;\r\n  }\r\n}\r\n\r\n.hide-details div {\r\n  display: none !important;\r\n}\r\n\r\n#error-message {\r\n  display: none;\r\n  color: red;\r\n  font-size: 2vw;\r\n  font-style: italic;\r\n}\r\n\r\n#toast span {\r\n  position: absolute;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  z-index: 1000;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  font-size: 1rem;\r\n  padding: 1rem;\r\n  color: #fff;\r\n  background-color: rgba(255, 0, 0, 0.7);\r\n  border-radius: 8px;\r\n  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#toast span.show-toast {\r\n  visibility: visible;\r\n  /* animation: toast-animation 3s linear; */\r\n  animation-name: toast-animation;\r\n  animation-duration: 3s;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n@keyframes toast-animation {\r\n  0% {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n  25% {\r\n    bottom: 50px;\r\n    opacity: 1;\r\n  }\r\n  75% {\r\n    bottom: 50px;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n#slider-container {\r\n  display: none;\r\n}\r\n\r\n/******** MEDIA QUERIES ********/\r\n\r\n@media screen and (max-width: 900px) {\r\n  #slider-container {\r\n    display: flex;\r\n  }\r\n\r\n  .city-details-container div:not(.slider-container) {\r\n    display: none;\r\n  }\r\n\r\n  #slider-container div.show {\r\n    display: flex;\r\n    animation: slide-on 0.5s linear forwards;\r\n  }\r\n\r\n  .fa-arrow-left {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 2rem;\r\n    transform: translate(-50%);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .fa-arrow-right {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 2rem;\r\n    transform: translate(-50%);\r\n    cursor: pointer;\r\n  }\r\n\r\n  @keyframes slide-on {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes slide-on {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  .city-details-container div h2 {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .city-details-container div p {\r\n    font-size: 2vw;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  header {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .city-details-container div h2 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .city-details-container div p {\r\n    font-size: 4vw;\r\n  }\r\n  #error-message {\r\n    font-size: 4vw;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n  input {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  input {\r\n    width: 250px;\r\n  }\r\n}\r\n'],sourceRoot:""}]),r.default=o}]);
//# sourceMappingURL=app.bundle.js.map