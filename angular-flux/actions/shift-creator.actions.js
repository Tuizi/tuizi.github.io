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
                payload: shift
            })
        };

        return this;
    })