'use strict';
var express = require("express"),
    app = express(),
    gm = require("gm");

app.use("/static", express.static("./static"));

app.get("/crop", function (req, res) {
    /*
    crop:����
    resize�����ţ������������ӣ���ʾǿ�����ţ����û�е�����������ʾ��������
    write��gm������ɺ����ͼƬ��������ǰ���������Ŀ¼
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


