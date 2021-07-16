
//scroll change bg header
const mastheadMain = document.querySelector('.masthead');
const nav = document.querySelector('nav');
window.addEventListener('scroll',function(){
    const scrollTop = document.querySelector('html').scrollTop;
   if(scrollTop > mastheadMain.offsetHeight - nav.offsetHeight)
   {
       nav.style.background = "#A9A9A9";

   }
   else{
       nav.style.background ="transparent";
   }
});
//----//
AOS.init();
//----//

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const VIDEO_WIDTH = 400
const WIDTH_FOR_AUTO_PLAY = VIDEO_WIDTH - 10
var player1;
var player2;
var player3;
var player4;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('video1', {
    height: '200',
    width: `${VIDEO_WIDTH}`,
    videoId: 'psZ1g9fMfeo',
    playerVars: {
      'playsinline': 1
    }
  });
  player2 = new YT.Player('video2', {
    height: '200',
    width: `${VIDEO_WIDTH}`,
    videoId: 'psZ1g9fMfeo',
    playerVars: {
      'playsinline': 1
    }
  });
  player3 = new YT.Player('video3', {
    height: '200',
    width: `${VIDEO_WIDTH}`,
    videoId: 'psZ1g9fMfeo',
    playerVars: {
      'playsinline': 1
    }
  });
  player4 = new YT.Player('video4', {
    height: '200',
    width: `${VIDEO_WIDTH}`,
    videoId: 'psZ1g9fMfeo',
    playerVars: {
      'playsinline': 1
    }
  });
}

let i = 0
document.querySelector("#test").addEventListener("scroll", function(e){
    const scrollElement = document.querySelector("#test")
    if(scrollElement.scrollLeft < WIDTH_FOR_AUTO_PLAY){
        player1.playVideo()
        player2.pauseVideo()
        player3.pauseVideo()
        player4.pauseVideo()
    } else if (WIDTH_FOR_AUTO_PLAY <= scrollElement.scrollLeft && scrollElement.scrollLeft < WIDTH_FOR_AUTO_PLAY * 2) {
        player1.pauseVideo()
        player2.playVideo()
        player3.pauseVideo()
        player4.pauseVideo()
    } else if (WIDTH_FOR_AUTO_PLAY * 2 <= scrollElement.scrollLeft && scrollElement.scrollLeft <  WIDTH_FOR_AUTO_PLAY * 3){
        player1.pauseVideo()
        player2.pauseVideo()
        player3.playVideo()
        player4.pauseVideo()
    } else {
        player1.pauseVideo()
        player2.pauseVideo()
        player3.pauseVideo()
        player4.playVideo()
    }
    
})