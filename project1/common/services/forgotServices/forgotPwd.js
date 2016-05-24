angular.module('forgotpwd.service',[])
       .factory('forgotpwdService',[
       '$http',
       '$cookies',
       '$rootScope',
       '$sessionStorage',

       function($http, $cookies, $rootScope, $sessionStorage) {

        var service = {};
        service.validate = Validate;
        return service;

        function Validate(email) {
            var payload = "&email=" + email + "&source=" + "WEB_APP";
            var url =  $http.post($rootScope.endPoint + '/api/user/register/', payload);
            return url;
        };

}]);
