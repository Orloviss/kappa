function moveService() {
    let priceCirle  = document.querySelector(".news-circle ");
    let priceRotate = document.querySelector(".news-circle-rot ");

    window.addEventListener("scroll", function () {
        priceCirle.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
        priceRotate.style.transform = "rotate(" + window.pageYOffset / 20 + "deg)"; 
    });

}

moveService();