/*
    项目配置文件
*/
(function(){
    var factory = {};
    factory.rootdir = __dirname;
    if (typeof module !== undefined && module.exports) {
        module.exports = factory;
    }
    else if (typeof define !== undefined && define.amd) {
        define([], function () {
            return factory;
        });
    }
})();