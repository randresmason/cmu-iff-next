(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{8179:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(4942),s=(n(1664),n(2207)),i=n.n(s),c=n(5893),o=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.Item,n=e.data;if(!n||0==n.length)return(0,c.jsx)("div",{className:i().emptyListSection,children:(0,c.jsx)("p",{children:e.emptyText||"Not found"})});var r=n.map((function(e,n){return(0,o.createElement)(t,a(a({},e),{},{key:n}))}));return(0,c.jsx)("div",{className:i().listSection,children:r})}},5795:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return y}});var r=n(4942),s=n(6224),i=n(1664),c=n(8179),o=n(9575),l=n.n(o),a=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=n(3064).basePublicPath;function j(e){return e.image?(0,a.jsx)("div",{className:"col-6 col-xs-6 col-sm-4 col-md-3 col-lg-6 ".concat(l().sponsorItem),children:(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("img",{src:"".concat(p,"/assets/sponsor_logos/").concat(e.sponsorship_level_id,"/").concat(e.image)})})},e.name):(0,a.jsx)("div",{})}function f(e){return Array.isArray(e.screening_time)?e.screening_time.map((function(t,n){return(0,a.jsxs)("h6",{children:["Time: ",t,(0,a.jsx)("br",{}),"Location: ",e.screening_location[n]]},t)})):(0,a.jsxs)("h6",{children:["Time: ",e.screening_time,(0,a.jsx)("br",{}),"Location: ",e.screening_location]})}function m(e){return(0,a.jsxs)(s.Z,d(d({},e),{},{activeItem:1,children:[(0,a.jsx)("div",{className:l().filmHeader,style:{backgroundImage:"url('".concat(p,"/assets/films/banners").concat(e.banner_img_src,"')")},children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsxs)("h5",{children:["Directed by ",e.director]}),(0,a.jsxs)("p",{children:[(0,a.jsxs)("span",{children:["Run Time: ",(0,a.jsx)("b",{children:e.runTime})]}),(0,a.jsxs)("span",{children:["Released: ",(0,a.jsxs)("b",{children:[e.country,", ",e.releaseYear]})]}),(0,a.jsxs)("span",{children:["Language: ",(0,a.jsx)("b",{children:e.language})]})]})]})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:l().filmBody,children:[(0,a.jsx)("article",{children:e.children}),(0,a.jsx)("aside",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("section",{children:[(0,a.jsxs)("h3",{children:["Screenings ",e.specialEvent?(0,a.jsx)("span",{className:l().specialEventTip,children:"Special Event"}):""]}),f(e),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerptHtml}})]}),(0,a.jsxs)("section",{children:[e.specialEvent?(0,a.jsx)(i.default,{href:"/special_events#".concat(e.filmId),children:(0,a.jsx)("a",{children:(0,a.jsx)("button",{className:"btn btn-light",children:"See Special Event Description"})})}):(0,a.jsx)("div",{}),(0,a.jsx)(i.default,{href:"/schedule/#".concat(e.filmId),children:(0,a.jsx)("a",{children:(0,a.jsx)("button",{className:"btn btn-light",children:"See in Schedule"})})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h3",{children:"Event Sponsors"}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.sponsors_text}}),(0,a.jsx)(c.Z,{Item:j,data:e.sponsorsData,emptyText:"To be announced"})]})]})})]})})]}))}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(3064).basePublicPath;var _=!0;function y(e){var t=e.filmId,n=e.filmData,r=e.sponsorsData;return(0,a.jsx)(m,b(b({},n),{},{filmId:t,sponsorsData:r,children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contentHtml}})}))}},2402:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/films/[id]",function(){return n(5795)}])},9575:function(e){e.exports={filmBody:"FilmLayout_filmBody__2uyTb",trailer:"FilmLayout_trailer__2l1lP",filmHeader:"FilmLayout_filmHeader__2CvWZ",sponsorsBox:"FilmLayout_sponsorsBox__EfuHE",sponsorItem:"FilmLayout_sponsorItem__3r5sD",listSection:"FilmLayout_listSection__amKm3",specialEventTip:"FilmLayout_specialEventTip__3Ijt-"}},2207:function(e){e.exports={listSection:"list_listSection__l24Ip",emptyListSection:"list_emptyListSection__32w5i"}}},function(e){e.O(0,[224,774,888,179],(function(){return t=2402,e(e.s=t);var t}));var t=e.O();_N_E=t}]);