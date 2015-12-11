angular
    .module('stores')
    .factory('shiftsStore', function (ACTIONS, Store, dispatcher) {
        'use strict';

        let shiftsStore = angular.extend(this, new Store()),
            shifts = [];

        const findById = (shiftId) => _.find(shifts, { id: shiftId });

        shiftsStore.getAll = () => angular.copy(shifts);
        shiftsStore.getById = (shiftId) => angular.copy(findById(shiftId));
        shiftsStore.getShiftFor = (employeeId, dateId) => angular.copy(_.find(shifts, { dateId: dateId, employeeId: employeeId }));

        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.SHIFTS.CREATE:
                    let newShift = action.payload;

                    shifts.push({
                        id: _.uniqueId('shift_'),
                        employeeId: newShift.employeeId,
                        dateId: newShift.dateId,
                        name: newShift.name,
                    });

                    shiftsStore.emitChange();
                    break;
                case ACTIONS.SHIFTS.EDIT:

                    var shiftToUpdate = findById(action.payload.shiftId);
                    shiftToUpdate.name = action.payload.newName;

                    shiftsStore.emitChange();
                    break;
            }
        })

        return shiftsStore;
    })