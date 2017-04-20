/**
 * Created by zheng on 2017/4/18.
 */
$(function(){

    //默认是 小图模式
    $(".navtitle li:first-child").addClass("li_active");
    $(".navtitle li").hover(function(){
        $(this).addClass("li_active");
    },function(){
        if(index_title != $(this).index()){
            $(this).removeClass("li_active");
        }
    });


    var index_title = 0;
    //绑定li 图片选择查看器事件点击事件
    $(".navtitle").on('click',' ul li', function(){
        index_title = $(this).index();
        //alert($(this).index());
        //点击移除其他按钮状态 切换当前按钮选中状态
        $(".navtitle li").removeClass("li_active");
        $(this).addClass("li_active");

        //切换图片模式  实际上就是改变图片的宽高
        if(index_title == 0){
            $(".imglist img").stop().animate({
                "width": "225px","height": "135px",
            },600);
        }else if(index_title == 1){
            $(".imglist img").stop().animate({
                "width": "480px","height": "260px",
            },600);
            console.log("中宏图模式");
        }else if(index_title == 2){
            $(".imglist img").stop().animate({
                "width": "960","height": "620px",
            },600);
            console.log("大图模式");
        }

    });


    //把图片写入imglist 图片列表容器中
    var imgArr = "";
    for(var i = 1; i < 26; i++){
        imgArr += '<img class="scrollLoading" data-url="images/'+ i +'.jpg" src="images/'+ i +'.jpg" />';
    }
    $(".imglist").append(imgArr);  //添加图片到列表容器中

    $(".imglist img").load(function () {
        //图片默认隐藏
        $(this).hide();
        //使用fadeIn特效
        $(this).stop().fadeIn("5000");
    });
    // 异步加载图片，实现逐屏加载图片
    $(".scrollLoading").scrollLoading();

});

