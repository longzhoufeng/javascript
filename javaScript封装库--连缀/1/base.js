
// 创建一个库，名字就叫做base.js。我们准备在里面编写最常用的代码，然后不断的扩展封装,有二种方式如下：

/*
函数式

function getId(id) {
	return document.getElementById(id);
}

function getName(name) {
	return document.getElementsByName(name);
}

function getTag(tag) {
	return document.getElementsByTagName(tag);
}
 */



/*
对象式
*/
var Base = {	//整个库可以是一个对象
	getId:function (id) {
		return document.getElementById(id);
	},
	getName:function (name) {
		return document.getElementsByName(name);
	},
	getTagName:function (tag) {
		return document.getElementsByTagName(tag);
	}
	};
























// var Base = {
// 	getId : function (id) {
// 		return document.getElementById(id)
// 	},
// 	getName : function (name) {
// 		return document.getElementsByName(name)
// 	},
// 	getTagName : function (tag) {
// 		return document.getElementsByTagName(tag);
// 	}
// };







