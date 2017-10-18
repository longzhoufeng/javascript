var myApp = angular.module('myApp', []);
myApp.controller('ratingController', function($scope) {
    $scope.var = "123";
    console.log('外部控制器初始化');
})
myApp.directive('rating', function() {
    console.log("指令初始化");
    return {
        restrict: 'E',
        scope: {
            maxStars: '='
        },
        controller: 'ratingController',
        link: function(scope, el, attrs) {
            console.log('link函数', scope.maxStars);
        }
    };
});
