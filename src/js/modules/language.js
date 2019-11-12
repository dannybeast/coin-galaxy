let lg_current = document.querySelector('.language__current');
let lg_dropdown = document.querySelector('.language__dropdown');

lg_current.addEventListener('click', function () {
    this.classList.toggle('active');
    lg_dropdown.classList.toggle('open');
});