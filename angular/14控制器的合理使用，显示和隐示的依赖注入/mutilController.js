/**
 * Created by longzhoufeng on 2017/9/20.
 */
angular.module("myApp", [], function () {

})
    .service("customServce",["$window",function (a) {
        console.log(a)
    }])
    //1、隐示的依赖注入，控制器必须的使用$scope，
    .controller("firstController", function ($scope) {

    })
    //2、显示的依赖注入，可以用一个[]第一个参数为$scope,方法里可以传一个参，推荐这种方法
    .controller("secondController", ["$scope","customServce" ,function (a,b) {
        console.log(b)
    }]);

    //3、这一种方法
    function otherController($scope) {
        console.log($scope)
    }

    //4、这二种方法
    function otherController2(a) {
        console.log(a)
    }
    otherController2.$inject=["$scope"];