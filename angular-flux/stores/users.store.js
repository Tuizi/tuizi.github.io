angular
    .module('stores')
    .factory('usersStore', function (ACTIONS, Store, dispatcher) {
        'use strict';

        let usersStore = angular.extend(this, new Store()),
            users = [];

        usersStore.getAll = () => angular.copy(users);
        usersStore.getById = (id) => angular.copy(_.find(users, { id: id }));

        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.USERS.UPDATE:
                    users = action.payload;
                    usersStore.emitChange();
                    break;
            }
        })

        return usersStore;
    })