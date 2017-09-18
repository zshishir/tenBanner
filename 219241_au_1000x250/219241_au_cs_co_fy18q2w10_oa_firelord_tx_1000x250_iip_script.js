var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');


var tl = new TimelineMax({repeat:0, repeatDelay:6.75});


window.onload = function() {   

	//Newly Added Code 
   if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
	
    
    tl.set(banner, {visibility: "visible"})
      /*frame one*/	
      .from(".bckgrnd, .dell-logo-1, .vendor-logo1",0, {alpha:1, ease:Power4.easeout}, "frame1")
	  .from(".laptop-01",0.75,{y:100, alpha:0, ease:Power1.easeOut},"frame1+=0.5")
	  .from(".frame1_text1",0.75,{y:-20, alpha:0, ease:Power1.easeOut},"frame1+=0.5")
	  .to(".laptop-01",2,{y:"-=20", ease:Linear.easeNone},"frame1+=1.3")
	  .to(".frame1_text1",2,{y:"+=20", ease:Linear.easeNone},"frame1+=1.3")
	  .to(".laptop-01",0.75,{y:-140, alpha:0, ease:Power1.easeOut},"frame1+=2")
	  .to(".frame1_text1",0.75,{y:100, alpha:0, ease:Power1.easeOut},"frame1+=2")
	  
	  /*frame two*/
	  .add("frame2","frame1+=2")
	  .from(".laptop-02",0.75,{y:100, alpha:0, ease:Power1.easeOut},"frame2+=0.5")
	  .from(".frame2_text",0.75,{y:-20, alpha:0, ease:Power1.easeOut},"frame2+=0.5")
	  .fromTo(".sheen", .95,{alpha:0, x:-100},{alpha:1, x:120},"frame2+=1")
	  .from(".web",1,{scale:0,transformOrigin:"50%", ease:Elastic.easeOut.config(0.3, 0.2)},"frame2+=1")
	  .from(".laptop-02-up",0.75,{y:100, alpha:0, ease:Power1.easeOut},"frame2+=0.5")
	  .from(".buyNow1",0.75,{alpha:0, x:-100, ease:Power1.easeOut},"frame2+=0.5")
	  .to(".buyNow1",0.75,{x:100, alpha:0, ease:Power1.easeOut},"frame2+=2")
	  .to(".web",2,{y:"-=20", ease:Linear.easeNone},"frame2+=1.3")
	  .to(".laptop-02",2,{y:"-=20", ease:Linear.easeNone},"frame2+=1.3")
	  .to(".laptop-02-up",2,{y:"-=20", ease:Linear.easeNone},"frame2+=1.3")
	  .to(".frame2_text",2,{y:"+=20", ease:Linear.easeNone},"frame2+=1.3")
	  .to(".web",0.75,{y:-100, alpha:0, ease:Power1.easeOut},"frame2+=2")
	  .to(".laptop-02",0.75,{y:-100, alpha:0, ease:Power1.easeOut},"frame2+=2")
	  .to(".laptop-02-up",0.75,{y:-100, alpha:0, ease:Power1.easeOut},"frame2+=2")
	  .to(".frame2_text",0.75,{y:100, alpha:0, ease:Power1.easeOut},"frame2+=2")
	  
	  
  	  /*frame three*/
		.add("frame3","frame2+=2")
		.from(".laptop-03",0.75,{x:-221, alpha:0, ease:Power3.easeOut},"frame3+=0.5")
	    .from(".spiderman",.75,{scale:0, transformOrigin:"25%", ease:Elastic.easeOut.config(0.3, 0.2)},"frame3+=1")
		.from(".frame3_text",0.75,{y:-20, alpha:0, ease:Power1.easeOut},"frame3+=0.5")
		.from(".buyNow",0.75,{alpha:0, x:-240, ease:Power1.easeOut},"frame3+=0.5")
		.to(".frame3_text",2,{y:"+=20", ease:Linear.easeNone},"frame3+=1.3")
		.to(".frame3_text",0.75,{y:100, alpha:0, ease:Power1.easeOut},"frame3+=2")
		
		
		
  	  /*frame four*/
		.add("frame4","frame3+=2")
		.from(".frame4-text",0.75,{y:-20, alpha:0, ease:Power1.easeOut},"frame4+=0.5")
		.from(".funding-text",0.75,{alpha:0, ease:Power1.easeOut},"frame4+=0.5")
		.from("#roll-cta",0.75,{alpha:0, x:300, ease:Power1.easeOut},"frame4+=1.5")
		.from(".logo-spiderman",0.75,{alpha:0, y:100, ease:Power1.easeOut},"frame4+=1.5")

      
      // tl.seek("loop")

      var currentDuration = tl.duration();
      console.log(currentDuration);   
};

function enablerInitHandler() {
  // Start polite loading, or start animation,
  // load in your image assets, call Enabler methods,
  // and/or include other Studio modules.
}

 function clickTagHandler() { 	
    Enabler.exit("ClickThrough");
    console.log("clicked!");
}
document.getElementById('banner').addEventListener('click', clickTagHandler, false);


/**************************
	Rollover
**************************/

var ctaEm = document.getElementById('roll-cta');
ctaEm.addEventListener('mouseover', ctaHandler);
ctaEm.addEventListener('mouseout', ctaHandler1);

function ctaHandler(){
  document.getElementById('legal').className = 'legal-anim-in';
  document.getElementById('all-animation').classList.add('all-anim-stop');
  
  clearInterval(loop);

};

function ctaHandler1(){
  document.getElementById('legal').className = 'legal-anim-out';
  document.getElementById('all-animation').classList.remove('all-anim-stop');

   
  setTimeout(function(){
    changeHtml();
    loopControll();
  },3000);
};