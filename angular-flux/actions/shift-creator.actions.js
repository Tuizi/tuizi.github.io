angular
    .module('actions')
    .factory('shiftCreatorActions', function (ACTIONS, dispatcher) {

        this.close = () => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTCREATOR.CLOSE
            })
        };

        this.open = (shift) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTCREATOR.OPEN,
                payload: { employeeId: shift.employeeId, dateId: shift.dateId, shiftId: shift.shiftId }
            })
        };

        return this;
    })