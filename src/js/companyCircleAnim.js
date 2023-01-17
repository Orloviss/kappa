function companyCircle() {
    let circleTarget  = document.querySelector(".company-circle-dec");
    let circleTargetRot  = document.querySelector(".company-circle-dec");
        window.addEventListener("scroll", function () {
            circleTarget.style.transform = "translateY(-" + window.pageYOffset / 5 + "%)";
            circleTargetRot.style.transform = "rotate(-" + window.pageYOffset / 5 + "deg)";
        });
}
companyCircle()
