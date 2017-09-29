'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    if (req.url == "/favicon.ico") {
        return;
    }
    fs.readdir("./config", function (err, files) {
        if (err) {
            throw err;
        }
        for (var i in files) {
            console.log(files[i]);
        }
    });
    res.end();
}).listen(port);
