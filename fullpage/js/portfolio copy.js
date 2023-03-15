$(function () {


    var fullpageOption = {
        anchors: [
            'main',
            'portfolio01',
            'portfolio02',
            'portfolio03',
            'portfolio04',
            'portfolio05'
        ],
        onLeave: function (origin, destination) {
            console.log(origin, destination);
            $('.gnb li')
                .eq(destination - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.section')
                .eq(destination - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
        },
        afterRender: function () {
            $('.gnb li')
                .eq(0)
                .addClass('on');
            $('.section')
                .eq(0)
                .addClass('on');
        },
    }

    $('.main').fullpage(fullpageOption);


    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
    });




})