'use strict';

angular.module('signup.controller', ['signup.services'])

.controller('SignupFormController', ['$scope', 
  '$sessionStorage',
  '$http',
  '$state', 
  'signupService',



   function($scope, $sessionStorage, $http, $state, signupService) {

    document.getElementById("name").focus();
    $scope.user = {};
    $scope.authError = null;
    
    $scope.signup = function() {
    $scope.authError = null;

     

                $scope.isInvalid = false;
                if ($scope.user.fname && $scope.user.email && $scope.user.password && $scope.user.repassword 
                  && $scope.user.phonenumber && $scope.user.password == $scope.user.repassword) {
                  var response = signupService.validate($scope.user.fname, $scope.user.email, $scope.user.password, $scope.user.repassword, $scope.user.phonenumber);
                        response.then(function success(response) {
                        
                        if (response.data ) {
                            var access_token = response.data.access_token;
                            $sessionStorage.access_token = access_token;
                            console.log(response.data);
                            $scope.authError ="Signup Success!!!";
                        }

                    }, function error(response) {

                      if(response.data.email[0])
                       {
                        $scope.authError = "email id already exist !!"
                        $scope.message = "email id already exist !!"
                          
                          document.getElementById("emailtext").focus();
                        
                      }
                    
                      else {
                        $scope.message = "do not match !!"
                      }
                      
                    })
                } 

                else {
                   alert("invalid password");
                }
    


    };
  }])
 ;

