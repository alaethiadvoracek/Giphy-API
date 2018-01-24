const giphyApp = angular.module('giphyApp', ['ngRoute', 'ngMaterial']);

giphyApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'searchController as vm'
        })
        .when('/random', {
            templateUrl: '/views/random.html',
            controller: 'randomController as vm'
        })
        .otherwise(
            { redirectTo: '/search' }
        );
       
});

