requirejs.config({
    baseUrl: "bundles/js",
    paths: {
        //使用第三方cdn上的jquery可以优化响应速度
        "jquery": ["https://cdn.bootcss.com/jquery/3.2.1/jquery.min"],
        //配置bootstarp模块，地址以baseUrl为基准，所以这里需要../返回上一层
        "bootstarp": "../plugins/bootstrap-3.3.7/js/bootstrap.min",
        //css模块用于配置依赖css样式表的
        "css": "../plugins/reuqire/css.min",
        //共用的正则验证模块
        "ntv": "../common/neatness.validate",
        //页面模块,baseUrl为基准目录，所以这里不用做目录的处理了
        "index":"index"
    },
    shim:{
        "bootstarp": {
            //bootstarp模块需要依赖jquery、bootstarp.css，
            //基本上项目中每个页面需要用到bootstarp和font-awesome图标，所以font-awesome也配置成bootstarp的依赖项了
            "deps": ["jquery", "css!../plugins/bootstrap-3.3.7/css/bootstrap.min.css", "css!../plugins/Font-Awesome-3.2.1/css/font-awesome.min.css"]
        }
    }
});

//入口配置加载完后马上引用bootstarp模块
//反正每个页面都要使用jquery、bootstarp、font - awesome

require(["bootstarp"]);