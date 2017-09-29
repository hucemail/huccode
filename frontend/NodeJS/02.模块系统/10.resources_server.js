'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer(function (req, res) {
    var req_url = "." + url.parse(req.url).pathname;
    if (req_url == "./favicon.ico") {
        //站点ico过滤
        return;
    } else if (req_url == "./") {
        //首页
        req_url = "./config/index.html";
    }
    fs.stat(req_url, function (err, status) {
        if (err || !status.isFile()) {
            //地址为空或不是静态文件则转到404
            req_url = "./config/404.html";
        }
        fs.readFile("./config/mime.json", 'utf8', function (err, mimedata) {
            fs.readFile(req_url, function (err, data) {
                var mimeJson = JSON.parse(mimedata);
                res.writeHead(200, { "Content-Type": mimeJson[path.extname(req_url)] ||"text/plain"});
                console.log(mimeJson[path.extname(req_url)]);
                res.write(data);
                res.end();
            });
        });
    });
}).listen(port);




