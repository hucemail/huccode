define(["jquery", "ntv"], function ($,ntv) {
    $("#btn-modal").click(function () {
        $('#myModal').modal({});
    });
    $("#btn-login").click(function () {
        if (!ntv.username($("#username").val())) {
            alert("用户名验证错误");
        }
    });
});