var adDiv;

var stepDelay = 29;
var step = 1;
var stepCount = 0;
var newEF = 1;
var fps = 50;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

var getUriParams = function() {
		var query_string = {}
		var query = window.location.search.substring(1);
		var parmsArray = query.split('&');
		if(parmsArray.length <= 0) return query_string;
		for(var i = 0; i < parmsArray.length; i++) {
			var pair = parmsArray[i].split('=');
			var val = decodeURIComponent(pair[1]);
			if (val != '' && pair[0] != '') query_string[pair[0]] = val;
		}
		return query_string;
	}();


function setTransform(object,value) {
  object.style.transform = value;
  object.style.webkitTransform = value;
}

function setTransitionDuration(object,value) {
  object.style.transitionDuration = value;
  object.style.webkitTransitionDuration = value;
}

function setTransitionDelay(object,value) {
  object.style.transitionDelay = value;
  object.style.webkitTransitionDelay = value;
}

function setTransitionFunction(object,value) {
  object.style.transitionTimingFunction = value;
  object.style.webkitTransitionTimingFunction = value;
}

function mob(id) {
  return document.getElementById(id);
}

function style(id) {
  return document.getElementById(id).style;
}


function IsImageOk(img) { 

if (!img.complete) { 
  return false; 
}

return true; 
}


function checkImages() { 
var ok = 1;
var sum = document.images.length;
var ss = 0;
for (var i = 0; i < document.images.length; i++) { 
  if (!IsImageOk(document.images[i])) {
  
  }  else ss++;
} 


if (sum==ss) ok = 1; else ok = 0;
return ok;
}

window.onload = function() {
  var iid = setInterval(function(){
    if (checkImages()) {
	   clearInterval(iid);
	   startAd();
	}
  }, 100);

  
};


function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();

	step = 2;
	
	if(typeof requestAnimationFrame === 'undefined') newEF = 0;

	if (newEF) requestAnimationFrame(fun1); else
	setTimeout(fun1, interval);

	function fun1() {
		now = Date.now();
		delta = now - then;
		
		//console.log(interval+" "+delta+" "+newEF);
		
		if (delta > interval || !newEF) {         
			then = now - (delta % interval);
			
			enterFrame();
			
			if (!newEF) setTimeout(fun1,interval);
	   }
	   
	   if (newEF) requestAnimationFrame(fun1); 
	}
	
	init();
}

function addEventListeners() {
    document.getElementById("inv-button").addEventListener("click", clickthrough);
	document.getElementById("disc").addEventListener("mouseover", over1);
	document.getElementById("disc").addEventListener("mouseout", out1);
}

function clickthrough() {
    console.log("click");
    window.open( clickTag,"_blank");
}

function over1() {
    TweenLite.to("#discl",.2,{opacity:1});
}

function out1() {
	TweenLite.to("#discl",.2,{opacity:0});
}

/////////////////////////////////////////////////////////////////////////////////
var cloop = 0;
var direct = 1;



var tweens = new Array();
var x = 0;
	var delay = 2.9;
	var delay3 = 1.4;
	var delay2 = 1;
	var loop1 = 1;
	var rpos = 170;

function init() {
    var i;
	
	var timeline =  new TimelineLite({delay:0.1, paused: true, onComplete:function() {
       this.restart();
    }});
	
	var timeline2 =  new TimelineLite({delay:0.1, paused: false, onComplete:function() {
       this.restart();
    }});
	
	TweenLite.set("#day6",{rotation:3});
	
	timeline2
	   .to('#day6', .6, {rotation:0, ease: Sine.easeIn })
	   .to('#day6', .6, {rotation:-3, ease: Sine.easeOut })
	   .to('#day6', .6, {rotation:0, ease: Sine.easeIn })
	   .to('#day6', .6, {rotation:3, ease: Sine.easeOut })
	;
	


	timeline
	   .to('#white', .8, {opacity:0, ease: Linear.easeNone })
	   .to('#hot', .6, {top:0, ease: Quad.easeInOut },'-=.1')
	   .to('#booran', .6, {top:0,opacity:1, ease: Quad.easeInOut },'-=.5')
	   .to('#day6', .6, {top:-24,opacity:1, ease: Quad.easeInOut },'-=.5')
	   
	   .to('#open', .5, {opacity:1, ease: Linear.easeNone },'-=.1')
	   
	   .to('#day6', .8, {top:-250,opacity:1, ease: Quad.easeInOut },'+=2.5')
	   .to('#orange', .6, {top:0,opacity:1, ease: Quad.easeInOut },'-=.9')
	   
	   .to('#hot2', .5, {opacity:1, ease: Quad.easeInOut },'-=.6')
	   .to('#hot', .5, {opacity:0, ease: Quad.easeInOut },'-=.6')
	   
	   .to('#disc', .5, {left:250, ease: Quad.easeInOut },'-=.1')

	   
	   .to('#car1,#cname1', .6, {left:0, ease: Back.easeInOut.config(1) },'-=.0')
	   .to('#per1', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.3')
	   .to('#price1', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.6')
	   .to('#free', .7, {top:-20, ease: Back.easeInOut.config(1) },'-=.6')
	   
	   .to('#price1', .5, {top:-250, ease: Back.easeIn.config(1) },'+=3')
	   .to('#free', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#per1', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#cname1', .5, {left:-300, ease: Back.easeIn.config(1) },'-=.1')
       .to('#car1', .5, {left:-300, ease: Back.easeIn.config(1) },'-=.1')	


	   .to('#car2,#cname2', .6, {left:0, ease: Back.easeInOut.config(1) },'-=.1')
	   .to('#per2', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.3')
	   .to('#price2', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.6')
	   .to('#free', .7, {top:-10, ease: Back.easeInOut.config(1) },'-=.6')
	   .to('#sat1', .7, {top:-10, ease: Back.easeInOut.config(1) },'-=.6')
	   
	   .to('#price2', .5, {top:-250, ease: Back.easeIn.config(1) },'+=3')
	   .to('#sat1', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#free', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#per2', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#cname2', .5, {left:-300, ease: Back.easeIn.config(1) },'-=.1')
       .to('#car2', .5, {left:-300, ease: Back.easeIn.config(1) },'-=.1')	
	   
	   
	   
	   .to('#car3,#cname3', .6, {left:0, ease: Back.easeInOut.config(1) },'-=.1')
	   .to('#per3', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.3')
	   .to('#price3', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.6')
	   .to('#free', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.6')
	   .to('#sat1', .7, {top:0, ease: Back.easeInOut.config(1) },'-=.6')
	   
	   .to('#price3', .5, {top:-250, ease: Back.easeIn.config(1) },'+=3')
	   .to('#sat1', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#free', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#per3', .5, {top:-250, ease: Back.easeIn.config(1) },'-=.4')
	   .to('#cname3', .5, {left:-300, ease: Back.easeIn.config(1) },'-=.1')
       .to('#car3', .5, {left:-300, ease: Back.easeIn.config(1) },'-=.1')
	   
	    .to('#white3', .6, {top:0,opacity:1, ease: Quad.easeInOut },'-=.1')
		
	   .to('#hot', .5, {left:-250,opacity:1, ease: Quad.easeIn },'-=.2')
	   .to('#booran', .5, {left:-250,opacity:1, ease: Quad.easeIn },'-=.7')
	   .to('#disc', .5, {left:483,opacity:1, ease: Quad.easeIn },'-=.7')
	   
	   .to('#open', .3, {top:10,opacity:1, ease: Quad.easeInOut },'-=.5')
	   .to('#today', .7, {top:0,opacity:1, ease: Quad.easeInOut },'-=.2')
	   .to('#suzuki', .7, {top:0,opacity:1, ease: Quad.easeInOut },'-=.5')
	   .to('#call', .7, {top:0,opacity:1, ease: Quad.easeInOut },'-=.5')
	   .to('#logo2', .7, {top:0,opacity:1, ease: Quad.easeInOut },'-=.5')
	   

	 
       .to('#white2', .6, {opacity:1, ease: Linear.easeNone },'+=3.5')	 
	;
	
	timeline.play();

	TweenLite.set("#ad",{opacity:1});
}

function repeat() {
  var i;
  for (i=0;i<tweens.length;i++){
    tweens[i].pause(0);
  }
  
  
}

function enterFrame() {
}

