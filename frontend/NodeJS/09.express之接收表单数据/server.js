'use strict';
var express = require("express");
var bodyParser = require('body-parser');
var app = express();


app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index");
});

//get��������
app.get("/formdata", function (req, res) {
    res.send(req.query);
});

//post��������
//��Ҫ��װbody-parser����������֧�ֶ�ý����ļ��ϴ�������
app.post("/formdata", function (req, res) {
    res.send(req.body);
});
app.listen(1337);
