/**
 * Created by longzhoufeng on 2017/8/19.
 */
/*
 require.config执行baseUrl为'js'，
 baseUrl指的模块文件的根目录，可以是绝对路径或相对路径
 */
require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'jquery-1.11.0.min',
        'log': 'log'
    },
    shim: {
        'log':{
            deps: ['jquery'],
            exports: 'log'
        }
    },
});
/*
 这里通过require，来引入math.js，
 然后通过后面的匿名函数给他们分配参数，如这里的
 */

require(['../js/lib/math'], function(math) {
   alert(math.add(3,5));
});