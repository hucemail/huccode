(function () {
    var mongo = require("mongodb").MongoClient,
        dburl = "mongodb://127.0.0.1:27017", //数据库连接地址
        dbname = "mgtest",  //数据库名称
        factory = {};

    //开启数据库连接
    function _openConnect(callback)
    {
        mongo.connect(dburl, callback);
    }
    //插入数据
    factory.insert = function (collectionName,json,callback) {
        _openConnect(function (err, client) {
            if (err)
            {
                callback(err);
                return;
            }
            if (Array.isArray(json)) {
                client.db(dbname).collection(collectionName).insertMany(json, function (err, result) {
                    client.close();
                    callback(err, result);
                });
            }
            else {
                client.db(dbname).collection(collectionName).insertOne(json, function (err, result) {
                    client.close();
                    callback(err, result);
                });
            }
        });
    }
    //获取总记录数
    factory.count = function (collectionName, callback) {
        var result = [];
        _openConnect(function (err, client) {
            if (err) {
                callback(err, result);
                return;
            }
            client.db(dbname).collection(collectionName).stats(function (err, stats) {
                client.close();
                callback(err, stats.count);
            });
        });
    }
    //查询数据
    factory.find = function (collectionName, json, callback) {
        var result = [];
        _openConnect(function (err, client) {
            if (err) {
                callback(err, result);
                return;
            }
            var cursor = client.db(dbname).collection(collectionName).find(json);
            cursor.each(function (err, doc) {
                if (err) {
                    callback(err, result);
                    return;
                }
                if (doc != null) {
                    result.push(doc);
                }
                else {
                    client.close();
                    callback(err,result);
                }
            });
        });
    }
    //分页查询数据
    factory.pageFind = function (collectionName, json, pagesearch, callback) {
        var positiveinteger = /^([1-9]\d*)$/;
        var pagesize = parseInt(pagesearch.pagesize);
        if (!positiveinteger.test(pagesize)) {
            pagesize = 10;
        }
        var pageindex = parseInt(pagesearch.pageindex);
        if (!positiveinteger.test(pageindex)) {
            pageindex = 1;
        }
        var result = { pagesize: pagesize, pageindex: pageindex, total: 0, datalist: [] };
        _openConnect(function (err, client) {
            if (err) {
                callback(err, result);
                return;
            }
            var cursor = client.db(dbname).collection(collectionName).find(json).skip(pageindex * (pageindex - 1)).limit(pagesize);
            cursor.each(function (err, doc) {
                if (err) {
                    callback(err, result);
                    return;
                }
                if (doc != null) {
                    result.datalist.push(doc);
                }
                else {
                    client.close();
                    callback(err, result);
                }
            });
        });
    }
    //删除数据
    factory.delete=function(collectionName, json, callback) {
        _openConnect(function (err, client) {
            if (err) {
                callback(err, result);
                return;
            }
            client.db(dbname).collection(collectionName).deleteMany(json, function (err, result) {
                client.close();
                callback(err, result);
            });
        });
    }
    //修改数据
    factory.update = function (collectionName, json,data, callback) {
        _openConnect(function (err, client) {
            if (err) {
                callback(err, result);
                return;
            }
            client.db(dbname).collection(collectionName).updateMany(json, {$set:data}, { upsert:true}, function (err, result) {
                client.close();
                callback(err, result);
            });
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