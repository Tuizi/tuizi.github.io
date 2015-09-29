'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var App = (function () {
    function App(url) {
        _classCallCheck(this, App);

        this.url = url;
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            fetch(this.url).then(function (response) {
                response.json().then(function (json) {
                    console.log(json);
                });
            });
        }
    }]);

    return App;
})();

var app = new App('tests/index.json');
app.init();