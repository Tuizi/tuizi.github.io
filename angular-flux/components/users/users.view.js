angular
    .module('components.users')
    .directive('users', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/users/users.view.html',
            controllerAs: 'users',
            controller: function (usersStore, usersActions) {
                var context = this;

                usersStore.onChange(() => {
                    context.items = usersStore.getAll();
                })

                this.select = (user) => {
                    usersActions.select(user);
                };
            }
        }
    })