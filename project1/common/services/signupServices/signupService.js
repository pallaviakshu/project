angular.module('signup.service',[])
       .factory('signupService',[
       '$http',
       '$cookies',
       '$rootScope',
       '$sessionStorage',

       function($http, $cookies, $rootScope, $sessionStorage) {

        var service = {};
        service.validate = Validate;
        return service;

        function Validate(fname, email, password, repassword, phonenumber) {
            var payload = "full_name=" + fname + "&email=" + email + "&password=" + password + "&confirm_password=" + repassword + "&phone_number=" + phonenumber + "&source=" + "WEB_APP";
            var url =  $http.post($rootScope.endPoint + '/api/user/register/', payload);
            return url;
        };
}]);

