function moveResult() {
    let resultCircle = document.querySelector(".doctors-circle");
    let resultCircleTwo = document.querySelector(".reviews-circle");
    let resultRot = document.querySelector(".doctors-circle-row");

    window.addEventListener("scroll", function () {
        resultCircle.style.transform = "translateY(-" + window.pageYOffset / 8 + "%)";
        resultCircleTwo.style.transform = "translateY(-" + window.pageYOffset / 16 + "%)";
        resultRot.style.transform = "rotate(" + window.pageYOffset / 15 + "deg)"; 
    });

}
moveResult();

// function animDoctors() {
//     const cardDoc = document.querySelectorAll('.doctors__card');
//     window.onscroll = function stickyHeader() {
//         if(window.pageYOffset > 200) {

//             cardDoc.forEach(item => {
//                 item.classList.add('_animated');
//             })
//         } 
//     }
// }
// animDoctors()