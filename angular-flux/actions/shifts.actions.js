angular
    .module('actions')
    .factory('shiftsActions', function (ACTIONS, dispatcher) {

        this.create = (newShift) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTS.CREATE,
                payload: newShift
            })
        };

        this.edit = (shiftId, newNameValue) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTS.EDIT,
                payload: {
                    shiftId: shiftId,
                    newName: newNameValue
                }
            })
        }

        return this;
    })