"use strict"

var express = require("express");
var app = express();

//可以匹配所有以admin开头的地址
app.use("/admin", function (req, res) {
    //http://localhost:1337/admin/login/12354
    res.write(req.originalUrl + "\n");///admin/login/12354
    res.write(req.baseUrl + "\n");///admin
    res.write(req.path + "\n");///login/12354
    res.end();
});

app.listen(1337);