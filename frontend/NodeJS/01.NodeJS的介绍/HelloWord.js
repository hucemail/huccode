﻿var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    res.end("Hello Word\n");
}).listen(3000,"127.0.0.1");