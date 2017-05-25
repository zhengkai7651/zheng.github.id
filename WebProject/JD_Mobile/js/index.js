/**
 * Created by zheng on 2017/5/7.
 * Js-Type : index
 * Last Modefiend time: 2017/5/7 16:47
 */
$(function(){

    (function () {
        //首页轮播图
        var jd_slider_banner = $(".jd-slider-rom"); //获取banner图容器
        var imgLength = jd_slider_banner.children().length-1;  //获取图片数量 减掉一个 默认第一张是位置是 0
        var img_index =0;   //图片位置
        var p_num = 0;  // 小圆点位置
        var points = $(".controller-index").children(); //小圆点数组
        var slider_timer = null;
        //轮播图定时器
        var isStart = true;
        function startSliderImg(){
            slider_timer = setInterval(function(){
                nextImage();
            },2000);
            isStart = true;
        }
        //停止轮播图定时器
        function stopSliderImg(){
            isStart = false;
            clearInterval(slider_timer);
        }
        startSliderImg();   //启动轮播
        //图片切换动画函数
        function animate(leftNum){
            if(leftNum == 0 ){
                jd_slider_banner.css({"marginLeft":-leftNum+"%"});
                //jd_slider_banner.style.left = --leftNum+"%";
            }else {
                jd_slider_banner.animate({
                    marginLeft: -leftNum +"%",
                }, 300);
            }
        }
        //切换下一张
        function nextImage(){
            if (img_index >= imgLength * 100){
                img_index = 0;
                p_num = 0;
            } else {
                img_index +=100;
                p_num ++;
            }
            //console.log(img_index);
            animate(img_index);
            points.eq(p_num).addClass("controller-active").siblings().removeClass("controller-active");
        }
        //切换上一张
        function prevImage(){
            if(img_index <= 0) {
                img_index = imgLength * 100;
                p_num = imgLength;
            } else {
                img_index -=100;
                p_num --;
            }
            animate(img_index);
            points.eq(p_num).addClass("controller-active").siblings().removeClass("controller-active");
        }


        //触摸事件
        var touchX;
        var touchEndX;
        jd_slider_banner.on("touchstart",function(e) {
            touchX = e.originalEvent.touches[0].clientX;
            //console.log(touchX);
        });

        jd_slider_banner.on("touchmove",function(e) {
            touchEndX = e.originalEvent.touches[0].clientX;
            //console.log(touchEndX);
        });

        jd_slider_banner.on("touchend",function(e) {
            var touch_away = Math.floor(touchEndX - touchX);
            //console.log("end====="+touchEndX);
            //console.log("======"+touch_away);
            if(touch_away > 18) {
                //console.log("向左---------->>>>>");
                prevImage();
            }else if(touch_away < -18){
                nextImage();
                //console.log("<-----------向右滑动");
            }
        });
        var ban_heigth = jd_slider_banner.children().height(); //获取banner图高度
        var top_search = $(".jd-hd-content");   //获取搜索框对象
        //设置滚动监听函数执行事件
        function scrollMonitor(){
            var scrollTop = $(document).scrollTop();
            console.log(scrollTop);
            if(scrollTop > 200){
                stopSliderImg();
            }else if(scrollTop < 200 && scrollTop != 0){
                if(!isStart){
                    startSliderImg();
                }
            }
            if(scrollTop > ban_heigth){
                top_search.css({"backgroundColor": "rgba(201,11,25,0.7)"});
            }else {
                var op = scrollTop/ban_heigth * 0.7;
                top_search.css({"backgroundColor": "rgba(201,11,25,"+ op+")"});
            }
        }
        //滚动监听
        $(window).on("scroll", scrollMonitor).trigger('scroll');

        //京东快报栏信息切换
        var $newsList = $(".news-rom > li");
        var num = 0;
        setInterval(function () {
            $newsList.eq(num).hide();
            //$newsList.eq(num).slideDown().siblings().slideUp();
            num ++;
            if(num === $newsList.length) {
                num = 0;
                $newsList.each(function () {
                    $(this).show();
                });
            }
        },2000);
    })();





});