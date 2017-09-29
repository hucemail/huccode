'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    fs.readFile("./config/test.txst", function (err, data) {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen(port);
