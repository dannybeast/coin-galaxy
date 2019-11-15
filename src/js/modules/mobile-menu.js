// mobile menu
let menu_btn = "<div class='menu-button'><div class='menu-button__inner'><span></span><span></span><span></span></div></div>"
let mob_menu = '<div class="mobile-menu"><div class="mobile-menu__buttons"><div class="container"></div></div><nav class="mobile-menu__nav container"></nav><div class="mobile-menu__links container"></div></div>'

function menuPosition() {
    let header_height = $('.header').innerHeight();
    $('.mobile-menu').css({
        'top': header_height,
        'height': `calc(100vh - ${header_height}px)`
    });
}

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (document.querySelector('.header .nav ul')) {
    let header_menu = document.querySelector('.header .nav ul').cloneNode(true);
    let header_buttons = document.querySelector('.header__buttons').cloneNode(true);
    let header_help_links = document.querySelectorAll('.header__help-links ul');

    document.querySelector('.header__right').insertAdjacentHTML("beforeEnd", menu_btn);
    document.querySelector('body').insertAdjacentHTML("beforeEnd", mob_menu);
    document.querySelector('.mobile-menu__nav').append(header_menu);

    if (viewportWidth <= 767) {
        document.querySelector('.mobile-menu__buttons .container').append(header_buttons);
    }

    header_help_links.forEach(function (ul) {
        let header_help_links_ul = ul.cloneNode(true);
        header_help_links_ul.classList.add('links');
        document.querySelector('.mobile-menu__nav').append(header_help_links_ul);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    menuPosition();
});

window.addEventListener('resize', function () {
    menuPosition();
}, false);

$('.menu-button').click(function () {
    $('body').toggleClass('overflow-bg');
    $('.menu-button__inner').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
});