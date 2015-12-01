angular
    .module('components.users')
    .factory('usersActions', function (ACTIONS, $http, dispatcher) {
        $http
            .get('http://jsonplaceholder.typicode.com/users')
            .then((result) => {
                dispatcher.dispatch({
                    type: ACTIONS.USERS.GET,
                    payload: angular.copy(result.data)
                })
            });

        this.select = (user) => {
            dispatcher.dispatch({
                type: ACTIONS.USERS.SELECT,
                payload: angular.copy(user)
            })
        }

        return this;
    })