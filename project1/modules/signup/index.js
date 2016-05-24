'use strict';

angular.module('signup', [
'signup.controller'
])
.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]).config(
    ['$stateProvider',
     '$urlRouterProvider',
     '$httpProvider',
     function($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');
             $stateProvider.state('signup', {
            url:'/signup',
            cache: false,
            templateUrl: 'modules/signup/views/signup.html',
            controller: 'SignupFormController',
            label: 'sig1',
    })
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
}]);
