window.addEventListener('load', function () {
    /* 实例化出对象 */
    var letaoindex = new letaoIndex();
    /* 实例化出来的对象 调用 原型里的方法(初始化轮播图的方法) */
    letaoindex.sliderInit();
    /* 实例化出来的对象 调用 原型里方法(初始化滚动区域的方法) */
    letaoindex.scrollInit();
});

/* 创建构造函数 */
var letaoIndex = function () {

};
/* 给构造函数的原型添加方法 */
letaoIndex.prototype = {

    /* 定义主页轮播图初始化方法 */
    sliderInit: function () {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    },

    /* 定义区域滚动初始化方法 */
    scrollInit: function () {

        mui('.mui-scroll-wrapper').scroll({

            deceleration: 0.0007, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006,阻尼系数,系数越小滑动越灵敏
            indicators: false //是否显示滚动条,false 表示不显示滚动条,true 表示显示滚动条.默认值是显示滚动条的.
            
           /*  bounce: true,//是否启用回弹,true 表示回弹,false表示不回弹,默认值是true回弹.我需要的就是要回弹,所以可以不写.
            scrollY: true, //是否竖向滚动,默认是竖向滚动.
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0 //初始化时滚动至y  */ 
           
        });
    }


}