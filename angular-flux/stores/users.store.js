angular
    .module('stores')
    .factory('usersStore', function (ACTIONS, Store, dispatcher) {
        'use strict';
        let usersStore = this;
        angular.extend(usersStore, new Store());
        
        this.store = "users";

        let users = []

        this.getAll = () => {
            return angular.copy(users);
        }

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