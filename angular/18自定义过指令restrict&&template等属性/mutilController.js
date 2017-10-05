/**
 * Created by longzhoufeng on 2017/9/20.
 */
/*指令自定义选项
    1、priority:
    2、replace:用于指定是否使用模板页面来替换自定义指令，默认值为false
    3、template:有两种形式，1、String //模板字符串。2、function(tElement, tAttrs){ …; return templateStr;//返回模板字符串}
    4、templateUrl:也有两种形式：1、String // 模板html文件路径。2、function(tElement, tAttrs){…; return templatePath;//返回模板html路径}
    5、terminal:它的作用是告诉angularJS是否停止运行当前元素上比本指令优先级更低的指令，但与当前指令优先级同级的指令仍然会被执行的
    6、scope:用于控制自定义指令/组件的作用域，自定义指令的scope选项是用来设置作用域的，不是定义变量或者函数的
    7、controller:用于给自定义指令添加一个局部控制器
    8、controllerAs:这个参数用以设置控制器的别名，以此名发布控制器，并且作用域可以访问controllerAs。
    9、require:字符串或数组。可选值。当值为字符串时，它应当是另一个指令的名字。require是将其值所指定的指令中的控制器注入到当前指令中，并作为当前指令的link函数的第四个参数。而这个被注入进来的控制器(位于指令链接的父指令中)会首先被当前指令查找，查找当然是根据require的值决定的，不过给这个值予以不同的前缀，会影响它的查找行为：
    10、restrict:用来指定自定以指令在页面中出现的方式
        1、标签使用 E：Element 推荐使用
        2、属性使用 A：Attribute 推荐使用
        3、class名称使用 C：Class
        4、注释中使用 M：Mark
    11、transclude:默认情况下为false，用于在使用自定义标签时，指定是否使用标签中包含的内容，如果指定transclude选项为true，表示可以使用标签中包含的内容，但是要配合ng-transclude指令一起使用
    12、compile:该属性的属性值是一个函数内部返回一个对象，或者函数。理解compile和link函数是angularJS需要讨论的高级话题之一，对于了解angularJS是如何工作的是至关重要的。
    13、link:link函数用来创建可以操作DOM的属性。当定义了编译函数来取代链接函数时，链接函数是我们能提供给返回对象的第二个方法，也就是postLink函数
    */
var myApp = angular.module("myApp", [],["$compileProvider",function ($compileProvider) {
    console.log($compileProvider);
    $compileProvider.directive("firstController",function () {
        return{
            restrict:"EACM"
        }
    })
}])
