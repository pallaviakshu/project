angular.module('signin.service',[])
       .factory('signinService',[
       '$http',
       '$cookies',
       '$rootScope',
       '$sessionStorage',
       function($http, $cookies, $rootScope, $sessionStorage) {

        var service = {};
        service.validate = Validate;
        return service;

        function Validate(email, password) {
            var payload = "username=" + email + "&password=" + password + "&source=" + "WEB_APP";
            var url =  $http.post($rootScope.endPoint + '/api/user/login/', payload);
            return url;
        };

}]);