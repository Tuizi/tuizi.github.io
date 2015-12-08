angular
    .module('constants', [])
    .value('ACTIONS', {
        DATES: {
            GENERATE: 'DATES.GENERATE'
        },
        USERS: {
            UPDATE: 'USERS.UPDATE'
        },
        SHIFTCREATOR: {
            OPEN: 'SHIFTCREATOR.OPEN',
            CLOSE: 'SHIFTCREATOR.CLOSE'
        },
        SHIFTS: {
            CREATE: 'SHIFTS.CREATE'
        }
    })