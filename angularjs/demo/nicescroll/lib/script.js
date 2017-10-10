// Code goes here
var app=angular.module('angular-nicescroll', [])
.controller('NiceController', function() {
})
.directive('ngNicescroll', ["$rootScope", function($rootScope) {
    return {
        restrict: "ECAM",
        link: function(scope, element, attrs, controller) {
            var niceOption = scope.$eval(attrs.niceOption)
            var niceScroll = $(element).niceScroll(niceOption);
            niceScroll.onscrollend = function(data) {
                if(data.end.y >= this.page.maxh) {
                    if(attrs.niceScrollEnd) scope.$evalAsync(attrs.niceScrollEnd);
                }
            };
            scope.$on('$destroy', function() {
                niceScroll.remove()
            })
        }
    }
}])