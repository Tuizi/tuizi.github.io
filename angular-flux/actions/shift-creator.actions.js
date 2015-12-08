angular
    .module('actions')
    .factory('shiftCreatorActions', function (ACTIONS, dispatcher) {

        this.close = () => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTCREATOR.CLOSE
            })
        };

        this.create = (newShift) => {
            dispatcher.dispatch({
                type: ACTIONS.SHIFTS.CREATE,
                payload: newShift
            })

            //use dispatcher.waitFor
            this.close();
        };

        return this;
    })