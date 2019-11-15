// JS
import './js/libs/jquery.viewportchecker.min';

import './js/modules/language';
import './js/modules/accordion';
import './js/modules/datatables';

// SCSS
import './assets/scss/lk.scss'

document.addEventListener("DOMContentLoaded", function (event) {
    let loader = document.querySelector('.loader');
    loader.classList.add('hide');
});


$(document).ready(function () {

    // animate
    $('section').viewportChecker({
        classToAdd: 'active',
        offset: 100,
        repeat: false
    });

});