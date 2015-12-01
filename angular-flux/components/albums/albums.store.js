angular
    .module('components.albums', [])
    .factory('albumsStore', function (ACTIONS, store, dispatcher) {
        'use strict';

        var albumsStore = this;

        angular.extend(albumsStore, store);

        let allAlbums = [],
            currentUserAlbums = [];

        this.getAlbumsLength = () => {
            return allAlbums.length;
        }

        this.getForCurrentUser = () => {
            return angular.copy(currentUserAlbums);
        }

        console.debug('albums register for dispatcher');
        dispatcher.register((action) => {
            switch (action.type) {
                case ACTIONS.ALBUMS.GET:
                    allAlbums = action.payload;
                    albumsStore.emitChange();
                    break;
                case ACTIONS.USERS.SELECT:
                    currentUserAlbums = _.where(allAlbums, { userId: action.payload.id });
                    albumsStore.emitChange();
                    break;
            }
        })

        return albumsStore;
    })