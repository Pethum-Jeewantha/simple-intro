parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SCC0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.y=exports.x=void 0;var e=null,o=-1;exports.x=o;var t=-1;exports.y=t,$(document).on("mousemove",function(c){exports.x=o=c.pageX,exports.y=t=c.pageY,!e&&$("#circle").show(),e&&clearTimeout(e),e=setTimeout(function(){$("#circle").fadeOut(),e=null},2e3),$("#circle").offset({left:o-$("#circle").width()/2,top:t-$("#circle").height()/2})}),$(document).on("mouseenter",function(){$("#circle").show()}),$(document).on("mouseleave",function(){$("#circle").fadeOut()});
},{}],"VxMW":[function(require,module,exports) {
"use strict";var t=["Welcome...!","I'm Pethum Jeewantha"],e=0,n=0;setInterval(function(){$("#text").html(t[n].substring(0,e+1)),e===t[n].length+30&&(e=0,++n===t.length&&(n=0)),e++},50);
},{}],"TuhL":[function(require,module,exports) {
"use strict";var t=require("./mouse-listener.js");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var h=0;h<e.length;h++){var i=e[h];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&h(t.prototype,e),i&&h(t,i),t}for(var s=function(){function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e(this,h),this.dy=t,this.dx=i,this.elm=$('<div class="moveable"></div>'),this.dy=1+10*Math.random()*Math.sin(361*Math.random()*Math.PI/180),this.dx=1+10*Math.random()*Math.sin(361*Math.random()*Math.PI/180),this.elm.css("background-color","rgb(".concat(256*Math.random(),", ").concat(256*Math.random(),", ").concat(256*Math.random(),")")),this.elm.css("border-radius","".concat(Math.floor(101*Math.random()),"%")),this.elm.css("transform","rotate(".concat(361*Math.random(),"deg) scale(").concat(Math.random(),")")),$("body").append(this.elm),this.elm.offset({top:Math.random()*($(window).height()-this.elm.height()),left:Math.random()*($(window).width()-this.elm.width())})}return i(h,[{key:"move",value:function(){var e=this.elm.offset().top,h=this.elm.offset().left;if(-1!==t.x&&-1!==t.y){var i=h+this.elm.width()/2,s=e+this.elm.height()/2,a=i-t.x,o=s-t.y,n=Math.hypot(i-t.x,s-t.y),r=$("#circle").width()/2+15;n<=r&&(a>0?(this.elm.offset({left:h+(r-a)}),h+=r-a):(this.elm.offset({left:h-(r-Math.abs(a))-this.elm.width()}),h=h-(r-Math.abs(a))-this.elm.width()),o>0?(this.elm.offset({top:e+(r-o)}),e+=r-o):(this.elm.offset({top:e-(r-Math.abs(o))-this.elm.height()}),e=e-(r-Math.abs(o))-this.elm.height()),this.dx=-this.dx,this.dy=-this.dy)}this.elm.offset({top:e+this.dy,left:h+this.dx}),e=this.elm.offset().top,h=this.elm.offset().left,(e<=0||e+this.elm.height()>=$(window).height())&&(this.dy=-this.dy),(h<=0||h+this.elm.width()>=$(window).width())&&(this.dx=-this.dx)}}]),h}(),a=[],o=0;o<50;o++)a.push(new s);setInterval(function(){return a.forEach(function(t){return t.move()})},15);
},{"./mouse-listener.js":"SCC0"}],"d6sW":[function(require,module,exports) {
"use strict";require("./mouse-listener.js"),require("./type-writing.js"),require("./background-effect.js");
},{"./mouse-listener.js":"SCC0","./type-writing.js":"VxMW","./background-effect.js":"TuhL"}]},{},["d6sW"], null)
//# sourceMappingURL=/simple-intro/main.41834356.js.map