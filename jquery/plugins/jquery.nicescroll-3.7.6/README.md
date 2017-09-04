# jQuery.NiceScroll
v. 3.7.6

## The best nicescroll release ever - extremely smooth and consistent in modern browsers and mobile devices, with low resource usage

 - [Web Site: nicescroll.areaaperta.com](https://nicescroll.areaaperta.com)
 - [Repo: github.com/inuyaksa/jquery.nicescroll](https://github.com/inuyaksa/


> Nicescroll as a Greasemonkey plugin: http://userscripts.org/scripts/show/119910 (freezed)


> Nicescroll is a jquery plugin, for nice scrollbars with a very similar ios/mobile style.

  - HORIZONAL scrollbar support!
  - It supports DIVs, IFrames, textarea, and document page (body) scrollbars.
  - Compatible with all recent desktop browser and older: Chrome, Firefox, Edge, IE8+, Safari (win/mac), Opera. (all A-grade browsers)
  - Compatible with mobile device: iPad/iPhone/iPod, Android 4+, Blackberry phones and Playbook (WebWorks/Table OS), Windows Phone 8 and 10.
  - Compatible with all touch devices: iPad, Android tablets, Window Surface.
  - Compabible with multi-input device (mouse with touch or pen): Window Surface, Chrome Desktop on touch notebook.
  - Compatible with 2 directions mice: Apple Magic Mouse, Apple Mouser with 2-dir wheel, PC mouse with 2-dir wheel (if browser support it).

So you have customizable and scrollable divs with momentum for iPad and you have consistent scrollable areas for all desktop and mobile platforms.

Sexy zoom feature, you can "zoom-in" the content of any nicescroll'ed div.
Nice to use and nice to see, all the content of the div in fullscreen mode.
It works on desktop (double click on div) either in mobile/touch devices using pinch gesture.

On modern browsers hardware accelerated scrolling has implemented.
Using animationFrame for a smoothest and cpu-saving scrolling. (when browser supports)

"Use strict" tested script for maximum code quality.
Bower and AMD ready.

Warning for IE6/7 users (why do you uses yet? Please updgrade to a more stable and modern browser), support for your browser has deprecated.


## FEATURES

- simple installation and activation, it works with NO modification of your code. (some exceptions can happen, so you can write to me)
- very stylish scrollbars, with no occupation on your window (original browser scrollbars need some of page space and reduces window/div usable width)
- you can style main document scrollbar (body) too!! (not all device/browser support this feature)
- on all browsers you can scroll: dragging the cursor, mouse wheel (speed customizable), keyboard navigation (cursor keys, pagup/down keys, home/end keys)
- scroll is smooth (as modern tablet browsing), speed is customizable
- zoom feature
- hardware accelerated scroll (where available)
- animation frame support for smoth scrolling and cpu-saving
- dragging scroll mode with scrolling momentum (as touch device)
- tested for all major browsers desktop and mobile versions
- support for touch devices
- support for multi-input devices (MSPointer/Pointer support)
- compatible with many other browsers and webkit derivated!
- scrollbar has a lot a customizable features
- native scroll events are working yet
- fully integrated with jQuery
- compatibile with jQuery UI, jQuery Touch, jQuery Mobile


## DEPENDENCIES
>> It's a plugin for the jquery framework, you need to include jquery in your scripts.
>> it works with jQuery 1.x / 2.x / 3.x branch (slim version don't works)


* INSTALLATION
Put loading script tag after jquery script tag and loading the zoom image in the same folder of the script:

<script src="jquery.nicescroll.js"></script>

When you use zoom feature, copy image "zoomico.png" in the same folder of jquery.nicescroll.js.


# 最简单的用法如下：

    $(document).ready(
  	 function() { 
     			$("html").niceScroll();
  		}
 	);

注意：一定要放在 $(document).ready 中进行初始化！

隐藏滚动条：（当在同一页面中使用多个nicescroll插件时，要及时隐藏用完的nicescroll对象，加载时，需要先show,再resize。）

	$("#mydiv").getNiceScroll().hide();


检测滚动条是否重置大小（当窗口改变大小时）：

	$("#mydiv").getNiceScroll().resize();

滚动到某个位置：

	$("#mydiv").getNiceScroll(0).doScrollLeft(x, duration); // Scroll X Axis；第一个参数为滚动的位置，第二个为滚动需要的时间
	$("#mydiv").getNiceScroll(0).doScrollTop(y, duration); // Scroll Y Axis



#设置各种参数：

    $("#thisdiv").niceScroll({
        cursorcolor: "#424242", // 改变滚动条颜色，使用16进制颜色值
        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        cursorwidth: "5px", // 滚动条的宽度，单位：便素
        cursorborder: "1px solid #fff", // CSS方式定义滚动条边框
        cursorborderradius: "5px", // 滚动条圆角（像素）
        zindex: "auto" | <number>, // 改变滚动条的DIV的z-index值
        scrollspeed: 60, // 滚动速度
        mousescrollstep: 40, // 鼠标滚轮的滚动速度 (像素)
        touchbehavior: false, // 激活拖拽滚动
        hwacceleration: true, // 激活硬件加速
        boxzoom: false, // 激活放大box的内容
        dblclickzoom: true, // (仅当 boxzoom=true时有效)双击box时放大
        gesturezoom: true, // (仅 boxzoom=true 和触屏设备时有效) 激活变焦当out/in（两个手指外张或收缩）
        grabcursorenabled: true // (仅当 touchbehavior=true) 显示“抓住”图标display "grab" icon
        autohidemode: true, // 隐藏滚动条的方式, 可用的值: 
          true | // 无滚动时隐藏
          "cursor" | // 隐藏
          false | // 不隐藏,
          "leave" | // 仅在指针离开内容时隐藏
          "hidden" | // 一直隐藏
          "scroll", // 仅在滚动时显示        
        background: "", // 轨道的背景颜色
        iframeautoresize: true, // 在加载事件时自动重置iframe大小
        cursorminheight: 32, // 设置滚动条的最小高度 (像素)
        preservenativescrolling: true, // 你可以用鼠标滚动可滚动区域的滚动条和增加鼠标滚轮事件
        railoffset: false, // 可以使用top/left来修正位置
        bouncescroll: false, // (only hw accell) 启用滚动跳跃的内容移动
        spacebarenabled: true, // 当按下空格时使页面向下滚动
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // 设置轨道的内间距
        disableoutline: true, // 当选中一个使用nicescroll的div时，chrome浏览器中禁用outline
        horizrailenabled: true, // nicescroll可以管理水平滚动
        railalign: right, // 对齐垂直轨道
        railvalign: bottom, // 对齐水平轨道
        enabletranslate3d: true, // nicescroll 可以使用CSS变型来滚动内容
        enablemousewheel: true, // nicescroll可以管理鼠标滚轮事件
        enablekeyboard: true, // nicescroll可以管理键盘事件
        smoothscroll: true, // ease动画滚动
        sensitiverail: true, // 单击轨道产生滚动
        enablemouselockapi: true, // 可以用鼠标锁定API标题 (类似对象拖动)
        cursorfixedheight: false, // 修正光标的高度（像素）
        hidecursordelay: 400, // 设置滚动条淡出的延迟时间（毫秒）
        directionlockdeadzone: 6, // 设定死区，为激活方向锁定（像素）
        nativeparentscrolling: true, // 检测内容底部便于让父级滚动
        enablescrollonselection: true, // 当选择文本时激活内容自动滚动
        cursordragspeed: 0.3, // 设置拖拽的速度
        rtlmode: "auto", // DIV的水平滚动从左边开始
        cursordragontouch: false, // 使用触屏模式来实现拖拽
        oneaxismousemode: "auto", // 当只有水平滚动时可以用鼠标滚轮来滚动，如果设为false则不支持水平滚动，如果设为auto支持双轴滚动
        scriptpath: "" // 为boxmode图片自定义路径 ("" => same script path)
        preventmultitouchscrolling: true // 防止多触点事件引发滚动
    });

Initialize nicescroll ALWAYS in (document) ready statement.
```javascript
// 1. Simple mode, it styles document scrollbar:
$(function() {  
    $("body").niceScroll();
});

// 2. Instance with object returned:
var nice = false;
$(function() {  
    nice = $("body").niceScroll();
});

// 3. Style a DIV and chage cursor color:
$(function() {  
    $("#thisdiv").niceScroll({cursorcolor:"#00F"});
});

// 4. DIV with "wrapper", formed by two divs, the first is the vieport, the latter is the content:
$(function() {
    $("#viewportdiv").niceScroll("#wrapperdiv",{cursorcolor:"#00F"});
});

// 5. Get nicescroll object:
var nice = $("#mydiv").getNiceScroll();

// 6. Hide scrollbars:
$("#mydiv").getNiceScroll().hide();

// 7. Check for scrollbars resize (when content or position have changed):
$("#mydiv").getNiceScroll().resize();

// 8. Scrolling to a position:
$("#mydiv").getNiceScroll(0).doScrollLeft(x, duration); // Scroll X Axis
$("#mydiv").getNiceScroll(0).doScrollTop(y, duration); // Scroll Y Axis
```

## CONFIGURATION PARAMETERS
When you call "niceScroll" you can pass some parameters to custom visual aspects:

```javascript
$("#thisdiv").niceScroll({
    cursorcolor: "#424242", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
    cursorborder: "1px solid #fff", // css definition for cursor border
    cursorborderradius: "5px", // border radius in pixel for cursor
    zindex: "auto" | [number], // change z-index for scrollbar div
    scrollspeed: 60, // scrolling speed
    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    touchbehavior: false, // DEPRECATED!! use "touchemulate"
    emulatetouch: false, // enable cursor-drag scrolling like touch devices in desktop computer
    hwacceleration: true, // use hardware accelerated scroll when supported
    boxzoom: false, // enable zoom for box content
    dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
    gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
    grabcursorenabled: true // (only when touchbehavior=true) display "grab" icon
    autohidemode: true, // how hide the scrollbar works, possible values: 
      true | // hide when no scrolling
      "cursor" | // only cursor hidden
      false | // do not hide,
      "leave" | // hide only if pointer leaves content
      "hidden" | // hide always
      "scroll", // show only on scroll          
    background: "", // change css for rail background
    iframeautoresize: true, // autoresize iframe on load event
    cursorminheight: 32, // set the minimum cursor height (pixel)
    preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
    railoffset: false, // you can add offset top/left for rail position
    bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
    spacebarenabled: true, // enable page down scrolling when space bar has pressed
    railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
    disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
    horizrailenabled: true, // nicescroll can manage horizontal scroll
    railalign: right, // alignment of vertical rail
    railvalign: bottom, // alignment of horizontal rail
    enabletranslate3d: true, // nicescroll can use css translate to scroll content
    enablemousewheel: true, // nicescroll can manage mouse wheel events
    enablekeyboard: true, // nicescroll can manage keyboard events
    smoothscroll: true, // scroll with ease movement
    sensitiverail: true, // click on rail make a scroll
    enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
    cursorfixedheight: false, // set fixed height for cursor in pixel
    hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
    directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
    nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
    enablescrollonselection: true, // enable auto-scrolling of content when selection text
    cursordragspeed: 0.3, // speed of selection when dragged with cursor
    rtlmode: "auto", // horizontal div scrolling starts at left side
    cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
    oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
    scriptpath: "" // define custom path for boxmode icons ("" => same script path)
    preventmultitouchscrolling: true // prevent scrolling on multitouch events
    disablemutationobserver: false // force MutationObserver disabled,
    enableobserver: true // enable DOM changing observer, it tries to resize/hide/show when parent or content div had changed
    scrollbarid: false // set a custom ID for nicescroll bars 
});
```