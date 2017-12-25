"use strict"

var express = require("express");
var app = express();

//静态资源服务,url不写默认是/,匹配所有路由
/*

/up: 返回  /upload/index.html

/up/package.json  返回  /upload/package.json

/up/readme.md  返回  /upload/readme.md

*/

app.use("/up", express.static(__dirname + "/upload"));

app.get("/", function (req, res) {
    console.log(__dirname);
    res.send(__dirname);
});

app.listen(1337);