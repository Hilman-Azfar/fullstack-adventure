console.log("scroller loaded");

const scrollcont = document.getElementsByClassName("scroll-container")[0];
const contwrap = document.getElementsByClassName("container-wrapper")[0];   
const  scrollerL = document.getElementById("scrollerL");
const scrollerR = document.getElementById("scrollerR");

scrollerL.onclick = function() {
    scrollcont.scrollLeft = scrollcont.scrollLeft-=20;
};

scrollerR.onclick = function() {
    scrollcont.scrollLeft = scrollcont.scrollLeft+=20;
};
