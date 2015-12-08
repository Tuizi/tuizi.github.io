angular
    .module('stores')
    .factory('shiftCreatorStore', function (ACTIONS, Store, dispatcher, datesStore, usersStore) {
        'use strict';

        let shiftCreatorStore = angular.extend(this, new Store()),
            data = {},
            isOpen = false;

        this.getData = () => angular.copy(data);
        this.isOpen = () => isOpen;

        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.SHIFTCREATOR.OPEN:
                    data = {
                        employee: usersStore.getById(action.payload.employeeId),
                        date: datesStore.getById(action.payload.dateId)
                    };
                    isOpen = true;
                    shiftCreatorStore.emitChange();
                    break;
                case ACTIONS.SHIFTCREATOR.CLOSE:
                    isOpen = false;
                    shiftCreatorStore.emitChange();
                    break;
            }
        })

        return shiftCreatorStore;
    })