/**
 * Created by longzhoufeng on 2017/8/19.
 */
/*
 define的参数为匿名函数，该匿名函数返回一个对象
 */
define(['jquery'], function($) {
    var add = function(x, y) {
        return x + y;
    };
    return {
        add: add
    };
});