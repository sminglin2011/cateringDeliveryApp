/**
 * Created by sming on 05/02/2017.
 */

angular.module("loginApp",[]).controller("loginController", function ($scope, $location) {
    $scope.model = {loginId:'', password:''};
    $scope.login = function() {
        //$scope.model.message = Device.uuid;
        $scope.model.loginId = "loginId";
        $scope.model.message = "test";
        $scope.model.message = device.imei;
        alert( device.model +"----"+device.serial +"------"+ device.uuid +"-----"+device.version+"----"+device.platform +"---imei :---"+device.imei);
        //$scope.model.message = Device.uuid;
        // $scope.drivers = [{name:'1', pwd: '1'}];
        // var loginFalse = true;
        // console.log($scope.model.loginId, "loginId")
        // angular.forEach($scope.drivers, function (driver) {
        //     if (driver.name == $scope.model.loginId && driver.pwd == $scope.model.password) {
        //         loginFalse  = false;
        //         return false;
        //     }
        // })
        // if (loginFalse) {
        //     $scope.model.message = "Login ID or Password incorrect"
        // } else {
        //     location.replace("index.html")
        // }

    }
})