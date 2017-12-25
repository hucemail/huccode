/*
    提供了文件和目录的相关操作
*/
(function () {
    var fs = require("fs"),
        path = require("path"),
        mime = require("mime");
    var factory = {};
    //递归创建目录
    factory.mkdirs = function (dirpath, callback) {
        fs.access(dirpath, (err) => {
            if (err) {
                //不存在
                factory.mkdirs(path.dirname(dirpath), () => {
                    fs.mkdir(dirpath, callback);
                });
            }
            else {
                //存在
                callback();
            }
        });
    }
     //读取目录下的一级子文件或文件夹
    factory.readdir = function (dirpath,relpath,callback) {
        var result = [];
        fs.readdir(dirpath, function (err, files) {
            if (err) {
                callback(err);
                return;
            }
            //因为for的异步关系，采用自调用迭代最为稳妥
            (function iterator(i) {
                if (i >= files.length)
                {
                    callback(undefined, result);
                    return;
                }
                var filepath = dirpath + "/" + files[i];
                var relfilepath = relpath + "/" + files[i];
                fs.stat(filepath, (err, stats) => {
                    result.push({ "name": files[i], "isdir": stats.isDirectory(), "extname": path.extname(filepath), "mime": mime.getType(filepath), "path": stats.isDirectory()?"":relfilepath });
                    iterator(i + 1);
                });
            })(0);
        });
    }

    if (typeof module !== undefined && module.exports) {
        module.exports = factory;
    }
    else if (typeof define !== undefined && define.amd) {
        define([], function () {
            return factory;
        });
    }
})();