angular
    .module('stores')
    .factory('datesStore', function (ACTIONS, Store, dispatcher) {
        'use strict';

        let datesStore = angular.extend(this, new Store()),
            dates = [];

        function generateDates(days) {
            let dates = [];

            for (let i = 0, now = +new Date(); i < days; i++) {
                let date = now + (i * (24 * 60 * 60 * 1000));
                dates.push({ id: i, date: new Date(date) });
            }

            return dates;
        }

        datesStore.getAll = () => angular.copy(dates);
        datesStore.getById = (id) => angular.copy(_.find(dates, {id: id}));

        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.DATES.GENERATE:
                    dates = generateDates(action.payload);
                    datesStore.emitChange();
                    break;
            }
        })

        return datesStore;
    })