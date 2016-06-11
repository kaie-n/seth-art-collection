
var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    autoplay: 5500,
    loop: true,
    autoplayDisableOnInteraction: false,
    effect: 'fade',
    speed: 2500
});
new WOW().init();
$('body').removeClass('hidden');