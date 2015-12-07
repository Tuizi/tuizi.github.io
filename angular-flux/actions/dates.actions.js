angular
    .module('actions')
    .factory('datesActions', function (ACTIONS, dispatcher) {

console.debug('dates actions dispatch generate')
        dispatcher.dispatch({
            type: ACTIONS.DATES.GENERATE,
            payload: 7
        })

        return this;
    })