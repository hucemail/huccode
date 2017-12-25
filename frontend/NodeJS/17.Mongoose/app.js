'use strict';

var express = require("express"),
    app = express(),
    Student = require("./models/Student");

app.get("/", function (req, res) {
    res.send("OK");
});
//修改
app.get("/update", function (req, res) {
    Student.update({ name: "Jack" }, { $set: { age: 30 } }, { upsert:true },function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});

//使用静态方法,查找
app.get("/findbyname", function (req, res) {
    Student.findByName(req.query.name, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});
//通过create保存数据
app.get("/create", function (req, res) {
    Student.create({ name: "Kit", age: 24 }, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        res.send("saved OK.");
    });
})

//通过new的方式保存数据
app.get("/add", function (req, res) {
    var Jack = new Student({
        name: "Jack"
    });
    Jack.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        res.send("saved OK.");
    });
});
app.listen(1337);