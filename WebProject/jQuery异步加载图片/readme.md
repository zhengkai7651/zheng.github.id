### 示例图	
[sample-Image](https://github.com/zhengkai7651/zheng.github.id/blob/master/WebProject/jQuery%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87/sample.jpg)
###  Jquery 实现图片查看器
    1.使用面向对象的封装数据
    2.使用Jquery实现图片大小切换
    3.使用Jquery.asyncLoading.js实现图片异步加载
 
#### 面向对象
  1. 分析实现功能业务
  2. 提取模块属性
  	1. title 标题
  	2. detail 详细信息
  	3. imageURL 图片地址
  3.封装通用函数

  	ALi.prototype = {
  	//生成对应区域模块元素
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
    //绑定DOM对象
    bindDOM:function() {}
