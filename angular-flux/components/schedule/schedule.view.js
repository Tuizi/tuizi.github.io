angular
    .module('components')
    .directive('schedule', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/schedule/schedule.view.html',
            controllerAs: 'schedule',
            controller: function ($scope,
                scheduleActions, usersActions, datesActions,
                usersStore, datesStore, shiftsStore,
                dateUtils) {
                'use strict';
                let schedule = this,
                    $schedule = $('.schedule');

                usersStore.onChange(() => {
                    schedule.users = usersStore.getAll();
                });

                datesStore.onChange(() => {
                    schedule.dates = _.map(datesStore.getAll(), (item) => {
                        let date = item.date;
                        item.label = dateUtils.getDateLabel(date);
                        return item;
                    });
                });

                shiftsStore.onChange(() => {
                    schedule.shifts = shiftsStore.getAll();
                });

                $schedule.on('click', '.shift', (ev) => {
                    //need scope.apply because event come from jquery not angular
                    $scope.$apply(() => {
                        let employeeId = ev.target.attributes['data-employee-id'].value,
                            dateId = ev.target.attributes['data-date-id'].value;

                        scheduleActions.openCreateShift(parseInt(employeeId), parseInt(dateId));
                    });
                })

                $scope.$on('destroy', () => {
                    $schedule.off('click');
                })

                usersActions.load();
                datesActions.load();
            }
        }
    });