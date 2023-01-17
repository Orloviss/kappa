function moveService() {
    let pageServiceOne = document.querySelector(".page-service-one");
    let pageServiceTwo = document.querySelector(".page-service-two");
    let pageServiceTop = document.querySelector(".page-service-top");
    let pageServiceLeft = document.querySelector(".page-service-left");

    window.addEventListener("scroll", function () {
        pageServiceOne.style.transform = "translateY(-" + window.pageYOffset / 5 + "%)";
        pageServiceTwo.style.transform = "translateY(-" + window.pageYOffset / 7 + "%)";
        pageServiceTop.style.transform = "translateY(-" + window.pageYOffset / 11 + "%)";
        pageServiceLeft.style.transform = "rotate(" + window.pageYOffset / 6 + "deg)"; 
    });

}

moveService();