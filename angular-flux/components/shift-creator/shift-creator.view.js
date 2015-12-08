angular
    .module('components')
    .directive('shiftCreator', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/shift-creator/shift-creator.view.html',
            controllerAs: 'shiftCreator',
            controller: function ($scope, shiftCreatorStore, shiftCreatorActions, dateUtils) {
                'use strict';
                let $shiftCreatorModal = $('#shiftCreator'),
                    shiftCreator = this;

                shiftCreatorStore.onChange(() => {
                    var isOpen = shiftCreatorStore.isOpen();

                    if (isOpen) {
                        let data = shiftCreatorStore.getData();
                        shiftCreator.newShift = {
                            employee: {
                                name: data.employee.name,
                                id: data.employee.id
                            },
                            date: {
                                id: data.date.id,
                                label: dateUtils.getDateLabel(data.date.date)
                            },
                            name: null
                        }
                        $shiftCreatorModal.modal('show');
                    }
                    else {
                        $shiftCreatorModal.modal('hide');
                    }
                })

                this.submit = () => {
                    shiftCreatorActions.create({
                        employeeId: shiftCreator.newShift.employee.id,
                        dateId: shiftCreator.newShift.date.id,
                        name: shiftCreator.newShift.name
                    })
                };

                this.close = () => {
                    shiftCreatorActions.close();
                };
            }
        }
    });