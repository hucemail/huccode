define(["jquery"], function ($) {
    return {
        changeBodyColor: function () {
            $("body").css({ "background-color": "red" });
        }
    }
});