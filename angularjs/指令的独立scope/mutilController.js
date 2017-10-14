/**
 * Created by longzhoufeng on 2017/10/15
 */

var myApp = angular.module("myApp", []);

myApp.controller("myFirstcontroller",["$scope",function ($scope) {
    $scope.username="longzhoufeng";
    $scope.address="8888888888888";
    $scope.myname="999999999999999";
    $scope.myfn=function (name) {
        console.log("hello"+name)
    }
}]);
myApp.directive("hello", function () {
    return {
        /*
        一、scope：如果没有scope，那么页面上的4个指令，会同时输出数据，加了就不会相互影响
        二、scooe的绑定策略：
            @:把当前属性作为字符串传递，你还可以绑定来自外层scope的值，在属性中插入{{}}即可
            =:与父scope中的属性进行双向绑定。
            &:传递一个来自父scope的函数，稍后调用。
        */

        scope:{},
        restrict: "AE",
        templateUrl:"hello.html",
        replace:true,
        link: function (soope, ele, attrs, supermanCtrl) {

        }
    }
});
myApp.directive("long", function () {
    return {
        restrict: "AEMC",
        templateUrl:"zhou.html",
        replace:true,
        //用这种方式比较烦琐，可以直接用@代替，如指令zhou，跟这个是一样的效果
        link: function (soope, ele, attrs) {
            soope.item=attrs.data;
        }
    }
});
myApp.directive("zhou", function () {
    return {
        restrict: "AEMC",
        templateUrl:"zhou.html",
        replace:true,
        scope:"@"
    }
});
myApp.directive("feng", function () {
    return {
        restrict: "AEMC",
        scope:{
            data:"="
        },
        templateUrl:"feng.html",
        replace:true

    }
});
myApp.directive("minigui", function () {
    return {
        restrict: "AEMC",
        scope:{
            data:"&"
        },
        templateUrl:"minigui.html",
        replace:true

    }
});



