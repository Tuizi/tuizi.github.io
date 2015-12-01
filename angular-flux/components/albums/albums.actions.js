angular
    .module('components.albums')
    .factory('albumsActions', function (ACTIONS, $http, dispatcher) {
        $http
            .get('http://jsonplaceholder.typicode.com/albums')
            .then((result) => {
                dispatcher.dispatch({
                    type: ACTIONS.ALBUMS.GET,
                    payload: angular.copy(result.data)
                })
            });
            
            return this;
    })