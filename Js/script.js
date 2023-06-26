$(document).ready(function () {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.back').addClass("show");
        } else {
            $('.back').removeClass("show");
        }
    });

    $('.back').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.nav-trigger').click(function () {
        $('.site-content-wrapper').toggleClass('scaled');
    });

});