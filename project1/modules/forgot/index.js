'use strict';

angular.module('forgotpwd', [
    'forgotpwd.controller'
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
            $stateProvider.state('forgotpwd', {
            url:'/forgotpwd',
            //abstract: true,
            cache: false,
            templateUrl: 'modules/forgot/views/forgotpwd.html',
            controller: 'forgotFormController', 
            label: 'fpwd1',
    })
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
}]);
