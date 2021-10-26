import{r as e}from"./vue.1f809ab3.js";import{r as t}from"./cropperjs.231dfb32.js";var r={};Object.defineProperty(r,"__esModule",{value:!0});var o,n=e,a=(o=t)&&o.__esModule?o:{default:o};var i="undefined"==typeof window?[String,Array]:[String,Array,Element,NodeList],p=r.default={render:function(){var e=this.crossorigin||void 0;return(0,n.h)("div",{style:this.containerStyle},[(0,n.h)("img",{ref:"img",src:this.src,alt:this.alt||"image",style:[{"max-width":"100%"},this.imgStyle],crossorigin:e})])},props:{containerStyle:Object,src:{type:String,default:""},alt:String,imgStyle:Object,viewMode:Number,dragMode:String,initialAspectRatio:Number,aspectRatio:Number,data:Object,preview:i,responsive:{type:Boolean,default:!0},restore:{type:Boolean,default:!0},checkCrossOrigin:{type:Boolean,default:!0},checkOrientation:{type:Boolean,default:!0},crossorigin:{type:String},modal:{type:Boolean,default:!0},guides:{type:Boolean,default:!0},center:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},background:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!0},autoCropArea:Number,movable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!0},scalable:{type:Boolean,default:!0},zoomable:{type:Boolean,default:!0},zoomOnTouch:{type:Boolean,default:!0},zoomOnWheel:{type:Boolean,default:!0},wheelZoomRatio:Number,cropBoxMovable:{type:Boolean,default:!0},cropBoxResizable:{type:Boolean,default:!0},toggleDragModeOnDblclick:{type:Boolean,default:!0},minCanvasWidth:Number,minCanvasHeight:Number,minCropBoxWidth:Number,minCropBoxHeight:Number,minContainerWidth:Number,minContainerHeight:Number,ready:Function,cropstart:Function,cropmove:Function,cropend:Function,crop:Function,zoom:Function},mounted:function(){var e=this.$options.props;e.containerStyle,e.src,e.alt,e.imgStyle;var t=function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["containerStyle","src","alt","imgStyle"]),r={};for(var o in t)void 0!==this[o]&&(r[o]=this[o]);this.cropper=new a.default(this.$refs.img,r)},methods:{reset:function(){return this.cropper.reset()},clear:function(){return this.cropper.clear()},initCrop:function(){return this.cropper.crop()},replace:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.cropper.replace(e,t)},enable:function(){return this.cropper.enable()},disable:function(){return this.cropper.disable()},destroy:function(){return this.cropper.destroy()},move:function(e,t){return this.cropper.move(e,t)},moveTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this.cropper.moveTo(e,t)},relativeZoom:function(e,t){return this.cropper.zoom(e,t)},zoomTo:function(e,t){return this.cropper.zoomTo(e,t)},rotate:function(e){return this.cropper.rotate(e)},rotateTo:function(e){return this.cropper.rotateTo(e)},scaleX:function(e){return this.cropper.scaleX(e)},scaleY:function(e){return this.cropper.scaleY(e)},scale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this.cropper.scale(e,t)},getData:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.cropper.getData(e)},setData:function(e){return this.cropper.setData(e)},getContainerData:function(){return this.cropper.getContainerData()},getImageData:function(){return this.cropper.getImageData()},getCanvasData:function(){return this.cropper.getCanvasData()},setCanvasData:function(e){return this.cropper.setCanvasData(e)},getCropBoxData:function(){return this.cropper.getCropBoxData()},setCropBoxData:function(e){return this.cropper.setCropBoxData(e)},getCroppedCanvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.cropper.getCroppedCanvas(e)},setAspectRatio:function(e){return this.cropper.setAspectRatio(e)},setDragMode:function(e){return this.cropper.setDragMode(e)}}};export{p as _};
