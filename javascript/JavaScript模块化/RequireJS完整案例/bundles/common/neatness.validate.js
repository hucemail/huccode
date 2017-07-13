define([], function () {
    return {
        username: function (value) {
            //匹配用户名,可以并只能包含数字字母下划线点或者@符号,必须以数字或者字母开头,长度大于6个字符并且不能超过30个字符
            return /^[\w\d][\w\d\.\@]{5,29}$/.test(value);
        },
        password: function (value) {
            return /^\S{6,20}$/.test(value);
        }
    }
});