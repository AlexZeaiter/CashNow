(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{EFyh:function(t,o,e){"use strict";e.d(o,"a",function(){return s});var n=e("mrSG"),i=e("fXoL"),r=e("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.apiUrl="https://cashnow20210930011213.azurewebsites.net/api"}loginRequest(t){return Object(n.a)(this,void 0,void 0,function*(){try{const o=yield this.http.post(`${this.apiUrl}/companylogin/login`,t).toPromise();window.localStorage.setItem("token",JSON.stringify(o)),JSON.parse(window.localStorage.getItem("token"))}catch(o){}setTimeout(()=>{},3e5)})}getLoginInfo(){return JSON.parse(window.localStorage.getItem("token"))}}return t.\u0275fac=function(o){return new(o||t)(i.bc(r.a))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);