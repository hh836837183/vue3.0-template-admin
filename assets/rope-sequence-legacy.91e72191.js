System.register([],(function(t){"use strict";return{execute:function(){var e=200,n=function(){};n.prototype.append=function(t){return t.length?(t=n.from(t),!this.length&&t||t.length<e&&this.leafAppend(t)||this.length<e&&t.leafPrepend(this)||this.appendInner(t)):this},n.prototype.prepend=function(t){return t.length?n.from(t).append(this):this},n.prototype.appendInner=function(t){return new i(this,t)},n.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.length),t>=e?n.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e))},n.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)},n.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)},n.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(e,n){return r.push(t(e,n))}),e,n),r},n.from=function(t){return t instanceof n?t:t&&t.length?new r(t):n.empty};var r=function(t){function n(e){t.call(this),this.values=e}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var r={length:{configurable:!0},depth:{configurable:!0}};return n.prototype.flatten=function(){return this.values},n.prototype.sliceInner=function(t,e){return 0==t&&e==this.length?this:new n(this.values.slice(t,e))},n.prototype.getInner=function(t){return this.values[t]},n.prototype.forEachInner=function(t,e,n,r){for(var i=e;i<n;i++)if(!1===t(this.values[i],r+i))return!1},n.prototype.forEachInvertedInner=function(t,e,n,r){for(var i=e-1;i>=n;i--)if(!1===t(this.values[i],r+i))return!1},n.prototype.leafAppend=function(t){if(this.length+t.length<=e)return new n(this.values.concat(t.flatten()))},n.prototype.leafPrepend=function(t){if(this.length+t.length<=e)return new n(t.flatten().concat(this.values))},r.length.get=function(){return this.values.length},r.depth.get=function(){return 0},Object.defineProperties(n.prototype,r),n}(n);n.empty=new r([]);var i=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,e,n,r){var i=this.left.length;return!(e<i&&!1===this.left.forEachInner(t,e,Math.min(n,i),r))&&!(n>i&&!1===this.right.forEachInner(t,Math.max(e-i,0),Math.min(this.length,n)-i,r+i))&&void 0},e.prototype.forEachInvertedInner=function(t,e,n,r){var i=this.left.length;return!(e>i&&!1===this.right.forEachInvertedInner(t,e-i,Math.max(n,i)-i,r+i))&&!(n<i&&!1===this.left.forEachInvertedInner(t,Math.min(e,i),n,r))&&void 0},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n))},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)return new e(this.left,n)},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)return new e(n,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}(n);t("r",n)}}}));
