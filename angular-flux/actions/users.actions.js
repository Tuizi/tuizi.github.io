angular
    .module('actions')
    .factory('usersActions', function (ACTIONS, $http, dispatcher) {

        this.load = () => {
            $http
                .get('http://jsonplaceholder.typicode.com/users')
                .then((result) => {
                    dispatcher.dispatch({
                        type: ACTIONS.USERS.UPDATE,
                        payload: angular.copy(result.data)
                    })
                });
        }

        return this;
    })