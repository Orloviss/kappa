function moveCircle() {
    let circleOne  = document.querySelector(".circle-one");
    let circleTwo = document.querySelector(".circle-two");
    let circleThree = document.querySelector(".circle-three ");
    let circleFour = document.querySelector(".circle-four  ");
    let circleFive = document.querySelector(".circle-five");
    let circleSix = document.querySelector(".circle-six");

        window.addEventListener("scroll", function () {
            circleOne.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
            circleTwo.style.transform = "translateY(-" + window.pageYOffset / 12+ "%)";
            circleThree.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)"; 
            circleFour.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
            circleFive.style.transform = "translateY(-" + window.pageYOffset / 15 + "%)";
            circleSix.style.transform = "translateY(-" + window.pageYOffset / 20 + "%)";
        });
}
moveCircle() 