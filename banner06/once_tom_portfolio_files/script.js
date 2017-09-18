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
	document.getElementById("inv-button").addEventListener("mouseover", over1);
	document.getElementById("inv-button").addEventListener("mouseout", out1);
}

function clickthrough() {
    console.log("click");
    window.open( clickTag,"_blank");
}

function over1() {
//    TweenLite.to(mob("img3"),.1,{opacity:1});
}

function out1() {
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
	
	console.log("Init...Kris");
	
	var timeline =  new TimelineLite({delay:0.1, paused: true, onComplete:function() {
       this.restart();
    }});

	
	for (i=1;i<=6;i++) {
		TweenLite.set("#l"+i,{opacity:1, left:-280+i*10});
	}
	
	TweenLite.set("#wh1",{left:121,	top:194,scaleX:.68,scaleY:.9,rotation:3});
	TweenLite.set("#wh2",{left:237,	top:181,scaleX:.26,scaleY:.67,rotation:-2,opacity:.9});
	
	TweenLite.set("#whc1",{left:118, top:195,scaleX:.79,scaleY:.99,rotation:1, opacity:1});
	TweenLite.set("#whc2",{left:231, top:187,scaleX:.44,scaleY:.8,rotation:-2,opacity:.9});
	
	TweenLite.set("#whb1",{left:124, top:184,scaleX:.79,scaleY:.99,rotation:1, opacity:1});
	TweenLite.set("#whb2",{left:236, top:175,scaleX:.33,scaleY:.7,rotation:-2,opacity:.9});

	
	//TweenLite.to("#wh1i",1.8,{rotation:-720, ease:Quad.easeInOut});

	timeline
	   .to('#white', .8, {opacity:0, ease: Linear.easeNone })
	   .fromTo('#bg', .6, {scale:1.7, rotation:-12},{scale:1,rotation:0,opacity:1, ease: Quad.easeInOut },'-=.7')
	   .fromTo('#car1', .8, {scale:.7},{scale:1, left:0, ease: Sine.easeInOut })
	   .to('#wh1i,#wh2i', .8, {rotation:-567, ease: Sine.easeInOut },'-=.8')
	   
	   .to('#deal', .8, {opacity:1, ease: Linear.easeNone },'-=.3')
	   .to('#logo1', .8, {opacity:1, ease: Linear.easeNone },'-=.3')
	   
	   .to('#txt1', .7, {left:0, ease: Back.easeInOut.config(1) },'-=.3')
	   .to('#lights1', .5, {opacity:1, ease: Linear.easeNone },'+=.0')
	   .to('#lights1', .5, {opacity:0, ease: Linear.easeNone },'+=.6')
	   
	   
	   .to('#car1', .6, {opacity:0, scale:.9, ease: Back.easeIn },'+=.6')
	   .to('#txt1', .6, {left:200, ease: Back.easeIn },'-=.6')
	   
	   .fromTo('#sc2', .5, {opacity:0,top:-50},{opacity:1, top:0, ease: Bounce.easeOut },'+=.0')
	   .fromTo('#sc1', .5, {opacity:0,top:-50},{opacity:1, top:0, ease: Bounce.easeOut },'-=.4')
	   .fromTo('#sc3', .5, {opacity:0,top:-50},{opacity:1, top:0, ease: Bounce.easeOut },'-=.4')
	   
	   .to('#info', .6, {top:0, ease: Quad.easeInOut },'-=.4')
	   .to('#free', .6, {top:0, ease: Quad.easeInOut },'-=.5')
	   .to('#five', .6, {top:0, ease: Quad.easeInOut },'-=.5')
	   
	   .to('#five', .4, {top:-200, ease: Quad.easeIn },'+=2.5')	   
	   .to('#free', .4, {top:-200, ease: Quad.easeIn },'-=.3')
	   .to('#info', .4, {top:-200, ease: Quad.easeIn },'-=.3')
	   .to('#sc1,#sc2,#sc3', .4, {opacity:0, ease: Linear.easeNone },'-=.3')
	   
	   .fromTo('#car2', .8, {scale:.7},{scale:1, left:0, ease: Sine.easeInOut })
	   .to('#whb1i,#whb2i', .8, {rotation:-567, ease: Sine.easeInOut },'-=.8')
	   .to('#txt2', .7, {left:0, ease: Back.easeInOut.config(1) },'-=.3')
	   .to('#lights2', .5, {opacity:1, ease: Linear.easeNone },'+=.0')
	   .to('#lights2', .5, {opacity:0, ease: Linear.easeNone },'+=.6')
	   
	   .to('#car2', .6, {opacity:0, scale:.9, ease: Back.easeIn },'+=.6')
	   .to('#txt2', .6, {left:200, ease: Back.easeIn },'-=.6')
	   
	   .fromTo('#car3', .8, {scale:.7},{scale:1, left:0, ease: Sine.easeInOut })
	   .to('#whc1i,#whc2i', .8, {rotation:-567, ease: Sine.easeInOut },'-=.8')
	   .to('#txt3', .7, {left:0, ease: Back.easeInOut.config(1) },'-=.3')
	   .to('#lights3', .5, {opacity:1, ease: Linear.easeNone },'+=.0')
	   .to('#lights3', .5, {opacity:0, ease: Linear.easeNone },'+=.6')
	   
	   .to('#car3', .6, {opacity:0, scale:.9, ease: Back.easeIn },'+=.6')
	   .to('#txt3', .6, {left:200, ease: Back.easeIn },'-=.6')

       .to('#red1', .6, {left:0, ease: Quad.easeInOut },'-=.5')
	   
	   .to('#logo2', .6, {top:0, ease: Quad.easeInOut },'-=.1')
	   .to('#honda', .6, {top:0, ease: Quad.easeInOut },'-=.6')
	   .to('#sale', .6, {top:0, ease: Quad.easeInOut },'-=.5')
	   .to('#now', .6, {top:0, ease: Quad.easeInOut },'-=.5')
	 
       .to('#white2', .6, {opacity:1, ease: Linear.easeNone },'+=2.5')	 
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
