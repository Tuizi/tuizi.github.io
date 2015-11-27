angular
    .module('components.users', ['components.users.actions', 'components.users.store'])
    .directive('users', (usersActions) => {
        return {
            retrict: 'E',
            replace: true,
            controllerAs: 'users',
            templateUrl: 'components/users/users.html',
            controller: function (usersActions, usersStore) {
                this.isLoading = true;

                usersStore.addChangeListener(() => {
                    this.items = usersStore.getItems();
                    this.isLoading = false;
                });

                this.add = () => {
                    usersActions.addUser({ name: this.newUser.name });
                    this.newUser.name = '';
                }
            }
        }
    });