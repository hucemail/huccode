(function () {
    var factory = {},
        express = require("express"),
        app = express(),
        session = require("express-session");

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));

    app.get("/", function (req, res) {
        if (req.session.islogin === true) {
            res.send("login success.");
        }
        else
        {
            res.send("not login.");
        }
    });
    app.get("/login", function (req, res) {
        //设置session用req
        req.session.islogin = true;
        res.send("OK");
    });

    app.listen(1337);
    if (typeof module !== undefined && module.exports) {
        module.exports = factory;
    }
    else if (typeof define !== undefined && define.amd) {
        define([], function () {
            return factory;
        });
    }
})();