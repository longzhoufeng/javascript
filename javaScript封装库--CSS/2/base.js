/*
 函数式
 window.onload=function () {
 alert(getId("box").innerHTML);
 alert(getName("sex")[0].value);
 alert(getTag("p")[0].innerHTML);
 };
 */

//对象式
// window.onload=function () {
// 	alert(Base.getId("box").innerHTML);
// 	alert(Base.getName("sex")[0].value);
// 	alert(Base.getTagName("p")[0].innerHTML);
// };




// 前台调用
var setNodeCss= function () {
	return new Base();
};

// 基础库
function Base() {
	//创建一个数组，来保存获取的节点和节点数组
	this.elements=[];
}



//获取id节点
Base.prototype.getId=function (id) {
	this.elements.push(document.getElementById(id));
	return this;
};

// 获取元素节点
Base.prototype.getTagName = function(tag){
	var tags=document.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++){
		this.elements.push(tags[i]);
	}
	return this;
};

// 获取元素节点数组
Base.prototype.css=function (attr,value) {
	for(var i=0;i<this.elements.length;i++){
	if (arguments.length==1){
		if(typeof window.getComputedStyle != "undefined"){//W3C浏览器
			return window.getComputedStyle(this.elements[i],null)[attr];
		}else if (typeof this.elements[i].currentStyle != "undefined"){//IE浏览器
			return this.elements[i].currentStyle[attr];
		}
	}
		this.elements[i].style[attr] = value;
	}
	return this;
};

// 获取CLASS节点为数组
Base.prototype.getClass=function(className,idname) {
	var node=null;
	if (arguments==2){
		node = document.getElementById(idname);
	}else {
		node=document;
	}
	var all=node.getElementsByTagName("*");
	for(var i=0;i<all.length;i++){
		if (all[i].className == className){
			this.elements.push(all[i]);
		}
	}
	return this;
};

//获CLASS取某个节点
Base.prototype.getElement =function(num){
	var element=this.elements[num];
	this.elements=[];//把它清空
	this.elements[0]=element;//然后给它赋值
	return this;
};


///添加class
Base.prototype.addClass = function (className) {
	for (var i = 0; i < this.elements.length; i++) {
		if (!this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
			this.elements[i].className += ' '+className;
		}
	}
	return this;
};


///移除class
Base.prototype.removeClass = function (className) {
	for (var i=0;i<this.elements.length;i++){
		if (this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'),'');
		}
	}
	return this;
};



// 设置innerHtml并且遍历所有节点元素
Base.prototype.html=function (str) {
	for(var i=0;i<this.elements.length;i++){
		if (arguments.length==0){
			return this.elements[i].innerHTML;
		}
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

/* // 设置css样式并且隔行设置节点元素的背景颜色
 Base.prototype.css=function (attr,value) {
 var counts=0;
 for(var i=0;i<this.elements.length;i++){
 this.elements[i+counts++].style[attr] = value;
 }
 return this;
 };*/


























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







