!function(t){t.fn.slides=function(e){return e=t.extend({},t.fn.slides.option,e),this.each(function(){function i(i,n,o){if(!r&&s){switch(r=!0,e.animationStart(C+1),i){case"next":S=C,_=C+1,_=f===_?0:_,l=2*m,i=2*-m,C=_;break;case"prev":S=C,_=C-1,_=-1===_?f-1:_,l=0,i=0,C=_;break;case"pagination":_=parseInt(o,10),S=t("."+e.paginationClass+" li."+e.currentClass+" a",h).attr("href").match("[^#/]+$"),_>S?(l=2*m,i=2*-m):(l=0,i=0),C=_}"fade"===n?e.crossfade?p.children(":eq("+_+")",h).css({zIndex:10}).fadeIn(e.fadeSpeed,e.fadeEasing,function(){e.autoHeight?p.animate({height:p.children(":eq("+_+")",h).outerHeight()},e.autoHeightSpeed,function(){p.children(":eq("+S+")",h).css({display:"none",zIndex:0}),p.children(":eq("+_+")",h).css({zIndex:0}),e.animationComplete(_+1),r=!1}):(p.children(":eq("+S+")",h).css({display:"none",zIndex:0}),p.children(":eq("+_+")",h).css({zIndex:0}),e.animationComplete(_+1),r=!1)}):p.children(":eq("+S+")",h).fadeOut(e.fadeSpeed,e.fadeEasing,function(){e.autoHeight?p.animate({height:p.children(":eq("+_+")",h).outerHeight()},e.autoHeightSpeed,function(){p.children(":eq("+_+")",h).fadeIn(e.fadeSpeed,e.fadeEasing)}):p.children(":eq("+_+")",h).fadeIn(e.fadeSpeed,e.fadeEasing,function(){t.browser.msie&&t(this).get(0).style.removeAttribute("filter")}),e.animationComplete(_+1),r=!1}):(p.children(":eq("+_+")").css({left:l,display:"block"}),e.autoHeight?p.animate({left:i,height:p.children(":eq("+_+")").outerHeight()},e.slideSpeed,e.slideEasing,function(){p.css({left:-m}),p.children(":eq("+_+")").css({left:m,zIndex:5}),p.children(":eq("+S+")").css({left:m,display:"none",zIndex:0}),e.animationComplete(_+1),r=!1}):p.animate({left:i},e.slideSpeed,e.slideEasing,function(){p.css({left:-m}),p.children(":eq("+_+")").css({left:m,zIndex:5}),p.children(":eq("+S+")").css({left:m,display:"none",zIndex:0}),e.animationComplete(_+1),r=!1})),e.pagination&&(t("."+e.paginationClass+" li."+e.currentClass,h).removeClass(e.currentClass),t("."+e.paginationClass+" li:eq("+_+")",h).addClass(e.currentClass))}}function n(){clearInterval(h.data("interval"))}function o(){e.pause?(clearTimeout(h.data("pause")),clearInterval(h.data("interval")),u=setTimeout(function(){clearTimeout(h.data("pause")),c=setInterval(function(){i("next",b)},e.play),h.data("interval",c)},e.pause),h.data("pause",u)):n()}t("."+e.container,t(this)).children().wrapAll('<div class="slides_control"/>');var s,r,a,l,d,u,c,h=t(this),p=t(".slides_control",h),f=p.children().size(),m=p.children().outerWidth(),g=p.children().outerHeight(),v=e.start-1,b=e.effect.indexOf(",")<0?e.effect:e.effect.replace(" ","").split(",")[0],y=e.effect.indexOf(",")<0?b:e.effect.replace(" ","").split(",")[1],_=0,S=0,w=0,C=0;if(2>f)return t("."+e.container,t(this)).fadeIn(e.fadeSpeed,e.fadeEasing,function(){s=!0,e.slidesLoaded()}),t("."+e.next+", ."+e.prev).fadeOut(0),!1;if(!(2>f)){if(0>v&&(v=0),v>f&&(v=f-1),e.start&&(C=v),e.randomize&&p.randomize(),t("."+e.container,h).css({overflow:"hidden",position:"relative"}),p.children().css({position:"absolute",top:0,left:p.children().outerWidth(),zIndex:0,display:"none"}),p.css({position:"relative",width:3*m,height:g,left:-m}),t("."+e.container,h).css({display:"block"}),e.autoHeight&&(p.children().css({height:"auto"}),p.animate({height:p.children(":eq("+v+")").outerHeight()},e.autoHeightSpeed)),e.preload&&p.find("img:eq("+v+")").length){t("."+e.container,h).css({background:"url("+e.preloadImage+") no-repeat 50% 50%"});var E=p.find("img:eq("+v+")").attr("src")+"?"+(new Date).getTime();d="slides_control"!=t("img",h).parent().attr("class")?p.children(":eq(0)")[0].tagName.toLowerCase():p.find("img:eq("+v+")"),p.find("img:eq("+v+")").attr("src",E).load(function(){p.find(d+":eq("+v+")").fadeIn(e.fadeSpeed,e.fadeEasing,function(){t(this).css({zIndex:5}),t("."+e.container,h).css({background:""}),s=!0,e.slidesLoaded()})})}else p.children(":eq("+v+")").fadeIn(e.fadeSpeed,e.fadeEasing,function(){s=!0,e.slidesLoaded()});e.bigTarget&&(p.children().css({cursor:"pointer"}),p.children().click(function(){return i("next",b),!1})),e.hoverPause&&e.play&&(p.bind("mouseover",function(){n()}),p.bind("mouseleave",function(){o()})),e.generateNextPrev&&(t("."+e.container,h).after('<a href="#" class="'+e.prev+'">Prev</a>'),t("."+e.prev,h).after('<a href="#" class="'+e.next+'">Next</a>')),t("."+e.next,h).click(function(t){t.preventDefault(),e.play&&o(),i("next",b)}),t("."+e.prev,h).click(function(t){t.preventDefault(),e.play&&o(),i("prev",b)}),e.generatePagination?(e.prependPagination?h.prepend('<div class="slidebarpagination"><ul class='+e.paginationClass+"></ul></div>"):h.append('<div class="slidebarpagination"><ul class='+e.paginationClass+"></ul></div>"),p.children().each(function(){t("."+e.paginationClass,h).append('<li><a href="#'+w+'">'+(w+1)+"</a></li>"),w++})):t("."+e.paginationClass+" li a",h).each(function(){t(this).attr("href","#"+w),w++}),t("."+e.paginationClass+" li:eq("+v+")",h).addClass(e.currentClass),t("."+e.paginationClass+" li a",h).click(function(){return e.play&&o(),a=t(this).attr("href").match("[^#/]+$"),C!=a&&i("pagination",y,a),!1}),t("a.link",h).click(function(){return e.play&&o(),a=t(this).attr("href").match("[^#/]+$")-1,C!=a&&i("pagination",y,a),!1}),e.play&&(c=setInterval(function(){i("next",b)},e.play),h.data("interval",c))}})},t.fn.slides.option={preload:!1,preloadImage:"/images/indicator.gif",container:"slides_container",generateNextPrev:!1,next:"next",prev:"prev",pagination:!0,generatePagination:!0,prependPagination:!1,paginationClass:"pagination",currentClass:"current",fadeSpeed:350,fadeEasing:"",slideSpeed:350,slideEasing:"",start:1,effect:"slide",crossfade:!1,randomize:!1,play:0,pause:0,hoverPause:!1,autoHeight:!1,autoHeightSpeed:350,bigTarget:!1,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}},t.fn.randomize=function(e){function n(){return Math.round(Math.random())-.5}return t(this).each(function(){var o=t(this),s=o.children(),r=s.length;if(r>1){s.hide();var a=[];for(i=0;r>i;i++)a[a.length]=i;a=a.sort(n),t.each(a,function(t,i){var n=s.eq(i),r=n.clone(!0);r.show().appendTo(o),void 0!==e&&e(n,r),n.remove()})}})}}(jQuery),function(){}.call(this);