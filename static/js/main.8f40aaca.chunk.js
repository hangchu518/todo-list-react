(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{18:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);n(18);var c=n(0),a=n.n(c),i=n(8),d=n.n(i),o=n(2),s=n(30),r="ADD_ITEM",u="DELETE_ITEM",l="DELETE_ALL_ITEMS",j="TOGGLE_ITEM",O="TOGGLE_ALL_ITEMS",b="UPDATE_ITEM",m=function(){return{type:O,payload:{doneOn:new Date}}},p=n(4),h=n(1),f=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(p.a)(t,2),i=n[0],d=n[1],u=Object(c.useState)(!1),l=Object(p.a)(u,2),j=l[0],O=l[1],b=Object(c.useRef)(null),f=function(){e({type:r,payload:{name:i,id:Object(s.a)(),createdOn:new Date}})},x=function(){d(""),O(!1),b.current&&b.current.reset()},v=Object(h.jsx)("input",{id:"toggle-all-items-button",type:"checkbox",onClick:function(){e(m())}}),y=Object(h.jsxs)("form",{id:"create-item-form",ref:b,onSubmit:function(e){e.preventDefault(),f(),x()},children:[Object(h.jsx)("input",{id:"create-item-input",type:"text",placeholder:"Add a new item",onFocus:function(){O(!0)},onChange:function(e){d(e.target.value)},onBlur:function(){i||O(!1)},value:i}),j&&Object(h.jsx)("button",{id:"create-item-button",type:"submit",children:"+"})]}),g=Object(h.jsx)("button",{className:"x-button",onClick:x,children:"x"});return Object(h.jsxs)(a.a.Fragment,{children:[v,y,g]})},x=n(14),v=n.n(x),y=n(15),g=n.n(y),E=function(e){return g()(e).format("MMMM Do YYYY, h:mm:ss a")},k=function(e){var t=e.done,n=e.createdOn,c=e.doneOn,i=e.updatedOn,d={marginLeft:"calc(1rem + 0.5vw)"};return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsxs)("li",{style:d,children:["Created on: \xa0 ",E(n)]}),t&&Object(h.jsxs)("li",{style:d,children:["Done on: \xa0 ",E(c)]}),Object(h.jsxs)("li",{style:d,children:["Updated on: \xa0 ",E(i)]})]})},T=function(e){var t=Object(o.b)(),n=Object(c.useState)(!1),i=Object(p.a)(n,2),d=i[0],s=i[1],r=Object(c.useState)(""),l=Object(p.a)(r,2),O=l[0],m=l[1],f=Object(c.useState)(!1),x=Object(p.a)(f,2),y=x[0],g=x[1],E=function(){s(!1),m(e.name)},T=function(){t(function(e){var t=e.id,n=e.name;return{type:b,payload:{id:t,name:n,updatedOn:new Date}}}({id:e.id,name:O}))},D=function(){var n;t((n=e.id,{type:u,payload:{id:n}}))},L=Object(h.jsx)("input",{type:"checkbox",className:"toggle-item-checkbox",onChange:function(){var n;t((n=e.id,{type:j,payload:{id:n,doneOn:new Date}}))},checked:e.done}),N=Object(h.jsx)("input",{autoFocus:!0,type:"text",value:O,onKeyUp:function(e){"Enter"===e.key?(O?T():D(),E()):"Escape"===e.key&&E()},onBlur:function(){O?T():D(),E()},className:"update-item-input",onChange:function(e){m(e.target.value)}}),w=v()({"item-label":!0,"item-strikethrough":e.done}),C=Object(h.jsx)("label",{onClick:function(){s(!0)},className:w,children:e.name}),M=Object(h.jsx)("button",{className:"x-button",onClick:D,children:"x"}),S=Object(h.jsx)("button",{className:"show-item-details-button",onClick:function(){g(!y)},children:"..."});return d?Object(h.jsxs)("li",{children:[L,N,M]}):Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsxs)("li",{children:[L,C,M,S]}),y&&Object(h.jsx)(k,{done:e.done,createdOn:e.createdOn,doneOn:e.doneOn,updatedOn:e.updatedOn})]})},D=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.todoList.items})),n=Object(h.jsx)("input",{id:"toggle-all-items-button",className:"hide",type:"checkbox",onClick:function(){e(m())}}),c=t.map((function(e){return Object(h.jsx)(T,{name:e.name,done:e.done,id:e.id,createdOn:e.createdOn,doneOn:e.doneOn,updatedOn:e.updatedOn},e.id)}));return Object(h.jsxs)("div",{className:"content-div",children:[Object(h.jsxs)("div",{className:"create-item-div",children:[t.length>0&&n,Object(h.jsx)(f,{})]}),Object(h.jsxs)("div",{className:"item-list-div",children:[Object(h.jsx)("br",{}),Object(h.jsx)("ul",{children:c})]}),Object(h.jsx)("a",{id:"delete-all-items-button",onClick:function(){e({type:l})},children:"DELETE ALL"})]})},L=function(){var e=Object(h.jsxs)("div",{className:"title-div",children:[Object(h.jsx)("span",{className:"title",children:Object(h.jsx)("a",{href:"#",children:"Your Todo List"})}),Object(h.jsx)("span",{className:"author",children:Object(h.jsx)("a",{href:"https://cgao.info",children:"\xa0 Chuntong Gao \xa0"})})]});return Object(h.jsxs)("div",{className:"app-container",children:[e,Object(h.jsx)(D,{})]})},N=n(7),w=n(16),C=n(12),M=n(3),S=n(13),_=new Date,I={items:[{name:"This is a done message",done:!0,id:Object(s.a)(),createdOn:_,doneOn:void 0,updatedOn:_},{name:"This is an undone message",done:!1,id:Object(s.a)(),createdOn:_,doneOn:void 0,updatedOn:_}]},A=Object(N.combineReducers)({todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:var n=t.payload,c=n.name,a=n.id,i=n.createdOn,d={name:c,done:!1,id:a,createdOn:i,doneOn:void 0,updatedOn:i};return{items:[].concat(Object(S.a)(e.items),[d])};case u:var o=t.payload.id,s=e.items.filter((function(e){return e.id!==o}));return{items:s};case l:return{items:[]};case j:var m=e.items.map((function(e){var n=t.payload,c=n.id,a=n.doneOn;return e.id===c?!0===e.done?Object(M.a)(Object(M.a)({},e),{},{done:!1,doneOn:void 0}):Object(M.a)(Object(M.a)({},e),{},{done:!0,doneOn:a}):e}));return{items:m};case O:var p,h=e.items.length,f=0,x=Object(C.a)(e.items);try{for(x.s();!(p=x.n()).done;){var v=p.value;!0===v.done&&(f+=1)}}catch(_){x.e(_)}finally{x.f()}var y=e.items.map((function(e){return f===h?Object(M.a)(Object(M.a)({},e),{},{done:!1}):Object(M.a)(Object(M.a)({},e),{},{done:!0})}));return{items:y};case b:var g,E=Object(S.a)(e.items),k=t.payload,T=k.id,D=k.name,L=k.updatedOn,N=Object(C.a)(E);try{for(N.s();!(g=N.n()).done;){var w=g.value;w.id===T&&(w.name=D,w.updatedOn=L)}}catch(_){N.e(_)}finally{N.f()}return{items:E};default:return e}}}),F=function(){var e=N.applyMiddleware.apply(void 0,[]);return Object(N.createStore)(A,Object(w.composeWithDevTools)(e))}();d.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{store:F,children:Object(h.jsx)(L,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8f40aaca.chunk.js.map