function moveService() {
    let priceCirle  = document.querySelector(".price__cirle ");
    let priceRotate = document.querySelector(".price__cirle-rotate ");

    window.addEventListener("scroll", function () {
        priceCirle.style.transform = "translateY(-" + window.pageYOffset / 10 + "%)";
        priceRotate.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)"; 
    });

}

moveService();

function hideAccordion() {
    const hideBtn = document.querySelectorAll('.table__vision');
    const tab = document.querySelectorAll('.accordion-tab');
        hideBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            tab.forEach(tab => {
                tab.classList.remove('active')
            })
        })
    })
}
hideAccordion()