/**
 * Created by longzhoufeng on 2017/9/20.
 */
angular.module("myApp", [], function ($filterProvider, $provide, $controllerProvider) {
    $provide.service("Data", function () {
        return [{
            name: "longzhoufeng",
            age: 30,
            city: "广州"
        }, {
            name: "AAAAAAAA",
            age: 32,
            city: "广州和上海"
        }]
    });
    //这是一种方法，在dom前面加一个fi
    $filterProvider.register("filterAge", function () {
        return function (obj) {
            var newObj = [];
            angular.forEach(obj, function (i) {
                if (i.age < 32) {
                    newObj.push(i);
                }
            });
            return newObj;
        }
    });
    $controllerProvider.register("firstController", function ($scope, Data) {
        $scope.data = Data
    })
})

    .filter("filterCity", function () {
        return function (obj) {
            var newObj = [];
            angular.forEach(obj, function (i) {
                if (i.city === "广州和上海") {
                    newObj.push(i);
                }
            });
            return newObj;
        }
    });