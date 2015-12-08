'use strict';

angular
    .module('angular-flux',
        ['constants', 'components'])
    .factory('dispatcher', function () {
        let _callbacks = [];

        angular.extend(this, {
            register: (callback) => {
                _callbacks.push(callback);
                return _callbacks.length - 1;
            },
            dispatch: (action) => {
                console.debug('DISPATCH', action.type);
                _callbacks.forEach((callback) => {
                    callback(action);
                })
            }
        });

        return this;
    });