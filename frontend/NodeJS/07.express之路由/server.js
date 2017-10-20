'use strict';
var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("home");
});

app.all("/:username/:no", function (req, res) {
    res.send(req.params.username + "" + req.params.no);
});
app.listen(1337);

