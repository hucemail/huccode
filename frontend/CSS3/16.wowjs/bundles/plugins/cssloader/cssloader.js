(function () {
    var __slice = [].slice,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      __indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
    var extend = function () {
        var key, out, source, sources, val, _i, _len;
        out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        for (_i = 0, _len = sources.length; _i < _len; _i++) {
            source = sources[_i];
            if (source) {
                for (key in source) {
                    if (!__hasProp.call(source, key)) continue;
                    val = source[key];
                    if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
                        extend(out[key], val);
                    } else {
                        out[key] = val;
                    }
                }
            }
        }
        return out;
    };
    var cssLoader = {
        start: function (_options) {
            extend(cssLoader.options, _options);
            var loader = document.createElement("div");
            loader.id = "cssloader";
            loader.className = "loader " + cssLoader.options.effect + " is-active";
            if (cssLoader.options.dataText != undefined) {
                loader.setAttribute("data-text", cssLoader.options.dataText);
            }
            if (cssLoader.options.dataScreen != undefined) {
                loader.setAttribute("data-screen", cssLoader.options.dataScreen);
            }
            if (cssLoader.options.dataCurtainText != undefined) {
                loader.setAttribute("data-curtain-text", cssLoader.options.dataCurtainText);
            }
            //data-rounded
            if (cssLoader.options.dataRounded == true) {
                loader.setAttribute("data-rounded", "");
            }
            //data-blink
            if (cssLoader.options.dataBlink == true) {
                loader.setAttribute("data-blink", "");
            }
            //data-inverse
            if (cssLoader.options.dataInverse == true) {
                loader.setAttribute("data-inverse", "");
            }
            //data-shadow
            if (cssLoader.options.dataShadow == true) {
                loader.setAttribute("data-shadow", "");
            }
            //data-brazilian
            if (cssLoader.options.dataBrazilian == true) {
                loader.setAttribute("data-brazilian", "");
            }
            //data-colorful
            if (cssLoader.options.dataColorful == true) {
                loader.setAttribute("data-colorful", "");
            }
            //data-hey-oh
            if (cssLoader.options.dataHeyOh == true) {
                loader.setAttribute("data-hey-oh", "");
            }
            //data-no-cry
            if (cssLoader.options.dataNoCry == true) {
                loader.setAttribute("data-no-cry", "");
            }
            //data-we-are
            if (cssLoader.options.dataWeAre == true) {
                loader.setAttribute("data-we-are", "");
            }
            //data-rock-you
            if (cssLoader.options.dataRockYou == true) {
                loader.setAttribute("data-rock-you", "");
            }
            document.body.insertBefore(loader, document.body.firstElementChild);
        },
        end: function () {
            var loader = document.getElementById("cssloader");
            if (loader != undefined)
                document.body.removeChild(loader);
        }
    };
    var defaultOptions = {
        effect: "loader-default",
    };
    cssLoader.options=extend({}, defaultOptions);
    window.cssLoader = cssLoader;
})();



