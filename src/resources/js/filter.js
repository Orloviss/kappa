function filter() {
    const popUp = document.querySelector('.filter__popUp');
    const filter = document.querySelector('.filter');
    const close = document.querySelector('.close__wrapper')

    filter.addEventListener('click', () => {
        popUp.classList.add('actived');
        document.body.classList.add ("_lock");
    })
    close.addEventListener('click', () => {
        popUp.classList.remove('actived');
        document.body.classList.remove ("_lock");
    })
}
filter();