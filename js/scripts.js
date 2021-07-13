
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