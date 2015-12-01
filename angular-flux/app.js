'use strict';

angular
    .module('angular-flux', ['constants', 'components.albums', 'components.users'])
    .factory('dispatcher', function () {
        let _callbacks = [];

        console.debug('create dispatcher');

        angular.extend(this, {
            register: (callback) => {
                console.debug('dispatcher register a callback');
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
    })
    .factory('store', function (ACTIONS, dispatcher) {
        'use strict';
        let _callbacks = [];

        console.debug('create a store');

        this.emitChange = () => {
            _callbacks.forEach((listener) => {
                listener()
            })
        };

        this.onChange = (listener) => {
            _callbacks.push(listener);
        };

        return this;
    });