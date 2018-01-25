
$(document).ready(function(){
    $('#fullpage').fullpage({
        verticalCentered: false,
        css3: false
    });

    $('.js-reviews-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false
    });

    $('.js-preview-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true
    });

});