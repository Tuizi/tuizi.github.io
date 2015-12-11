angular
    .module('components')
    .directive('shiftCreator', function () {
        return {
            retrict: 'E',
            replace: true,
            templateUrl: 'components/shift-creator/shift-creator.view.html',
            controllerAs: 'shiftCreator',
            controller: function ($scope, shiftCreatorStore, shiftCreatorActions, shiftsActions, dateUtils) {
                'use strict';
                let $shiftCreatorModal = $('#shiftCreator'),
                    shiftCreator = this;

                shiftCreatorStore.onChange(() => {
                    let isOpen = shiftCreatorStore.isOpen();

                    if (isOpen) {
                        let data = shiftCreatorStore.getData();

                        shiftCreator.shift = {
                            employee: {
                                name: data.employee.name,
                                id: data.employee.id
                            },
                            date: {
                                id: data.date.id,
                                label: dateUtils.getDateLabel(data.date.date)
                            },
                            name: data.name,
                            id: data.id
                        }
                        $shiftCreatorModal.modal('show');
                    }
                    else {
                        $shiftCreatorModal.modal('hide');
                    }
                })

                this.submit = () => {
                    if (_.isString(shiftCreator.shift.id)) {
                        shiftsActions.edit(shiftCreator.shift.id, shiftCreator.shift.name);
                    }
                    else {
                        shiftsActions.create({
                            employeeId: shiftCreator.shift.employee.id,
                            dateId: shiftCreator.shift.date.id,
                            name: shiftCreator.shift.name
                        });
                    }
                    shiftCreatorActions.close();
                };

                this.close = () => {
                    shiftCreatorActions.close();
                };
            }
        }
    });