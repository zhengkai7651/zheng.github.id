/**
 * Created by zheng on 2017/4/9.
 */
$(document).ready(function(){
    $("#left").click(last);
    $("#right").click(next);
    var s_index = 0,timerImg;   //s_index 图片的下标值，timerImg 轮播定时器
    //下一张
    function next(){
        s_index ++;
        if(s_index > 5){
            s_index =0;
        }
        //console.log(s_index);
        showImage(s_index);
        setPoint(s_index);
    }
    //上一张
    function last(){
        s_index --;
        if(s_index < 0) {
            s_index = 5;
        }
        //console.log(s_index);
        showImage(s_index);
        setPoint(s_index);
    }
    //通过 num 索引值 显示图片，先隐藏所有图片，再根据索引值 num 的图片
    function showImage(num) {
        $("img").fadeOut(300);  //使用渐变动画隐藏图片
        $(".imgrom img").eq(num).fadeIn(600); //使用渐变动画显示图片
        //console.log($(".imgrom img").get(num));
    }
    //改变小圆点的状态
    function setPoint(p){
        $("#points li").removeClass("p_active");
        $("#points li").eq(p).addClass("p_active");
    }

    //小圆点鼠标悬浮事件
    $("#points li").mouseenter(function(){
        $(this).addClass("p_active").siblings().removeClass("p_active");
        //console.log($(this).index());
        showImage($(this).index());
    });
    //启动轮播定时器的函数
    function startSlider(){
        timerImg = setInterval(function(){
            next();
        },2000);
    }
    //停止轮播定时器的函数
    function stopSlider(){
        clearInterval(timerImg);
    }
    $("#sliderbox").mouseenter(stopSlider);  //鼠标进入图片时停止滚动图片
    $("#sliderbox").mouseleave(startSlider); //鼠标离开图片时继续滚动图片

    startSlider();



});