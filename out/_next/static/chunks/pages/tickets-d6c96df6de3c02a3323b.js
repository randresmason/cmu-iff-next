(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{8179:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(4942),r=n(7294),s=n(5893),c=(n(1664),n(2207)),l=n.n(c);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){var t=e.Item,n=e.data;if(!n||0==n.length)return(0,s.jsx)("div",{className:l().emptyListSection,children:(0,s.jsx)("p",{children:e.emptyText||"Not found"})});var i=n.map((function(e,n){return(0,r.createElement)(t,d(d({},e),{},{key:n}))}));return(0,s.jsx)("div",{className:l().listSection,children:i})}},9782:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return u}});var i=n(5893),r=n(1664),s=n(6224),c=n(8179),l=n(8180),a=n.n(l);n(3064).basePublicPath;function d(e){return e.ticket_url?(0,i.jsxs)("div",{className:a().ticketContainer,id:e.filmId,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h5",{children:e.name}),(0,i.jsxs)("p",{children:[e.screening_location,(0,i.jsx)("br",{}),e.screening_time]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(r.default,{href:"/films/".concat(e.filmId),children:(0,i.jsx)("a",{children:(0,i.jsx)("button",{className:"btn btn-light",children:"About the Film"})})}),(0,i.jsx)(r.default,{href:e.ticket_url,children:(0,i.jsx)("a",{children:(0,i.jsx)("button",{className:"btn btn-light",children:"Buy Regular Ticket"})})})]})]}):(0,i.jsxs)("div",{className:a().ticketContainer,id:e.filmId,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h5",{children:e.name}),(0,i.jsxs)("p",{children:[e.screening_location,(0,i.jsx)("br",{}),e.screening_time,(0,i.jsx)("br",{}),(0,i.jsx)("i",{children:"Tickets to be released."})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(r.default,{href:"/films/".concat(e.filmId),children:(0,i.jsx)("a",{children:(0,i.jsx)("button",{className:"btn btn-light",children:"About the Film"})})}),(0,i.jsx)(r.default,{href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("button",{className:"btn btn-light",disabled:!0,children:"Buy Regular Ticket"})})})]})]})}function o(e){return(0,i.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4 ".concat(a().centeredCardContainer),children:[(0,i.jsx)("h5",{children:e.title}),(0,i.jsx)("p",{style:{marginBottom:"0.5rem"},children:e.subtitle}),(0,i.jsx)("hr",{}),(0,i.jsxs)("h5",{children:["$",e.general_price]}),(0,i.jsx)("p",{children:"General Admission"}),(0,i.jsxs)("h5",{children:["$",e.student_price]}),(0,i.jsx)("p",{children:"Students and Seniors*"}),(0,i.jsx)("hr",{}),(0,i.jsx)(r.default,{href:e.btn_url,children:(0,i.jsx)("a",{children:(0,i.jsx)("button",{className:"btn btn-bg",children:e.ticket_btn})})}),(0,i.jsx)("p",{children:(0,i.jsxs)("i",{children:[(0,i.jsx)("b",{children:"Instructions:"})," ",e.instructions]})})]})}var h=!0;function u(e){var t=e.listData,n=e.ticketPackageData;return(0,i.jsxs)(s.Z,{title:"Tickets",children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h1",{children:"2022 Tickets"}),(0,i.jsx)("p",{children:"Tickets can be purchased at the door or online through the links below. Festival passes can be purchased through Carnegie Mellon Tickets."})]}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"Pricing"}),(0,i.jsx)(c.Z,{Item:o,data:n,emptyText:"No ticket packages available"}),(0,i.jsxs)("p",{children:["*A valid student/OSHER ID must be presented for discount",(0,i.jsx)("br",{}),"**Opening Night is not included in Festival Pass"]})]}),(0,i.jsxs)("div",{className:"container",id:"regular-tickets",children:[(0,i.jsx)("h2",{children:"2022 Regular Tickets"}),(0,i.jsx)(c.Z,{Item:d,data:t.data,emptyText:(0,i.jsxs)("p",{children:["No tickets available. ",(0,i.jsx)(r.default,{href:"/schedule",children:(0,i.jsx)("a",{children:"Visit the Schedule page"})})]})})]})]})}},3648:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tickets",function(){return n(9782)}])},2207:function(e){e.exports={listSection:"list_listSection__l24Ip",emptyListSection:"list_emptyListSection__32w5i"}},8180:function(e){e.exports={centeredCardContainer:"tickets_centeredCardContainer__mGJig",caption:"tickets_caption__3-sN0",imageContainer:"tickets_imageContainer__3jZa_",aboutContainer:"tickets_aboutContainer__1dBZq",ticketContainer:"tickets_ticketContainer__2N7oB"}}},function(e){e.O(0,[224,774,888,179],(function(){return t=3648,e(e.s=t);var t}));var t=e.O();_N_E=t}]);