/*
对象式

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
 */


var setNodeCss= function () {
	return new Base();
};
 function Base() {
 	//创建一个数组，来保存获取的节点和节点数组
 	this.elements=[];
 	//获取id节点
 	this.getId=function (id) {
		this.elements.push(document.getElementById(id));
		return this;
	};

	// 获取元素节点
	this.getTagName = function(tag){
		var tags=document.getElementsByTagName(tag);
		for(var i=0;i<tags.length;i++){
			this.elements.push(tags[i]);
		}
		return this;
	}

 }

// 设置css样式并且遍历所有节点元素
Base.prototype.css=function (attr,value) {
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style[attr] = value;
	}
	return this;
};


// 设置innerHtml并且遍历所有节点元素
Base.prototype.html=function (str) {
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].innerHTML = str;
	}
	return this;
};

// 设置click事件并且遍历所有节点元素
Base.prototype.click=function (fn) {
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick=fn;
	}
	return this;
};


/*
// 设置css样式并且隔行设置节点元素的背景颜色
Base.prototype.css=function (attr,value) {
	var counts=0;
	for(var i=0;i<this.elements.length;i++){
		this.elements[i+counts++].style[attr] = value;
	}
	return this;
};
*/

	
	
window.onload=function () {
	var base=new Base();
	// 设置id节点
	// alert(base.getId("box").elements.length);
	setNodeCss().getId("box").css("color","blue").css("backgroundColor","blue");

	// 设置元素节点样式
	setNodeCss().getTagName("p").css("backgroundColor","red").html("888888888888").click(function () {
		alert("a")
	});

	// 设置元素节点html内容
	// base.getTagName("p").html("888888888888");

	// 设置元素节点Click事件
	// base.getTagName("p").click(function () {
	// 	alert("a")
	// });



	//Base是一个基础库的核心对象
	// Base.getId("box")返回是一个divElement,这个对象是没有Css方法的
	// Base.getId("box")返回是改成Base即可，返回Base对象

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







