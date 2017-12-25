"use strict"
var express = require("express");
var app = express();

//设置视图引擎为ejs，需要npm安装ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    //默认会找views目录下的form.ejs模板
    res.render("form");
});
app.post("/", function (req, res) {
    res.end("submit success!");
});
app.listen(1337);