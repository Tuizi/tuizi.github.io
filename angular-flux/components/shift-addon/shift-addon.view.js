angular
    .module('components')
    .directive('shiftAddon', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/shift-addon/shift-addon.view.html',
            controllerAs: 'shiftAddon',
            controller: function (shiftsStore, shiftCreatorActions) {
                'use strict';

                this.shifts = [];

                shiftsStore.onChange(() => {
                    this.shifts = shiftsStore.getAll();
                })

                this.edit = (shift) => {
                    shiftCreatorActions.open({ shiftId: shift.id });
                }
            }
        }
    });