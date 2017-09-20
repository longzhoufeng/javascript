/**
 * Created by longzhoufeng on 2017/9/20.
 */
var firstController = function ($scope) {
    $scope.name="longzhoufeng";
    $scope.count=0;
    $scope.data={
        name:"aaaaaaaaa",
        count:0
    };
     //监听一个model，当一个model每一次改变时，都会触发这个对象
    $scope.$watch("name",function (newValue,oldValue) {
        console.log(newValue,oldValue)
    });

    //监听一个model，当一个model每一次改变时，都会触发这个对象
    $scope.$watch("name",function (newValue,oldValue) {
        ++$scope.count;
        if($scope.count>30){
            $scope.name="已经大于30次了"
        }
    });

    $scope.$watch("data",function (newValue,oldValue) {
       console.log(newValue.name,oldValue.name)

    },true)
};

