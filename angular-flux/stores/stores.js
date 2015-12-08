angular
    .module('stores', ['constants'])
    .factory('Store', function () {
        'use strict';

        return function () {
            this._callbacks = [];

            this.emitChange = () => {
                this._callbacks.forEach((listener) => {
                    listener();
                })
            };

            this.onChange = (listener) => {
                this._callbacks.push(listener);
            };
        };
    });