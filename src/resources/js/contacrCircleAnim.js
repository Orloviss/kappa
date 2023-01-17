function moveResult() {
    let resultRot = document.querySelector(".contact-rot");

    window.addEventListener("scroll", function () {
        resultRot.style.transform = "rotate(" + window.pageYOffset / 12 + "deg)"; 
    });

}
moveResult();