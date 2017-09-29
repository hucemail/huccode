'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    res.write("<h1>this is title</h1>");
    res.end();
}).listen(port);
