var setMoreHouseHeight = function () {
    var $w = $(window).width() > 970 ? $(window).width() : 970;
    var padW = 340 / 1920 * $w;
    var mTop = 207 / 1920 * $w;
    var mButton = 75 / 1920 * $w;
    var fButton = 286 / 1920 * $w;
    var nextImgTop = 505 / 1920 * $w;

    $('div.more-house').css({
        paddingLeft: padW,
        paddingRight: padW
    });

    $('div.jianzi').css({marginTop: mTop, marginBottom: mButton});

    $('.thumbnail').css({marginBottom: fButton});

    $('.next-img,.previous-img').css({top: nextImgTop});
};

$(window).resize(function () {
    setMoreHouseHeight();
});
setMoreHouseHeight();
