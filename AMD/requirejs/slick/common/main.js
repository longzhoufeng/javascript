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