/*
 * fis
 * http://web.baidu.com/
 */

'use strict';

var ejs = require('ejs');

module.exports = function(content, file, conf){
    conf.filename = file.getId();
    conf.client = true;
    if(conf.compress){
        content = content.replace(/<!--[\s\S]*?-->/g, '');
        content = content.replace(/^\s+|\s+$|\n/gm, '');
    }
    content = ejs.compile(content, conf).toString();
    content = content.replace(/^function\s+anonymous(?=\()/, 'function');
    return '[' + content + '][0]';
};