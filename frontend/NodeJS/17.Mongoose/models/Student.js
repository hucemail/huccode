(function () {
    var db = require("./db"),
        mongoose = require("mongoose");

    //相当于创建了一个Student的实体类
    var schema = new mongoose.Schema({
        name: { type: String },
        age: { type: Number },
        birthday: { type: Date, default: Date.now() },
        gender: { type: Number, default: 0 }
    });
    

    //添加静态方法，必须使用statics标识，通过name查找
    schema.statics.findByName = function (name, callback) {
         this.model("Student").find({ name: name }, callback);
    }
    var factory = db.model("Student", schema);
    if (typeof module !== undefined && module.exports) {
        module.exports = factory;
    }
    else if (typeof define !== undefined && define.amd) {
        define([], function () {
            return factory;
        });
    }
})();