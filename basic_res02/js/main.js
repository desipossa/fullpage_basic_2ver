$(function () {

    var main_slide_option = {
        arrows: false,
        vertical: true,
        dots: true,
        autoplay: true,
    }

    $('.main_slide').slick(main_slide_option)


    $('.tab_menu li').on('click', function () {
        var idx = $(this).index();
        $('.tab_content li')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 200)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        sct > 100
            ?
            $('.to_top').fadeIn()
            :
            $('.to_top').fadeOut()
    });


    $('.family_link').on('change', function () {
        var lnk = $(this).val();
        lnk && window.open(lnk);
    });

    $('.right_banner i').on('click', function () {
        $(this).toggleClass('on');
        $('.right_banner').toggleClass('on');
    })








})