var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,L=(e,s)=>{for(var t in s||(s={}))o.call(s,t)&&l(e,t,s[t]);if(a)for(var t of a(s))r.call(s,t)&&l(e,t,s[t]);return e},u=(e,a)=>s(e,t(a));import{r as i,u as M,v as c}from"./index.3e93dcb4.js";import{d as j,e as n,u as d,r as w,n as m,s as g,_ as p,p as N,a as S,i as D,o as y,c as h,b as x,E,w as T,A as C}from"./vendor.91abe338.js";class z{static postLogin(e){return i({url:"/api/auth/user/login",method:"POST",json:!0,data:e}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}static postRegister(e){return i({url:"/api/auth/user/register",method:"POST",json:!0,data:e}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}static postCaptcha(e){return i({url:"/api/auth/email/sendCaptcha",method:"POST",json:!0,data:e}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}static postForgetPwd(e){return i({url:"/api/auth/email/forgot-password",method:"POST",json:!0,data:e}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}static postResetPwd(e){return i({url:"/api/auth/user/reset-password",method:"POST",json:!0,data:e}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}static postAuthPermission(e){return i({url:"/api/auth/permission/routes",method:"POST",json:!0,data:e}).then((e=>(console.log(e),0===e.status?Promise.resolve(e):Promise.reject(e))))}static postAuthUserInfo(e){return i({url:"/api/auth/user/userInfo",method:"POST",json:!0,data:e}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}}var I=j({name:"LoginForm",emits:["toResetPwd"],setup(e,{emit:s}){const t=n(),a=d(),o=w(),r=w(),l=M(),i=m({loginForm:{email:"",password:""},registerForm:{email:"",capcha:null,password:"",checkPass:""},showLogin:!0}),c={password:[{validator:(e,s,t)=>{""===s?t(new Error("请输入密码")):(""!==i.registerForm.checkPass&&r.value.validateField("checkPass"),t())},trigger:"blur"},{min:6,max:10,message:"长度在 6 到 10 个字符",trigger:"blur"}],checkPass:[{validator:(e,s,t)=>{""===s?t(new Error("请再次输入密码")):s!==i.registerForm.password?t(new Error("两次输入密码不一致!")):t()},trigger:"blur"}],email:[{required:!0,message:"请输入注册邮箱",trigger:"change"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],capcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]};return u(L({},g(i)),{loginFormRef:o,registerRef:r,rules:c,submitForm:()=>{o.value.validate((async e=>{var s,o;if(e)try{const{email:e,password:r}=i.loginForm,L={email:e,password:r},u=await z.postLogin(L),M=await z.postAuthUserInfo({email:e});0===M.status&&l.dispatch("permissionModule/getPermissonRoles",M.data),l.dispatch("permissionModule/getPermissonRoutes",M.data),l.dispatch("permissionModule/getPermissions");const c=null!=(o=null==(s=null==u?void 0:u.data)?void 0:s.accessToken)?o:null;if(c)if(sessionStorage.setItem("auth","true"),sessionStorage.setItem("accessToken",c),a.query.redirect){const e=a.query.redirect;t.push({path:e})}else t.push("/");else p({type:"warning",message:"账号或者密码有误"})}catch(r){p({type:"warning",message:r.message})}return!1}))},handleRegister:()=>{r.value.validate((async e=>{if(e)try{const{email:e,password:s,capcha:t}=i.registerForm,a={email:e,capcha:t,password:s};z.postRegister(a).then((e=>{console.log(e),p({type:"success",message:"注册成功"}),i.showLogin=!0}))}catch(s){p({type:"success",message:s.message})}}))},handleGetCaptcha:async()=>{try{const{email:e}=i.registerForm,s={email:e},t=await z.postCaptcha(s);console.log(t),0===t.status?p({type:"warning",message:t.message}):p({type:"success",message:t.message})}catch(e){console.error(e)}},handleForget:()=>{s("toResetPwd")}})}});const O=T();N("data-v-20f77138");const f={class:"form-container"},Y={class:"btn-container"},v=C("登录"),P={class:"operation"},F=C("获取验证码"),b={class:"btn-container"},A=C("完成注册"),Q={class:"go-login"},k=C("已有账号"),V=x("em",null,"去登陆",-1);S();const U=O(((e,s,t,a,o,r)=>{const l=D("el-input"),L=D("el-form-item"),u=D("el-button"),i=D("el-form");return y(),h("div",f,[e.showLogin?(y(),h(i,{key:0,ref:"loginFormRef",model:e.loginForm,"status-icon":"","hide-required-asterisk":!0,rules:e.rules,"label-width":"100px",class:"login-form"},{default:O((()=>[x(L,{label:"账号",prop:"email"},{default:O((()=>[x(l,{modelValue:e.loginForm.email,"onUpdate:modelValue":s[1]||(s[1]=s=>e.loginForm.email=s),autocomplete:"off",placeholder:"请输入登录邮箱(super@outlook.com)"},null,8,["modelValue"])])),_:1}),x(L,{label:"密码",prop:"password"},{default:O((()=>[x(l,{modelValue:e.loginForm.password,"onUpdate:modelValue":s[2]||(s[2]=s=>e.loginForm.password=s),type:"password",autocomplete:"off",placeholder:"请输入密码(123456)"},null,8,["modelValue"])])),_:1}),x(L,null,{default:O((()=>[x("div",Y,[x(u,{type:"primary",style:{width:"100%"},onClick:s[3]||(s[3]=s=>e.submitForm())},{default:O((()=>[v])),_:1})]),x("div",P,[x("span",{class:"free-register",onClick:s[4]||(s[4]=s=>e.showLogin=!e.showLogin)},"免费注册"),x("span",{class:"forget-password",onClick:s[5]||(s[5]=(...s)=>e.handleForget&&e.handleForget(...s))},"忘记密码")])])),_:1})])),_:1},8,["model","rules"])):E("",!0),e.showLogin?E("",!0):(y(),h(i,{key:1,ref:"registerRef",model:e.registerForm,"status-icon":"","hide-required-asterisk":!0,rules:e.rules,"label-width":"100px",class:"login-form"},{default:O((()=>[x(L,{label:"邮箱",prop:"email"},{default:O((()=>[x(l,{modelValue:e.registerForm.email,"onUpdate:modelValue":s[6]||(s[6]=s=>e.registerForm.email=s),autocomplete:"off",placeholder:"请输入注册邮箱"},{append:O((()=>[x(u,{onClick:e.handleGetCaptcha},{default:O((()=>[F])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),x(L,{label:"验证码",prop:"capcha"},{default:O((()=>[x(l,{modelValue:e.registerForm.capcha,"onUpdate:modelValue":s[7]||(s[7]=s=>e.registerForm.capcha=s),modelModifiers:{number:!0},maxlength:"10",autocomplete:"off",placeholder:"请输入验证码"},null,8,["modelValue"])])),_:1}),x(L,{label:"密码",prop:"password"},{default:O((()=>[x(l,{modelValue:e.registerForm.password,"onUpdate:modelValue":s[8]||(s[8]=s=>e.registerForm.password=s),type:"password",autocomplete:"off",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),x(L,{label:"确认密码",prop:"checkPass"},{default:O((()=>[x(l,{modelValue:e.registerForm.checkPass,"onUpdate:modelValue":s[9]||(s[9]=s=>e.registerForm.checkPass=s),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),x(L,null,{default:O((()=>[x("div",b,[x(u,{type:"primary",style:{width:"100%"},onClick:s[10]||(s[10]=s=>e.handleRegister())},{default:O((()=>[A])),_:1})]),x("div",Q,[x("span",{class:"to-login",onClick:s[11]||(s[11]=s=>e.showLogin=!e.showLogin)},[k,V])])])),_:1})])),_:1},8,["model","rules"]))])}));I.render=U,I.__scopeId="data-v-20f77138";var G=j({name:"ForgetPassword",props:{showReset:{type:Boolean,default:!1}},emits:["toLogin"],setup(e,{emit:s}){const t=w(),a=m({resetForm:{email:"",capcha:null,password:"",checkPass:""}}),o={password:[{validator:(e,s,o)=>{""===s?o(new Error("请输入密码")):(""!==a.resetForm.checkPass&&t.value.validateField("checkPass"),o())},trigger:"blur"},{min:6,max:10,message:"长度在 6 到 10 个字符",trigger:"blur"}],checkPass:[{validator:(e,s,t)=>{""===s?t(new Error("请再次输入密码")):s!==a.resetForm.password?t(new Error("两次输入密码不一致!")):t()},trigger:"blur"}],email:[{required:!0,message:"请输入注册邮箱",trigger:"change"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],capcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]};return u(L({},g(a)),{rules:o,resetRef:t,handleGetCaptcha:async()=>{try{const{email:e}=a.resetForm,s={email:e},t=await z.postForgetPwd(s);console.log(t),0===t.status?p({type:"warning",message:t.message}):p({type:"success",message:t.message})}catch(e){console.error(e)}},handleToLogin:()=>{s("toLogin")},handleResetPwd:async()=>{t.value.validate((async e=>{if(e)try{const{email:e,password:t,capcha:o}=a.resetForm,r={email:e,password:t,capcha:o},l=await z.postResetPwd(r);console.log(l),0===l.status?(p({type:"warning",message:l.message}),s("toLogin")):p({type:"success",message:l.message})}catch(t){console.error(t)}return!1}))}})}});const R=T();N("data-v-353c6594");const W={class:"form-container"},_=C("获取验证码"),Z={class:"btn-container"},J=C("确认重置"),B={class:"go-login"},q=x("em",null,"去登陆",-1);S();const H=R(((e,s,t,a,o,r)=>{const l=D("el-button"),L=D("el-input"),u=D("el-form-item"),i=D("el-form");return y(),h("div",W,[e.showReset?(y(),h(i,{key:0,ref:"resetRef",model:e.resetForm,"status-icon":"","hide-required-asterisk":!0,rules:e.rules,"label-width":"100px",class:"login-form"},{default:R((()=>[x(u,{label:"邮箱",prop:"email"},{default:R((()=>[x(L,{modelValue:e.resetForm.email,"onUpdate:modelValue":s[1]||(s[1]=s=>e.resetForm.email=s),autocomplete:"off",placeholder:"请输入注册邮箱"},{append:R((()=>[x(l,{onClick:e.handleGetCaptcha},{default:R((()=>[_])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),x(u,{label:"验证码",prop:"capcha"},{default:R((()=>[x(L,{modelValue:e.resetForm.capcha,"onUpdate:modelValue":s[2]||(s[2]=s=>e.resetForm.capcha=s),modelModifiers:{number:!0},maxlength:"6",autocomplete:"off",placeholder:"请输入验证码"},null,8,["modelValue"])])),_:1}),x(u,{label:"密码",prop:"password"},{default:R((()=>[x(L,{modelValue:e.resetForm.password,"onUpdate:modelValue":s[3]||(s[3]=s=>e.resetForm.password=s),type:"password",autocomplete:"off",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),x(u,{label:"确认密码",prop:"checkPass"},{default:R((()=>[x(L,{modelValue:e.resetForm.checkPass,"onUpdate:modelValue":s[4]||(s[4]=s=>e.resetForm.checkPass=s),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),x(u,null,{default:R((()=>[x("div",Z,[x(l,{type:"primary",style:{width:"100%"},onClick:s[5]||(s[5]=s=>e.handleResetPwd())},{default:R((()=>[J])),_:1})]),x("div",B,[x("span",{class:"to-login",onClick:s[6]||(s[6]=(...s)=>e.handleToLogin&&e.handleToLogin(...s))},[q])])])),_:1})])),_:1},8,["model","rules"])):E("",!0)])}));G.render=H,G.__scopeId="data-v-353c6594";var X=j({name:"Index",components:{Login:I,ForgetPassword:G},setup(){const e=w(!1);return{showReset:e,handleResetPwd:()=>{e.value=!0},handleToLogin:()=>{e.value=!1},vueLogo:c,viteLogo:"./assets/logo-vite.63a26457.svg"}}});const K=T();N("data-v-d29b2dfc");const $={class:"container"},ee={class:"login-container"},se={class:"login-left"},te=x("div",{class:"top"},[x("div",{class:"title"},[x("span",null,"欢迎使用")]),x("div",{class:"desc"},[x("span",null,"Vite2.x + ElementPlus + Vue3.x + TypeScript")])],-1),ae={class:"bottom"},oe=x("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTMuNzEgMzgiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ye2ZpbGw6IzQwOWVmZjt9LmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+6LWE5rqQIDE8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwYXRoIGlkPSJTaGFwZS1Db3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDIsMjYuMTZzLjI4LDAsLjgyLDBhLjcyLjcyLDAsMCwxLC42OS40MXMxLjA4LDIsMS4zNywyLjQ4LDAsLjQyLS4xMi40MWgwcy0uMzEsMC0zLjQ1LDBhNC45Myw0LjkzLDAsMCwxLTQuNTQtNC41NHYtN0gxMzQuM1YxNS4yOGMwLS4zNi40MS0uNDEuNDEtLjQxaDIuMDdWMTIuMjVhLjYuNiwwLDAsMSwuNDEtLjU1bDIuMy0uNjZjLjM0LS4xLjU5LDAsLjU5LjM1VjE1aDMuNThjLjM0LDAsLjQxLjQxLjQxLjQxVjE4aC00djYuMDZjMCwxLjc2LDEuOTMsMi4wNywxLjkzLDIuMDdabS0xMC42LDNoLTIuMmMtLjQzLDAtLjQxLS41NS0uNDEtLjU1VjE4LjQ1YzAtLjYyLS44My0uODMtLjgzLS44M2gtNC41NGMtLjY4LDAtLjY5LjgzLS42OS44M1YyOC43N2EuNDEuNDEsMCwwLDEtLjQxLjQyaC0yLjJjLS40OCwwLS40MS0uNTUtLjQxLS41NVYxNS44M2MwLTEsMS4yNC0xLjI0LDEuMjQtMS4yNGg5LjYzYzEsMCwxLjIzLDEuMjQsMS4yMywxLjI0VjI4LjVjMCwuNzItLjQxLjY5LS40MS42OVpNMTE1LjczLDIzLjRIMTA3LjJ2Mi4wN2MwLC43NCwxLDEsMSwxSDExNWExLjE2LDEuMTYsMCwwLDEsLjgyLjQycy42MSwxLjI1LjgzLDEuNzktLjQxLjU1LS40MS41NUgxMDZjLTEuMjQsMC0xLjUxLTEuNTItMS41MS0xLjUyVjE2YzAtLjY3LDEtMSwxLTFoMTAuMzJjMSwwLDEuMjQsMS4yMywxLjI0LDEuMjN2NS45M2MwLDEtMS4yNCwxLjIzLTEuMjQsMS4yM1ptLTEuNTItNC45NXMtLjA4LS42OS0uNjgtLjY5aC01LjY1cy0uNjguMTgtLjY4LjY5VjIwYS42OS42OSwwLDAsMCwuNjguNjloNS42NWEuOS45LDAsMCwwLC42OC0uODNWMTguNDVaTTEwMS4yOCwyOS4xOWgtMi4yYy0uMjksMC0uNDEtLjQyLS40MS0uNDJWMTguNDVjMC0uNjQtLjgzLS44My0uODMtLjgzSDk1Ljc4Yy0uNTgsMC0uNjkuODMtLjY5LjgzVjI4Ljc3YzAsLjM1LS40MS40Mi0uNDEuNDJoLTIuMmMtLjMxLDAtLjQyLS40Mi0uNDItLjQyVjE4LjQ1YzAtLjY2LS44Mi0uODMtLjgyLS44M0g4OS4xN2MtLjYzLDAtLjY4LjgzLS42OC44M1YyOC43N2EuMzkuMzksMCwwLDEtLjQyLjQyaC0yLjJhLjQxLjQxLDAsMCwxLS40MS0uNDJWMTUuNjljMC0uNzUsMS4xLTEuMSwxLjEtMS4xaDEzLjc2YzEuMSwwLDEuMzcsMS4zOCwxLjM3LDEuMzh2MTIuOGMwLC40OC0uNDEuNDItLjQxLjQyWm0tMjAtNS43OUg3Mi44djIuMDdjMCwuNzQsMSwxLDEsMWg2Ljg4YTEuMTksMS4xOSwwLDAsMSwuODMuNDJzLjYsMS4yNS44MiwxLjc5LS40MS41NS0uNDEuNTVINzEuNTZjLTEuMjQsMC0xLjUxLTEuNTItMS41MS0xLjUyVjE2YzAtLjY3LDEtMSwxLTFIODEuMzNjMSwwLDEuMjQsMS4yMywxLjI0LDEuMjN2NS45M2MwLDEtMS4yNCwxLjIzLTEuMjQsMS4yM1ptLTEuNTEtNC45NXMtLjA5LS42OS0uNjktLjY5SDczLjQ5cy0uNjkuMTgtLjY5LjY5VjIwYS42OS42OSwwLDAsMCwuNjkuNjloNS42NGEuOTEuOTEsMCwwLDAsLjY5LS44M1YxOC40NVpNNjgsMjkuMTlINjIuNzZhNC4zNSw0LjM1LDAsMCwxLTQuMTMtNGMwLTMuOTEsMC0xNi4xLDAtMTYuMWgyLjQ4YS43OS43OSwwLDAsMSwuODIuODJWMjQuMzdBMi41OCwyLjU4LDAsMCwwLDYzLjg2LDI2aDIuMnMuNzItLjIzLDEuMjQuNjlsMS4xLDEuOTNzLjA4LjU1LS40MS41NVptLTI2LjU2LS44M1YxMC4xOWExLDEsMCwwLDEsLjY5LTFINTUuMDVjLjczLDAsLjQyLjgzLjQyLjgzcy0uNDEsMS4xMi0uNjksMS42NWExLDEsMCwwLDEtLjgzLjU1SDQ1LjU2YS43Ny43NywwLDAsMC0uODMuNjl2NC41NGg5LjVjLjU1LDAsLjI3LjY5LjI3LjY5cy0uNzEsMS41Mi0xLDEuOTNhMS4wNSwxLjA1LDAsMCwxLS44My40MWgtOHY0LjgyYS45MS45MSwwLDAsMCwuNjkuODNoOC44MWEuODUuODUsMCwwLDEsLjgyLjQxbDEuMjQsMS45M2MuMzcuNTYtLjE0LjY5LS4xNC42OUg0Mi4yNkM0MS42OCwyOS4xOSw0MS40MywyOC4zNiw0MS40MywyOC4zNlptLTguMTQtMS4xNGMwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNTMTguMzIsMzcuMzEsMTcuNCwzNy44M2ExLjY4LDEuNjgsMCwwLDEtMS41MiwwUzEuMDksMjkuMjUuNTUsMjguODdhMS4yOSwxLjI5LDAsMCwxLS41NS0xczAtMTcsMC0xNy43OFMxLDguNzYsMSw4Ljc2TDE1Ljc1LjIxYTIsMiwwLDAsMSwxLjc5LDBTMzAuNiw3LjgsMzIsOC42MmEyLjA4LDIuMDgsMCwwLDEsMS4yNSwyLjA2czAsMTUuMDcsMCwxNi41NFptLTUuOS0xN2MtMy0xLjc0LTEwLjE2LTUuODctMTAuMTYtNS44N2ExLjU4LDEuNTgsMCwwLDAtMS40MSwwTDQuMjIsMTFzLS43Ny40Ni0uNzYsMS4wOFMzLjQ2LDI2LDMuNDYsMjZhMSwxLDAsMCwwLC40My43NWMuNDMuMywxMiw3LDEyLDdhMS4zLDEuMywwLDAsMCwxLjE5LDBjLjcyLS40LDExLjgyLTYuNzksMTEuODItNi43OXMuNjUtLjI4LjY1LTEuNTFjMC0uMzYsMC0xLjc0LDAtMy40N0wxNi41MywyOS44OHYtM2EzLDMsMCwwLDEsMS0yLjA3bDExLjU2LTdhMi40OSwyLjQ5LDAsMCwwLC41NS0xLjQ2YzAtMS4yNywwLTIuMzcsMC0zLjA3TDE2LjUzLDIxLjJWMThhMi4xNywyLjE3LDAsMCwxLC44My0xLjc5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MC4zMiwxMS4yMWgtMi4yNHYtNWMwLS4xMS4xMi0uMjEuMjktLjI0bDEuNDQtLjI2Yy4yNiwwLC41MS4wNy41MS4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDguMDgsOWgyLjI0djUuMTFjMCwuMTEtLjExLjIxLS4yOC4yNWwtMS40NS4yNmMtLjI2LjA1LS41MS0uMDctLjUxLS4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNDUuMDksOWg4LjIyYS40LjQsMCwwLDEsLjQuNHYxLjg1YTAsMCwwLDAsMSwwLDBoLTlhMCwwLDAsMCwxLDAsMFY5LjM2QS40LjQsMCwwLDEsMTQ1LjA5LDlaIi8+PC9nPjwvZz48L3N2Zz4="},null,-1),re={class:"login-right"};S();const le=K(((e,s,t,a,o,r)=>{const l=D("Login"),L=D("ForgetPassword");return y(),h("div",$,[x("div",ee,[x("div",se,[te,x("div",ae,[oe,x("div",null,[x("img",{class:"viteLogo",src:e.viteLogo},null,8,["src"]),x("img",{class:"vueLogo",src:e.vueLogo},null,8,["src"])])])]),x("div",re,[e.showReset?(y(),h(L,{key:1,"show-reset":e.showReset,onToLogin:e.handleToLogin},null,8,["show-reset","onToLogin"])):(y(),h(l,{key:0,onToResetPwd:e.handleResetPwd},null,8,["onToResetPwd"]))])])])}));X.render=le,X.__scopeId="data-v-d29b2dfc";export default X;
