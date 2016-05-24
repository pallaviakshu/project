angular.module('signin.controller', ['signin.services'])
    .controller('signinCtrl', ['$scope',
        '$sessionStorage',
        '$state',
        '$http',
        'signinService',
        
  function($scope, $sessionStorage, $state, $http, signinService) {
          
      $scope.user = {};
      $scope.signinError = null;
      $scope.login = function() {
      $scope.signinError = null;

        $scope.isInvalid = false;
                if ($scope.user.email && $scope.user.password) {
                  var response = signinService.validate($scope.user.email, $scope.user.password);
                        response.then(function success(response) {
                        
                        if (response.data  && !response.data.error) {
                            var access_token = response.data.access_token;
                            $sessionStorage.access_token = access_token;
                            console.log(response.data);
                            $scope.authError ="Login Success!!!";
                        } else {
                            $scope.isInvalid = true;
                            $scope.authError ="Username and Password do not match !!!";
                            $scope.messsage = "Username and Password do not match !!!"
                         }
                    }, function error(response) {
                        $scope.isInvalid = true;
                        $scope.authError ="Username and Password do not match !!!";
                        $scope.messsage = "Username and Password do not match !!!"
                    })
                } 
      }
   

    $scope.signup = function()
    {
        $state.go("signup");
    };

 }]);
