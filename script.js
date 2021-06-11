
// ループスライドショー

$(function () {
    if (window.innerWidth > 1280) {
        $('.slider').slick({arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 8000,
            slidesToShow: 5,
            slidesToScroll: 1,
            pauseOnHover: true
        });
    } else if (window.innerWidth <= 1280 && window.innerWidth > 768) {
        $('.slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 8000,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnHover: true
        });
    } else if (window.innerWidth <= 768 && window.innerWidth > 500) {
        $('.slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 8000,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true
        });
    } else if (window.innerWidth <= 500) {
        $('.slider').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 8000,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnHover: true
        });
    }
});

// ハンバーガーメニュー

$('.drawer-btn').on('click', function () {
        var jQuerynavList = $(this);
        if (jQuerynavList.hasClass("current")) {
            jQuerynavList.removeClass("current");
            $('.gnav').fadeOut('500');
            $('.nav-layer').removeClass('active');
            $('.nav-layer').fadeOut('500');
            $('.logo').removeClass('nav-open');
        } else {
            jQuerynavList.addClass("current");
            $('.gnav').fadeIn('500');
            $('.nav-layer').fadeIn('500');
            $('.nav-layer').addClass('active');
            $('.logo').addClass('nav-open');
        }
        return false;
    });

//スクロールでロゴ変更

$(function () {
    $(window).scroll(function () {
        $(".header-main-contents").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if ($(window).scrollTop() >= imgPos) {
                $(".header-logo").css({
                    "top": "15px",
                    "left": "15px"
                });
            } else {
                $(".header-logo").css({
                    "top": "33px",
                    "left": "36px"
                });
            }
        });
    });
});