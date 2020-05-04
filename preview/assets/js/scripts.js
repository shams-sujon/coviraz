(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('.preloader-wave-effect').fadeOut();
        $('.preloader-text').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow');
    });

    const checkerSlider = new Swiper('.swiper-container', {
        // simulateTouch: false,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        }
    });

    const cancelBtn = document.getElementById("swiper-cancel");
    if ($(cancelBtn).length != 0) {
        cancelBtn.addEventListener("click", function () {
            checkerSlider.slideTo(0,0)
        });
    }



})(jQuery);