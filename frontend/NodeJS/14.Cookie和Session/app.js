'use strict';

var express = require("express");
var cookieParser = require('cookie-parser')
var app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    var v = new Date().getTime();
    //httpOnly:标志cookie只能由Web服务器访问。
    res.cookie("cookiename", v, { httpOnly: true});
    res.write("上次请求的cookiename：" + req.cookies["cookiename"]+ "\n");
    res.write("本次设置的cookiename：" + v + "\n");
    res.end();
});

app.listen(1337);