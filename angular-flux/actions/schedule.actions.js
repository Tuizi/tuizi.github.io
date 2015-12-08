angular
    .module('actions')
    .factory('scheduleActions', function (ACTIONS, dispatcher) {
        
        this.openCreateShift = (employeeId, dateId) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTCREATOR.OPEN,
                payload: {
                    employeeId: employeeId,
                    dateId: dateId
                }
            })
        };

        return this;
    })