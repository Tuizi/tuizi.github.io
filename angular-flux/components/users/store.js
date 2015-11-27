'use strict';

angular
    .module('components.users.store', [])
    .factory('usersStore', function (dispatcher, emiter) {
        //inherit from emiter class to get emit function and addChangeListner
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
                    store = action.data.map((userRaw) => ({ name: userRaw.name })); //TODO: destructuring, not supported
                    context.emit('change');
                    break;
            }
        });
        
        this.items = () => angular.copy(store) //immutable, break the reference

        return this;
    })