/**
 * Created by zheng on 2017/4/18.
 */
//图片列表信息对象
function ALi() {
    this.title = ""
    this.detail = ""
    this.imageUrl = ''
}
function ALi(title,detail,imageUrl) {
    this.title = title
    this.detail = detail
    this.imageUrl = imageUrl
}

ALi.prototype = {
    bindDOM:function() {
        var imageChild = "";
            imageChild +="<li>"
                imageChild +="<img src="+this.imageUrl+" alt=''/>"
                imageChild +="<p>"+ this.title +"</p>"
                imageChild +="<p>"+ this.detail +"</p>"
            imageChild +="</li>"
        return imageChild;
    }

}