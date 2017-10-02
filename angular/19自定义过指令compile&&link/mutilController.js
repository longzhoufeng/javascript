/**
 * Created by longzhoufeng on 2017/9/20.
 */
var myApp = angular.module("myApp", [])
    .directive('customTags', function () {
        return {
            restrict: "ECAM",
            // 多个指令下只能有一个template，否则会报错
            template: "<div>longzhoufeng</div>",
            replace: true,
            compile: function () {
                 console.log(33333333);
            }
        }
    })
    .controller("firstController", ["$scope", function ($scope,$log) {
        console.log(123);
        $scope.user = [
            {
                id: 101,
                name: "longzhoufeng"
            },
            {
                id: 102,
                name: "aaaaaaaaaaa"
            },
            {
                id: 103,
                name: "bbbbbbbbbbb"
            }
        ]
    }]);