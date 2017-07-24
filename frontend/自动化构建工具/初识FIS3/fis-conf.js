//文件携带 md5 戳
fis.match("*.{png,jpg,css,js}", {
    useHash:true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

fis.match("*.js", {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin("uglify-js")
});

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

