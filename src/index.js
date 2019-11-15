// JS
import 'jquery.marquee';
import SimpleScrollbar from 'simple-scrollbar';
import './js/libs/jquery.viewportchecker.min';

import './js/modules/language';
import './js/modules/mobile-menu';
import './js/modules/sliders';
import './js/modules/accordion';
import './js/modules/datatables';

// SCSS
import './assets/scss/main.scss'

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

    // marquee
    $('.ticker').marquee({
        duration: 12000,
        gap: 10,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });

});