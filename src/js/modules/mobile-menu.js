// mobile menu
let menu_btn = "<div class='menu-button'><div class='menu-button__inner'><span></span><span></span><span></span></div></div>"
let mob_menu = '<div class="mobile-menu"><div class="mobile-menu__buttons"><div class="container"></div></div><nav class="mobile-menu__nav container"></nav></div>'


var header_menu = document.querySelector('.header .nav ul').cloneNode();

document.querySelector('.header__right').insertAdjacentHTML("beforeEnd", menu_btn);
document.querySelector('body').insertAdjacentHTML("beforeEnd", mob_menu);


// function menuPosition() {
//     let header_height = $('.header').innerHeight();
//     $('.mobile-menu').css({
//         'top': header_height,
//         'height': `calc(100vh - ${header_height}px)`
//     });
// }
// document.addEventListener("DOMContentLoaded", () => {
//     menuPosition();
// });
// $(window).on('resize', function () {
//     menuPosition();
// });



// $('.menu-button').click(function () {

//     $('body').toggleClass('overflow-bg');
//     $(this).toggleClass('open');
//     $('.mobile-menu').toggleClass('open');

// });