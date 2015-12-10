angular
    .module('actions')
    .factory('shiftsActions', function (ACTIONS, dispatcher) {

        this.create = (newShift) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTS.CREATE,
				payload: newShift
            })
        };

        return this;
    })