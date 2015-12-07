angular
    .module('components')
    .directive('schedule', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/schedule/schedule.view.html',
            controllerAs: 'schedule',
            controller: function (scheduleActions, usersStore, datesStore, usersActions, datesActions) {
                'use strict';
                let schedule = this;

                usersStore.onChange(() => {
                    schedule.users = usersStore.getAll();
                })

                datesStore.onChange(() => {
                    schedule.dates = _.map(datesStore.getAll(), (item) => {
                        let date = item.date;
                        item.label = date.getMonth() + "/" + date.getDate();
                        return item;
                    });
                })

                $('.schedule').on('click', '.shift', (ev) => {
                    let employeeId = ev.target.attributes['data-employee-id'].value,
                        dateId = ev.target.attributes['data-date-id'].value;

                    scheduleActions.openCreateShift(employeeId, dateId);
                })
            }
        }
    });