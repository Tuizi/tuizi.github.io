'use strict';

angular
    .module('angular-flux', ['components.users'])
    .factory('dispatcher', function () {
        this.listeners = [];

        this.dispatch = (action) => {
            console.debug('dispatch', action.type, action.data);
            this.listeners.forEach((listener) => {
                listener({
                    type: action.type,
                    data: angular.copy(action.data) //immutable
                });
            });
        };

        this.addListener = (listener) => {
            this.listeners.push(listener);
        };

        return this;
    })
    .factory('emiter', function () {
        let listeners = [];

        this.emit = (event) => {
            listeners.forEach((listener) => {
                listener(event)
            })
        };
        this.addChangeListener = (listener) => {
            listeners.push(listener);
        }

        return this;
    })