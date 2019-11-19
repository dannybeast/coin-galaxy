// JS
import './js/libs/jquery.viewportchecker.min';
import SimpleScrollbar from 'simple-scrollbar';
import './js/modules/language';
import './js/modules/accordion';
import './js/modules/mobile-menu-lk';
import './js/modules/datatables';
import './js/modules/copy';
import 'glider-js';
// SCSS
import './assets/scss/lk.scss'

document.addEventListener("DOMContentLoaded", function (event) {
    let loader = document.querySelector('.loader');
    loader.classList.add('hide');
});


// slider trading-info
// let tr_slider = document.querySelector('.trading-info .js-swiper');
// if (tr_slider) {
//     new Glider(tr_slider, {
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         draggable: true,
//         scrollLock: true,
//         responsive: [{
//             breakpoint: 0,
//             settings: {
//                 slidesToShow: 1.5,
//             }
//         }, {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 3.5
//             }
//         }, {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4.5,
//             }
//         }]
//     });
// }

$(document).ready(function () {

    // animate
    $('section').viewportChecker({
        classToAdd: 'active',
        offset: 100,
        repeat: true
    });

});