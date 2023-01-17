function moveResult() {
    let resultCircle = document.querySelector(".result-circle");
    let resultCircleTwo = document.querySelector(".result-circle-two");
    let resultRot = document.querySelector(".result-circle-rotate");

    window.addEventListener("scroll", function () {
        resultCircle.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
        resultCircleTwo.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
        resultRot.style.transform = "rotate(" + window.pageYOffset / 6 + "deg)"; 
    });

}
moveResult();