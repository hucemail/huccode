function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    return "我是：" + this.name + ",年龄:" + this.age;
}

module.exports = Person;