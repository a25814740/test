$(document).ready(function() {

    /* ==========================================================================
                * 變數定義
    ==========================================================================*/
    h = $(window).height();
    w = $(window).width();

    $winH = $('.winH');
    $jqimgFill = $('.jqimgFill');
    $pro55 = $('.pro55');
    $pro64 = $('.pro64');
    $banner = $('#banner');

    resizeCss();

    /* ==========================================================================
                * 頁面區塊
    ==========================================================================*/


    /* ==========================================================================
                * 螢幕縮放動作
    ==========================================================================*/

    $(window).resize(function() {
        resizeCss();
    });

    function resizeCss() {
        h = $(window).height();
        w = $(window).width();

        /*頁面高度*/
        $winH.each(function() {
            $(this).css("height", h);
        });
        /*正方形*/
        $pro55.each(function() {
            $(this).css("height", $(this).width());
        });
        /*長方形*/
        $pro64.each(function() {
            $(this).css("height", $(this).width() / 1.54);
        });
        /*縮圖*/
        $jqimgFill.each(function() {
            $(this).focusPoint();
        });
        $jqimgFill.focusPoint({
            reCalcOnWindowResize: true,
            throttleDuration: 100 //re-focus images at most once every 100ms.
        });
    }

    /*document END*/
});

/* ==========================================================================
        * 網頁一載入時
==========================================================================*/

$(window).load(function() {
    $("body").css({"opacity": 1});
});