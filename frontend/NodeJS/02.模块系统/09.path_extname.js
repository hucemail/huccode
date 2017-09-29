'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require("fs");
var path = require("path");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    if (req.url == "/favicon.ico") {
        return;
    }
    console.log(path.extname("./config/01.json"));
    res.end();
}).listen(port);
