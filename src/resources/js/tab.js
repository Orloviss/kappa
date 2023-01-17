function tab() {
    const tabVision = document.querySelectorAll('.tab__more');
    const tabWrap = document.querySelector('.tab__wrapper');
    const tabHide = document.querySelector('.hide__tap');

    tabVision.forEach(tab => {
        tab.addEventListener('click', () => {
            tabWrap.classList.add('active')
            tab.classList.add('actived')
        })
    })
    tabHide.addEventListener('click', () => {
        tabWrap.classList.remove('active')
        tabVision.forEach(tab => {
            tab.classList.remove('actived')
        }) 
    })
}
tab();