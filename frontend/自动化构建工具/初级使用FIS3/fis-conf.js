fis.match('::package', {

    //启用 fis-spriter-csssprites 插件,已内置
    spriter: fis.plugin('csssprites'),

    //启用 fis3-postpackager-loader 插件
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

//文件携带 md5 戳
fis.match("*.{png,jpg,css,js}", {
    useHash: true
});

//编译scss
fis.match('*.{sass,scss}', {
    rExt: '.css',
    parser: fis.plugin('node-sass')
});

//编译less
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less')
});

fis.match('*.{css,less,sass,scss}', {
    // 雪碧图打包
    useSprite: true
});

fis.match('*.{css,sass,scss,less}', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match("*.js", {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin("uglify-js")
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});