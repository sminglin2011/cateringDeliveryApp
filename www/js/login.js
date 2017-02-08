/**
 * Created by sming on 05/02/2017.
 */

angular.module("loginApp",[]).controller("loginController", function ($scope, $http, $location) {
    $scope.model = {loginId:'', password:''};
    $scope.login = function() {
        //$scope.model.message = Device.uuid;
        $scope.model.loginId = "loginId";
        $scope.model.message = "test";
        $scope.model.message = device.imei;
        alert( device.model +"----"+device.serial +"------"+ device.uuid +"-----"+device.version+"----"+device.platform +"---imei :---"+device.imei);
        var p = $http({
            method: 'post',
            url: 'ttp://ews-web.servebbs.com:8090/regApp/RegisterDevice',
            data: 'serial=' + device.serial + '&deviceName=' + device.model + '&appType=1',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        });
        p.success(function(response, status, headers, config){
            console.log(response.data);
        });
        $http.get("http://ews-web.servebbs.com:8090/regApp/RegisterDevice", {
            params : {'serial': device.serial, 'deviceName': device.model, 'appType': '1'},
            dataType: 'json'
        }).then(function (response) {
            if(response.data == '') {
                alert("Please register your device" +
                    ", device serial No. is " + device.serial);
            } else {
                window.sessionStorage.setItem("companyHost", response.data[0].publicIP);
            }
        })
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