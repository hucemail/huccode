'use strict';
var express = require("express");
var bodyParser = require('body-parser');
var app = express();


app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index");
});

//get接收数据
app.get("/formdata", function (req, res) {
    res.send(req.query);
});

//post接收数据
//需要安装body-parser，并且它不支持多媒体等文件上传的数据
app.post("/formdata", function (req, res) {
    res.send(req.body);
});
app.listen(1337);
