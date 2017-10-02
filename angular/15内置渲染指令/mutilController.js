/**
 * Created by longzhoufeng on 2017/9/20.
 */

var myApp = angular.module("myApp", [], function () {


});

//firstController是在myApp模块下，
// $scope,CustomService的顺序是不一定要按顺序来
myApp.controller("firstController", function ($scope) {
    $scope.users = [{
        name:"aaaaa",
        age:20
    },{
        name:"bbbbb",
        age:21
    },{
        name:"ccccc",
        age:22
    }];

});
