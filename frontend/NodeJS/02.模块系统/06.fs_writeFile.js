'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    if (req.url == "/favicon.ico") {
        return;
    }
    fs.writeFile("./config/test.txt", "这是要写入的文本", function (err) {
        if (err) {
            console.log(err);
        }
        else
        {
            console.log("写入文件成功.");
        }
    });
    res.end();
}).listen(port);
