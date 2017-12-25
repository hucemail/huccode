'use strict';

var express = require("express"),
    app = express(),
    http = require("http").Server(app),
    io = require("socket.io")(http);

app.use(express.static("./static"));

/*

监听连接，假设有10个连接就会执行10次并产生10个socket.
客户端引用：http://服务器当前域名/socket.io/socket.io.js 就能使用tcp协议了

*/

io.on("connection", function (socket) {
    //向所有客户端进行广播通知,点对多
    io.emit("tip", socket.id);

    //向当前发起请求的客户端广播，点对点
    socket.emit("pip", socket.id);

    socket.on("msg", function (msg) {
        io.emit("msg", { socket_id: socket.id, msg: msg });
    });
});

http.listen(1337);

