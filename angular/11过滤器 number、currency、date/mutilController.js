/**
 * Created by longzhoufeng on 2017/9/20.
 */
// 过滤器种类：
// 1、number(数字类型)
// 2、currency
// 3、data=e
// 4、json
// 5、limtTo
// 6、lowercse
// 7、uppercase
// 8、filter(string/function/object)
// 9、number
// 10、orderBy()


/**
 * Created by longzhoufeng on 2017/9/20.
 */
angular.module("myApp", [])
    .factory("Data",function () {
        return {
            msg:"数据是共享的"
        }
    })
    .controller("firstController",function ($scope,Data) {
        $scope.Data=Data;
        $scope.today=new Date;
    });