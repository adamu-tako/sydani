"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1320],{1640:(e,t,r)=>{function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Y:()=>l,on:()=>a});var a=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=l(t,n);o&&(n?o.forEach((function(t){return t.addEventListener(e,r)})):o.addEventListener(e,r))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),t?n(document.querySelectorAll(e)):document.querySelector(e)}},1320:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(6598),o=r(1640);function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i={id:"header",class:"fixed-top d-flex align-items-center"},c={class:"container d-flex align-items-center justify-content-between"},u=(0,n.createElementVNode)("div",{class:"logo"},[(0,n.createElementVNode)("h1",{class:""},[(0,n.createElementVNode)("a",{href:"/sgip",class:"brand-name text-black"},"SGIP")])],-1),s={id:"navbar",class:"navbar"},f=(0,n.createTextVNode)("Home"),d=(0,n.createTextVNode)("Gallery"),m=(0,n.createTextVNode)("Forum"),v=(0,n.createTextVNode)("Events"),b=(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("a",{class:"nav-link scrollto",href:"https://office.sydani.org/job-application?new=1&job_title=graduate-internship-program",target:"_blank"},"Apply")],-1),g=(0,n.createElementVNode)("i",{class:"bi bi-list mobile-nav-toggle"},null,-1);const p={setup:function(e){var t=r(9038).Link;return(0,r(6252).onMounted)((function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),t?a(document.querySelectorAll(e)):document.querySelector(e)};(0,o.on)("click",".mobile-nav-toggle",(function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),(0,o.on)("click",".navbar .dropdown > a",(function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))}),!0)})),function(e,r){return(0,n.openBlock)(),(0,n.createElementBlock)("header",i,[(0,n.createElementVNode)("div",c,[u,(0,n.createElementVNode)("nav",s,[(0,n.createElementVNode)("ul",null,[(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(t),{class:"nav-link scrollto active",href:"/sgip"},{default:(0,n.withCtx)((function(){return[f]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(t),{class:"nav-link scrollto",href:"/sgip/gallery"},{default:(0,n.withCtx)((function(){return[d]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(t),{class:"nav-link scrollto",href:"/sgip/forum"},{default:(0,n.withCtx)((function(){return[m]})),_:1})]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(t),{class:"nav-link scrollto",href:"/sgip/event"},{default:(0,n.withCtx)((function(){return[v]})),_:1})]),b]),g])])])}}}}}]);