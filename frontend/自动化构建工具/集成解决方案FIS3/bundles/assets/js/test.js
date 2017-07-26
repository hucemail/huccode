define(["bootstrap"], function (bt) {
    console.log("test1");
    return {
        init: function () {
            var math = require("util/math");
            console.log("test-init");
            math.init();
        }
    }
});