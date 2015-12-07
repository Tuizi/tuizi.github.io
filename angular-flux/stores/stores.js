angular
    .module('stores', ['constants'])
    .service('Store', function (ACTIONS, dispatcher) {
        'use strict';

        let Store = function () {
            let _callbacks = [];
            console.count('store created');

            return {
                emitChange: () => {
                    _callbacks.forEach((listener) => {
                        listener()
                    })
                },
                onChange: (listener) => {
                    console.debug('register a listener');
                    _callbacks.push(listener);
                }
            }
        }

        return Store;
    });