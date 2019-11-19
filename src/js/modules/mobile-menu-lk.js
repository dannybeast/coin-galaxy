// mobile menu
let menu_btn = "<div class='menu-button'><div class='menu-button__inner'><span></span><span></span><span></span></div></div>"
let mob_menu = '<div class="mobile-menu"><div class="mobile-menu__buttons"><div class="container"></div></div><nav class="mobile-menu__nav container"></nav><div class="mobile-menu__links container"></div></div>'

function menuPosition() {
    let header_height = $('.header-lk').innerHeight();
    let tb_height = $('.top-bar').innerHeight();
    $('.mobile-menu').css({
        'top': header_height + tb_height,
        'height': `calc(100vh - ${header_height+tb_height}px)`
    });
}

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (document.querySelector('.header-lk .nav-lk ul')) {
    let header_menu = document.querySelector('.header-lk .nav-lk ul').cloneNode(true);
    let header_buttons = document.querySelector('.header-lk__buttons').cloneNode(true);

    document.querySelector('.header-lk__right').insertAdjacentHTML("beforeEnd", menu_btn);
    document.querySelector('body').insertAdjacentHTML("beforeEnd", mob_menu);
    document.querySelector('.mobile-menu__nav').append(header_menu);

    document.querySelector('.mobile-menu__buttons .container').append(header_buttons);


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