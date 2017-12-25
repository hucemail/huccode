'use strict';
var express = require("express");
var app = express();
var router = require(__dirname + "/service/router");

//跨域设置
app.use(router.allowOrigin);
//资源静态化
app.use("/static",express.static(__dirname + "/upload"));
//获取子文件或子文件夹
app.use("/folder",router.getSubfilesOrSubfolders);
//404
app.use(router.noMatchingRouting);
app.listen(1337);