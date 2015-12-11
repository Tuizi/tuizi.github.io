angular
    .module('actions')
    .factory('shiftAddonActions', function (ACTIONS, dispatcher) {
        this.editShift = (shiftId) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTS.EDIT,
                payload: shiftId
            })
        }

        return this;
    })