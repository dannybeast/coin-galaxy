// JS
import $ from 'jquery';
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

// animate
$('section').viewportChecker({
    classToAdd: 'active',
    offset: 100,
    repeat: false
});