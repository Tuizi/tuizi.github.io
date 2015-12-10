angular
    .module('components')
    .directive('schedule', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/schedule/schedule.view.html',
            controllerAs: 'schedule',
            controller: function ($scope,
                usersActions, datesActions,
                usersStore, datesStore, shiftsStore,
                dateUtils) {
                'use strict';
                let schedule = this;

                schedule.rows = [];

                function buildRows(employees, dates, shiftsStore) {
                    let rows = [];

                    if (!employees || !dates) {
                        return rows;
                    }

                    for (let ei = 0, elen = employees.length; ei < elen; ei++) {
                        let employee = employees[ei];

                        let newRow = {
                            employee: employee,
                            dates: []
                        }

                        for (let di = 0, dlen = dates.length; di < dlen; di++) {
                            let date = dates[di];
                            let shift = shiftsStore.getShiftFor(employee.id, date.id);

                            newRow.dates.push({ date: date, shift: shift });
                        }

                        rows.push(newRow);
                    }

                    return rows;
                }

                function buildRowsWrapper() {
                    schedule.rows = buildRows(schedule.employees, schedule.dates, shiftsStore);
                }

                usersStore.onChange(() => {
                    schedule.employees = usersStore.getAll();
                    buildRowsWrapper();
                });

                datesStore.onChange(() => {
                    schedule.dates = _.map(datesStore.getAll(), (item) => {
                        let date = item.date;
                        item.label = dateUtils.getDateLabel(date);
                        return item;
                    });
                    buildRowsWrapper();
                });

                shiftsStore.onChange(() => {
                    buildRowsWrapper();
                });

                usersActions.load();
                datesActions.load();
            }
        }
    });