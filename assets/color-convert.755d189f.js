import{c as r}from"./color-name.e7a4e1d3.js";var n={exports:{}},a=r,t={};for(var e in a)a.hasOwnProperty(e)&&(t[a[e]]=e);var o=n.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var h in o)if(o.hasOwnProperty(h)){if(!("channels"in o[h]))throw new Error("missing channels property: "+h);if(!("labels"in o[h]))throw new Error("missing channel labels property: "+h);if(o[h].labels.length!==o[h].channels)throw new Error("channel and label counts mismatch: "+h);var c=o[h].channels,u=o[h].labels;delete o[h].channels,delete o[h].labels,Object.defineProperty(o[h],"channels",{value:c}),Object.defineProperty(o[h],"labels",{value:u})}o.rgb.hsl=function(r){var n,a,t=r[0]/255,e=r[1]/255,o=r[2]/255,h=Math.min(t,e,o),c=Math.max(t,e,o),u=c-h;return c===h?n=0:t===c?n=(e-o)/u:e===c?n=2+(o-t)/u:o===c&&(n=4+(t-e)/u),(n=Math.min(60*n,360))<0&&(n+=360),a=(h+c)/2,[n,100*(c===h?0:a<=.5?u/(c+h):u/(2-c-h)),100*a]},o.rgb.hsv=function(r){var n,a,t,e,o,h=r[0]/255,c=r[1]/255,u=r[2]/255,s=Math.max(h,c,u),i=s-Math.min(h,c,u),l=function(r){return(s-r)/6/i+.5};return 0===i?e=o=0:(o=i/s,n=l(h),a=l(c),t=l(u),h===s?e=t-a:c===s?e=1/3+n-t:u===s&&(e=2/3+a-n),e<0?e+=1:e>1&&(e-=1)),[360*e,100*o,100*s]},o.rgb.hwb=function(r){var n=r[0],a=r[1],t=r[2];return[o.rgb.hsl(r)[0],100*(1/255*Math.min(n,Math.min(a,t))),100*(t=1-1/255*Math.max(n,Math.max(a,t)))]},o.rgb.cmyk=function(r){var n,a=r[0]/255,t=r[1]/255,e=r[2]/255;return[100*((1-a-(n=Math.min(1-a,1-t,1-e)))/(1-n)||0),100*((1-t-n)/(1-n)||0),100*((1-e-n)/(1-n)||0),100*n]},o.rgb.keyword=function(r){var n=t[r];if(n)return n;var e,o,h,c=1/0;for(var u in a)if(a.hasOwnProperty(u)){var s=a[u],i=(o=r,h=s,Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)+Math.pow(o[2]-h[2],2));i<c&&(c=i,e=u)}return e},o.keyword.rgb=function(r){return a[r]},o.rgb.xyz=function(r){var n=r[0]/255,a=r[1]/255,t=r[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*n+.7152*a+.0722*t),100*(.0193*n+.1192*a+.9505*t)]},o.rgb.lab=function(r){var n=o.rgb.xyz(r),a=n[0],t=n[1],e=n[2];return t/=100,e/=108.883,a=(a/=95.047)>.008856?Math.pow(a,1/3):7.787*a+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(a-t),200*(t-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},o.hsl.rgb=function(r){var n,a,t,e,o,h=r[0]/360,c=r[1]/100,u=r[2]/100;if(0===c)return[o=255*u,o,o];n=2*u-(a=u<.5?u*(1+c):u+c-u*c),e=[0,0,0];for(var s=0;s<3;s++)(t=h+1/3*-(s-1))<0&&t++,t>1&&t--,o=6*t<1?n+6*(a-n)*t:2*t<1?a:3*t<2?n+(a-n)*(2/3-t)*6:n,e[s]=255*o;return e},o.hsl.hsv=function(r){var n=r[0],a=r[1]/100,t=r[2]/100,e=a,o=Math.max(t,.01);return a*=(t*=2)<=1?t:2-t,e*=o<=1?o:2-o,[n,100*(0===t?2*e/(o+e):2*a/(t+a)),100*((t+a)/2)]},o.hsv.rgb=function(r){var n=r[0]/60,a=r[1]/100,t=r[2]/100,e=Math.floor(n)%6,o=n-Math.floor(n),h=255*t*(1-a),c=255*t*(1-a*o),u=255*t*(1-a*(1-o));switch(t*=255,e){case 0:return[t,u,h];case 1:return[c,t,h];case 2:return[h,t,u];case 3:return[h,c,t];case 4:return[u,h,t];case 5:return[t,h,c]}},o.hsv.hsl=function(r){var n,a,t,e=r[0],o=r[1]/100,h=r[2]/100,c=Math.max(h,.01);return t=(2-o)*h,a=o*c,[e,100*(a=(a/=(n=(2-o)*c)<=1?n:2-n)||0),100*(t/=2)]},o.hwb.rgb=function(r){var n,a,t,e,o,h,c,u=r[0]/360,s=r[1]/100,i=r[2]/100,l=s+i;switch(l>1&&(s/=l,i/=l),t=6*u-(n=Math.floor(6*u)),0!=(1&n)&&(t=1-t),e=s+t*((a=1-i)-s),n){default:case 6:case 0:o=a,h=e,c=s;break;case 1:o=e,h=a,c=s;break;case 2:o=s,h=a,c=e;break;case 3:o=s,h=e,c=a;break;case 4:o=e,h=s,c=a;break;case 5:o=a,h=s,c=e}return[255*o,255*h,255*c]},o.cmyk.rgb=function(r){var n=r[0]/100,a=r[1]/100,t=r[2]/100,e=r[3]/100;return[255*(1-Math.min(1,n*(1-e)+e)),255*(1-Math.min(1,a*(1-e)+e)),255*(1-Math.min(1,t*(1-e)+e))]},o.xyz.rgb=function(r){var n,a,t,e=r[0]/100,o=r[1]/100,h=r[2]/100;return a=-.9689*e+1.8758*o+.0415*h,t=.0557*e+-.204*o+1.057*h,n=(n=3.2406*e+-1.5372*o+-.4986*h)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(n=Math.min(Math.max(0,n),1)),255*(a=Math.min(Math.max(0,a),1)),255*(t=Math.min(Math.max(0,t),1))]},o.xyz.lab=function(r){var n=r[0],a=r[1],t=r[2];return a/=100,t/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116)-16,500*(n-a),200*(a-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},o.lab.xyz=function(r){var n,a,t,e=r[0];n=r[1]/500+(a=(e+16)/116),t=a-r[2]/200;var o=Math.pow(a,3),h=Math.pow(n,3),c=Math.pow(t,3);return a=o>.008856?o:(a-16/116)/7.787,n=h>.008856?h:(n-16/116)/7.787,t=c>.008856?c:(t-16/116)/7.787,[n*=95.047,a*=100,t*=108.883]},o.lab.lch=function(r){var n,a=r[0],t=r[1],e=r[2];return(n=360*Math.atan2(e,t)/2/Math.PI)<0&&(n+=360),[a,Math.sqrt(t*t+e*e),n]},o.lch.lab=function(r){var n,a=r[0],t=r[1];return n=r[2]/360*2*Math.PI,[a,t*Math.cos(n),t*Math.sin(n)]},o.rgb.ansi16=function(r){var n=r[0],a=r[1],t=r[2],e=1 in arguments?arguments[1]:o.rgb.hsv(r)[2];if(0===(e=Math.round(e/50)))return 30;var h=30+(Math.round(t/255)<<2|Math.round(a/255)<<1|Math.round(n/255));return 2===e&&(h+=60),h},o.hsv.ansi16=function(r){return o.rgb.ansi16(o.hsv.rgb(r),r[2])},o.rgb.ansi256=function(r){var n=r[0],a=r[1],t=r[2];return n===a&&a===t?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(a/255*5)+Math.round(t/255*5)},o.ansi16.rgb=function(r){var n=r%10;if(0===n||7===n)return r>50&&(n+=3.5),[n=n/10.5*255,n,n];var a=.5*(1+~~(r>50));return[(1&n)*a*255,(n>>1&1)*a*255,(n>>2&1)*a*255]},o.ansi256.rgb=function(r){if(r>=232){var n=10*(r-232)+8;return[n,n,n]}var a;return r-=16,[Math.floor(r/36)/5*255,Math.floor((a=r%36)/6)/5*255,a%6/5*255]},o.rgb.hex=function(r){var n=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},o.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var a=n[0];3===n[0].length&&(a=a.split("").map((function(r){return r+r})).join(""));var t=parseInt(a,16);return[t>>16&255,t>>8&255,255&t]},o.rgb.hcg=function(r){var n,a=r[0]/255,t=r[1]/255,e=r[2]/255,o=Math.max(Math.max(a,t),e),h=Math.min(Math.min(a,t),e),c=o-h;return n=c<=0?0:o===a?(t-e)/c%6:o===t?2+(e-a)/c:4+(a-t)/c+4,n/=6,[360*(n%=1),100*c,100*(c<1?h/(1-c):0)]},o.hsl.hcg=function(r){var n=r[1]/100,a=r[2]/100,t=1,e=0;return(t=a<.5?2*n*a:2*n*(1-a))<1&&(e=(a-.5*t)/(1-t)),[r[0],100*t,100*e]},o.hsv.hcg=function(r){var n=r[1]/100,a=r[2]/100,t=n*a,e=0;return t<1&&(e=(a-t)/(1-t)),[r[0],100*t,100*e]},o.hcg.rgb=function(r){var n=r[0]/360,a=r[1]/100,t=r[2]/100;if(0===a)return[255*t,255*t,255*t];var e,o=[0,0,0],h=n%1*6,c=h%1,u=1-c;switch(Math.floor(h)){case 0:o[0]=1,o[1]=c,o[2]=0;break;case 1:o[0]=u,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=c;break;case 3:o[0]=0,o[1]=u,o[2]=1;break;case 4:o[0]=c,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=u}return e=(1-a)*t,[255*(a*o[0]+e),255*(a*o[1]+e),255*(a*o[2]+e)]},o.hcg.hsv=function(r){var n=r[1]/100,a=n+r[2]/100*(1-n),t=0;return a>0&&(t=n/a),[r[0],100*t,100*a]},o.hcg.hsl=function(r){var n=r[1]/100,a=r[2]/100*(1-n)+.5*n,t=0;return a>0&&a<.5?t=n/(2*a):a>=.5&&a<1&&(t=n/(2*(1-a))),[r[0],100*t,100*a]},o.hcg.hwb=function(r){var n=r[1]/100,a=n+r[2]/100*(1-n);return[r[0],100*(a-n),100*(1-a)]},o.hwb.hcg=function(r){var n=r[1]/100,a=1-r[2]/100,t=a-n,e=0;return t<1&&(e=(a-t)/(1-t)),[r[0],100*t,100*e]},o.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},o.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},o.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},o.gray.hsl=o.gray.hsv=function(r){return[0,0,r[0]]},o.gray.hwb=function(r){return[0,100,r[0]]},o.gray.cmyk=function(r){return[0,0,0,r[0]]},o.gray.lab=function(r){return[r[0],0,0]},o.gray.hex=function(r){var n=255&Math.round(r[0]/100*255),a=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(a.length)+a},o.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]};var s=n.exports;function i(r){var n=function(){for(var r={},n=Object.keys(s),a=n.length,t=0;t<a;t++)r[n[t]]={distance:-1,parent:null};return r}(),a=[r];for(n[r].distance=0;a.length;)for(var t=a.pop(),e=Object.keys(s[t]),o=e.length,h=0;h<o;h++){var c=e[h],u=n[c];-1===u.distance&&(u.distance=n[t].distance+1,u.parent=t,a.unshift(c))}return n}function l(r,n){return function(a){return n(r(a))}}function f(r,n){for(var a=[n[r].parent,r],t=s[n[r].parent][r],e=n[r].parent;n[e].parent;)a.unshift(n[e].parent),t=l(s[n[e].parent][e],t),e=n[e].parent;return t.conversion=a,t}var b=n.exports,v=function(r){for(var n=i(r),a={},t=Object.keys(n),e=t.length,o=0;o<e;o++){var h=t[o];null!==n[h].parent&&(a[h]=f(h,n))}return a},g={};Object.keys(b).forEach((function(r){g[r]={},Object.defineProperty(g[r],"channels",{value:b[r].channels}),Object.defineProperty(g[r],"labels",{value:b[r].labels});var n=v(r);Object.keys(n).forEach((function(a){var t=n[a];g[r][a]=function(r){var n=function(n){if(null==n)return n;arguments.length>1&&(n=Array.prototype.slice.call(arguments));var a=r(n);if("object"==typeof a)for(var t=a.length,e=0;e<t;e++)a[e]=Math.round(a[e]);return a};return"conversion"in r&&(n.conversion=r.conversion),n}(t),g[r][a].raw=function(r){var n=function(n){return null==n?n:(arguments.length>1&&(n=Array.prototype.slice.call(arguments)),r(n))};return"conversion"in r&&(n.conversion=r.conversion),n}(t)}))}));var M=g;export{M as c};
