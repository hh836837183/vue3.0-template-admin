var e={},t={},n={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=1;e.default=function(){return"".concat(t++)}}(n);var r={},o={},i={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];clearTimeout(n),n=setTimeout((function(){e.apply(r,i)}),t)}}}(i);var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.SensorTabIndex=s.SensorClassName=s.SizeSensorId=void 0;s.SizeSensorId="size-sensor-id";s.SensorClassName="size-sensor-object";s.SensorTabIndex="-1",Object.defineProperty(o,"__esModule",{value:!0}),o.createSensor=void 0;var d,u=(d=i)&&d.__esModule?d:{default:d},a=s;o.createSensor=function(e){var t=void 0,n=[],r=(0,u.default)((function(){n.forEach((function(t){t(e)}))})),o=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",r),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(o){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",r),r()},t.style.display="block",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.style.overflow="hidden",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0",t.setAttribute("class",a.SensorClassName),t.setAttribute("tabindex",a.SensorTabIndex),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(o)&&n.push(o)},destroy:o,unbind:function(e){var r=n.indexOf(e);-1!==r&&n.splice(r,1),0===n.length&&t&&o()}}};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.createSensor=void 0;var c=function(e){return e&&e.__esModule?e:{default:e}}(i);l.createSensor=function(e){var t=void 0,n=[],r=(0,c.default)((function(){n.forEach((function(t){t(e)}))})),o=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(o){var i;t||((i=new ResizeObserver(r)).observe(e),r(),t=i),-1===n.indexOf(o)&&n.push(o)},destroy:o,unbind:function(e){var r=n.indexOf(e);-1!==r&&n.splice(r,1),0===n.length&&t&&o()}}},Object.defineProperty(r,"__esModule",{value:!0}),r.createSensor=void 0;var v=o,f="undefined"!=typeof ResizeObserver?l.createSensor:v.createSensor;r.createSensor=f,Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var b=function(e){return e&&e.__esModule?e:{default:e}}(n),S=r,p=s;var y={};t.getSensor=function(e){var t=e.getAttribute(p.SizeSensorId);if(t&&y[t])return y[t];var n=(0,b.default)();e.setAttribute(p.SizeSensorId,n);var r=(0,S.createSensor)(e);return y[n]=r,r};t.removeSensor=function(e){var t=e.element.getAttribute(p.SizeSensorId);e.element.removeAttribute(p.SizeSensorId),e.destroy(),t&&y[t]&&delete y[t]},Object.defineProperty(e,"__esModule",{value:!0}),e.ver=e.clear=e.bind=void 0;var m=t,_=e.bind=function(e,t){var n=(0,m.getSensor)(e);return n.bind(t),function(){n.unbind(t)}};e.clear=function(e){var t=(0,m.getSensor)(e);(0,m.removeSensor)(t)};e.ver="1.0.1";export{_ as b};
