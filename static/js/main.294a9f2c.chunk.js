(this["webpackJsonpcv-generator"]=this["webpackJsonpcv-generator"]||[]).push([[0],{31:function(e,t,a){e.exports={CV:"cv_CV__1cTi2",Buttons:"cv_Buttons__8Leqb",Container:"cv_Container__1H6Tp",Left_side:"cv_Left_side__2slZ6",Right_side:"cv_Right_side__3JLxn"}},49:function(e,t,a){e.exports={Header:"header_Header__2o08c"}},71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),i=a.n(s),c=a(11),l=a.n(c),r=(a(71),a(117)),o=a(49),d=a.n(o),u=function(){return Object(n.jsxs)("header",{className:d.a.Header,children:[Object(n.jsx)("h1",{children:"CV Generator"}),Object(n.jsx)(r.a,{variant:"contained",href:"https://github.com/aayushmau5/cv-generator",children:"Github"})]})},j=a(39),h=a(27),b=a(54),m=a(55),O=a(57),x=a(56),p=a(28),g=a(13),v=a(12),f=a(8),C=a(119),y=a(115),S=a(114),k=a(120),w=a(116),E=function(e){var t,a=Object(s.useState)(""),i=Object(g.a)(a,2),c=i[0],l=i[1];switch(e.title.toLowerCase()){case"name":t=Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",onChange:function(e){return l(e.target.value)},fullWidth:!0});break;case"about":t=Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"about",label:"About",type:"text",onChange:function(e){return l(e.target.value)},fullWidth:!0,multiline:!0});break;case"achievements":t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"started",label:"Year Started",type:"number",onChange:function(e){l(Object(f.a)(Object(f.a)({},c),{},{yearStarted:e.target.value}))},fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"ended",label:"Till",type:"number",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{yearEnded:e.target.value}))},fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"company",label:"Company",type:"text",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{company:e.target.value}))},fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"postion",label:"Position",type:"text",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{position:e.target.value}))},fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"summary",label:"Summary",type:"text",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{summary:e.target.value}))},fullWidth:!0,multiline:!0})]});break;case"contacts":t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"place",label:"Contact Place",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{place:e.target.value}))},type:"text",fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"value",label:"Value",type:"text",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{value:e.target.value}))},fullWidth:!0})]});break;case"socials":t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"website",label:"Website",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{website:e.target.value}))},type:"text",fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"username",label:"Username",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{username:e.target.value}))},type:"text",fullWidth:!0})]});break;case"interests":t=Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"interests",label:"Interest",onChange:function(e){return l({interest:e.target.value})},type:"text",fullWidth:!0});break;case"skills":t=Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"skills",label:"Skills",onChange:function(e){return l({skill:e.target.value})},type:"text",fullWidth:!0});break;case"education":t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"started",label:"Year Started",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{yearStarted:e.target.value}))},type:"number",fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"ended",label:"Till",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{yearEnded:e.target.value}))},type:"number",fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"place",label:"Place",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{place:e.target.value}))},type:"text",fullWidth:!0}),Object(n.jsx)(w.a,{margin:"dense",id:"title",label:"Title",onChange:function(e){return l(Object(f.a)(Object(f.a)({},c),{},{title:e.target.value}))},type:"text",fullWidth:!0})]});break;default:t=Object(n.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"name",label:"Something",type:"text",fullWidth:!0,multiline:!0})}return Object(n.jsxs)(C.a,{open:e.show,onClose:e.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(k.a,{id:"form-dialog-title",children:e.title}),Object(n.jsx)(S.a,{children:t}),Object(n.jsxs)(y.a,{children:[Object(n.jsx)(r.a,{onClick:e.handleClose,children:"Cancel"}),Object(n.jsx)(r.a,{onClick:function(){e.editState(c),e.handleClose()},children:"Add"})]})]})},H=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=function(){c(!i)},r=e.value.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("strong",{children:[t.place,": "]}),t.value," ",e.showEditor?Object(n.jsx)(v.c,{style:{marginLeft:"5px",cursor:"pointer"},size:"13px",onClick:function(){return e.deleteState("contacts",t.id)}}):null]},t.id)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E,{show:i,handleClose:l,title:"Contacts",editState:e.editState}),Object(n.jsxs)("h3",{children:["Contacts"," ",e.showEditor?Object(n.jsx)(v.b,{style:{cursor:"pointer"},size:"15px",onClick:l}):null]}),r]})},N=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=e.value.map((function(t){return Object(n.jsxs)("div",{children:[t.interest,e.showEditor?Object(n.jsx)(v.c,{style:{marginLeft:"5px",cursor:"pointer"},size:"13px",onClick:function(){return e.deleteState("interests",t.id)}}):null]},t.id)})),r=function(){c(!i)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{show:i,handleClose:r,title:"Interests",editState:e.editState}),Object(n.jsxs)("h3",{children:["Interests"," ",e.showEditor?Object(n.jsx)(v.b,{style:{cursor:"pointer"},size:"15px",onClick:r}):null]}),l]})})},F=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=function(){c(!i)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E,{show:i,handleClose:l,title:"Name",editState:e.editState}),Object(n.jsxs)("h1",{style:{textDecoration:"none"},children:[e.value," ",e.showEditor?Object(n.jsx)(v.a,{style:{cursor:"pointer"},size:"20px",onClick:l}):null]})]})},_=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=function(){c(!i)},r=e.value.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("strong",{children:[t.website,": "]}),t.username,e.showEditor?Object(n.jsx)(v.c,{style:{marginLeft:"5px",cursor:"pointer"},size:"13px",onClick:function(){return e.deleteState("social",t.id)}}):null]},t.id)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{show:i,handleClose:l,title:"Socials",editState:e.editState}),Object(n.jsxs)("h3",{children:["Socials"," ",e.showEditor?Object(n.jsx)(v.b,{style:{cursor:"pointer"},size:"15px",onClick:l}):null]}),r]})})},W=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=function(){c(!i)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{show:i,handleClose:l,title:"About",editState:e.editState}),Object(n.jsxs)("h1",{children:["About"," ",e.showEditor?Object(n.jsx)(v.a,{style:{cursor:"pointer"},size:"20px",onClick:l}):null]}),e.value]})})},z=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=e.value.map((function(t){return Object(n.jsxs)("div",{className:"skill",children:[t.skill,e.showEditor?Object(n.jsx)(v.c,{style:{marginLeft:"5px",cursor:"pointer"},size:"13px",onClick:function(){return e.deleteState("skills",t.id)}}):null]},t.id)})),r=function(){c(!i)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{show:i,handleClose:r,title:"Skills",editState:e.editState}),Object(n.jsxs)("h1",{children:["Skills"," ",e.showEditor?Object(n.jsx)(v.b,{style:{cursor:"pointer"},size:"20px",onClick:r}):null]}),Object(n.jsx)("div",{className:"skills",children:l})]})})},L=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=e.value.map((function(t){return Object(n.jsxs)("div",{className:"achievement",children:[Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("span",{className:"position",children:t.position}),Object(n.jsx)("span",{className:"company",children:t.company}),Object(n.jsx)("span",{className:"summary",children:t.summary})]}),Object(n.jsxs)("div",{className:"year-container",children:[Object(n.jsx)("span",{className:"year",children:t.year}),e.showEditor?Object(n.jsx)(v.c,{style:{marginLeft:"5px",cursor:"pointer"},size:"13px",onClick:function(){return e.deleteState("achievements",t.id)}}):null]})]},t.id)})),r=function(){c(!i)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{show:i,handleClose:r,title:"Achievements",editState:e.editState}),Object(n.jsxs)("h1",{children:["Achievements"," ",e.showEditor?Object(n.jsx)(v.b,{style:{cursor:"pointer"},size:"20px",onClick:r}):null]}),Object(n.jsx)("div",{className:"achievements",children:l})]})})},I=function(e){var t=Object(s.useState)(!1),a=Object(g.a)(t,2),i=a[0],c=a[1],l=e.value.map((function(t){return Object(n.jsxs)("div",{className:"education",children:[Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("span",{className:"degree",children:t.title}),Object(n.jsx)("span",{className:"place",children:t.place})]}),Object(n.jsxs)("div",{className:"year-container",children:[Object(n.jsx)("span",{className:"year",children:t.year}),e.showEditor?Object(n.jsx)(v.c,{style:{marginLeft:"5px",cursor:"pointer"},size:"13px",onClick:function(){return e.deleteState("education",t.id)}}):null]})]},t.id)})),r=function(){c(!i)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{show:i,handleClose:r,title:"Education",editState:e.editState}),Object(n.jsxs)("h1",{children:["Education"," ",e.showEditor?Object(n.jsx)(v.b,{style:{cursor:"pointer"},size:"20px",onClick:r}):null]}),Object(n.jsx)("div",{className:"education-container",children:l})]})})},Y=a(31),A=a.n(Y),P=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"Your Name",contacts:[{id:0,place:"LinkedIn",value:"Your LinkedIn"},{id:1,place:"email",value:"Your email"},{id:2,place:"Phone",value:"Your Phone"}],social:[{id:0,website:"Instagram",username:"Your Instagram"},{id:1,website:"Facebook",username:"Your Facebook"}],interests:[{id:0,interest:"First Interest"},{id:1,interest:"Second Interest"}],about:"lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet lorem ipusm dolor sit amet",skills:[{id:0,skill:"Javascript"},{id:1,skill:"Nodejs"}],achievements:[{id:0,year:"2020-2023",company:"Company",position:"Position 1",summary:"Did this and that in my job there"},{id:1,year:"2021-2024",company:"Company 2",position:"Position 3",summary:"Did this and that in my job there"}],education:[{id:0,year:"2015-2016",place:"School",title:"Did study there"},{id:1,year:"2015-2016",place:"College",title:"Bachelor of engineering"}],edit:!1},e.editChangeHandler=function(){e.setState({edit:!e.state.edit})},e.nameChangeHandler=function(t){e.setState({name:t})},e.aboutChangeHandler=function(t){e.setState({about:t})},e.contactsChangeHandler=function(t){e.setState({contacts:[].concat(Object(h.a)(e.state.contacts),[{id:Object(p.a)(10),place:t.place,value:t.value}])})},e.socialChangeHandler=function(t){e.setState({social:[].concat(Object(h.a)(e.state.social),[{id:Object(p.a)(10),website:t.website,username:t.username}])})},e.interestsChangeHandler=function(t){e.setState({interests:[].concat(Object(h.a)(e.state.interests),[{id:Object(p.a)(10),interest:t.interest}])})},e.skillsChangeHandler=function(t){e.setState({skills:[].concat(Object(h.a)(e.state.skills),[{id:Object(p.a)(10),skill:t.skill}])})},e.achievementsChangeHandler=function(t){e.setState({achievements:[].concat(Object(h.a)(e.state.achievements),[{id:Object(p.a)(10),year:"".concat(t.yearStarted," - ").concat(t.yearEnded),company:t.company,position:t.position,summary:t.summary}])})},e.educationChangeHandler=function(t){e.setState({education:[].concat(Object(h.a)(e.state.education),[{id:Object(p.a)(10),year:"".concat(t.yearStarted," - ").concat(t.yearEnded),place:t.place,title:t.title}])})},e.deleteStateHandler=function(t,a){var n=e.state[t].filter((function(e){return e.id!==a}));e.setState(Object(j.a)({},t,n))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:A.a.CV,children:[Object(n.jsxs)("div",{className:A.a.Container,children:[Object(n.jsxs)("div",{className:A.a.Left_side,children:[Object(n.jsx)(F,{value:this.state.name,showEditor:this.state.edit,editState:this.nameChangeHandler}),Object(n.jsx)(H,{value:this.state.contacts,showEditor:this.state.edit,editState:this.contactsChangeHandler,deleteState:this.deleteStateHandler}),Object(n.jsx)(_,{value:this.state.social,showEditor:this.state.edit,editState:this.socialChangeHandler,deleteState:this.deleteStateHandler}),Object(n.jsx)(N,{value:this.state.interests,showEditor:this.state.edit,editState:this.interestsChangeHandler,deleteState:this.deleteStateHandler})]}),Object(n.jsxs)("div",{className:A.a.Right_side,children:[Object(n.jsx)(W,{value:this.state.about,showEditor:this.state.edit,editState:this.aboutChangeHandler}),Object(n.jsx)(z,{value:this.state.skills,showEditor:this.state.edit,editState:this.skillsChangeHandler,deleteState:this.deleteStateHandler}),Object(n.jsx)(L,{value:this.state.achievements,showEditor:this.state.edit,editState:this.achievementsChangeHandler,deleteState:this.deleteStateHandler}),Object(n.jsx)(I,{value:this.state.education,showEditor:this.state.edit,editState:this.educationChangeHandler,deleteState:this.deleteStateHandler})]})]}),Object(n.jsx)("div",{className:A.a.Buttons,children:this.state.edit?Object(n.jsx)(r.a,{variant:"contained",onClick:this.editChangeHandler,children:"Save"}):Object(n.jsx)(r.a,{variant:"contained",onClick:this.editChangeHandler,children:"Edit"})})]})})}}]),a}(s.Component);a(75);var B=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u,{}),Object(n.jsx)(P,{})]})};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.294a9f2c.chunk.js.map