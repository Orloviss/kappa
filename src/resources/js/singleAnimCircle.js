function moveService() {
    let pageServiceRotate = document.querySelector(".service__-page-circle-one");
    let pageServiceCircle = document.querySelector(".service__-page-circle-two");
    let pageBlur = document.querySelector(".blur_bg");
    let pageBlurTwo = document.querySelector(".blur_bg-two");
  

    window.addEventListener("scroll", function () {
        pageServiceRotate.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)"; 
        pageServiceCircle.style.transform = "translateY(-" + window.pageYOffset / 4 + "%)";
        pageBlur.style.transform = "translateY(-" + window.pageYOffset / 8 + "%)";
        pageBlurTwo.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
    });

}

moveService();