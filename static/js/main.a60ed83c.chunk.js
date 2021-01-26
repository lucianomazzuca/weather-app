(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(6),i=n.n(s),l=(n(13),n(2)),u=n.n(l),o=n(4),j=n(3),p=(n(15),n(7)),x=n.n(p),h=function(e){var t=e.data,n="http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png");return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"text-center col-span-2 flex flex-col justify-between",children:[Object(c.jsxs)("h4",{className:"text-5xl text-center",children:[t.main.temp,"\xb0"]}),Object(c.jsxs)("h3",{className:"text-xl col-span-2 text-center",children:[t.name,", ",t.sys.country]})]}),Object(c.jsxs)("div",{className:"text-center mx-auto flex flex-col justify-between",children:[Object(c.jsx)("img",{src:n,alt:"",className:"w-16"}),Object(c.jsx)("h4",{className:"text-md",children:t.weather[0].main})]}),Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("h4",{children:"Feels like"}),Object(c.jsxs)("p",{children:[t.main.feels_like,"\xb0"]})]}),Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("h4",{children:"Max Temp"}),Object(c.jsxs)("p",{children:[t.main.temp_max,"\xb0"]})]}),Object(c.jsxs)("div",{className:"group",children:[Object(c.jsx)("h4",{children:"Min Temp"}),Object(c.jsxs)("p",{children:[t.main.temp_min,"\xb0"]})]})]})},b=function(e){var t=e.handleSearchInput,n=e.handleSubmit,a=e.inputValue;return Object(c.jsxs)("form",{action:"",onSubmit:n,className:"flex relative",children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter a city",className:"search-input",onChange:t,value:a}),Object(c.jsx)("button",{type:"submit",className:"search-btn",children:Object(c.jsx)("svg",{className:"w-6 h-6 text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})},d=(n(16),function(e){var t=e.unit,n=e.changeUnit;return Object(c.jsxs)("div",{className:"flex justify-center items-center mt-6",children:[Object(c.jsx)("span",{className:"text-2xl mr-2 font-semibold",style:{color:"metric"===t?"#e8661c":"black"},children:"C\xb0"}),Object(c.jsx)("input",{type:"checkbox",onClick:n,className:"inline-block mt-1"}),Object(c.jsx)("span",{className:"text-2xl ml-2 font-semibold",style:{color:"imperial"===t?"royalblue":"black"},children:"F\xb0"})]})});var m=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),l=i[0],p=i[1],m=Object(a.useState)("metric"),f=Object(j.a)(m,2),O=f[0],v=f[1],w=Object(a.useState)(!1),N=Object(j.a)(w,2),y=N[0],k=N[1],g=Object(a.useState)(null),S=Object(j.a)(g,2),C=S[0],F=S[1],M=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=").concat(O,"&appid=").concat("405dd38c238a71236d50fdea512d38a6"));case 3:if(404!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",F("Couldn't find that city"));case 6:return F(null),e.next=9,n.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:return n=e.sent,e.t0=r,e.next=6,n;case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==l){e.next=3;break}return e.abrupt("return",F("You have to enter a city"));case 3:return k(!0),r(null),e.next=7,B(l);case 7:k(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){null!==n&&(k(!0),r(null),B(l).then((function(e){return k(!1)})))}),[O]),Object(c.jsxs)("div",{className:"App wrapper",children:[Object(c.jsxs)("div",{className:"flex flex-col mt-24 mb-10 justify-center w-full",children:[Object(c.jsx)("h1",{className:"title",children:"Weather App"}),Object(c.jsx)(b,{handleSearchInput:function(e){p(e.target.value)},handleSubmit:E,inputValue:l}),Object(c.jsx)(d,{unit:O,changeUnit:function(e){v("metric"===O?"imperial":"metric")}})]}),C&&Object(c.jsx)("div",{children:C}),y&&Object(c.jsx)(x.a,{color:"#FF6B00"}),n&&null==C&&Object(c.jsx)(h,{data:n})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a60ed83c.chunk.js.map