!function(){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}System.register(["./color-legacy.a0621721.js","./ms-legacy.cebf7032.js"],(function(n){"use strict";var t,r;return{setters:[function(e){t=e.c},function(e){r=e.m}],execute:function(){var o=n("l",{}),a=function(e,n,t){for(var r=0,o={},a=0;a<t.length;a++)if(e==t.substr(a,e.length))"start"in o||(o.start=a),r++;else if(n==t.substr(a,n.length)&&"start"in o&&!--r)return o.end=a,o.pre=t.substr(0,o.start),o.body=o.end-o.start>1?t.substring(o.start+e.length,o.end):"",o.post=t.slice(o.end+n.length),o},s={exports:{}};var i=function(e){function n(e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}function t(e){var r;function s(){if(s.enabled){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var a=s,i=Number(new Date),u=i-(r||i);a.diff=u,a.prev=r,a.curr=i,r=i,n[0]=t.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var c=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,(function(e,r){if("%%"===e)return e;c++;var o=t.formatters[r];if("function"==typeof o){var s=n[c];e=o.call(a,s),n.splice(c,1),c--}return e})),t.formatArgs.call(a,n);var f=a.log||t.log;f.apply(a,n)}}return s.namespace=e,s.enabled=t.enabled(e),s.useColors=t.useColors(),s.color=n(e),s.destroy=o,s.extend=a,"function"==typeof t.init&&t.init(s),t.instances.push(s),s}function o(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}function a(e,n){return t(this.namespace+(void 0===n?":":n)+e)}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){t.enable("")},t.enable=function(e){var n;t.save(e),t.names=[],t.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){var a=t.instances[n];a.enabled=t.enabled(a.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=r,Object.keys(e).forEach((function(n){t[n]=e[n]})),t.instances=[],t.names=[],t.skips=[],t.formatters={},t.selectColor=n,t.enable(t.load()),t};!function(n,t){function r(n){return(r="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(n){return e(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":e(n)})(n)}t.log=function(){var e;return"object"===("undefined"==typeof console?"undefined":r(console))&&console.log&&(e=console).log.apply(e,arguments)},t.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;var t="color: "+this.color;e.splice(1,0,t,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))})),e.splice(o,0,t)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(n){}},t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(n){}!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.exports=i(t),n.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}}(s,s.exports);var u=a,c=s.exports("css-color-function:parse"),f=function(e){"string"!=typeof e&&(e=e.toString());function n(n){var t=n.exec(e);if(t)return e=e.slice(t[0].length),t.slice(1)}function t(){n(/^\s+/)}function r(){var e=n(/^([\+\-\*])/);if(e){var t={type:"modifier"};return t.value=e[0],c("modifier %o",t),t}}function o(){var e=n(/^([^\)\s]+)/);if(e){var t={type:"number"};return t.value=e[0],c("number %o",t),t}}function a(){var e=n(/^(\w+)\(/);if(e){t();var a={type:"function"};return a.name=e[0],a.arguments=function(){for(var e,n=[];e=r()||i()||o();)n.push(e),t();return c("args %o",n),n}(),function(){var e=n(/^\)/);if(e)c("rparen")}(),c("adjuster %o",a),a}}function s(){var e={type:"color"},r=n(/([^\)\s]+)/)[0];-1!=r.indexOf("(")&&(r+=n(/([^\)]*?\))/)[0]);return e.value=r,t(),e}function i(){if(e.match(/^color\(/)){var n=u("(",")",e);if(!n)throw new SyntaxError("Missing closing parenthese for '"+e+"'");if(""===n.body)throw new SyntaxError("color() function cannot be empty");e=n.body,t();var r,o={};for(o.type="function",o.name="color",o.arguments=[i()||s()],c("function arguments %o",o.arguments);r=a();)o.arguments.push(r),t();return e=n.post,t(),c("function %o",o),o}}return c("string %s",e),i()};var l={};!function(e){var n=t;function r(e){return function(n,t){var r;"modifier"==t[0].type&&(r=t.shift().value);var o=t[0].value;-1!=o.indexOf("%")?(o=parseInt(o,10)/100,r?"*"!=r&&(o=n[e]()*o):o*="alpha"==e?1:255):o=Number(o),n[e](a(n[e](),o,r))}}function o(e){return function(n,t){var r;"modifier"==t[0].type&&(r=t.shift().value);var o=parseFloat(t[0].value,10);n[e](a(n[e](),o,r))}}function a(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"*":return e*n;default:return n}}e.red=r("red"),e.blue=r("blue"),e.green=r("green"),e.alpha=e.a=r("alpha"),e.rgb=function(){},e.hue=e.h=o("hue"),e.saturation=e.s=o("saturation"),e.lightness=e.l=o("lightness"),e.whiteness=e.w=o("whiteness"),e.blackness=e.b=o("blackness"),e.blend=function(e,t){var r=e.alpha();e.alpha(1);var o=new n(t[0].value),a=1-parseInt(t[1].value,10)/100;e.mix(o,a).alpha(r)},e.tint=function(n,t){t.unshift({type:"argument",value:"white"}),e.blend(n,t)},e.shade=function(n,t){t.unshift({type:"argument",value:"black"}),e.blend(n,t)},e.contrast=function(e,t){0==t.length&&t.push({type:"argument",value:"100%"});var r=1-parseInt(t[0].value,10)/100,o=e.luminosity()<.5?new n({h:e.hue(),w:100,b:0}):new n({h:e.hue(),w:0,b:100}),a=o;if(e.contrast(o)>4.5){var s=(a=function(e,n,t){n.hue();var r=n.clone(),o=n.whiteness(),a=n.blackness(),s=t.whiteness(),i=t.blackness();for(;Math.abs(o-s)>1||Math.abs(a-i)>1;){var u=Math.round((s+o)/2),c=Math.round((i+a)/2);r.whiteness(u),r.blackness(c),r.contrast(n)>e?(s=u,i=c):(o=u,a=c)}return r}(4.5,e,o)).alpha();a.alpha(1),a.mix(o,r).alpha(s)}e.hwb(a.hwb())}}(l);var C=a,p=t,g=f,h=l;function d(e){var n=new p("function"==e.arguments[0].type?d(e.arguments[0]):e.arguments[0].value);return e.arguments.slice(1).forEach((function(e){var t=e.name;if(!h[t])throw new Error("Unknown <color-adjuster> '"+t+"'");e.arguments.forEach((function(e){"function"==e.type&&"color"==e.name&&(e.value=d(e),e.type="color",delete e.name)})),h[t](n,e.arguments)})),n.rgbString()}var m=function e(n){var t=n.indexOf("color(");if(-1==t)return n;if(n=n.slice(t),!(n=C("(",")",n)))throw new SyntaxError("Missing closing parenthese for '"+n+"'");return d(g("color("+n.body+")"))+e(n.post)},v=f;o.convert=m,o.parse=v}}}))}();
