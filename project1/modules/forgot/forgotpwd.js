angular.module('forgotpwd.controller', ['forgotpwd.services'])
.controller('forgotFormController', ['$scope', 
  '$sessionStorage',
  '$state',
  '$http', 
  'forgotpwdService',

   function($scope, $sessionStorage, $state, $http, forgotpwdService) {
    

    //document.getElementById("send").disabled = true;
    $scope.otphide= false;
    // var inputMin = 8;
     $scope.otp = '';
     $scope.textChanged = function() {
  
      console.log("length="+ $scope.otp.length)
        if ($scope.otp.length >= 8) {

          document.getElementById("otp").readOnly = true;
          document.getElementById("send").disabled = false;
         executeSomething()
       } else {$scope.result = '';}
    };

    function executeSomething() {
        $scope.result = $scope.otp;
    };

    $scope.user = {};
    $scope.authError = null;

    $scope.opt_hide=true;
    $scope.forgotpwd = function() {
      $scope.authError = null;
      $scope.isInvalid = false;
                
                if ($scope.user.email) {
                var response = forgotpwdService.validate($scope.user.email);

                        response.then(function success(response) {
                        
                        if (response.data && response.data.error) {
                            var access_token = response.data.access_token;
                            $sessionStorage.access_token = access_token;
                            console.log(response.data);
                            $scope.authError ="Correct email!!!";
                        } 

                    }, function error(response) {
                      if(response.data.email)
                       {
                        $scope.authError = "Ok !!";
                        $scope.message = "Ok !!"
                      
                        $scope.otphide = true;
                        document.getElementById("otp").disabled=false;
                        document.getElementById("send").disabled = true;
                        
                       // $scope.opt_hide=false;
                        localStorage.setItem("otp",12345678);
                        var otpno = localStorage.getItem('otp');
                        var name1 = document.getElementById('otp');
                        if (name1.value == otpno ) {
                          alert("otp set successfully");
                         } else {
                          //alert("Invalid OTP");
                         }

                       } else {
                        $scope.authError = "Not registered email !!";
                        $scope.message = "Not registered email !!"
                       

                       }
                        
                    })
                } 
    };
  }])
 ;

