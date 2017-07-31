var myApp = angular.module('myApp', []);

myApp.controller('NavbarCtrl', function ($scope) {
	$scope.appDetails = {
		title: "BookStore"
	};
});

myApp.controller('BookListCtrl', function($scope){
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