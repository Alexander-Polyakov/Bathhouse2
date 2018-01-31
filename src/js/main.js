
$(document).ready(function(){
    $(".js-popup-open").click(function(){
       $(".js-popup").fadeIn(400);
    });


    $(".js-popup-close").click(function(){
        var src = $(".popup__video").attr('src');
        $(".popup__video").attr('src', src);
        $(".js-popup").fadeOut(400);
    });

    if ($(window).width() > 1366) {
        $('#fullpage').fullpage({
            verticalCentered: false,
            css3: false,
            navigation: true,
            navigationPosition: 'right',
            // navigationTooltips: ['First page', 'Second page', 'Third and last page']
        });
    }


    var previewSection = $(".js-preview-screen");

    previewSection.mousemove(function(e){
        var needX = e.pageX/50,
            needY = e.pageY/50;

        $(".preview-section__bg_vapor").css("background-position-x", needX)
        $(".preview-section__bg_vapor").css("background-position-y", needY)
    })

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