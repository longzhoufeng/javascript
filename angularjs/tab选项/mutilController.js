/**
 * Created by longzhoufeng on 2017/10/15
 */

var myApp = angular.module("myApp", []);
myApp.controller("myfirstcontroller", ["$scope", function($scope) {

    $scope.tabs = [
        {title: '标签页a', content: '标签页a的内容'},
        {title: '标签页b', content: '标签页b的内容'},
        {title: '标签页c', content: '标签页c的内容'},
        {title: '标签页d', content: '标签页d的内容'},
        {title: '标签页e', content: '标签页e的内容'},
        {title: '标签页f', content: '标签页f的内容', disabled: true}
    ];
    /*设置tab选中事件*/
    this.tab = 2;
    /*设置tab点击事件*/
    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    /*页面的切换*/
    this.isSelected = function(checkedTab) {
        return this.tab === checkedTab;
    };
}]);



