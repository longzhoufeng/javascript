/**
 * Created by longzhoufeng on 2017/9/20.
 */
var myApp = angular.module("myApp", [])
    //constant方法首先运行，可以用它来声明整个应用范围内的常量，并且让它他在所有的配置(conifig方法里)可用，(controller,service)方法中都可以用
    .constant("apikey","longzhoufeng")

    //value只能注入controller,service...factory
    .value("version","10.0.1")

    //constant在config中也可以注入
    .config(function (apikey) {
        console.log(apikey);
        console.log("1、config")
    })

    //在config之后，controller等其它服务之前
    .run(function () {
        console.log("2、run")
    })
    .controller("firstController",["apikey","version",function (apikey,version) {
        console.log(apikey);
        console.log(version);
        console.log("3、controller")
    }])