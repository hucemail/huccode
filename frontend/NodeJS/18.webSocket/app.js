'use strict';

var express = require("express"),
    app = express(),
    http = require("http").Server(app),
    io = require("socket.io")(http);

app.use(express.static("./static"));

/*

�������ӣ�������10�����Ӿͻ�ִ��10�β�����10��socket.
�ͻ������ã�http://��������ǰ����/socket.io/socket.io.js ����ʹ��tcpЭ����

*/

io.on("connection", function (socket) {
    //�����пͻ��˽��й㲥֪ͨ,��Զ�
    io.emit("tip", socket.id);

    //��ǰ��������Ŀͻ��˹㲥����Ե�
    socket.emit("pip", socket.id);

    socket.on("msg", function (msg) {
        io.emit("msg", { socket_id: socket.id, msg: msg });
    });
});

http.listen(1337);

