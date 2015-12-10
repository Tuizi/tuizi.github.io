angular
    .module('components')
    .directive('scheduleRow', function () {
        return {
            retrict: 'A',
            replace: false,
            scope: {
                data: "="
            },
            templateUrl: 'components/schedule-row/schedule-row.view.html',
            controllerAs: 'row',
            bindToController: true,
            controller: function () {

            }
        }
    });