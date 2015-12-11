angular
    .module('stores')
    .factory('shiftCreatorStore', function (ACTIONS, Store, dispatcher, datesStore, usersStore, shiftsStore) {
        'use strict';

        let shiftCreatorStore = angular.extend(this, new Store()),
            data = {},
            isOpen = false;

        this.getData = () => angular.copy(data);
        this.isOpen = () => isOpen;

        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.SHIFTCREATOR.OPEN:
                    var shiftInfo = action.payload;

                    if (_.isString(shiftInfo.shiftId)) {
                        var shift = shiftsStore.getById(shiftInfo.shiftId);

                        data = {
                            employee: usersStore.getById(shift.employeeId),
                            date: datesStore.getById(shift.dateId),
                            name: shift.name,
                            id: shift.id
                        };
                    }
                    else {
                        data = {
                            employee: usersStore.getById(action.payload.employeeId),
                            date: datesStore.getById(action.payload.dateId)
                        };
                    }

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