/**
 * Created by longzhoufeng on 2017/9/20.
 */
var myApp = angular.module("myApp", [],function ($provide) {

    console.log(1);
    //自定义服务1,$provide和provider后面，前面的是没有r的
    $provide.provider("CustomService",function () {
        this.$get=function () {
            return{
                msg:"CustomService longzhoufeng"
            }
        }
    });

    //自定义服务2,可以定义多个自定义服务
    $provide.provider("CustomService2",function () {
        this.$get=function () {
            return{
                msg:"这是第二个自定义服务",
                age:30
            }
        }
    })
});

//firstController是在myApp模块下，
// $scope,CustomService的顺序是不一定要按顺序来
myApp.controller("firstController",function ($scope,CustomService,CustomService2) {
    console.log(2);
    $scope.name = "longzhoufeng";
    console.log(CustomService.msg);
    console.log(CustomService2.msg,"---"+CustomService2.age);
});
