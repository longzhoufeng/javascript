**1、下载requieJS**

**2、创建一个HTML文件**

创建一个HTML文件后，导入requireJS肯定是使用script标签的，这个毫无疑问。然后在这个标签中有个data-main属性，它的作用呢是作为一个出入口，就是说在加载requireJS后，从data-main这个属性进入。

main.js

    require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-1.7.2',
        slick: 'slick'
    },
    shim: {
        'slick': ['jquery']
    }
	});
	require(['jquery',"slick"], function($){
	    $(function() {
	        $('.autoplay').slick({
	            dots: false,
	            infinite: true,
	            speed: 300,
	            arrows:false,
	            slidesToShow: 5,
	            slidesToScroll: 1,
	            autoplay: true,
	            autoplaySpeed: 2000
	        });
	    })
	});
	
baseUrl路径是相对html
