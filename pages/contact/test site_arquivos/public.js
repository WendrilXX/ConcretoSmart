(()=>{var e,t,n={788:(e,t,n)=>{n.p=rishi_companion_data.public_url},652:e=>{"use strict";e.exports=window.rtEvents},907:(e,t,n)=>{"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,{Z:()=>o})},57:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(907);function r(e){if(Array.isArray(e))return(0,o.Z)(e)}},199:(e,t,n)=>{"use strict";function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>o})},786:(e,t,n)=>{"use strict";function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:()=>o})},62:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(57),r=n(199),i=n(181),a=n(786);function s(e){return(0,o.Z)(e)||(0,r.Z)(e)||(0,i.Z)(e)||(0,a.Z)()}},181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(907);function r(e,t){if(e){if("string"==typeof e)return(0,o.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,o.Z)(e,t):void 0}}}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".js",r.miniCssF=e=>e+".css",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rishi-companion:",r.l=(n,o,i,a)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var f=(t,o)=>{s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={501:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=i);var a=r.p+r.u(t),s=new Error;r.l(a,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,i,[a,s,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);l&&l(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=globalThis.webpackChunkrishi_companion=globalThis.webpackChunkrishi_companion||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e=r(62),t=r(652),n=r.n(t);const o=window.jQuery;var i=r.n(o);const a="data-",s="was-processed",l="true",c=(e,t)=>e.getAttribute(a+t),d=e=>c(e,s)===l,u=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},f=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft};function m(e,t,n){return!(function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:u(t)+t.offsetHeight)<=u(e)-n}(e,t,n)||function(e,t,n){return(t===window?window.pageYOffset:u(t))>=u(e)+n+e.offsetHeight}(e,t,n)||function(e,t,n){const o=window.innerWidth;return(t===window?o+window.pageXOffset:f(t)+o)<=f(e)-n}(e,t,n)||function(e,t,n){return(t===window?window.pageXOffset:f(t))>=f(e)+n+e.offsetWidth}(e,t,n))}const g=function(e,t){var n;let o="LazyLoad::Initialized",r=new e(t);try{n=new CustomEvent(o,{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,{instance:r})}window.dispatchEvent(n)},p=(e,t)=>t?e.replace(/\.(jpe?g|png)/gi,".webp"):e,h="undefined"!=typeof window,_=h&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),v=h&&"classList"in document.createElement("p"),y=h&&(b="image/webp",!(!(w=document.createElement("canvas")).getContext||!w.getContext("2d"))&&0===w.toDataURL(b).indexOf(`data:${b}`));var b,w;const E=(e,t)=>{v?e.classList.add(t):e.className+=(e.className?" ":"")+t},L=function(e,t,n,o){for(let r,i=0;r=e.children[i];i+=1)if("SOURCE"===r.tagName){let e=c(r,n);k(r,t,e,o)}},k=function(e,t,n,o){n&&e.setAttribute(t,p(n,o))},S={IMG:(e,t)=>{const n=y&&t.to_webp,o=t.data_srcset,r=e.parentNode;r&&"PICTURE"===r.tagName&&L(r,"srcset",o,n);const i=c(e,t.data_sizes);k(e,"sizes",i);const a=c(e,o);k(e,"srcset",a,n);const s=c(e,t.data_src);k(e,"src",s,n)},IFRAME:(e,t)=>{const n=c(e,t.data_src);k(e,"src",n)},VIDEO:(e,t)=>{const n=t.data_src,o=c(e,n);L(e,"src",n),k(e,"src",o),e.load()}},T=function(e,t){e&&e(t)},z="load",A="loadeddata",O="error",C=(e,t,n)=>{e.addEventListener(t,n)},I=(e,t,n)=>{e.removeEventListener(t,n)},j=(e,t,n)=>{I(e,z,t),I(e,A,t),I(e,O,n)},q=function(e,t,n){var o=n._settings;const r=t?o.class_loaded:o.class_error,i=t?o.callback_load:o.callback_error,a=e.target;((e,t)=>{v?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")})(a,o.class_loading),E(a,r),T(i,a),n._updateLoadingCount(-1)},H=["IMG","IFRAME","VIDEO"],N=function(e){this._settings=Object.assign({},{elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1},e),this._loadingCount=0,this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};N.prototype={_loopThroughElements:function(e){const t=this._settings,n=this._elements,o=n?n.length:0;let r,i=[],a=this._isFirstLoop;if(a&&(this._isFirstLoop=!1),0!==o){for(r=0;r<o;r++){let o=n[r];t.skip_invisible&&null===o.offsetParent||(e||m(o,t.container,t.threshold))&&(a&&E(o,t.class_initial),this.load(o),i.push(r))}((e,t)=>{for(;t.length;)e.splice(t.pop(),1)})(n,i)}else this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},_updateLoadingCount:function(e){this._loadingCount+=e,0===this._elements.length&&0===this._loadingCount&&T(this._settings.callback_finish)},handleScroll:function(){const e=this._settings.throttle;if(0!==e){let t=Date.now(),n=e-(t-this._previousLoopTime);n<=0||n>e?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=t,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},loadAll:function(){this._loopThroughElements(!0)},update:function(e){const t=this._settings,n=e||this._queryOriginNode.querySelectorAll(t.elements_selector);this._elements=(e=>e.filter((e=>!d(e))))(Array.prototype.slice.call(n)),_?this.loadAll():(this._loopThroughElements(),this._startScrollHandler())},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},load:function(e,t){!function(e,t,n){var o=t._settings;!n&&d(e)||(T(o.callback_enter,e),H.indexOf(e.tagName)>-1&&(((e,t)=>{const n=r=>{q(r,!0,t),j(e,n,o)},o=r=>{q(r,!1,t),j(e,n,o)};((e,t,n)=>{C(e,z,t),C(e,A,t),C(e,O,n)})(e,n,o)})(e,t),E(e,o.class_loading)),((e,t)=>{const n=t._settings,o=e.tagName,r=S[o];if(r)return r(e,n),t._updateLoadingCount(1),void(t._elements=(i=t._elements,a=e,i.filter((e=>e!==a))));var i,a;((e,t)=>{const n=y&&t.to_webp,o=c(e,t.data_src),r=c(e,t.data_bg);if(o){let t=p(o,n);e.style.backgroundImage=`url("${t}")`}if(r){let t=p(r,n);e.style.backgroundImage=t}})(e,n)})(e,t),(e=>{((e,t,n)=>{var o=a+t;e.setAttribute(o,n)})(e,s,l)})(e),T(o.callback_set,e))}(e,this,t)}},h&&function(e,t){if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)g(e,n);else g(e,t)}(N,window.lazyLoadOptions);const x=N;var Z=null,M=function(){Z?Z.update():Z=new x({data_src:"rt-lazy",data_srcset:"rt-lazy-set",elements_selector:"img[data-rt-lazy]",callback_load:function(e){var t=e.closest('[class*="rt-image-container"]'),n=function(){t&&(t.classList.remove("rt-lazy"),t.classList.add("rt-lazy-loading-start"),requestAnimationFrame((function(){var e,n,o,r;t.classList.remove("rt-lazy-loading-start"),t.classList.add("rt-lazy-loading"),e=t.firstElementChild,n=function(){t.classList.remove("rt-lazy-loading"),t.classList.add("rt-lazy-loaded")},o=function(){e.removeEventListener("transitionend",r),n()},r=function(t){t.target===e&&o()},e.addEventListener("transitionend",r)})))};navigator.userAgent.toLowerCase().indexOf("firefox")>-1?setTimeout(n,500):n()}})};document.addEventListener("DOMContentLoaded",(i()&&(i()(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/global",(function(){return n().trigger("rt:images:lazyload:update")}))})),i()(document.body).on("ubermenuopen",(function(){n().trigger("rt:images:lazyload:update")})),i()(window).on("wcpf_update_products",(function(){n().trigger("rt:images:lazyload:update")})),i()(document).on("wpf_ajax_success",(function(){return n().trigger("rt:images:lazyload:update")})),i()(document).on("blog_infiniteScroll_ajax",(function(){return n().trigger("rt:images:lazyload:update")}))),document.addEventListener("rt:masonry_loaded",(function(){M()})),document.querySelector("img[data-rt-lazy]")&&M(),void n().on("rt:images:lazyload:update",(function(){i()&&i()("body").trigger("jetpack-lazy-images-load"),window.jetpackLazyImagesModule&&window.jetpackLazyImagesModule();var e=new Event("jetpack-lazy-images-load");document.body.dispatchEvent(e),M()}))),!1),r(788);var D;D=function(){[].concat((0,e.Z)(document.querySelectorAll(".cb__header-trigger")),(0,e.Z)(document.querySelectorAll(".cb__offcanvas-trigger"))).map((function(e){var t=document.querySelector(e.hash);t&&(t.hasListener||(t.hasListener=!0,t.addEventListener("click",(function(e){if(e.target&&e.target.matches("a")){var t=document.querySelector(".cb__header-trigger");if(e.target.closest(".woocommerce-mini-cart"))return;t&&t.click()}})))),e&&!e.hasListener&&(e.hasListener=!0,e.addEventListener("click",(function(e){e.preventDefault(),r.e(342).then(r.bind(r,342)).then((function(n){return(0,n.handleClick)(e,{container:t})}))})))})),function(){var e,t,n=document.querySelectorAll(".header-search-btn"),o=(document.querySelector(".search-toggle-form"),document.querySelectorAll(".btn-form-close"),document.querySelector(".search-form-section .search-field"));function r(n){clearInterval(e),clearInterval(t),n.fadeOut=function(e){var o=1;n.style.opacity=1,t=setInterval((function(){o>0?o-=.1:o<0&&(n.style.opacity=0,n.style.display="none",clearInterval(t)),n.style.opacity=o}),e)},n.fadeOut(2)}document.querySelector(".search-form-section .search-submit"),null!==n&&n.forEach((function(n){var i=n.dataset.modalKey,a=document.querySelector('.search-toggle-form[data-modal-key="'.concat(i,'"]')),s=document.querySelector('.search-toggle-form[data-modal-key="'.concat(i,'"] .btn-form-close')),l=document.querySelector('.search-toggle-form[data-modal-key="'.concat(i,'"] .search-field')),c=document.querySelector('.search-toggle-form[data-modal-key="'.concat(i,'"] .search-submit'));n.addEventListener("click",(function(n){n.preventDefault(),this.classList.add("active"),function(n){o.focus(),clearInterval(e),clearInterval(t),n.fadeIn=function(t){var o=0;n.style.display="block",n.style.opacity=0,e=setInterval((function(){o<1?o+=.1:1===o&&clearInterval(e),n.style.opacity=o}),t)},n.fadeIn(2)}(a),o.focus()})),s.addEventListener("click",(function(e){r(a),o.blur(),n.classList.remove("active")})),null!==a&&a.addEventListener("click",(function(e){r(a)})),document.addEventListener("keyup",(function(e){"Escape"==e.key&&r(a)})),null!==l&&l.addEventListener("click",(function(e){e.stopPropagation()})),null!==c&&c.addEventListener("click",(function(e){e.stopPropagation()}))}))}()},/comp|inter|loaded/.test(document.readyState)?D():document.addEventListener("DOMContentLoaded",D,!1)})()})();