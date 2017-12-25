'use strict';

var express = require("express");
var app = express();

app.get("/:username/:no", function (req, res, next) {
    var username = req.params.username;
    if (username === "admin") {
        //如果username是admin，那么过滤，使它继续匹配下面的路由
        next();
    }
    else {
        res.send("姓名：" + username + ",学号：" + req.params.no);
    }
});

app.get("/admin/login", function (req, res) {
    res.send("管理员登录");
});
app.listen(1337);