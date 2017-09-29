'use strict';
var fs = require("fs");
fs.readFile("./config/mime.json", 'utf8', function (err, data) {
    console.log(data[".json"]);
});




