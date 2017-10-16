'use strict';
var http = require('http'),
    url = require("url"),
    formidable = require("formidable"),
    util = require("util"),
    fs = require("fs"),
    path=require("path"),
    port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/upload" && req.method.toLocaleLowerCase() == "post") {

        var form = new formidable.IncomingForm();
        form.encoding = "utf-8";
        form.uploadDir = __dirname + "/uploads";
        form.parse(req, function (err, fields, files) {
            res.write('received upload:\n\n');
            res.end(util.inspect({ fields: fields, files: files }));
        });
        return;
    }
    else {
        res.end("主页");
    }
}).listen(port);


