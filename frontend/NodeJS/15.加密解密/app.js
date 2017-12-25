'use strict';

var express = require("express"),
    app = express(),
    crypto = require("crypto");

app.get("/md5/:data", function (req, res) {
    var md5 = crypto.createHash("md5");
    res.send(md5.update(req.params.data).digest("hex").toUpperCase());
});

app.get("/aes/:data", function (req, res) {
    var aes = crypto.createCipher("aes192", "225E8C70688FD76EC5C01A392302320A");
    var t = aes.update(req.params.data, "utf8", "hex") + aes.final('hex');
    res.send(t.toUpperCase());
});
app.listen(1337);
