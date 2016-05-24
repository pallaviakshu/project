'use strict';
//alert("App .js");

angular.module('audetemi_app', [
    //'ngRoute',
    'ui.router', 
    'signin',
    'signup',
    'ngStorage',
    'forgotpwd',
    'ngCookies',
]).config(
    ['$stateProvider',
     '$urlRouterProvider',
     '$httpProvider',
     function($stateProvider, $urlRouterProvider, $httpProvider) {
        //$urlRouterProvider.otherwise('/');
        $stateProvider.state('login', {
            url: '/',
            templateUrl: 'modules/auth/views/login.html',
            controller: 'signinCtrl',
            label: 'Home',
        })

     }])
.run(['$http', '$cookies', '$rootScope', '$sessionStorage', '$state',
    function($http, $cookies, $rootScope, $sessionStorage, $state) {
    //Initializing csrf token for all pages in this app.
    $state.go('login');
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //Adding manual token for now, awaiting implementation via backend
    $rootScope.endPoint = "http://192.168.0.3";
    // $rootScope.$on('$stateChangeSuccess', function(event) {
    //     if (!$sessionStorage.access_token) {
    //         $state.go('login');
    //         event.preventDefault();
    //     }else if($state.current.name == 'login'){
    //         $state.go('header.home');
    //     }else if($sessionStorage.access_token && $state.current.name != 'login'){
    //         $http.defaults.headers.common['Content-Type'] = 'application/json';
    //         $http.defaults.headers.common['Authorization'] = 'Bearer ' + $sessionStorage.access_token;
    //     }
    // });
    }
]);




