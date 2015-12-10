angular
    .module('components')
    .directive('scheduleRowShift', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/schedule-row-shift/schedule-row-shift.view.html',
            controllerAs: 'shift',
            scope: {
                data: '=',
                employee: '='
            },
            controller: function ($scope, shiftCreatorActions) {
                'use strict';

                let shift = $scope.data.shift;

                if (shift) {
                    this.text = shift.name;
                }

                this.onClick = () => {
                    shiftCreatorActions.open({ employeeId: $scope.employee.id, dateId: $scope.data.date.id });
                }
            }
        }
    });