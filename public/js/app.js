// public/js/app.js
var myApp = angular.module('myApp', ['ui.router', 'ngResource']);

// controller =============================================================================


myApp.controller('MainController', ['$scope', function($scope){
	
	$scope.tagline = 'To the moon and back!';

}]);


myApp.controller('HomeListController', ['$scope', function($scope){
	
	// random data
	$scope.dogs = ['Huskey' , 'Waterdog' , 'Catdog'];

}]);

myApp.controller('TableDataController', ['$scope', function($scope){
	
	// some random data
	$scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

}]);

// services ===============================================================================

myApp.factory('Geek', ['$http', function($http) {

	// return {
	// 	// call to get all nerds
	// 	get : function() {
	// 		return $http.get('/api/geeks');
	// 	},

	// 	// call to POST and create a new geek
	// 	create : function(geekData) {
	// 		return $http.post('/api/geeks', geekData);
	// 	},

	// 	// call to DELETE a geek
	// 	delete : function(id) {
	// 		return $http.delete('/api/geeks/' + id);
	// 	}
	// }
	
}]);

// filter =================================================================================




// routes =================================================================================
// based on ui-router

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	// default backfall routing
	$urlRouterProvider.otherwise('/home');

	// do routing
	$stateProvider
	
	// HOME STATES AND NESTED VIEWS =============================================
	.state('home', {
		url: '/home',
		templateUrl: '/views/partial-home.html'
	})

	// nested list with custom controller in home view
	.state('home.list', {
		url: '/list',
		templateUrl: '/views/partial-home-list.html',
		controller: 'HomeListController'
	})

	.state('home.paragraph', {
		url: '/paragraph',
		template: 'I could use a drink now.'
	})


	// ABOUT STATES AND NESTED VIEWS =============================================
	.state('about', {
		url: '/about',
		views: {

			// main template (relative naming)
			'': { templateUrl: '/views/partial-about.html' },

			// child view (absolute naming)
			'columnOne@about': { template: 'Look, I am a column!' },

			// column two, with seperate controller
			'columnTwo@about': {
				templateUrl: '/views/table-data.html',
				controller: 'TableDataController'
			}
		}
		

	});

}]);
