'use strict';

angular
    .module('components.users.store', [])
    .factory('usersStore', function (dispatcher, emiter) {
        angular.extend(this, emiter);

        let store = [],
            context = this;

        dispatcher.addListener((action) => {
            switch (action.type) {
                case 'user:add':
                    store.push(action.data);
                    context.emit('change');
                    break;
                case 'users:get':
                    store = action.data.map((userRaw) => ({ name: userRaw.name })); //TODO: destructuring
                    context.emit('change');
                    break;
            }
        });

        this.getItems = () => angular.copy(store); //immutable

        return this;
    })