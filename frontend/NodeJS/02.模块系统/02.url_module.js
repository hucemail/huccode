'use strict';
var http = require('http');
var url = require("url");
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var path = req.url;
    res.write("path;" + path + "\n");
    var p_path = url.parse("http://localhost:1337/news/index?sort=name&price=18&name=java#det#ss");
    res.write("auth;" + p_path.auth+"\n");
    res.write("hash;" + p_path.hash + "\n");
    res.write("host;" + p_path.host + "\n");
    res.write("hostname;" + p_path.hostname + "\n");
    res.write("href;" + p_path.href + "\n");
    res.write("path;" + p_path.path + "\n");
    res.write("pathname;" + p_path.pathname + "\n");
    res.write("port;" + p_path.port + "\n");
    res.write("protocol;" + p_path.protocol + "\n");
    res.write("query;" + p_path.query + "\n");
    res.write("search;" + p_path.search + "\n");
    res.write("slashes;" + p_path.slashes + "\n");
    res.write("price;" + url.parse("http://localhost:1337/news/index?sort=name&price=18&name=java#det#ss", true).query.price + "\n");
    res.end();
}).listen(port);

