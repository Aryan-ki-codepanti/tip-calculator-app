(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),i=n.n(s),u=(n(9),n(10),n(0)),o=function(){return Object(u.jsxs)("div",{className:"attribution",children:["Challenge by",Object(u.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by",Object(u.jsx)("a",{href:"https://twitter.com/AryanSe73817078",target:"_blank",rel:"noreferrer",children:"Aryan Sethi"}),"."]})},a=(n(12),n(13),n.p+"static/media/icon-dollar.9f9be353.svg"),l=n(2),j=Object(c.createContext)(),b=function(e){var t=e.children,n=Object(c.useState)(""),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),a=Object(l.a)(o,2),b=a[0],d=a[1],m=Object(c.useState)(null),p=Object(l.a)(m,2),O=p[0],x=p[1],f=Object(c.useState)(""),h=Object(l.a)(f,2),v=h[0],N=h[1],g=Object(c.useState)(0),C=Object(l.a)(g,2),T=C[0],y=C[1],P=Object(c.useState)(0),A=Object(l.a)(P,2),B=A[0],S=A[1];Object(c.useEffect)((function(){if(null!=O&&""!==v){var e=Number(s)*O/100,t=Number(v),n=e/t,c=(e+Number(s))/t;y((function(e){return n})),S((function(e){return c}))}else if(""!==b&&""!==v){var r=Number(s)*Number(b)/100,i=Number(v),u=r/i,o=(r+Number(s))/i;y((function(e){return u})),S((function(e){return o}))}}),[O,b,s,v]);var w={billAmount:s,customTipPercent:b,currentTipButton:O,numberOfPeople:v,total:B,tipAmount:T,setBillAmount:i,setCustomTipPercent:d,setCurrentTipButton:x,setNumberOfPeople:N,setTotal:S,setTipAmount:y};return Object(u.jsx)(j.Provider,{value:w,children:t})},d=function(){var e=Object(c.useContext)(j),t=e.billAmount,n=e.setBillAmount;return Object(u.jsxs)("div",{className:"bill",children:[Object(u.jsx)("h1",{children:" Bill "}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:a,alt:"dollar-sign"}),Object(u.jsx)("input",{type:"text",placeholder:"0",value:t,onChange:function(e){return n((function(t){return e.target.value}))}})]})]})},m=(n(14),n.p+"static/media/icon-person.65bfd204.svg"),p=function(){var e=Object(c.useContext)(j),t=e.numberOfPeople,n=e.setNumberOfPeople,r=Object(c.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(u.jsxs)("div",{className:"number-of-people",children:[Object(u.jsxs)("div",{className:"number-of-people-header",children:[Object(u.jsx)("h1",{children:"Number Of People"}),i&&Object(u.jsx)("h1",{className:"number-of-people-zero-error",children:"Can't be zero"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:m,alt:"person-svg"}),Object(u.jsx)("input",{style:i?{borderColor:"var(--Error-state-color)"}:{},type:"text",placeholder:"0",value:t,onChange:function(e){e.target.value&&0===Number(e.target.value)?o((function(e){return!0})):(o((function(e){return!1})),n((function(t){return e.target.value})))}})]})]})},O=(n(15),function(e){var t=e.percent,n=Object(c.useContext)(j),r=n.currentTipButton,s=n.setCurrentTipButton,i=n.setCustomTipPercent;return Object(u.jsxs)("button",{onClick:function(){i((function(e){return""})),s((function(e){return t}))},className:"tip-button",style:r===t?{backgroundColor:"var(--Strong-cyan)",color:"var(--Very-dark-cyan)"}:{},children:[t,"%"]})}),x=(n(16),function(){var e=Object(c.useContext)(j),t=e.customTipPercent,n=e.setCustomTipPercent,r=e.setCurrentTipButton;return Object(u.jsxs)("div",{className:"select-tip",children:[Object(u.jsx)("h1",{children:"Select Tip"}),Object(u.jsxs)("div",{className:"tip-grid",children:[Object(u.jsx)(O,{percent:5}),Object(u.jsx)(O,{percent:10}),Object(u.jsx)(O,{percent:15}),Object(u.jsx)(O,{percent:25}),Object(u.jsx)(O,{percent:50}),Object(u.jsx)("input",{type:"text",value:t,placeholder:"Custom",onChange:function(e){r((function(e){return null})),n((function(t){return e.target.value}))}})]})]})}),f=function(){return Object(u.jsxs)("div",{className:"calculator-input",children:[Object(u.jsx)("div",{className:"bill-box",children:Object(u.jsx)(d,{})}),Object(u.jsx)("div",{className:"select-tip-box",children:Object(u.jsx)(x,{})}),Object(u.jsx)("div",{className:"number-of-people-box",children:Object(u.jsx)(p,{})})]})},h=n.p+"static/media/icon-dollar-cyan.bfda9961.svg",v=(n(17),function(e){var t,n=e.title,c=e.amount;return Object(u.jsxs)("div",{className:"amount-box",children:[Object(u.jsxs)("div",{className:"amount-left",children:[Object(u.jsx)("p",{className:"amount-title",children:n}),Object(u.jsx)("p",{className:"amount-person",children:"/ person"})]}),Object(u.jsx)("div",{className:"amount-right",children:Object(u.jsxs)("h1",{className:"amount",children:[Object(u.jsx)("img",{src:h,alt:""}),(t=c,Number(t).toFixed(2))]})})]})}),N=(n(18),function(){var e=Object(c.useContext)(j),t=e.setBillAmount,n=e.setCustomTipPercent,r=e.setCurrentTipButton,s=e.setNumberOfPeople,i=e.setTotal,o=e.setTipAmount,a=e.total,l=e.tipAmount,b=e.billAmount,d=e.numberOfPeople,m=e.currentTipButton,p=e.customTipPercent,O=""===b&&""===d&&null===m&&""===p;return Object(u.jsxs)("div",{className:"result-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{title:"tip amount",amount:l}),Object(u.jsx)(v,{title:"total",amount:a})]}),Object(u.jsx)("button",{onClick:function(){t((function(e){return""})),n((function(e){return""})),s((function(e){return""})),r((function(e){return null})),i((function(e){return 0})),o((function(e){return 0}))},className:"reset-button",disabled:O,children:"Reset"})]})}),g=(n(19),function(){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("div",{className:"app__left",children:Object(u.jsx)(f,{})}),Object(u.jsx)("div",{className:"app__right",children:Object(u.jsx)(N,{})})]})}),C=n.p+"static/media/logo.3cc0528b.svg",T=(n(20),function(){return Object(u.jsx)("div",{className:"logo-box",children:Object(u.jsx)("img",{className:"logo",src:C,alt:"logo-png"})})});var y=function(){return Object(u.jsxs)(b,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(T,{}),Object(u.jsx)(g,{})]}),Object(u.jsx)("div",{className:"attribution-wrapper",children:Object(u.jsx)(o,{})})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.e434a31d.chunk.js.map