/**
 * Created by longzhoufeng on 2017/9/20.
 */
var firstController = function ($scope) {
    $scope.date = new Date();


    /*setInterval(function () {
        //这种方法虽然变了，但并没有触发脏检查
        $scope.date = new Date();
    }, 1000)*/
    
    setInterval(function () {
        //通过$apply触发脏检查
        $scope.$apply(function () {
            $scope.date = new Date();
        })
    })
};

