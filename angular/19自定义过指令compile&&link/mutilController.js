/**
 * Created by longzhoufeng on 2017/9/20.
 */
var i = 0;
var myApp = angular.module("myApp", [])
    .directive('customTags', function () {
        return {
            restrict: "ECAM",
            // 多个指令下只能有一个template，否则会报错
            template: "<div>{{user.name}}</div>",
            replace: true,
            compile: function (tElement, tAttrs, transclude) {
                //编译阶段
                tElement.append(angular.element("<div>{{user.name}}{{ user.count }}</div>"))
                console.log(33333333 + "编译阶段");
                console.log(tElement);
                console.log(tAttrs);
                console.log(transclude);
                return {
                    //表示在编译阶段之后，指令连接到子元素前运行;
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        console.log("customTags preLink...")
                    },
                    //表示在所有子元素指令都连接之后才运行;
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        iElement.on("click", function () {
                            scope.$apply(function () {
                                scope.user.name = "dddddddddd"
                                scope.user.count = ++i;
                            })
                        });
                        console.log("customTags all child element link...")
                    }
                };
            },
             // 其实他就是post函数事情，如果有compile就不会用link;
            /*link: function () {
                这个跟上面的postLink事件是一样的效果
                iElement.on("click", function () {
                    scope.$apply(function () {
                        scope.user.name = "dddddddddd"
                        scope.user.count = ++i;
                    })
                });
            }*/
        }
    })
    .directive('customTags2', function () {
        return {
            restrict: "ECAM",
            replace: true,
            compile: function () {
                console.log(2222222222);
            }
        }
    })
    .controller("firstController", ["$scope", function ($scope) {
        $scope.users = [
            {
                id: 101,
                name: "aaaaaaaaaaa"
            },
            {
                id: 102,
                name: "bbbbbbbbbbb"
            },
            {
                id: 103,
                name: "cccccccccccc"
            }
        ]
    }]);