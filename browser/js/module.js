'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {
	$stateProvider.state('albums' , {
		url: "/albums",
		templateUrl: "../views/albums.html",
		resolve: {
			albums: function(AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		},
		controller: 'AlbumsCtrl'
	});
})

juke.config(function($stateProvider) {
	$stateProvider.state('singleAlbum' , {
		url: "/albums/:albumId",
		templateUrl: "../views/singleAlbum.html",
		resolve: {
			album: function(AlbumFactory, $stateParams) {
				return AlbumFactory.fetchById($stateParams.albumId);
			}
		},
		controller: "AlbumCtrl"
	});
})

juke.config(function($stateProvider) {
	$stateProvider.state('artists', {
		url: "/artists",
		templateUrl: "../views/artists.html",
		resolve: {
			artists: function(ArtistFactory) {
				return ArtistFactory.fetchAll();
			}
		},
		controller: "ArtistsCtrl"
	})
})

juke.config(function($stateProvider) {
	$stateProvider.state('singleArtist', {
		url: "/artists/:artistId",
		templateUrl: "../views/singleArtist.html",
		resolve: {
			artist: function(ArtistFactory, $stateParams) {
				return ArtistFactory.fetchById($stateParams.artistId);
			}
		},
		controller: "ArtistCtrl"
	})
	.state('singleArtist.albums', {
		url: '/albums',
		templateUrl: '../views/sAAlbums.html',
		controller: 'ArtistCtrl'
	})
	.state('singleArtist.songs', {
		url: '/songs',
		templateUrl: '../views/sASongs.html',
		controller: 'ArtistCtrl'
	})
})