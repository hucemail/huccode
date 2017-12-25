'use strict';
var express = require("express"),
    app = express(),
    gm = require("gm");

app.use("/static", express.static("./static"));

app.get("/crop", function (req, res) {
    /*
    crop:剪裁
    resize：缩放，第三个参数加！表示强制缩放，如果没有第三个参数表示比例缩放
    write：gm处理完成后输出图片，必须提前建立输出的目录
    */
    gm(__dirname + req.query.img)
        .crop(req.query.crop.w, req.query.crop.h, req.query.crop.x, req.query.crop.y)
        .resize(req.query.resize.w, req.query.resize.h, "!")
        .write("./static/images/thumbnail/1.png", function (err) {
            if (err) {
                res.status(500).json({ status: 500, msg: err });
            }
            else {
                res.json({ status: 200, data: req.protocol + "://" + req.get("host") + "/static/images/thumbnail/1.png" });
            }
        });
});
app.listen(1337);


