(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[713],{2562:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.Link=void 0;var r=a(n(434)),i=a(n(7071)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(7294)),o=n(9402),u=n(1883),c=n(7610),s=["language","to","onClick"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var d=l.default.forwardRef((function(e,t){var n=e.language,a=e.to,f=e.onClick,d=(0,i.default)(e,s),g=(0,l.useContext)(o.I18nextContext),m=n||g.language,p=""+function(e){return g.generateDefaultLanguagePage||e!==g.defaultLanguage?"/"+e:""}(m)+a;return l.default.createElement(u.Link,(0,r.default)({},d,{to:p,innerRef:t,hrefLang:m,onClick:function(e){n&&localStorage.setItem(c.LANGUAGE_KEY,n),f&&f(e)}}))}));t.Link=d},531:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1072);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var r=n(9402);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var i=n(8112);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var l=n(2562);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}))},8112:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.useI18next=void 0;var r=a(n(434)),i=n(1072),l=n(7294),o=n(1883),u=n(9402),c=n(7610);t.useI18next=function(e,t){var n=(0,i.useTranslation)(e,t),a=n.i18n,s=n.t,f=n.ready,d=(0,l.useContext)(u.I18nextContext),g=d.routed,m=d.defaultLanguage,p=d.generateDefaultLanguagePage,v=function(e){return p||e!==m?"/"+e:""};return(0,r.default)({},d,{i18n:a,t:s,ready:f,navigate:function(e,t){var n=v(d.language),a=g?""+n+e:""+e;return(0,o.navigate)(a,t)},changeLanguage:function(e,t,n){var a=""+v(e)+(t||function(e){if(!g)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/profile";return t&&0===e.indexOf(t)&&(e=e.slice(8)),e}(window.location.pathname)))+window.location.search;return localStorage.setItem(c.LANGUAGE_KEY,e),(0,o.navigate)(a,n)}})}},7782:function(e,t,n){e.exports=n(531)},7306:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(7782);function i(e){let{siteTitle:t}=e;const{languages:n,changeLanguage:i}=(0,r.useI18next)(),{t:l}=(0,r.useTranslation)();return a.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement("div",{class:"relative group inline-block"},a.createElement("button",{class:"bg-white font-semibold  text-gray-900 shadow-sm text-sm py-2 px-3 rounded-md inline-flex items-center ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},l("btn_lang"),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 ml-2 transform -rotate-180",viewBox:"0 0 20 20",fill:"currentColor"},a.createElement("path",{"fill-rule":"evenodd",d:"M9.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 010 0z","clip-rule":"evenodd"}))),a.createElement("ul",{class:"absolute right-3 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden text-gray-700 group-hover:block mt-1  w-18 bg-white px-2"},n.map((e=>a.createElement("li",{key:e,className:"list-none"},a.createElement("a",{key:e,onClick:t=>{t.preventDefault(),i(e)},href:"#",class:"text-gray-700 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1"},e)))))))}},8678:function(e,t,n){"use strict";var a=n(7294),r=n(1883),i=n(7306);t.Z=e=>{var t;let{children:n}=e;const l=(0,r.useStaticQuery)("3649515864");return a.createElement(a.Fragment,null,a.createElement(i.Z,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},a.createElement("main",null,n),a.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,n){"use strict";var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:i,title:l,children:o}=e;const{site:u}=(0,r.useStaticQuery)("63159454"),c=i||u.siteMetadata.description,s=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,s?`${l} | ${s}`:l),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{property:"og:title",content:l}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:l}),a.createElement("meta",{name:"twitter:description",content:c}),o)}},4808:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),r=n(1883),i=n(8678),l=n(9357);const o=()=>a.createElement(l.Z,{title:"Using DSG"});t.default=()=>a.createElement(i.Z,null,a.createElement("h1",null,"Hello from a ",a.createElement("b",null,"DSG Page")),a.createElement("p",null,"This page is not created until requested by a user."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),a.createElement(r.Link,{to:"/"},"Go back to the homepage"))},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-using-dsg-js-f8627d1b6410fe7e9e68.js.map