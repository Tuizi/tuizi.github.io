angular
    .module('stores')
    .factory('shiftsStore', function (ACTIONS, Store, dispatcher) {
        'use strict';

        let shiftsStore = angular.extend(this, new Store()),
            shifts = [];

        shiftsStore.getAll = () => angular.copy(shifts);
        shiftsStore.getShiftFor = (employeeId, dateId) => {
            return angular.copy(_.find(shifts, {dateId: dateId, employeeId: employeeId}));
        }

        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.SHIFTS.CREATE:
                    let newShift = action.payload;

                    shifts.push(newShift);

                    shiftsStore.emitChange();
                    break;
            }
        })

        return shiftsStore;
    })