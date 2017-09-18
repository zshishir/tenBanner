var banner = document.getElementById('banner');


var mtl1 = new TimelineMax({paused:true})

  .to(".read_boat", 9, {alpha:1, x:70, scale:1.1, ease:Sine.easeOut})
  .to(".white_boat", 9, {alpha:1, x:70, scale:1.1, ease:Sine.easeOut},"-=9")

  .to(".cloud, .sun", 12, {alpha:1, x:200,   ease: Power1.easeOut},"-=9")
  .to(".sun", 1, {alpha:1, rotation:60, repeat:5, ease:Sine.easeOut},"-=9")
 // .to(".white_boat", 11, {alpha:1, x:80, scale:1.1, ease:Sine.easeOut},"-=11")
;

var mtl = new TimelineMax({paused:true});

  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})

  .to(".txt1", 1.4, {clip:"rect(0px,176px,250px,33px)",opacity:1, opacity:1, delay:.1,ease: Linear.easeNone})
  .to(".txt2", 1.4, {clip:"rect(0px,208px,250px,52px)",opacity:1, opacity:1, ease: Linear.easeNone})
  .to(".txt3", .8, {clip:"rect(0px,276px,250px,118px)",opacity:1, opacity:1, ease: Quad.easeOut})
  
   .to(".txt1, .txt2, .txt3", .5, {opacity:0, ease:Sine.easeOut})
   .from(".copy01", .5, {opacity:0, ease:Sine.easeOut})
   .to(".copy01", .5, {opacity:0, ease:Sine.easeOut},"+=2.2")
   .from(".copy02", .5, {opacity:0, ease:Sine.easeOut})

   .from(".copy03", 1, {opacity:0, ease:Sine.easeOut})
    .to(".wh", .6, {top:207, ease: Quad.easeInOut})
 .to(".cta, .logo", .6, {top:0, ease: Quad.easeInOut},"-=.4")




   //  .to(".txt2", .5, {alpha:0, ease:Sine.easeOut, delay:2})
   //  .from(".bg", .5, {y:250, rotation:0.02, ease:Sine.easeOut}, "up-down")
   //  .to(".ribbon", 1, {alpha:1, y:171, rotation:0.02, ease:Power1.easeOut}, "up-down")     
   //  .from(".logo", 1, {alpha:0, y:20, rotation:0.02, ease:Power1.easeOut}, "-=.5")    
   //  .from(".header", .5, {alpha:0, y:10, rotation:0.02, ease:Quad.easeOut}, "-=.2")
    // .from(".sub-head", 1, {alpha:0, y:10, rotation:0.02, ease:Quad.easeOut, delay:.5})
    // .from(".terms", .5, {alpha:0, y:30, rotation:0.02, ease:Power2.easeOut}, "-=1")
   //  .to("#legal", .5, {display:"block" }, "-=.5")
    //  .from(".cta, .arrow", .5, {alpha:0, ease:Quad.easeOut, delay:.5})
   //  .to(".arrow", .3, {x:3, yoyo:true, repeat:7},"-=.4")
     ;

//----- Window Onload ------
window.onload = function() { 
     mtl1.play();
    mtl.play();
};


var currentDuration = mtl.totalDuration();
console.log(currentDuration); 