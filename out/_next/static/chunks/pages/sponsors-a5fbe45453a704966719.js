(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{8179:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(4942),o=(t(1664),t(2207)),i=t.n(o),s=t(5893),a=t(7294);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e){var r=e.Item,t=e.data;if(!t||0==t.length)return(0,s.jsx)("div",{className:i().emptyListSection,children:(0,s.jsx)("p",{children:e.emptyText||"Not found"})});var n=t.map((function(e,t){return(0,a.createElement)(r,l(l({},e),{},{key:t}))}));return(0,s.jsx)("div",{className:i().listSection,children:n})}},7956:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return m},findSponsorByName:function(){return v},default:function(){return y}});var n=t(4942),o=t(1664),i=t(6224),s=t(8179),a=t(2306),c=t.n(a),l=t(5893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"===typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(a)throw i}}}}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=t(3064).basePublicPath,m=!0;function v(e,r){var t,n=f(e);try{for(n.s();!(t=n.n()).done;){var o,i=t.value,s=f(i.data);try{for(s.s();!(o=s.n()).done;){var a=o.value;if(a.name==r)return d(d({},a),{},{sponsorship_level:i.sponsorship_level,sponsorship_level_id:i.sponsorship_level_id,size:i.size})}}catch(c){s.e(c)}finally{s.f()}}}catch(c){n.e(c)}finally{n.f()}return{}}function g(e){var r="col-xs-12 col-sm-6 col-md-4 col-lg-3";return 2==e.size?r="col-xs-12 col-sm-12 col-md-6 col-lg-6":3==e.size&&(r="col-xs-12 col-sm-6 col-md-6 col-lg-4"),(0,l.jsx)("div",{className:r,children:(0,l.jsx)("div",{className:"card ".concat(c().cardContainer),children:(0,l.jsx)("div",{className:c().card,children:(0,l.jsx)(o.default,{href:e.data.link,children:(0,l.jsxs)("a",{target:"_blank",rel:"noreferrer",children:[e.data.image?(0,l.jsx)("img",{src:"".concat(h,"/assets/sponsor_logos/").concat(e.level_id,"/").concat(e.data.image),className:c().cardImage}):(0,l.jsx)("div",{style:{paddingTop:"50%",background:"var(--light-gray)"}}),(0,l.jsx)("p",{className:c().cardText,children:e.data.name})]})})})})})}function b(e){var r=e.data.map((function(r){return{data:r,level_id:e.sponsorship_level_id,size:e.size}}));return(0,l.jsxs)("div",{className:c().levelContainer,children:[(0,l.jsx)("h3",{children:e.sponsorship_level}),(0,l.jsx)("div",{className:c().sponsorsContainer,children:(0,l.jsx)(s.Z,{Item:g,data:r})})]})}function y(e){var r=e.listData;return(0,l.jsx)(i.Z,{title:"Sponsors",activeItem:1,children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{children:"Sponsors"}),(0,l.jsx)("h3",{children:"Thank You!"}),(0,l.jsx)("p",{children:"The Carnegie Mellon International Film Festival is dedicated to the late Paul Goodman, a world-renowned filmmaker, psychologist, and CMU professor. The festival mirrors Paul's dedication to global awareness in his teaching and research, and his desire to bring to light important but often overlooked aspects of diverse individuals through filmmaking. The festival is also grateful to Denise Rousseau, Paul's wife and Professor of Organizational Behavior and Public Policy at CMU, whose gracious personal involvement has enabled the legacy of Paul Goodman to live through the festival."}),(0,l.jsx)("p",{children:'CMU IFF would not exist without the generous support of our sponsors, who share in our mission to bring Pittsburgh the best in contemporary world cinema and to bring films to life through food, cultural engagement and dialogue. The 2022 edition of the CMU IFF, "Faces Behind the Mask," is brought to you by:'}),(0,l.jsx)(s.Z,{Item:b,data:r.data})]})})}},8402:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sponsors",function(){return t(7956)}])},2207:function(e){e.exports={listSection:"list_listSection__l24Ip",emptyListSection:"list_emptyListSection__32w5i"}},2306:function(e){e.exports={levelContainer:"sponsors_levelContainer__YihOA",sponsorsContainer:"sponsors_sponsorsContainer__2uI2g",cardContainer:"sponsors_cardContainer__3sO6w",card:"sponsors_card__4zJbz",cardImage:"sponsors_cardImage__aACRQ",cardText:"sponsors_cardText__13p_0"}}},function(e){e.O(0,[224,774,888,179],(function(){return r=8402,e(e.s=r);var r}));var r=e.O();_N_E=r}]);