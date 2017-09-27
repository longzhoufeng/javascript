/**
 * Created by longzhoufeng on 2017/9/20.
 */
angular.module("myApp", [])
    .service("productData",function () {
        return [{
            id:"101",
            name:"苹果",
            price:20
        },{
            id:"201",
            name:"桃子",
            price:10
        },{
            id:"301",
            name:"梨子",
            price:23
        },{
            id:"401",
            name:"果子",
            price:22
        }]
    })
    .controller("productController",function ($scope,productData) {
        $scope.item=productData;
        //排序
        $scope.orderId="id";
        $scope.orderStyle="-";
        $scope.changeOrder=function (type) {
            $scope.orderId=type;
            if($scope.orderStyle===''){
                $scope.orderStyle="-";
            }else{
                $scope.orderStyle="";
            }
        }
    });