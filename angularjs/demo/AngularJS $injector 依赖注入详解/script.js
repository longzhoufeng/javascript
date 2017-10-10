/*
 1、推断式注入
 这种注入方式，需要在保证参数名称与服务名称相同。如果代码要经过压缩等操作，就会导致注入失败。
 */
app.controller("myCtrl1", function($scope, hello1, hello2) {
    $scope.hello = function() {
        hello1.hello();
        hello2.hello();
    }
});
/*
 2、标记式注入
 这种注入方式，需要设置一个依赖数组，数组内是依赖的服务名字，在函数参数中，可以随意设置参数名称，但是必须保证顺序的一致性
 */
var myCtrl2 = function($scope, hello1, hello2) {
    $scope.hello = function() {
        hello1.hello();
        hello2.hello();
    }
}
myCtrl2.$injector = ['hello1', 'hello2'];
app.controller("myCtrl2", myCtrl2);
// 改成：内联式注入
/*
app.controller("myCtrl2", ["$scope", "hello1", "hello2", function($scope, hello1, hello2) {
    $scope.hello = function() {
        hello1.hello();
        hello2.hello();
    }
}]);
*/
/*
 3、内联式注入
 这种注入方式直接传入两个参数，一个是名字，另一个是一个数组。这个数组的最后一个参数是真正的方法体，其他的都是依赖的目标，但是要保证与方法体的参数顺序一致（与标记注入一样）。
 */
app.controller("myCtrl3", ['$scope', 'hello1', 'hello2', function($scope, hello1, hello2) {
    $scope.hello = function() {
        hello1.hello();
        hello2.hello();
    }
}]);