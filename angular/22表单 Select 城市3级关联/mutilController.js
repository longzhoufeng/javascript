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

// form方法
//1、$setPristine(将表单复位原始状态，class,$dirty,$pristine)

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

    .filter("cityFilter", function () {
        return function (data, parent) {
            // console.log(data,parent);
            var filterData = [];
            angular.forEach(data, function (obj) {
                if (obj.parent === parent) {
                    filterData.push(obj)
                }
            });
            return filterData;
        }
    })


    .controller("firstController", ["$scope", function ($scope) {
        var _this=this;
        $scope.hobbies = [
            {
                id: 1,
                name: "aaaa"
            }, {
                id: 2,
                name: "bbbb"
            }, {
                id: 3,
                name: "cccc"
            },
        ];
        $scope.cities = [
            {
                id: 1,
                parent: 0,
                name: "上海"
            }, {
                id: 2,
                parent: 1,
                name: "上海市"
            }, {
                id: 8,
                parent: 2,
                name: "徐汇区"
            }, {
                id: 3,
                parent: 2,
                name: "长宁区"
            }, {
                id: 4,
                parent: 0,
                name: "北京"
            }, {
                id: 5,
                parent: 4,
                name: "北京市"
            }, {
                id: 6,
                parent: 5,
                name: "东城区"
            }, {
                id: 7,
                parent: 5,
                name: "丰台区"
            }, {
                id: 9,
                parent: 0,
                name: "浙江"
            }, {
                id: 100,
                parent: 9,
                name: "杭州"
            }, {
                id: 11,
                parent: 9,
                name: "宁波"
            }, {
                id: 12,
                parent: 100,
                name: "西湖区"
            }, {
                id: 13,
                parent: 11,
                name: "北仑区"
            }
        ];
        $scope.data = {
            hobbies: [1, 2],
            city: 3
        };
        //重置，先保留一份默认值
        $scope.origData = angular.copy($scope.data);
        $scope.reset = function () {
            $scope.data = angular.copy($scope.origData);
            _this.initCity();
            $scope.myform.$setPristine();
        };
        //让城市关联使用
        this.findCityId = function (parent) {
            var parentId;
            angular.forEach($scope.cities, function (city) {
                if (city.id === parent) {
                    parentId = city.parent;
                    return;
                }
            });
            return parentId;

        };
        this.initCity = function () {
            if ($scope.data.city !== undefined) {
                // 1、用call把this传过来
                // $scope.data.area = this.findCityId($scope.data.city);
                // $scope.data.province = this.findCityId($scope.data.area)

                 // 2、用_this代替this
                $scope.data.area = _this.findCityId($scope.data.city);
                $scope.data.province = _this.findCityId($scope.data.area)
            }
        };
        //第一次打开页面，需要初始化一下
        //1、用call把this传过去
        // this.initCity.call(this);

        // 如果不想用call调用，可以用_this代替this;
        this.initCity();

        $scope.toggleSelect = function (id) {
            var index = -1;
            if ($scope.data.hobbies === undefined) {
                $scope.data.hobbies = []
            } else {
                index = $scope.data.hobbies.indexOf(id);
            }

            if (index === -1) {
                $scope.data.hobbies.push(id);
            } else {
                $scope.data.hobbies.splice(index, 1);
            }
            console.log($scope.data.hobbies)
        }
    }])