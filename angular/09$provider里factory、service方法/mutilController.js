/**
 * Created by longzhoufeng on 2017/9/20.
 */
var myApp = angular.module("myApp", [], function ($provide) {
    // 自定义服务
    $provide.provider("CustomService", function () {
        this.$get = function () {
            return {
                msg: "CustomService longzhoufeng"
            }
        }
    });

    // 自定义工厂，可以返回一个字符串或者数字，数组或对象
    $provide.factory("CustomFactory", function () {
        return [3,2,3,5,66,467]
    });
    
    
   //自定义服务，返回的东西必须是对象，必须是一个引用类型
    $provide.service("CustomServiceArray",function () {
        return ["自定义服务数组"]
    })
});

//firstController是在myApp模块下，
// $scope,CustomService的顺序是不一定要按顺序来
myApp.controller("firstController", function ($scope,CustomFactory,CustomServiceArray) {
    $scope.name = "longzhoufeng";
    console.log(CustomFactory);
    console.log(CustomServiceArray)
});
