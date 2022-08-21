/*! For license information please see itemslide.min.js.LICENSE.txt */
(()=>{var e={297:(e,t,n)=>{e.exports=function(e){var t,n,i,r,a=this,d=e.vars,o=e.options,l=e.$el;function s(t){return-(e.getSlidesWidth(!1,t)-(l.parent().outerWidth(!0)-l.children().eq(t).outerWidth(!0))/(o.left_sided?1:2))}function c(){var e=Date.now()-r;o.left_sided&&(a.currentLandPos=clamp(-(d.allSlidesWidth-l.parent().width()),0,a.currentLandPos)),l.trigger("changePos"),l.translate3d(i-easeOutBack(e,0,i-a.currentLandPos,t,n)),e>=t?l.translate3d(a.currentLandPos):a.slidesGlobalID=requestAnimationFrame(c)}a.gotoSlideByIndex=function(e,u){var h;e>=l.children().length-1||e<=0?(h=!0,e=Math.min(Math.max(e,0),l.children().length-1)):h=!1,function(e){l.children(":nth-child("+(d.currentIndex+1||0)+")").removeClass("itemslide-active"),l.children(":nth-child("+(e+1||0)+")").addClass("itemslide-active"),e!=o.currentIndex&&(d.currentIndex=e,l.trigger("changeActiveIndex"))}(e),t=Math.max(o.duration-1920/$(window).width()*Math.abs(d.velocity)*9*(o.duration/230)-(a.isOutBoundaries()?d.distanceFromStart/15:0)*(o.duration/230),50),n=h?250*Math.abs(d.velocity)/$(window).width():0,i=l.translate3d().x,a.currentLandPos=s(e),u?l.translate3d(s(e)):(window.cancelAnimationFrame(a.slidesGlobalID),r=Date.now(),a.slidesGlobalID=window.requestAnimationFrame(c))},a.getLandingSlideIndex=function(t){for(var n=0;n<l.children().length;n++)if(e.getSlidesWidth(!1,n)+l.children().eq(n).outerWidth(!0)/2-l.children().eq(n).outerWidth(!0)*o.pan_threshold*d.direction-s(0)>t)return o.one_item?n!=d.currentIndex?d.currentIndex+d.direction:d.currentIndex:n;return o.one_item?d.currentIndex+1:l.children().length-1},a.isOutBoundaries=function(){return Math.floor(l.translate3d().x)>s(0)&&-1==d.direction||Math.ceil(l.translate3d().x)<s(l.children().length-1)&&1==d.direction}},n.g.matrixToArray=function(e){return e.substr(7,e.length-8).split(", ")},n.g.easeOutBack=function(e,t,n,i,r){return null==r&&(r=1.70158),n*((e=e/i-1)*e*((r+1)*e+r)+1)+t},$.fn.translate3d=function(e,t){if(null==e){var n=matrixToArray(this.css("transform"));if(null!=$.fn.jquery)return{x:isExplorer?parseFloat(n[12]):parseFloat(n[4]),y:isExplorer?parseFloat(n[13]):parseFloat(n[5])};var i=this.css("transform").replace("translate3d","").replace("(","").replace(")","").replace(" ","").replace("px","").split(",");return{x:parseFloat(i[0]),y:parseFloat(i[1])}}this.css("transform","translate3d("+e+"px,"+(t||0)+"px, 0px)")},n.g.clamp=function(e,t,n){return Math.min(Math.max(n,e),t)},n.g.getCurrentTotalWidth=function(e){var t=0;return e.children().each((function(){t+=$(this).outerWidth(!0)})),t}},71:(e,t,n)=>{var i=n(609),r=n(297),a=n(380),d=n(434);e.exports={create:function(e,t){var n=this;n.$el=t,n.options=e,n.options.parent_width&&(t.get()[0].style.width=t.parent().outerWidth(!0)),t.css({"user-select":"none"}),n.getSlidesWidth=(e=!0,n=0)=>{var i=0;e&&(n=t.children("li").toArray().length);for(var r=0;r<n;r++){var a=t.children("li").toArray()[r];i+=a.offsetWidth+parseInt(getComputedStyle(a).marginLeft)+parseInt(getComputedStyle(a).marginRight)}return i},n.adjustCarouselWidthIfNotDisabled=()=>{n.options.disable_autowidth||t.css("width",n.getSlidesWidth()+10)},n.adjustCarouselWidthIfNotDisabled(),n.vars={currentIndex:0,parent_width:n.options.parent_width,velocity:0,slideHeight:t.children().height(),direction:1,allSlidesWidth:getCurrentTotalWidth(t)},t.end_animation=!0,n.options.swipe_out&&a.slideout(n);var o=new r(n),l=new i(n,o);if(n.anim=o,n.nav=l,t.translate3d(0),o.gotoSlideByIndex(parseInt(n.options.start)),!n.options.disable_scroll)try{d.add(n,o,l,t)}catch(e){}}}},497:e=>{e.exports={apply:function(e,t){e.gotoSlide=function(e){t.anim.gotoSlideByIndex(e)},e.nextSlide=function(){t.anim.gotoSlideByIndex(t.vars.currentIndex+1)},e.previousSlide=function(){t.anim.gotoSlideByIndex(t.vars.currentIndex-1)},e.reload=function(){var n=t.$el,i=t.vars;i.parent_width&&n.children().width(n.parent().outerWidth(!0)),t.adjustCarouselWidthIfNotDisabled(),i.slideHeight=n.children().height(),i.allSlidesWidth=getCurrentTotalWidth(n),i.velocity=0,e.gotoSlide(i.currentIndex)},e.addSlide=function(n){e.append("<li>"+n+"</li>"),t.nav.createEvents(),e.reload()},e.removeSlide=function(e){t.$el.children(":nth-child("+(e+1||0)+")").remove(),t.vars.allSlidesWidth=getCurrentTotalWidth(t.$el)},e.getActiveIndex=function(){return t.vars.currentIndex},e.getCurrentPos=function(){return e.translate3d().x},e.getIndexByPosition=function(e){return t.anim.getLandingSlideIndex(-e)}}}},434:e=>{e.exports={add:function(e,t,n,i){var r=0;i.mousewheel((function(a){if(!n.get_vertical_pan()){if(!(a.deltaFactor>=100||a.deltaFactor%1==0)&&4==++r)return void(r=0);a.preventDefault();var d=e.vars.currentIndex-((0==a.deltaX?a.deltaY:a.deltaX)>0?1:-1);if(d>=i.children("li").length||d<0)return;e.vars.velocity=0,t.gotoSlideByIndex(d)}}))}}},609:e=>{function t(e){return"touchmove"==e.type?e.changedTouches[0]:e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]}e.exports=function(e,n){var i=e.$el,r=e.options,a=e.vars,d=e.swipeOut;this.createEvents=function(){i.children().on("mousedown touchstart",(function(e){m.call(this,e)})),$(window).on("mouseup touchend",(function(e){!function(e){if(l){var s;if(l=!1,s="touchend"==e.type?t(e):e,window.removeEventListener("mousemove",w),window.removeEventListener("touchmove",w),f&&r.swipe_out)return f=!1,void d();if(i.end_animation&&!r.disable_slide){var u=Date.now()-o;u++,a.velocity=-(s.pageX-c)/u,a.velocity>0?a.direction=1:a.direction=-1,a.distanceFromStart=(s.pageX-c)*a.direction*-1;var h=n.getLandingSlideIndex(a.velocity*r.swipe_sensitivity-i.translate3d().x);if(a.distanceFromStart>6)return void n.gotoSlideByIndex(h)}i.trigger({type:"clickSlide",slide:i.savedSlideIndex}),i.savedSlideIndex==a.currentIndex||r.disable_clicktoslide||(e.preventDefault(),n.gotoSlideByIndex(i.savedSlideIndex))}}(e)}))},this.createEvents();var o,l,s,c,u,h,p,v,g,f=!1;function m(e){var n;"true"!==$(e.target).attr("no-drag")&&i.end_animation&&(n="touchstart"==e.type?t(e):e,o=Date.now(),l=1,s=0,c=n.pageX,u=n.pageY,f=!1,h=!1,i.savedSlide=$(this),i.savedSlideIndex=i.savedSlide.index(),p=0,window.addEventListener("mousemove",w,{passive:!1}),window.addEventListener("touchmove",w,{passive:!1}),window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty())}function w(e){var d;if("touchmove"==e.type?(d=t(e),Math.abs(d.pageX-c)>10&&(s=1),s&&e.preventDefault()):(d=e,r.disable_slide||r.swipe_out||e.preventDefault()),-(d.pageX-c)>0?a.direction=1:a.direction=-1,n.isOutBoundaries()?g&&(v=d.pageX,g=0):(g||(n.currentLandPos=i.translate3d().x,c=d.pageX),g=1),1==p&&(i.children().css("height",a.slideHeight),i.savedSlide.wrapAll("<div class='itemslide_slideoutwrap' />"),p=-1),Math.abs(d.pageX-c)>6&&(!f&&i.end_animation&&(h=!0),window.cancelAnimationFrame(n.slidesGlobalID)),Math.abs(d.pageY-u)>6&&!h&&i.end_animation&&(f=!0),h){if(r.disable_slide)return;r.left_sided&&(n.currentLandPos=clamp(-(a.allSlidesWidth-i.parent().width()),0,n.currentLandPos)),f=!1,i.translate3d((0==g?v-c+(d.pageX-v)/4:d.pageX-c)+n.currentLandPos),i.trigger("changePos"),i.trigger("pan")}else f&&r.swipe_out&&(e.preventDefault(),$(".itemslide_slideoutwrap").translate3d(0,d.pageY-u),-1!=p&&(p=1))}this.get_vertical_pan=function(){return f}}},252:()=>{"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),$.fn.outerWidth||($.fn.outerWidth=function(){if($(this)[0]instanceof Element){var e=$(this)[0],t=e.offsetWidth,n=getComputedStyle(e);return t+(parseInt(n.marginLeft)+parseInt(n.marginRight))}})},380:e=>{e.exports={slideout:function(e){var t,n=e.$el,i=e.options,r=e.vars,a=-400,d=Date.now(),o=0,l=0,s=0;n.end_animation=!0,n.savedSlideIndex=0;var c=!1;e.swipeOut=function(){o=$(".itemslide_slideoutwrap").translate3d().y,a=o<0?-400:400,Math.abs(0-o)<50?(c=!0,a=0):(c=!1,n.trigger({type:"swipeout",slide:n.savedSlideIndex})),p=0,l=i.duration,t=n.savedSlide,d=Date.now(),s=n.savedSlide.css("opacity"),n.savedSlideIndex<r.currentIndex?(v=!0,n.children(":nth-child(-n+"+(n.savedSlideIndex+1)+")").wrapAll("<div class='itemslide_move' />")):(v=!1,n.children(":nth-child(n+"+(n.savedSlideIndex+2)+")").wrapAll("<div class='itemslide_move' />")),u=!0,n.end_animation=!1,requestAnimationFrame(f)};var u=!0,h=0,p=0,v=!1,g=".itemslide_move";function f(){if(h=Date.now()-d,u)$(".itemslide_slideoutwrap").translate3d(0,o-easeOutBack(h,0,o-a,250,0)),n.savedSlide.css("opacity",s-easeOutBack(h,0,s,250,0)*(c?-1:1));else{if(c)return $(".itemslide_slideoutwrap").children().unwrap(),$(g).children().unwrap(),n.children().css("height",""),n.end_animation=!0,void(h=0);$(g).translate3d(0-easeOutBack(h-250,0,0+n.savedSlide.width(),125,0)*(v?-1:1),0)}if(1==p&&($(".itemslide_slideoutwrap").children().unwrap(),n.savedSlideIndex==r.currentIndex&&$(g).children(":nth-child(1)").addClass("itemslide-active"),n.savedSlideIndex!=n.children().length-1||v||n.savedSlideIndex!=r.currentIndex||(i.duration=200,e.anim.gotoSlideByIndex(n.children().length-2)),0==n.savedSlideIndex&&0!=r.currentIndex&&(h=500),p=-1),h>=250&&(u=!1,-1!=p&&(p=1),h>=375))return $(g).children().unwrap(),n.removeSlide(t.index()),(0==n.savedSlideIndex&&0!=r.currentIndex||v)&&e.anim.gotoSlideByIndex(r.currentIndex-1,!0),i.duration=l,h=0,void(n.end_animation=!0);requestAnimationFrame(f)}}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";n.g.isExplorer=!!document.documentMode,n(252);var e=n(71),t=n(497),i={duration:350,swipe_sensitivity:150,disable_slide:!1,disable_clicktoslide:!1,disable_scroll:!1,start:0,one_item:!1,pan_threshold:.3,disable_autowidth:!1,parent_width:!1,swipe_out:!1,left_sided:!1};$.fn.itemslide=function(n){let r={...i,...n};t.apply(this,e,r),e.create(r,this)}})()})();