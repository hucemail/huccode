(function () {
    var mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    var connection = "mongodb://127.0.0.1:27017/mongoose";
    var factory = mongoose.createConnection(connection);
    //连接数据库成功
    factory.on("open", function () {
        //console.log("success");
    });
    //连接数据库出错
    factory.on('error', function (error) {
        console.log(error);
    });
    if (typeof module !== undefined && module.exports) {
        module.exports = factory;
    }
    else if (typeof define !== undefined && define.amd) {
        define([], function () {
            return factory;
        });
    }
})();