angular
    .module('actions')
    .factory('datesActions', function (ACTIONS, dispatcher) {
        this.load = () => {
            dispatcher.dispatch({
                type: ACTIONS.DATES.GENERATE,
                payload: 7
            })
        }

        return this;
    })