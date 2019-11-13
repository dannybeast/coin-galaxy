import 'glider-js';


// slider corses
new Glider(document.querySelector('.js-course-slider'), {
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
            draggable: true
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