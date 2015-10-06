"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (function () {
    function _default(url) {
        _classCallCheck(this, _default);

        this.url = url;
    }

    _createClass(_default, [{
        key: "load",
        value: function load() {
            fetch(this.url).then(function (response) {
                response.json().then(function (json) {
                    console.log(json);
                });
            });
        }
    }]);

    return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cardLoader = require('card-loader');

var _cardLoader2 = _interopRequireDefault(_cardLoader);

var App = (function () {
    function App(testsUrl) {
        _classCallCheck(this, App);

        this.cardLoader = new _cardLoader2['default'](testsUrl);
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {}
    }]);

    return App;
})();

var app = new App('tests/index.json');
app.init();
//# sourceMappingURL=app.js.map
