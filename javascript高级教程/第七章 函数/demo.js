/**
 * Created by longzhoufeng on 2016/12/22.
 */


// 一、函数声明 /////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.没有参数的函数
function box() {//没有参数的函数
    alert("函数本不会执行，只有调用才会执行")
}
box();          //直接调用函数


//2.带参数的函数
function pox(name,age) { //带参数的函数
    alert("你的姓名："+name+",你的年龄："+28);
}
pox("龙周峰",28);//调用函数，并传参



//  二、return返回值 ///////////////////////////////////////////////////////////////////////////////////////////////////
//1.没有参数的函数
function box() { //没有参数的函数
    return "我被返回了!!!"; //通过return把函数的最终值返回
}
alert(box());

//2.带参数的函数
function pox(name ,age) {
    return "你的姓名是："+name+", 你的年龄是："+age;
}
alert(pox("龙周峰",28));


//3.我们还可以把一个函数的返回值赋值给一个变量，然后通过进行操作
function dox(name,age) {
    return "你的姓名："+name+"，你的年龄："+age;
}
var num=dox("longzhoufeng",28); //函数得到的值返回给一个变量
alert(num);



// 三、arguments对象 ///////////////////////////////////////////////////////////////////////////////////////////////////
//1.知道每次参数的值
function box() {
    return arguments[0]+arguments[1]+arguments[2];//得到每次参数的值
}
var num = box("long","zhou","feng");            //传递参数
alert(num);


//2.动态传参，或增，或减
function pox() {
    var sum=0;
    if (arguments.length==0) return sum;    //如果没有参数，退出
    for (var i=0; i<arguments.length;i++){  //如果有参数，就累加
        sum = sum + arguments[i];
    }
    return sum;                              //返回累加的结果
}
var num1 = pox(1,3,8,999,9);
alert(num1);


//3.动态传参，或增，或减，另一种写法
function dox() {
    var sum=0;
    for(var i=0; i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
var num2 = dox(1,3,8,999,9);
alert(num2);
















