(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('.preloader-wave-effect').fadeOut();
        $('.preloader-text').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow');
    });


})(jQuery);