var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books",{
			templateUrl: 'partials/book-list.html',
			controller: 'BookListCtrl'
		})
		.when("/genres",{
			templateUrl: 'partials/genre-list.html'
		})
		.otherwise({
			redirectTo: "/books"
		});
});

myApp.controller('NavbarCtrl', function ($scope, $location) {
	$scope.appDetails = {
		title: "BookStore"
	};

	$scope.nav = {};

	$scope.nav.isActive = function(path){
		if(path === $location.path()){
			return true;
		} else {
			return false;
		}
	};
});

myApp.controller('BookListCtrl', function($scope){
	$scope.addToFavourites = function(book){
		console.log('Add to Favourite');
		console.log(book);
	}
	$scope.books = [
		{
			imgUrl: '',
			name: 'Abnormal',
			price: 205,
			rating: 4,
			binding: 'Paperback',
			publisher: 'Random House',
			details: 'Lorem Ipsum, Lorem Ipsum'
		},
		{
			imgUrl: '',
			name: 'Abnormal',
			price: 205,
			rating: 4,
			binding: 'Paperback',
			publisher: 'Random House',
			details: 'Lorem Ipsum, Lorem Ipsum'
		}, {
			imgUrl: '',
			name: 'Abnormal1',
			price: 205,
			rating: 4,
			binding: 'Paperback',
			publisher: 'Random House',
			details: 'Lorem Ipsum, Lorem Ipsum'
		}, {
			imgUrl: '',
			name: 'Abnormal',
			price: 205,
			rating: 4,
			binding: 'Paperback',
			publisher: 'Random House',
			details: 'Lorem Ipsum, Lorem Ipsum'
		}, {
			imgUrl: '',
			name: 'Abnormal',
			price: 205,
			rating: 4,
			binding: 'Paperback',
			publisher: 'Random House',
			details: 'Lorem Ipsum, Lorem Ipsum'
		}
	];
});