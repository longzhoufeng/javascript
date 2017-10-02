/**
 * Created by longzhoufeng on 2017/9/20.
 */

var myApp = angular.module("myApp", [], function () {


});

//firstController是在myApp模块下，
// $scope,CustomService的顺序是不一定要按顺序来
myApp.controller("firstController", function ($scope) {
    $scope.status = false;
    $scope.changeClick = function (event) {
        // 通过element转换成jquery对象
        console.log(angular.element(event.target).attr("id"));
        $scope.status = !$scope.status;
    }

});
