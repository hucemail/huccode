'use strict';
var http = require('http');
var url = require("url");
var querystring = require("querystring");
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/sub" && req.method.toLocaleLowerCase() == "post") {
        var alldata = "";
        //添加一个数据监听器，因为post请求数据量比较大，
        //可能因为网络原因会卡顿，而node是单线程的，所以接收数据得分块来进行。
        req.addListener("data", function (chunk) {
            alldata += chunk;
        });
        //当post数据提交完成后执行
        req.addListener("end", function () {
            var dataobj= querystring.parse(alldata.toString());
            res.end("success");
            console.log(dataobj);
        });
    }
    else {
        res.end("请求错误");
    }
}).listen(port);
