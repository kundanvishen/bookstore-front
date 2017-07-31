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
		.when("/favs",{
			templateUrl: 'partials/favs-list.html',
			controller: 'FavListCtrl'
		})
		.otherwise({
			redirectTo: "/books"
		});
});

// Services
myApp.factory('bookService', function(){
	var books = [
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

	return {
		getBooks: function(){
			return books;
		}
	}
}); // bookService

myApp.factory('favsService', function(){
	var favs = [];
	return {
		getFavs: function(){
			return favs;
		},
		addToFavs: function(book){
			favs.push(book);
		},
	}
});


// Controllers
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

myApp.controller('BookListCtrl', function($scope, bookService, favsService){
	$scope.books = bookService.getBooks();
	$scope.addToFavourites = function(book){
		console.log('Add to Favourite');
		console.log(book);
		favsService.addToFavs(book);
	};
});

myApp.controller('FavListCtrl', function($scope, favsService){
	$scope.favs = favsService.getFavs();
});