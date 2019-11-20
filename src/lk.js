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
let tr_slider = document.querySelector('.trading-info__row');
if (tr_slider) {
    new Glider(tr_slider, {
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: true,
        responsive: [{
            breakpoint: 0,
            settings: {
                slidesToShow: 2.5,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3.5
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4.5,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
            }
        }]
    });
}

$(document).ready(function () {

    $('.scrollbar-inner').scrollbar();

    // animate
    $('section').viewportChecker({
        classToAdd: 'active',
        offset: 100,
        repeat: true
    });


    // s-table indicators
    let tr = $('.s-table__tr[data-percent]');
    tr.each(function () {
        let width = $(this).data('percent');
        $(this).append(`<span class="s-table__indicator" style="width:${width}"></span>`)
    });
    //-


});