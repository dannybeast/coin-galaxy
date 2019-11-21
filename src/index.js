// JS
import 'jquery.marquee';
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
    $('.scrollbar-inner').scrollbar();
    // slider intro
    let i_slider = $('.intro-slider');
    let i_slider_title = i_slider.find('.intro-slider__title');
    let i_slider_img = i_slider.find('.intro-slider__s-image img');
    let i_slider_nav = $('.intro-steps li');
    let i__prev = $('.intro-steps__prev');
    let i__next = $('.intro-steps__next');

    hideSlide();
    showSlide(0);

    function hideSlide() {
        i_slider_img.removeClass('show');
        i_slider_title.removeClass('show');
        i_slider_nav.removeClass('active');
    }

    function showSlide(index) {
        hideSlide();
        i_slider_img.eq(index).addClass('show');
        i_slider_title.eq(index).addClass('show');
        i_slider_nav.eq(index).addClass('active');

        if (index === 0) {
            i__prev.removeClass('show');
        } else {
            i__prev.addClass('show');
        }
        if (index == i_slider_img.length - 1) {
            i__next.removeClass('show');
        } else {
            i__next.addClass('show');
        }
    }

    i__next.click(function () {
        let current = i_slider.find('.intro-steps li.active').index();
        hideSlide();
        showSlide(current + 1);
    });
    i__prev.click(function () {
        let current = i_slider.find('.intro-steps li.active').index();
        hideSlide();
        showSlide(current - 1);
    });

    i_slider_nav.each(function (index) {
        $(this).click(function () {
            hideSlide();
            showSlide(index);
        });
    });
    //-


    // animate
    $('section').viewportChecker({
        classToAdd: 'active',
        offset: 100,
        repeat: true
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