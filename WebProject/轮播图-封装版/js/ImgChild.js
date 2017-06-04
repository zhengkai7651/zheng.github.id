 //图片列表信息对象
    function ImageChild(desc,imageUrl) {
        this.desc = desc
        this.imageUrl = imageUrl
    }
    ImageChild.prototype = {
        //生成image 子元素
        bindImgDOM:function() {
            var imageChild = "";
            imageChild +="<li><a href='#'>"
            imageChild +="<img src="+this.imageUrl+" alt="+ this.desc+"/>"
            imageChild +="</a></li>"
            return imageChild;
        },
        //生成小圆点指示器
        bindPointDOM:function() {
            var imageChild = "";
            imageChild +="<li>"
            imageChild +="</li>"
            return imageChild;
        }
    }