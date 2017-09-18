var container;
var content;
var dcLogo;
var bgExit;
var step = 1;
var stepCount = 0;
var stepDelay = 30;
var imd = [0.7,0,0];

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

function transtionEndEvent(object, fun) {
  object.addEventListener("webkitTransitionEnd", fun);
  object.addEventListener("transitionend", fun); 
}

//Function to run with any animations starting on load, or bringing in images etc
init2 = function() {
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	dcLogo = document.getElementById('doubleclick_logo_dc');
	bgExit = document.getElementById('background_exit_dc');
	var image = document.getElementById('image');
		
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	
	//Show Ad
	container.style.display = "block";
	
    var circle = document.getElementById("circle");
	var iwant = document.getElementById("iwant");
	var live = document.getElementById("live");
	
	var wh1 = document.getElementById("wh1");
	var id = document.getElementById("id");
	var logo = document.getElementById("logo");
	
	var hoyalux = document.getElementById("hoyalux");
	var line = document.getElementById("line");
	var click = document.getElementById("click");
	
    TweenLite.to(image, .8, {opacity: 1, top:"-110px",left: "-100px", scaleX: .7, scaleY: .7, ease: Sine.easeInOut, onComplete: function() {
	  TweenLite.to(image, 4.0, {scale: .77, ease: Linear.none, onComplete: function() {
	    TweenLite.to(circle, .4, {opacity: 0, scale: .1, delay: 0.4, ease: Back.easeIn});
		TweenLite.to(iwant, .4, {opacity: 0, delay: 0, ease: Linear.none});
		TweenLite.to(image, .7, {scale: .9,left: "-160px",top:"-160px", delay: 0.8, ease: Sine.easeInOut, onComplete: function() {
		  circle.style.left = "171px";
		  circle.style.top = "17px";
		  TweenLite.to(image, 4.0, {scale: .85, ease: Linear.ease, onComplete: function() {
	         TweenLite.to(circle, .4, {opacity: 0, scale: .1, delay: 0.4, ease: Back.easeIn, onComplete: function() {
				 circle.style.top = "5px";
				 circle.style.left = "-25px";
				 TweenLite.to(image, 1, {scale: 1, left: "-90px", top: "-100px", ease: Sine.easeInOut, onComplete: function() {
					TweenLite.to(circle, .9, {opacity: 1, scale: 1, delay: .0, ease: Back.easeInOut});
					TweenLite.to(live, .5, {opacity: 1, left: "0px", delay: 0.7, ease: Linear.none});
					
					TweenLite.to(image, 4.0, {scale: .82, ease: Linear.ease, onComplete: function() {
						TweenLite.to(circle, .4, {opacity: 0, scale: .1, delay: 0.4, ease: Back.easeIn,onComplete: function() {
						   TweenLite.to(wh1, .9, {bottom: "0px",  delay: .0, ease: Sine.easeInOut});
						   
						   TweenLite.to(logo, .9, {bottom: "0px",  delay: .4, ease: Back.easeInOut});
						   TweenLite.to(id, .9, {bottom: "0px",  delay: .4, ease: Back.easeInOut});
						   
				           circle.style.top = "12px";
				           circle.style.left = "70px";
						   
						   TweenLite.to(image, .9, {left: "-100px", top: "-175px", scale: .66,  delay: .0, ease: Linear.ease, onComplete: function() {
						      TweenLite.to(circle, .9, {opacity: 1, scale: 1, delay: .0, ease: Back.easeInOut});
							  
							  setTransform(line, "scale(.1, 1)");
							  TweenLite.to(hoyalux, .7, {opacity: 1, delay: .8, ease: Linear.ease});
							  TweenLite.to(line, .7, {opacity: 1, scale: 1, delay: 1.0, ease: Sine.easeInOut});
							  TweenLite.to(click, .7, {opacity: 1, delay: 1.3, ease: Linear.ease});
						   }});
						}});
						TweenLite.to(live, .4, {opacity: 0, delay: 0, ease: Linear.none});
					}});

				 }});
			 }});
		     TweenLite.to(what, .4, {opacity: 0, delay: 0, ease: Linear.none});
			 
		  }});
		  step2();
		}});
	  }});
	}});
    TweenLite.to(circle, .9, {opacity: 1, scale: 1, delay: .4, ease: Back.easeInOut});
	TweenLite.to(iwant, .5, {opacity: 1, left: "0px", delay: 1.1, ease: Linear.none});
	
}

function step2() {
  TweenLite.to(circle, .5, {opacity: 1, scale: 1, delay: .0, ease: Back.easeInOut});
  TweenLite.to(what, .5, {opacity: 1, left: "0px", delay: 0.7, ease: Linear.none});
}


//Add Event Listeners
addListeners = function() {
    bgExit = document.getElementById('background_exit_dc');
	console.log(bgExit);
	bgExit.addEventListener('click', bgExitHandler, false);
}


bgExitHandler = function(e) {
	//Call Exits
	window.open(window.clickTag,"_blank");
}

window.onload = function() {
  init2();
}
