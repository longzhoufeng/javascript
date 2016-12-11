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



window.onload=function () {
    // alert(setNodeCss().getId("box").css("color","red"));
    // alert(setNodeCss().getId("box").html());
    // setNodeCss().getId("box").html("longzhoufeng888888");
    // alert(setNodeCss().getId("box").css("color"));
    // setNodeCss().getId("box").css("color","blue");
    // alert(setNodeCss().getId("box").css("fontSize"));
    // alert(setNodeCss().getClass("red").elements.length);
    // setNodeCss().getClass("red").css("color","red");
    // alert(setNodeCss().getClass("red").getElement(2).elements.length);
    // setNodeCss().getClass("red").getElement(2).css("color","blue")
    setNodeCss().getClass("red","aaa").css("color","blue")
};





























