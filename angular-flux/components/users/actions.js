angular
    .module('components.users.actions', [])
    .factory('usersActions', ($http, dispatcher) => {

        this.addUser = (newUser) => {
            dispatcher.dispatch(
                {
                    type: 'user:add',
                    data: newUser
                })
        };

        $http({ url: 'http://jsonplaceholder.typicode.com/users' })
            .then((result) => {
                dispatcher.dispatch({
                    type: 'users:get',
                    data: result.data
                })
            });

        return this;
    })