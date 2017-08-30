/// <reference path="../../plugins/zepto/zepto.min.js" />
/// <reference path="../../plugins/zepto/touch.js" />
(function () {
    var screenIndex = 0;
    var windowHeight = $(window).height();
    $("body").swipeUp(function () {
        //手势上滑
        screenIndex--;
        $("#container").css({ "margin-top": screenIndex * windowHeight });
        
    });
    $("body").swipeDown(function () {
        //手势下滑
        screenIndex++;
        $("#container").css({ "margin-top": screenIndex * windowHeight });
    });
})();