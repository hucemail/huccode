'use strict';

var express = require("express"),
    app = express(),
    db = require("./service/db");

app.get("/add", function (req, res) {
    db.insert("user", [{ name: "HUC", age: 24 }, {name:"jack",age:20}], function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
});
app.get("/count", function (req, res) {
    db.count("primer",function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result.toString());
    });
});
app.get("/find", function (req, res) {
    db.find("primer", {}, function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
});
app.get("/pagefind/:pagesize/:pageindex", function (req, res) {
    db.pageFind("primer", { }, req.params, function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
});
app.get("/delete/:restaurant_id", function (req, res) {
    db.delete("primer", req.params, function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
});
app.get("/update/:restaurant_id", function (req, res) {
    db.update("primer", req.params, { name:"ÎÒ²İ"},function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    });
});
app.listen(1337);