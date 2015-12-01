angular
    .module('components.albums')
    .directive('albums', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/albums/albums.view.html',
            controllerAs: 'albums',
            controller: function (albumsStore, albumsActions) {
                var context = this;
                
                albumsStore.onChange(() => {
                    context.total = albumsStore.getAlbumsLength();
                    context.items = albumsStore.getForCurrentUser();
                })
            }
        }
    })