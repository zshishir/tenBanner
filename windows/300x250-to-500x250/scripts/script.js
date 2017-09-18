//var ad,banner,panel;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

/* --------------------------------------------------- */
/* vars */
/* --------------------------------------------------- */

function startAd() {

    // start the ad after all loaded
    ad = document.getElementById("ad");
    ad.style.display = 'block';

    banner = document.getElementById("banner");
    bannerExit = document.getElementById("banner-exit");
    seeMoreBtn = document.getElementById("see-more");
    arrow = document.getElementById("arrow");

    panel = document.getElementById("panel");
    panelExit = document.getElementById("panel-exit");
    panelContent = document.getElementById("panelContent");
    panelVideo = document.getElementById("panel-video");
    closeBtn = document.getElementById("close-btn");
    audioBtn = document.getElementById("audio-btn");
    playBtn = document.getElementById("play-btn");
    replayBtn = document.getElementById("replay-btn");
    vid = document.getElementById("video");
    cta = document.getElementById("cta");

    addEventListeners();

    playDelayedAnimations();

}



/* --------------------------------------------------- */
/* All delayed animations */
/* --------------------------------------------------- */

function playDelayedAnimations(){

    setTimeout(function(){ document.getElementById("banner-bg").classList.add('banner-bg-anim1'); }, 4600);

    setTimeout(function(){ document.getElementById("shape2").classList.add('shape2-anim1'); }, 0);
    setTimeout(function(){ document.getElementById("shape2").classList.add('shape2-anim2'); }, 4500);
    setTimeout(function(){ document.getElementById("shape2").classList.add('shape2-anim3'); }, 7000);

    setTimeout(function(){ document.getElementById("shape3").classList.add('shape3-anim1'); }, 4500);
    setTimeout(function(){ document.getElementById("shape3").classList.add('shape3-anim2'); }, 7000);

    setTimeout(function(){ document.getElementById("copy1a").classList.add('copy1a-anim1'); }, 1000);
    setTimeout(function(){ document.getElementById("copy1a").classList.add('copy1a-anim2'); }, 4500);

    setTimeout(function(){ document.getElementById("copy1b").classList.add('copy1b-anim1'); }, 1500);
    setTimeout(function(){ document.getElementById("copy1b").classList.add('copy1b-anim2'); }, 4500);

    setTimeout(function(){ document.getElementById("copy2").classList.add('copy2-anim1'); }, 4500);

    setTimeout(function(){ document.getElementById("copy3").classList.add('copy3-anim1'); }, 7500);
    setTimeout(function(){ document.getElementById("copy3").classList.add('copy3-anim2'); }, 9500);

    setTimeout(function(){ document.getElementById("win10").classList.add('win10-anim1'); }, 10000);
    setTimeout(function(){ document.getElementById("win-icon").classList.add('win-icon-anim1'); }, 10500);

    setTimeout(function(){ document.getElementById("copy4").classList.add('copy4-anim1'); }, 11000);

    setTimeout(function(){ document.getElementById("see-more").classList.add('see-more-anim1'); }, 5000);


}





/* --------------------------------------------------- */
/* All event listeners */
/* --------------------------------------------------- */


function addEventListeners() {

    // for collapsed panel
    seeMoreBtn.addEventListener("mouseover", seeMoreOver);
    seeMoreBtn.addEventListener("mouseout", seeMoreOut);
    seeMoreBtn.addEventListener("click", expand);
    bannerExit.addEventListener("click", bannerClickthrough);

    // for expanded panel
    panelExit.addEventListener("mouseover", panelOver);
    panelExit.addEventListener("mouseout", panelOut);
    panelExit.addEventListener("click", clickthrough);

    // video panel mouseover
    panelVideo.addEventListener("mouseover", vidOver);
    panelVideo.addEventListener("mouseout", vidOut);
    panelVideo.addEventListener("click", togglePlayPause);

    // for btns
    audioBtn.addEventListener("click", toggleAudio);
    //playBtn.addEventListener("click", togglePlayPause);
    replayBtn.addEventListener("click", replayVideo);
    closeBtn.addEventListener("click", collapse);

    // video events
    vid.addEventListener("play", playCounter);
}

/* --------------------------------------------------- */
/* All mouseover actions */
/* --------------------------------------------------- */

function seeMoreOver(){
    //console.log('see more over');
    arrow.className = 'arrow-anim';
}

function seeMoreOut(){
    //console.log('see more out');
    arrow.className = '';
}


function panelOver(){
    console.log('panel over');
    cta.classList.add('cta-hover');
}

function panelOut(){
    cta.classList.remove('cta-hover');
}


function vidOver(){
    playBtn.style.opacity = 0.7;
}

function vidOut(){
    playBtn.style.opacity = 0;
}

/* --------------------------------------------------- */
/* Expand function */
/* --------------------------------------------------- */

function expand() {
    EB.expand();
    console.log('banner expands');

    // show panel
    //banner.style.display = 'none';
    panel.style.display = 'block';
    panelExit.style.display = 'none';

    // start vidoe
    vid.play();
    //vid.currentTime = vid.duration - 5; //0;
    //vid.addEventListener("ended", videoEnd);
    vid.addEventListener("timeupdate", videoUpdate);

}


/* --------------------------------------------------- */
/* All audio / video events */
/* --------------------------------------------------- */

function videoUpdate(){
    //console.log(vid.currentTime);
    if(vid.currentTime >= vid.duration - 1.3){
        videoEnd();
    }
}

function videoEnd(){
    stopVideo();

    // restarting animations 
    var tmp = panelContent.innerHTML;
    panelContent.innerHTML = tmp;
    cta = document.getElementById("cta");

    panelContent.style.display = 'block';
    panelExit.style.display = 'block';
    replayBtn.style.display = 'block';
    audioBtn.style.display = 'none';
}

function replayVideo(){
    panelContent.style.display = 'none';
    panelExit.style.display = 'none';
    replayBtn.style.display = 'none';
    audioBtn.style.display = 'block';
    vid.currentTime = 0;
    vid.play();
}

function stopVideo(){
    vid.pause();
    vid.currentTime = 0;
}

function toggleAudio(){
    if(vid.muted){
        vid.muted = false;
        audioBtn.className = 'mute';
    } else {
        vid.muted = true;
        audioBtn.className = 'unmute';
    }
}


function togglePlayPause(){
    if(vid.paused){
        console.log('playing');
        vid.play();
        playBtn.className = 'pause';
    } else {
        console.log('paused');
        vid.pause();
        playBtn.className = 'play';
    }
}

/* --------------------------------------------------- */
/* Collapse function */
/* --------------------------------------------------- */

function collapse() {
    stopVideo();
    panelContent.style.display = 'none';
    replayBtn.style.display = 'none';
    audioBtn.style.display = 'block';
    //banner.style.display = 'block';
    panel.style.display = 'none';
    EB.collapse();
    console.log('banner collapsed');
}

/* --------------------------------------------------- */
/* clickthrough */
/* --------------------------------------------------- */

function bannerClickthrough() {
    EB.clickthrough();
    console.log('banner clickthrough !');
}

function clickthrough() {
    EB.clickthrough();
    collapse();
    console.log('panel clickthrough !');
}

function playCounter() {
    console.log('video play counter');
    EB.userActionCounter("Video Play");
}

window.addEventListener("load", initEB);
