$(function () {
    $('.slider__main').slick({ 
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        appendArrows: $('.slider__main-arrow'),
        appendDots: $('.slider__main-dots'),
        responsive:
            [
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }
            ]
    })

    $('.slider__main-prev').on('click', function (e) {
        e.preventDefault()
        $('.slider__main').slick("slickPrev")
    })
    $('.slider__main-next').on('click', function (e) {
        e.preventDefault()
        $('.slider__main').slick("slickNext")
    })
    $('.faq__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('faq__acc-link--active')) {
            $(this).removeClass('faq__acc-link--active')
            $(this).find('.faq__acc-text').slideUp()
        } else {
            $('.faq__acc-link').removeClass('faq__acc-link--active')
            $('.faq__acc-text').slideUp()
            $(this).addClass('faq__acc-link--active')
            $(this).find('.faq__acc-text').slideDown()
        }
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--folo')
        } else {
            $('.burger').removeClass('burger--folo')
        }
    }, 0);

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })
});