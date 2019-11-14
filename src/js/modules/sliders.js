import 'glider-js';

// slider corses
let c_slider = document.querySelector('.js-course-slider');
if (c_slider) {
    new Glider(c_slider, {
        slidesToShow: 4,
        slidesToScroll: 1,
        resizeLock: false,
        arrows: {
            prev: '.s-arrow--prev',
            next: '.s-arrow--next'
        },
        responsive: [{
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                draggable: false,
                resizeLock: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4
            }
        }]
    });
}

// slider events
let e_slider = document.querySelector('.events ul');
if (e_slider) {
    new Glider(e_slider, {
        slidesToShow: 3,
        slidesToScroll: 1,
        scrollLock: true,
        responsive: [{
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                exactWidth: true,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }]
    });
}