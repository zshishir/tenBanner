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
	document.getElementById("inv-button").addEventListener("mouseover", over);
	document.getElementById("inv-button").addEventListener("mouseout", out);
}

function clickthrough() {
    window.open( clickTag,"_blank");
}

function over() {
    TweenLite.to(mob("btn3_a"), .4, {opacity:1, delay:0,ease: Linear.easeNone});
	TweenLite.to(mob("btn4_a"), .4, {opacity:1, delay:0,ease: Linear.easeNone});
}

function out() {
    TweenLite.to(mob("btn3_a"), .4, {opacity:0, delay:0,ease: Linear.easeNone});
	TweenLite.to(mob("btn4_a"), .4, {opacity:0, delay:0,ease: Linear.easeNone});    
}


var CustomEase = (function(){
    var easings = {};

    function create(name, points){
        var sections = points.length,
            sectionStep = 1 / sections,
            curves = [],
            i;

        for(i = 0; i < sections; i++){
            curves.push((function(p){
                return function(t){
                    return Math.pow(1 - t, 2) * p.s + 2 * t * (1 - t) * p.cp + Math.pow(t, 2) * p.e;
                }
            })(points[i]));
        }

        easings[name] = function(t){
            var curveIndex = Math.floor(t / sectionStep),
                curveProgress = t % sectionStep / sectionStep;

            return curves[curveIndex](curveProgress);
        };

        easings[name].getRatio = function(t){
            return easings[name](t);
        };
    }

    function byName(name){
        return easings[name];
    }

    return {
        create: create,
        byName: byName
    };
})();


/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////


var tweens = new Array();
var x = 0;
	var delay = 3;
	var loop1 = 0;

function init() {
    var i;
	
	CustomEase.create("Aline", [{s:0,cp:0.454,e:0.704},{s:0.704,cp:0.954,e:1}]);

	TweenLite.set(mob("cloud"), {scale:.3});
	
	tweens.push(TweenLite.to(mob("white"), 1.2, {opacity:0, delay:0,ease: Linear.easeNone}));
	tweens.push(TweenLite.to(mob("logo"), .6, {top:0, opacity:1, delay:.6,ease: Quad.easeInOut}));	
	tweens.push(TweenLite.to(mob("cloud"), .8, {scale:1, opacity:1, delay:1.3,ease: Back.easeInOut.config(3)}));	
	
	tweens.push(TweenLite.to(mob("f1_txt1"), .8, {left: 0, opacity:1, delay:1.5,ease: Back.easeInOut.config(1)}));
	tweens.push(TweenLite.to(mob("f1_txt2"), .8, {left: 0, opacity:1, delay:1.6,ease: Back.easeInOut.config(1)}));
	
	tweens.push(TweenLite.to(mob("f2_txt1"), .8, {left: 0, opacity:1, delay:2.6,ease: Back.easeInOut.config(1), onComplete: function() {
	    TweenLite.to(mob("cloud"), .8, {scale:.3, opacity:0, delay:1.6,ease: Back.easeIn.config(3)});
		
		
		TweenLite.to(mob("f1_txt1"), .5, {left: 100, opacity:0, delay:2.1,ease: Back.easeIn.config(1)});
		TweenLite.to(mob("f1_txt2"), .5, {left: 100, opacity:0, delay:2,ease: Back.easeIn.config(1)});
		TweenLite.to(mob("f2_txt1"), .5, {left: 100, opacity:0, delay:2.2,ease: Back.easeIn.config(1)});
		
	    tweens.push(TweenLite.to(mob("f3_txt1"), .8, {left: 0, opacity:1, delay:2.4,ease: Back.easeInOut.config(1)}));
	    tweens.push(TweenLite.to(mob("f3_txt2"), .8, {left: 0, opacity:1, delay:2.5,ease: Back.easeInOut.config(1)}));
		
	    tweens.push(TweenLite.to(mob("btn3_n"), .8, {left: 0, opacity:1, delay:2.6,ease: Back.easeInOut.config(1)}));
	    tweens.push(TweenLite.to(mob("btn3_a"), .8, {left: 0, delay:2.6,ease: Back.easeInOut.config(1)}));
		
		
		tweens.push(TweenLite.to(mob("img1"), .5, {left: -31,  delay:2.2,ease: Quad.easeInOut, onComplete: function() {
			TweenLite.to(mob("f3_txt1"), .5, {left: 100, opacity:0, delay:2.6,ease: Back.easeIn.config(1)});
			TweenLite.to(mob("f3_txt2"), .5, {left: 100, opacity:0, delay:2.5,ease: Back.easeIn.config(1)});
			TweenLite.to(mob("btn3_n"), .5, {left: 100, opacity:0, delay:2.7,ease: Back.easeIn.config(1)});			
			TweenLite.to(mob("btn3_a"), .5, {left: 100, opacity:0, delay:2.7,ease: Back.easeIn.config(1)});			
			tweens.push(TweenLite.to(mob("red"), .8, {left: 0, opacity:1, delay:2.9,ease: Expo.easeInOut}));
		
		
			tweens.push(TweenLite.to(mob("f4_txt1"), .8, {left: 0, opacity:1, delay:3.1,ease: Back.easeInOut.config(1)}));
			tweens.push(TweenLite.to(mob("f4_txt2"), .8, {left: 0, opacity:1, delay:3.2,ease: Back.easeInOut.config(1)}));
		    tweens.push(TweenLite.to(mob("we"), .8, {left: 0, opacity:1, delay:3.4,ease: Back.easeInOut.config(1)}));
			tweens.push(TweenLite.to(mob("btn4_n"), .8, {left: 0, opacity:1, delay:3.5,ease: Back.easeInOut.config(1)}));
			tweens.push(TweenLite.to(mob("btn4_a"), .8, {left: 0, delay:3.5,ease: Back.easeInOut.config(1)}));
		}}));
	}}));
}

function repeat() {
  var i;
  for (i=0;i<tweens.length;i++){
    tweens[i].pause(0);
  }
}

function enterFrame() {
}
