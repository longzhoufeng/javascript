/**
 * Created by longzhoufeng on 2017/9/20.
 */
var myApp = angular.module("myApp", [])

    // form控制变量
    // 1、字段是否未更改（myform.username.$pristine）
    //formName.inputFieldName.$pristine
    // 2、字段是否更改（myform.username.$dirty）
    // formName.inputFieldName.$dirty
    // 3、字段有效（myform.username.$valid）
    // formName.inputFieldName.$valid
    // 4、字段无效（myform.username.$invalid）
    // formName.inputFieldName.$invalid
    // 5、字段错误信息（myform.username.$error）
    // formName.inputFieldName.$error

    // input属性
    // 1、name(名字)
    // 2、ng-model(绑定的数据)
    // 3、ng-required(是否必填)
    // 4、ng-minlength(最小长度)
    // 5、ng-maxlength(最大长度)
    // 6、ng-pattern(匹配模式)
    // 7、ng-change(值变化时的回调)

    // CSS样式
    // 1、ng-valid(当表单验证通过时的设置)
    // 2、ng-invalid(表单验证失败时的设置)
    // 3、ng-pristine(表单的未被动过之前拥有)
    // 4、ng-dirty(表单被动过之后拥有)


    .controller("firstController", ["$scope", function ($scope) {
        $scope.hobbies=[
            {
                id:1,
                name:"aaaa"
            },{
                id:2,
                name:"bbbb"
            },{
                id:3,
                name:"cccc"
            },
        ];
        $scope.data={
            hobbies:[1,2]
        };
        $scope.toggleSelect=function (id) {
            var index=$scope.data.hobbies.indexOf(id);
            if(index===-1){
                $scope.data.hobbies.push(id);
            }else{
                $scope.data.hobbies.splice(index,1);
            }
            console.log($scope.data.hobbies)
        }
    }])