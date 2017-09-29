'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    if (req.url == "/favicon.ico") {
        return;
    }
    fs.stat("./config", function (err, status) {
        if (err) {
            throw err;
        }
        console.log(status.isDirectory());
        console.log(status.isFile());
    });
    res.end();
}).listen(port);
