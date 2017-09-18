var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
tl1 = new TimelineMax();

//Timeline animation...
tl1.set(banner, {visibility: "visible"})

  .from(".text0", .5, {x:-300, ease:Expo.easeOut})
  .from(".products", 1, {opacity:1})

   .to(".text0", .5, {opacity:0, ease:Expo.easeOut, delay:3} )
   .from(".text1", .5, {opacity:0, ease:Expo.easeOut})
   .to(".text1", .5, {opacity:0, ease:Expo.easeOut, delay:3} )
   .from(".text2", 1, {opacity:0, ease:Expo.easeOut}, "terms")
            
//Add all timelines to master timeline...
masterTimeline.add([tl1]);


//after window load...
window.onload = function()
{
    masterTimeline.play();
}

//count animation duration of a timeline...
var currentDuration = tl1.duration();
console.log(currentDuration); 