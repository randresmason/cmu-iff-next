(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{8179:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(4942),r=(n(1664),n(2207)),c=n.n(r),s=n(5893),a=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.Item,n=e.data;if(!n||0==n.length)return(0,s.jsx)("div",{className:c().emptyListSection,children:(0,s.jsx)("p",{children:e.emptyText||"Not found"})});var i=n.map((function(e,n){return(0,a.createElement)(t,o(o({},e),{},{key:n}))}));return(0,s.jsx)("div",{className:c().listSection,children:i})}},5126:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return b}});var i=n(1664),r=n(6224),c=n(8179),s=n(5671),a=n(3144),l=n(7326),o=n(9340),u=n(6215),d=n(1120),f=n(7294),h=n(5893);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,d.Z)(e);if(t){var r=(0,d.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,u.Z)(this,n)}}f.Component;var p=n(381),_=n.n(p),j=n(3064).basePublicPath;function v(e){var t,n=new Date(e.screening_time);return(0,h.jsx)("div",{className:_().filmOuterContainer,children:(0,h.jsxs)("div",{className:_().filmContainer,id:e.id,children:[(0,h.jsxs)("div",{className:_().imageContainer,children:[(0,h.jsxs)("div",{className:_().dateContainer,children:[(0,h.jsx)("span",{children:(t=n.getMonth(),["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"][t])}),(0,h.jsx)("span",{children:n.getDate().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})})]}),(0,h.jsx)("img",{src:"".concat(j,"/assets/index/film-tiles/").concat(e.poster_src),alt:"".concat(e.title," film poster")})]}),(0,h.jsxs)("div",{className:_().aboutContainer,children:[(0,h.jsxs)("h5",{children:[e.title," ",e.specialEvent?(0,h.jsx)("span",{className:_().specialEventTip,children:"Special Event"}):""]}),(0,h.jsxs)("h6",{children:["Time: ",e.screening_time,(0,h.jsx)("br",{}),"Location: ",e.screening_location]}),(0,h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerptHtml}}),(0,h.jsxs)("div",{children:[(0,h.jsx)("hr",{}),(0,h.jsx)(i.default,{href:"/films/".concat(e.id),children:(0,h.jsx)("a",{children:(0,h.jsx)("button",{className:"btn btn-light",children:"About the Film"})})}),e.specialEvent?(0,h.jsx)(i.default,{href:"/special_events#".concat(e.id),children:(0,h.jsx)("a",{children:(0,h.jsx)("button",{className:"btn btn-light",children:"See Special Event Description"})})}):"","      "]})]})]})})}var x=!0;function b(e){var t=e.scheduleListData;return(0,h.jsx)(r.Z,{title:"Schedule",activeItem:1,children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("h1",{children:"2022 Festival Schedule"}),(0,h.jsx)("h2",{children:"Upcoming"}),(0,h.jsx)(c.Z,{Item:v,data:t.filter((function(e){return new Date(e.screening_time)>=new Date})),emptyText:"No events found..."}),(0,h.jsx)("h2",{children:"Past"}),(0,h.jsx)(c.Z,{Item:v,data:t.filter((function(e){return new Date(e.screening_time)<new Date})),emptyText:"No events found..."})]})})}},1566:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return n(5126)}])},2207:function(e){e.exports={listSection:"list_listSection__l24Ip",emptyListSection:"list_emptyListSection__32w5i"}},381:function(e){e.exports={filmOuterContainer:"schedule_filmOuterContainer__s3Zw3",filmContainer:"schedule_filmContainer__1W5Cu",filmContainerSmall:"schedule_filmContainerSmall__3W-1Q",imageContainer:"schedule_imageContainer__1Nd-J",aboutContainer:"schedule_aboutContainer___Pkgv",dateContainer:"schedule_dateContainer__3qEu8",specialEventTip:"schedule_specialEventTip__38Jv5"}}},function(e){e.O(0,[224,774,888,179],(function(){return t=1566,e(e.s=t);var t}));var t=e.O();_N_E=t}]);