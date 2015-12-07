angular
    .module('stores')
    .factory('datesStore', function (ACTIONS, Store, dispatcher) {
        'use strict';
        let datesStore = this;
        angular.extend(datesStore, new Store());
        
        this.store = "dates";

        function generateDates(days) {
            let dates = [];

            for (let i = 0, now = +new Date(); i < days; i++) {
                let date = now + (i * (24 * 60 * 60 * 1000));
                dates.push({ id: i, date: new Date(date) });
            }

            return dates;
        }

        let dates = [];
        this.getAll = () => angular.copy(dates);

console.debug('datesStore listen actions');
        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.DATES.GENERATE:
                    dates = generateDates(action.payload);
                    datesStore.emitChange();
                    break;
            }
        })

        return this;
    })