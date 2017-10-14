/**
 * Created by longzhoufeng on 2017/10/15
 */

var myApp = angular.module("myApp", []);

myApp.directive("superman", function () {
    return {
        restrict: "AECM",
        scope: {},
        //指令内部的控制器
        controller: function ($scope) {
            $scope.abilities = [];
            this.addStrength = function () {
                $scope.abilities.push("strength")
            };
            this.addSpeed = function () {
                $scope.abilities.push("speed")
            };
            this.addLight = function () {
                $scope.abilities.push("light")
            }
        },
        link: function (scope, ele, attr) {
            ele.addClass("btn btn-primary");
            ele.bind("mouseenter", function () {
                console.log(scope.abilities);
            })
        }

    }
});
myApp.directive("strength", function () {
    return {
        //require就是说strength依赖于superman指令，写了reuuire就可以在link里写第四个参数，第四参数就是注入到Link里
        require: "^superman",
        link: function (soope, ele, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});
myApp.directive("speed", function () {
    return {
        require: "^superman",
        link: function (soope, ele, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
myApp.directive("light", function () {
    return {
        require: "^superman",
        link: function (soope, ele, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});


