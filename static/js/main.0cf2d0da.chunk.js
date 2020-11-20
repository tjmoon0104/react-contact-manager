(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{41:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(32),o=a.n(s),i=(a(41),a(4)),l=a(5),u=a(7),h=a(6),j=a(15),d=a(2),p=a(8),b=a.n(p),m=a(13),O=a(35),f=a(17),v=a(14),x=a.n(v),y=c.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[t.payload].concat(Object(O.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return g(e,t)}))}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)(y.Provider,{value:this.state,children:this.props.children})}}]),a}(r.Component),N=y.Consumer,k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(){var e=Object(m.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,r=t.name,c=t.email,s=t.phone,o=this.state.showContactInfo;return Object(n.jsx)(N,{children:function(t){var i=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",children:[Object(n.jsxs)("h4",{children:[r," ",Object(n.jsx)("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(n.jsx)("i",{onClick:e.onDeleteClick.bind(e,a,i),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),Object(n.jsx)(j.b,{to:"/contact/edit/".concat(a),children:Object(n.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),o?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Email: ",c]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Phone: ",s]})]}):null]})}})}}]),a}(r.Component),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(N,{children:function(e){var t=e.contacts;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h1",{className:"display-4 mb-2",children:Object(n.jsx)("span",{className:"text-danger",children:"Contact List"})}),t.map((function(e){return Object(n.jsx)(k,{contact:e},e.id)}))]})}})}}]),a}(r.Component),w=function(e){var t=e.branding;return Object(n.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{href:"/",className:"navbar-brand",children:t}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(j.b,{to:"/",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(j.b,{to:"/contact/add",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-plus"}),"Add"]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(j.b,{to:"/about",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-question"}),"About"]})})]})})]})})};w.defaultProps={branding:"Contact Manager"};var E=w,A=a(18),T=a(72),D=a(34),P=a.n(D),F=function(e){var t=e.label,a=e.name,r=e.value,c=e.placeholder,s=e.type,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{type:s,name:a,className:P()("form-control form-control-lg",{"is-invalid":i}),placeholder:c,value:r,onChange:o}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})};F.defaultProps={type:"text"};var q=F,I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var r,c,s,o,i,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={id:Object(T.a)(),name:c,email:s,phone:o},t.next=14,x.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(N,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",onChange:e.onChange,value:a,placeholder:"Enter Name...",name:"name",error:s.name}),Object(n.jsx)(q,{label:"Email",type:"email",onChange:e.onChange,value:r,placeholder:"Enter Email...",name:"email",error:s.email}),Object(n.jsx)(q,{label:"Phone",onChange:e.onChange,value:c,placeholder:"Enter Phone...",name:"phone",error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-block"})]})})]})}})}}]),a}(r.Component),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var r,c,s,o,i,l,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,x.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(N,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",onChange:e.onChange,value:a,placeholder:"Enter Name...",name:"name",error:s.name}),Object(n.jsx)(q,{label:"Email",type:"email",onChange:e.onChange,value:r,placeholder:"Enter Email...",name:"email",error:s.email}),Object(n.jsx)(q,{label:"Phone",onChange:e.onChange,value:c,placeholder:"Enter Phone...",name:"phone",error:s.phone}),Object(n.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-block"})]})})]})}})}}]),a}(r.Component),_=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(n.jsx)("p",{className:"lead",children:"Simple app to manage contacts"}),Object(n.jsx)("p",{className:"text-secondary",children:"Version 1.0.0"})]})},L=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"404 Page Not Found"}),Object(n.jsx)("p",{className:"lead",children:"Sorry Page not Found"})]})},U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("p",{children:a})]})}}]),a}(r.Component),B=(a(68),a(69),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(C,{children:Object(n.jsx)(j.a,{basename:"/react-contact-manager",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(E,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:S}),Object(n.jsx)(d.a,{exact:!0,path:"/contact/add",component:I}),Object(n.jsx)(d.a,{exact:!0,path:"/contact/edit/:id",component:M}),Object(n.jsx)(d.a,{exact:!0,path:"/about",component:_}),Object(n.jsx)(d.a,{exact:!0,path:"/test",component:U}),Object(n.jsx)(d.a,{component:L})]})})]})})})}}]),a}(r.Component)),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),J()}},[[70,1,2]]]);
//# sourceMappingURL=main.0cf2d0da.chunk.js.map