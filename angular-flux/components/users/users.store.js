angular
    .module('components.users', [])
    .factory('usersStore', function (ACTIONS, store, dispatcher) {
        'use strict';

        var usersStore = this;

        angular.extend(usersStore, store);

        let users = []

        this.getAll = () => {
            return angular.copy(users);
        }

        console.debug('users register for dispatcher');
        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.USERS.GET:
                    users = action.payload;
                    usersStore.emitChange();
                    break;
            }
        })

        return usersStore;
    })