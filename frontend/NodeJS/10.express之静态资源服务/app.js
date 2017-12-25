'use strict';
var express = require("express");
var app = express();
var router = require(__dirname + "/service/router");

//��������
app.use(router.allowOrigin);
//��Դ��̬��
app.use("/static",express.static(__dirname + "/upload"));
//��ȡ���ļ������ļ���
app.use("/folder",router.getSubfilesOrSubfolders);
//404
app.use(router.noMatchingRouting);
app.listen(1337);