var t,n="undefined"!=typeof Float32Array?Float32Array:Array;function r(t,n){var r=n[0],a=n[1],u=n[2],o=n[3],e=n[4],i=n[5],s=n[6],f=n[7],c=n[8],h=c*e-i*f,M=-c*o+i*s,v=f*o-e*s,y=r*h+a*M+u*v;return y?(y=1/y,t[0]=h*y,t[1]=(-c*a+u*f)*y,t[2]=(i*a-u*e)*y,t[3]=M*y,t[4]=(c*r-u*s)*y,t[5]=(-i*r+u*o)*y,t[6]=v*y,t[7]=(-f*r+a*s)*y,t[8]=(e*r-a*o)*y,t):null}function a(t,n,r){var a=n[0],u=n[1],o=n[2],e=n[3],i=n[4],s=n[5],f=n[6],c=n[7],h=n[8],M=r[0],v=r[1],y=r[2],l=r[3],m=r[4],p=r[5],q=r[6],A=r[7],x=r[8];return t[0]=M*a+v*e+y*f,t[1]=M*u+v*i+y*c,t[2]=M*o+v*s+y*h,t[3]=l*a+m*e+p*f,t[4]=l*u+m*i+p*c,t[5]=l*o+m*s+p*h,t[6]=q*a+A*e+x*f,t[7]=q*u+A*i+x*c,t[8]=q*o+A*s+x*h,t}function u(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function o(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=-r,t[4]=a,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function e(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function i(t,n,r){var a=n[0],u=n[1],o=n[2];return t[0]=a*r[0]+u*r[3]+o*r[6],t[1]=a*r[1]+u*r[4]+o*r[7],t[2]=a*r[2]+u*r[5]+o*r[8],t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function f(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function c(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function h(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function M(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function v(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.hypot(r,a)}function y(t){var n=t[0],r=t[1];return Math.hypot(n,r)}function l(t,n){var r=n[0],a=n[1],u=r*r+a*a;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t}function m(t,n){return t[0]*n[0]+t[1]*n[1]}function p(t,n,r){var a=n[0],u=n[1];return t[0]=r[0]*a+r[3]*u+r[6],t[1]=r[1]*a+r[4]*u+r[7],t}function q(t,n){var r=t[0],a=t[1],u=n[0],o=n[1],e=Math.sqrt(r*r+a*a)*Math.sqrt(u*u+o*o),i=e&&(r*u+a*o)/e;return Math.acos(Math.min(Math.max(i,-1),1))}function A(t,n){return t[0]===n[0]&&t[1]===n[1]}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)}),t=new n(3),n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0);var x=f;!function(){var t=function(){var t=new n(2);return n!=Float32Array&&(t[0]=0,t[1]=0),t}()}();export{q as a,u as b,e as c,m as d,A as e,o as f,p as g,M as h,r as i,c as j,h as k,y as l,a as m,l as n,x as o,v as p,s as q,f as s,i as t};
