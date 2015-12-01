angular
    .module('constants', [])
    .value('ACTIONS', {
        ALBUMS: {
            GET: 'ALBUMS_GET'
        },
        USERS: {
            GET: 'USERS_GET',
            SELECT: 'USERS_SELECT'
        }
    })