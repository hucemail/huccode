seajs.config({
    base: "/bundles",
    paths:{
        "view": "/bundles/js",
        "common": "/bundles/common",
        "plugins":"/bundles/plugins"
    },
    alias: {
        "jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
        //这个不像requirejs，不能使用../返回上一层，所以基准目录设置为bundles
        "bootstrap": "plugins/bootstrap-3.3.7/js/bootstrap.min"
    }
});