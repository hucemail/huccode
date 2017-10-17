'use strict';
var http = require('http'),
    url = require("url"),
    formidable = require("formidable"),
    util = require("util"),
    fs = require("fs"),
    path = require("path"),
    uuidv1 = require('uuid/v1'),
    port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/upload" && req.method.toLocaleLowerCase() == "post") {
        //文件保存路径
        var saveDir = __dirname + "/uploads";
        if (!fs.existsSync(saveDir)) {
            fs.mkdirSync(saveDir);
        }
        //文件上传
        var form = new formidable.IncomingForm();
        form.encoding = "utf-8";
        form.uploadDir = saveDir;
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err;
            }
            //扩展名
            var extname = path.extname(files.tupian.name);
            //旧路径
            var oldpath = files.tupian.path;
            //新路径
            var newpath = saveDir + "/" + uuidv1() + extname;
            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    throw err;
                }
                res.write('文件上传成功:\n\n');
                res.end(util.inspect({ fields: fields, files: files }));
            });

        });
        return;
    }
    else {
        res.end("主页");
    }
}).listen(port);





