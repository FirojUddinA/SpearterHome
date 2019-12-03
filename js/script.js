
$(document).ready(function(){
    $(".burger_icon").click(function(){
        $('#responsive').addClass('open');
    });
    $(".responsive_menu_close").click(function(){
        $('#responsive').removeClass('open');
    });

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if(sc >100){
            $('#header .nav').addClass('sticky-nav')
        }else {
            $('#header .nav').removeClass('sticky-nav')
        }
    })

    $('#bxslider .bxslider').bxSlider({
        mode:'horizontal',
        moveSlides:1,
        slideMargin:40,
        minSlides:1,
        maxSlides:1,
        speed:1200,
        infiniteLoop:true,
    });


    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        // mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },

    });

    // swiper slider for work

    if ($(".swiper-container").hasClass('team-member-slider')){
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
            loop:true,
            autoplay:false,
            autoTouchMove:true,
            coverflow: {
                rotate: 0,
                stretch:100,
                depth:200,
                modifier: 1,
                slideShadows : false,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },


           //  And if we need scrollbar

            breakpoints:{
                767:{
                    sliderPerView:1,
                    centeredSlider:false,
                    effect:'slide',
                },

            }
        })

    }


    $("#news-slider").owlCarousel({

        autoPlay: true, //Set AutoPlay to 3 seconds
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsMobile : [576,1],
        pagination: false,
        navigationText: false,

    });
    $("#client-list").owlCarousel({

        autoPlay: true, //Set AutoPlay to 3 seconds
        items : 6,
        itemsDesktop : [1199,6],
        itemsDesktopSmall : [980,5],
        itemsMobile : [576,2],
        pagination: true,
        navigationText: true,

    });



    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".portfolio-item").isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
    });
    $(".portfolio-menu ul li").click(function () {
        $(".portfolio-menu ul li").removeClass('active-portfolio');
        $(this).addClass('active-portfolio');

        var selector = $(this).attr('data-filter');
        $(".portfolio-item").isotope({
            filter: selector,
        });
        return false;
    });

});

var scroll = new SmoothScroll('a[href*="#"]');