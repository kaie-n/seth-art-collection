
var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    autoplay: 6500,
    loop: true,
    autoplayDisableOnInteraction: false,
    effect: 'fade',
    speed: 2500
});
new WOW().init();

$('.overlay').fadeOut();