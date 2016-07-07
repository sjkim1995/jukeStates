'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider) {
	$stateProvider.state('albums' , {
		url: "/albums",
		templateUrl: "../views/albums.html",
		controller: 'AlbumsCtrl'
	});
})

juke.config(function($stateProvider) {
	$stateProvider.state('singleAlbum' , {
		url: "/albums/:albumId",
		templateUrl: "../views/singleAlbum.html",
		controller: "AlbumCtrl"
	});
})

juke.config(function($stateProvider) {
	$stateProvider.state('artists', {
		url: "/artists",
		templateUrl: "../views/artists.html",
		controller: "ArtistsCtrl"
	})
})

juke.config(function($stateProvider) {
	$stateProvider.state('singleArtist', {
		url: "/artists/:artist",
		templateUrl: "../views/singleArtist.html",
		controller: function($scope, $stateParams) {
			// $scope.album =  ;
			$scope.albumId = $stateParams.album;

		}
	})
})