/**
 * Created by zheng on 2017/4/24.
 * Js-Type : index
 * Last Modefiend time: 2017/4/30 21:22
 */
$(function () {

    /* 头部导航菜单滑动时固定在顶部的函数 */
    $('#myAffix').affix({
        offset: {
            top: 100,
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    });

    //设置轮播图在移动设备上滑动图片事件
    (function setTouchSlider(){
        var touchX;     //手指触摸时X
        var touchEndX;  //手指触摸结束时X坐标
        var $sliderRom = $(".carousel");
        $sliderRom.on("touchstart",function(e) {
            touchX = e.originalEvent.touches[0].clientX;
            console.log(touchX);
        });
        $sliderRom.on("touchmove",function(e) {
            touchEndX = e.originalEvent.touches[0].clientX;
            //console.log("end==="+ touchEndX);
        });
        $sliderRom.on("touchend",function(e) {
            var touch_away = Math.floor(touchEndX - touchX);
            console.log("end====="+touchEndX);
            console.log("======"+touch_away);
            if(touch_away > 16) {
                console.log("向---------->>>>>");
                $sliderRom.carousel('prev');
            }else if(touch_away < -16){
                console.log("<-----------向右滑动");
                $sliderRom.carousel('next');
            }
        });



    })();

    // 设置轮播图 在移动设备上浏览是显示相应的尺寸大小图片
    function setSliderImage() {
        var screenWidth = $(window).width();
        /* 获取屏幕宽度 */
        var isSamllScreen = screenWidth < 760;
        /* 判断是否最新屏幕尺寸 */
        //console.log("width===" + isSamllScreen);
        $("#main-slider > .carousel-inner > .item").each(function (index, item) {
            var $item = $(item);    //dom对象转换成jquery对象
            var imageSize = isSamllScreen ? $item.data('image-xs') : $item.data('image-lg');
            //console.log("imageSize===" + imageSize);
            $item.css("backgroundImage", "url('" + imageSize + "')");
            if (isSamllScreen) {
                $item.html('<img src="' + imageSize + '"  alt="" />');
            } else {
                $item.html("");
                /* 清空子元素使用html("") 存在内存泄漏 建议使用empty() */
            }
        });
        if (isSamllScreen) {
            /* 设产品列表标签横向滚动 */
            var width = 100;
            /* 遍历所有的标签元素获取宽度 */
            $(".ul-wrapper > .p-tabs-title > li").each(function (num, ele) {
                //var $elemeents = $(ele);      使用js更为高效
                //console.log(ele.clientWidth);
                width += ele.clientWidth;
                //console.log(width);
            });
            $(".p-tabs-title").css("width", width);
        } else {
            $(".p-tabs-title").css("width", "100%");
        }
    }

    $(window).on("resize", setSliderImage).trigger('resize');

    /* 设置产品列表菜单点击事件 */
    $("#myProductTabs").on('click', 'li', function (e) {
        e.preventDefault();     //阻止事件冒泡
        $(this).addClass("check-true").siblings().removeClass("check-true");
    });

    $('[data-toggle="tooltip"]').tooltip();

});





