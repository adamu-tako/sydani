"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9905,5371],{1429:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3645),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,".menu-item[data-v-035ffeb1]:hover{transition:2s}",""]);const l=i},4944:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3645),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,"#layout-menu[data-v-94c9a022]{overflow-x:hidden;overflow-y:auto}*[data-v-94c9a022]{scrollbar-color:orange #191970;scrollbar-width:thin}[data-v-94c9a022]::-webkit-scrollbar{width:6px}[data-v-94c9a022]::-webkit-scrollbar-track{background:#191970}[data-v-94c9a022]::-webkit-scrollbar-thumb{background-color:orange;border:1px solid #191970;border-radius:10px}",""]);const l=i},5371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(6598),i=n(9038),l=n(3907);var r={href:"",class:"menu-link menu-toggle"},o=function(e){return(0,a.pushScopeId)("data-v-035ffeb1"),e=e(),(0,a.popScopeId)(),e}((function(){return(0,a.createElementVNode)("i",{class:"menu-icon tf-icons bx bx-layout"},null,-1)})),c={class:"menu-sub"};const s={props:{data:{type:Object}},setup:function(e){var t=e,s=n(6252),d=s.onMounted,u=s.computed,m=(0,l.oR)(),k=u((function(){return m.state.activeNavLink}));return d((function(){"/admin/dashboard"==(0,i.usePage)().url.value&&m.commit("setActiveNavLink",-1)})),function(n,l){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)(["menu-item",(0,a.unref)(k)==e.data.activeKey?"open active":""]),onClick:l[0]||(l[0]=(0,a.withModifiers)((function(e){return m.commit("setActiveNavLink",t.data.activeKey)}),["prevent"]))},[(0,a.createElementVNode)("a",r,[o,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.data.title),1)]),(0,a.createElementVNode)("ul",c,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.data.links,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)(["menu-item",n.$page.url=="".concat(e.url)?"active":""]),key:t},[(0,a.createVNode)((0,a.unref)(i.Link),{href:e.url,class:"menu-link"},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(e.link),1)]})),_:2},1032,["href"])],2)})),128))])],2)}}};var d=n(3379),u=n.n(d),m=n(1429),k={insert:"head",singleton:!1};u()(m.Z,k);m.Z.locals;const p=(0,n(3744).Z)(s,[["__scopeId","data-v-035ffeb1"]])},9905:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(6598),i=n(9038),l=n(6252),r=n(5371),o=function(e){return(0,a.pushScopeId)("data-v-94c9a022"),e=e(),(0,a.popScopeId)(),e},c={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},s={class:"app-brand demo"},d={class:"app-brand-logo demo"},u=["src"],m=[o((function(){return(0,a.createElementVNode)("i",{class:"bx bx-chevron-left bx-sm align-middle"},null,-1)}))],k={class:"menu-inner py-1"},p=o((function(){return(0,a.createElementVNode)("i",{class:"menu-icon tf-icons bx bx-home-circle"},null,-1)})),f=o((function(){return(0,a.createElementVNode)("div",{"data-i18n":"Analytics"},"Dashboard",-1)})),v=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"Website")],-1)})),h=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"Posts")],-1)})),g=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"Admin")],-1)}));const y={setup:function(e){(0,l.onMounted)((function(){}));var t=function(){document.querySelector("html").classList.toggle("layout-menu-expanded"),console.log("clicked exapnd")},n=[{title:"Carousel",activeKey:1,links:[{link:"Add/Edit Carousel",url:"/admin/carousel"}]},{title:"Partners",activeKey:1.1,links:[{link:"Add/Edit Partner",url:"/admin/partner"}]},{title:"Who We Are",activeKey:1.2,links:[{link:"Add/Edit Who we are",url:"/admin/whoweare"}]},{title:"Core Values",activeKey:1.7,links:[{link:"Add/Edit Core Values",url:"/admin/values"}]},{title:"Vision/Mission",activeKey:1.3,links:[{link:"Add/Edit Vision & Mission",url:"/admin/visionmission"}]},{title:"Our Team",activeKey:1.4,links:[{link:"Add/Edit Team",url:"/admin/team"}]},{title:"Idustries",activeKey:1.6,links:[{link:"Add/Edit Industries",url:"/admin/industry"},{link:"Services",url:"/admin/industry/services"}]},{title:"Our Work",activeKey:1.8,links:[{link:"Financing",url:"/admin/financing"},{link:"System Strengthening",url:"/admin/system"},{link:"Demand Generation",url:"/admin/demand"},{link:"Data Analytics",url:"/admin/data-analytics"}]},{title:"Contact Us",activeKey:1.5,links:[{link:"Add/Edit Contact Info",url:"/admin/contact"}]}],o=[{title:"Projects/Insights",activeKey:2,links:[{link:"Create Project",url:"/admin/project"},{link:"Project List",url:"/admin/project/list"},{link:"Project Page Intro",url:"/admin/project/intro"},{link:"--INSIGHT--",url:"#"},{link:"Add/Edit Insight",url:"/admin/insight"}]},{title:"Blog",activeKey:3,links:[{link:"Create Project",url:"/admin/project"},{link:"Project List",url:"/admin/project/list"},{link:"Add/Edit Insight",url:"/admin/insight"}]}],y=[{title:"Manage Users",activeKey:4,links:[{link:"Users List",url:"/admin/users"}]}];return function(e,l){return(0,a.openBlock)(),(0,a.createElementBlock)("aside",c,[(0,a.createElementVNode)("div",s,[(0,a.createVNode)((0,a.unref)(i.Link),{href:"/admin/dashboard",class:"app-brand-link"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("span",d,[(0,a.createElementVNode)("img",{src:"".concat(e.$page.props.asset,"/assets/img/logo.svg"),class:"img-fluid",alt:"Sydani Group",style:{"max-height":"45px"}},null,8,u)])]})),_:1}),(0,a.createElementVNode)("a",{href:"",class:"layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none",onClick:l[0]||(l[0]=(0,a.withModifiers)((function(){return(0,a.unref)(t)&&(0,a.unref)(t).apply(void 0,arguments)}),["prevent"]))},m)]),(0,a.createElementVNode)("ul",k,[(0,a.createElementVNode)("li",{class:(0,a.normalizeClass)(["menu-item","/admin/dashboard"==e.$page.url?"active":""])},[(0,a.createVNode)((0,a.unref)(i.Link),{href:"/admin/dashboard",class:"menu-link"},{default:(0,a.withCtx)((function(){return[p,f]})),_:1})],2),v,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n,(function(e,t){return(0,a.createVNode)(r.default,{data:e,key:t},null,8,["data"])})),64)),h,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(o,(function(e,t){return(0,a.createVNode)(r.default,{data:e,key:t},null,8,["data"])})),64)),g,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(y,(function(e,t){return(0,a.createVNode)(r.default,{data:e,key:t},null,8,["data"])})),64))])])}}};var b=n(3379),E=n.n(b),N=n(4944),V={insert:"head",singleton:!1};E()(N.Z,V);N.Z.locals;const x=(0,n(3744).Z)(y,[["__scopeId","data-v-94c9a022"]])}}]);