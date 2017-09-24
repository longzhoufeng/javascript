/**
 * Created by longzhoufeng on 2017/9/20.
 */
angular.module("myApp", [])
    //工厂方式共享，推荐这种方式,工厂方式是可以返回任何数据类型
    .factory("Data",function () {
        return {
            msg:"数据是共享的"
        }
    })
    //通过data共享，这种方法不推荐;
    .controller("firstController",function ($scope,Data) {
        console.log($scope);
        // 1.如果是一个字符串
        // $scope.name="张三"
        // 2.如果是一个对象
        $scope.data={
            name:"张三"
        };
        //3.任意数据类型
        $scope.Data=Data
    })
    .controller("secondController",function ($scope,Data) {
        console.log($scope);
        // 1.如果是一个字符串
        //$scope.name=$scope.$$prevSibling.name

        // 2.如果是一个对象引用类型
        $scope.data=$scope.$$prevSibling.data;

        //3.任意数据类型
        $scope.Data=Data
    })
