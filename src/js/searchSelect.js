function openSelect() {
    const input = document.querySelector('.input-select');
    const reset = document.querySelector('.select__clear-btn');

    input.addEventListener('input', () => {
        document.querySelector('.select__search-btn').style.display = 'none';
        document.querySelector('.select__clear-btn').style.display = 'flex';
        document.querySelector('.select-content').style.display = 'block';
        if (input.value == '') {
            document.querySelector('.select__search-btn').style.display = 'block';
            document.querySelector('.select__clear-btn').style.display = 'none';
            document.querySelector('.select-content').style.display = 'none';
        }
    })
    reset.addEventListener('click', () => {
        input.value = '';
        document.querySelector('.select__search-btn').style.display = 'block';
        document.querySelector('.select__clear-btn').style.display = 'none';
        document.querySelector('.select-content').style.display = 'none';
    })

}
openSelect()