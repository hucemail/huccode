
//压缩处理
fis.match('/bundles/assets/**/*.js', {
    optimizer: fis.plugin('uglify-js') //assets下所有js文件都会启用压缩
})
    .match('/bundles/assets/**/*.{css,scss,sass,less}', {
        optimizer: fis.plugin('clean-css'),
        useSprite: true
    })
    .match('/bundles/assets/**/*.{png}', {
        optimizer: fis.plugin('png-compressor')
    })
    //编译sass
    .match('/bundles/assets/**/*.{scss,sass}', {
        rExt: '.css',
        parser: fis.plugin('node-sass')
    })
    .match('/bundles/assets/**/*.less', {
        rExt: '.css',
        parser: fis.plugin('less')
    })
    //打包阶段插件
    .match('::package', {
        spriter: fis.plugin('csssprites'),
        //使用了文件指纹之后必须分析 __RESOURCE_MAP__ 结构来解决模块化加载，否则会出问题
        postpackager: fis.plugin('loader', {
            resourceType: 'amd',
            resoucemap: "/bundles/assets/packings/${filepath}_map.js",
            //基于页面打包方式
            allInOne: {
                js: function (file) {
                    return "/bundles/assets/packings/" + file.filename + "_aio.js";
                },
                css: function (file) {
                    return "/bundles/assets/packings/" + file.filename + "_aio.css";
                },
                includeAsyncs: true,
                ignore: ["/bundles/plugins/**"]
            }
        })
    })
    //amd模块化
    .hook('amd', {
        baseUrl: "bundles/assets/js",
        paths: {
            "jquery": "/bundles/plugins/jquery/jquery.min",
            "swiper": "/bundles/plugins/Swiper-3.4.2/dist/js/swiper.min",
            "angular": "/bundles/plugins/angular-1.6.4/angular.min",
            "bootstrap": "/bundles/plugins/bootstrap-3.3.7/js/bootstrap.min"
        },
        shim: {
            "bootstrap": {
                "deps": ["jquery"]
            }
        }
    })
    //plugins插件目录下的脚本不包装define
    .match('/bundles/plugins/**.js', {
        isMod: false
    });

/**********************生产环境配置*****************/
//使用方法 fis3 release prod
fis.media('prod')//CDN
    .match('*', {
        domain: "http://www.cnd.com"
    })
    //MD5文件指纹
    .match('/bundles/assets/**', {
        useHash: true
    });