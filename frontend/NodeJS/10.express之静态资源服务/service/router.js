/*
 提供给路由相关的中间件
*/
(function () {
    var fileService = require(__dirname + "/fileService"),
        config = require("../config"),
        mime = require("mime");

    var factory = {};
    //跨域设置
    factory.allowOrigin = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        if (req.method == 'OPTIONS') {
            res.send(200);
        } else {
            next();
        }
    }
    //根据url路径获取对应目录下的子文件或子文件夹
    factory.getSubfilesOrSubfolders = function (req, res,next) {
        /*
            获取请求头信息
            console.log(req.headers.authorization);
        */

        //假设根据请求头传递的token信息获取到当前请求的用户appid
        var user_appid = "u1234584816148";
        //绝对地址
        var path = config.rootdir + "/upload/" + user_appid;
        //相对地址
        var relpath = req.protocol + "://" + req.get("host") + "/static/" + user_appid;
        fileService.mkdirs(path,()=>{
            fileService.readdir(path + req.path, relpath + req.path,(err, result) => {
                if (err) {
                    next();
                }
                else {
                    res.json(result);
                }
            });
        });
    }

    //没有找到匹配的路由器
    factory.noMatchingRouting = function (req, res) {
        res.status(404).json({"msg":"no matching routing."});
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