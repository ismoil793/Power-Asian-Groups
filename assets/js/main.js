$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // custom Js code for header(transformator,reactor)
    var product_wrapperAll = $.find('.product-wrapper');
    var product_wrapper = $('.product-wrapper');

    product_wrapper.click(function () {
        $(product_wrapperAll).removeClass('active');
        $(this).addClass("active");

        product_titleText = $(this).find("span").text();

        if (product_titleText.startsWith('Трансформаторы')) {
            $('.product-info').html("Современные трансформаторы тока бывают: стержневыми, броневыми\n" +
                "                    или тороидальными. Все три типа трансформаторов имеют похожие\n" +
                "                    характеристики, и надежность, но отличаются друг от друга способом\n" +
                "                    изготовления");
        } else if (product_titleText.startsWith('Изоляционные')) {

            $('.product-info').html("Изоляционные материалы\n бывают: стержневыми, броневыми\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing " +
                "elit. Aut commodi repellendus velit?");
        } else if (product_titleText.startsWith('Реакторы')) {

            $('.product-info').html("Реакторы Lorem ipsum dolor sit amet, consectetur adipisicing " +
                "elit. Aut commodi repellendus velit?");
        }

        $('h2.product-title').html(product_titleText);
    });


    // $("#menu").mmenu();
    $("#menu").mmenu({
        "extensions": [
            "pagedim-black",
        ],
        "navbars": [
            {
                "position": "top",
                // "content": [
                // "searchfield"
                // ]
            },
            {
                "position": "bottom",
                "content": [
                    "<a class='fab fa-facebook' href='#/'></a>",
                    "<a class='fab fa-instagram' href='#/'></a>",
                    "<a class='fab fa-telegram' href='#/'></a>"
                ]
            }
        ]
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 30) {  //$(window).height()
            $('.hamburger-logo').addClass('home-page-menu-style')
        } else {
            $('.hamburger-logo').removeClass('home-page-menu-style')
        }
    });


    //wow js
    new WOW().init();


    // Кнопка "Наверх"
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('.top-button').addClass('active');
        } else {
            $('.top-button').removeClass('active');
        }
    });
    $('.top-button').click(function () {
        $('html,body').stop().animate(
            {scrollTop: 0}, 'slow', 'swing'
        );
    });


    // Select all links with hashes
    $('a[href*="#news-block-title"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
});

$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow');
});