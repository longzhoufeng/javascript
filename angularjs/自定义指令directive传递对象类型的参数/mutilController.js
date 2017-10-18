var myApp = angular.module('myApp', []);
myApp.controller('myfirstcontroller', ["$scope", function($scope) {
    $scope.list = [
        {
            id: 123,
            name: 'Hello World'
        }, {
            id: 234,
            name: 'Fucking world'
        }, {
            id: 345,
            name: 'What did you say?'
        }
    ];
    $scope.obj = {
        id: 11111111,
        username: 'HelloHelloHelloHelloHelloHello',
        age: 'HelloHelloHelloHelloHelloHello'
    }
}]);
myApp.directive('ngTable', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '=',
            obj: '='
        },
        templateUrl: 'ngTable.html',
        link: function(scope, element, attrs) {
            var obj = scope.obj
            console.log(obj.username)
        }
    };
});