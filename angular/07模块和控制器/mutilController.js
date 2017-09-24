/**
 * Created by longzhoufeng on 2017/9/20.
 */
var myApp = angular.module("myApp", []);

//firstController是在myApp模块下
myApp.controller("firstController",function ($scope) {
    $scope.name = "longzhoufeng";
});
