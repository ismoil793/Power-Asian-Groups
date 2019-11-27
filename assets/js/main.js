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
        }
        else if (product_titleText.startsWith('Изоляционные')) {

            $('.product-info').html("Изоляционные материалы\n бывают: стержневыми, броневыми\n" +
                "                    Lorem ipsum dolor sit amet, consectetur adipisicing " +
                "elit. Aut commodi repellendus velit?");
        }
        else if (product_titleText.startsWith('Реакторы')) {

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

});

$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow');
});