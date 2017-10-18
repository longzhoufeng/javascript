/**
 * Created by longzhoufeng on 2017/10/15
 */

var myApp = angular.module("myApp", []);
myApp.controller("myfirstcontroller", ["$scope", function($scope) {
    $scope.loadData = function() {
        console.log("数据加载中...")
    }
    $scope.longzhoufeng = {
        username: "aaaa"
    }
    // console.log($scope.longzhoufeng.username)
}]);
myApp.controller("myfirstcontroller2", ["$scope", function($scope) {
    $scope.data = {
        a: 2,
        b: 5,
        sum: 1,
        username: "longzhoufeng",
    }
    $scope.loadData2 = function() {
        console.log("数据加载中2222222222")
    }
}]);
myApp.run(function($templateCache) {
    $templateCache.put("hello.html", "<div>aaaaaaaaaaa</div>")
});
myApp.directive("hello", function($templateCache) {
    return {
        restrict: "AECM",
        template: $templateCache.get("hello.html"),
        replace: true
    }
});
myApp.directive("main", function($templateCache) {
    return {
        restrict: "AECM",
        templateUrl: "hello.html",
        replace: true,
        link: function(soope, ele, attrs) {
            soope.longzhoufeng = "longlonglong"
        }
    }
});
myApp.directive("loader", function() {
    return {
        restrict: "AECM",
        link: function(soope, ele, attr) {
            ele.bind("mouseenter", function() {
                //如果DOM上的howToload是驼峰方式，这里一定要小写howtoload
                soope.$apply(attr.howtoload)
            })
        }
    }
});
myApp.directive('test', [function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'count.html',
        scope: {
            conf: '='   //在本地作用域属性和父作用域属性间建立一个双向的绑定
        },
        link: function(scope, element, attrs) {
            var conf = scope.conf;
            scope.sum = conf.a + conf.b;
            console.log(scope.conf.username)
            console.log(scope.conf.username="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            // console.log(conf)
           /* scope.aaa = function() {
                // scope.$parent.data.sum = scope.sum;
                scope.conf.sum = scope.sum;
            }*/
        }
    }
}]);


