require("./res/test.js");
var fs = require("fs");
fs.readFile(__dirname+"/res/test.txt", function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});