/**
 * author by zhengkai
 * Js-Type : index
 */
(function(){
    'use strict';   //开启严格模式
    //图片数组       
    var imgUrl = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        "img/6.jpg",
        "img/7.jpg"
    ];
    var $slider = $(".slider");
    var imgLen = imgUrl.length;
    // 根据图片动态创建轮播图片元素
    for(var i=0; i < imgLen; i++) {
       var imgChild = new ImageChild("pic"+i,imgUrl[i]);
       // console.log(imgChild.bindImgDOM());
        $(".images").append(imgChild.bindImgDOM());
        $(".points").append(imgChild.bindPointDOM());
    }
    //设置小圆点指示器默认指示位置
    var $points = $(".points");
    $points.children().eq(0).addClass("active");

    // 因为我们要做无缝滚动  ，所以要克隆第一张，放到最后一张后面去
    // a.appendchild(b)   把 b 放到 a 的最后面
    // 1. 克隆完毕
    var firstimg = $('.images li').first().clone(); //复制第一张图片
    $('.images').append(firstimg); //加入
  
    //mLeft 图片移动位置，p_index 小圆点位置,imgTimer轮播器
    var mLeft = -760,p_index=0,imgTimer;    
    $(".left").on('click',function(){
        // mLeft +=760; 
        // console.log(mLeft);
        p_index--;
        toggleImg();
    });
    $(".right").on('click',function(){
        p_index++;
        toggleImg();
    });

    //边界验证
    //切换图片 圆点指示器切换
    function toggleImg(){
        if(p_index == imgLen+1){
            p_index = 1;
            $(".images").css({marginLeft:0}); //保证无缝轮播，设置left值
        } else if(p_index == -1) {
            p_index = $('.images li').length-2;
            $('.images').css({marginLeft:-(p_index+1)*mLeft});
            // console.log(p_index);
        }
        // console.log(imgLen);
        $(".images").stop().animate({
            marginLeft: p_index * mLeft
        },450);
        //设置小圆点指示
        if(p_index == imgLen){
            $points.children().eq(0)
            .addClass("active").siblings().removeClass("active");
        }else{
        $points.children().eq(p_index)
            .addClass("active").siblings().removeClass("active");
        }    
    }
    
    //启动轮播定时器的函数
    function startSlider(){
        imgTimer = setInterval(function() {
            p_index++;
           toggleImg();
        },2500);
    }
    //停止轮播定时器的函数
    function stopSlider(){
        clearInterval(imgTimer);
    }
    startSlider();//启动轮播
    $slider.mouseenter(stopSlider);  //鼠标进入图片时停止滚动图片
    $slider.mouseleave(startSlider); //鼠标离开图片时继续滚动图片
})();

