(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('.preloader-wave-effect').fadeOut();
        $('.preloader-text').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow');
    });

    const checkerSlider = new Swiper('.swiper-container', {
        simulateTouch: false,
        autoHeight: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        }
    });
    document.getElementById("swiper-cancel").addEventListener("click", function () {
        checkerSlider.slideTo(0)
    });


})(jQuery);