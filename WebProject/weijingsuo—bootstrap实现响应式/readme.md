## 示例图
![pc](https://github.com/zhengkai7651/zheng.github.id/blob/master/WebProject/weijingsuo%E2%80%94bootstrap%E5%AE%9E%E7%8E%B0%E5%93%8D%E5%BA%94%E5%BC%8F/sample_pc.jpg)
![pc2](https://github.com/zhengkai7651/zheng.github.id/blob/master/WebProject/weijingsuo%E2%80%94bootstrap%E5%AE%9E%E7%8E%B0%E5%93%8D%E5%BA%94%E5%BC%8F/sample_pc2.jpg)
[Moblie](https://github.com/zhengkai7651/zheng.github.id/blob/master/WebProject/weijingsuo%E2%80%94bootstrap%E5%AE%9E%E7%8E%B0%E5%93%8D%E5%BA%94%E5%BC%8F/sample_moblie.jpg)
### Bootstrap实现响应式
	1. 布局容器container
	2. 栅格系统
	 col-xs-2
	 col-ms-3
	 col-md-4
	 col-lg-6
	3. nav-bar 导航条
	4. 媒体查询
	5. collapse JS组件轮播图
	6. tooltips 工具提示
	7. dialog 提示框
	
#### 总结
  1.bootstrap 的 为a标签添加了	outline
清除 bootstrap 设置 a标签 点击后离开产生的边框

	outline: none;
	_moz-outline: none;
搭配框架

   [html5shiv](https://github.com/aFarkas/html5shiv/)

	让低版本的浏览器可以识别HTML5的新标签,如header,footer,section等
	
[respond](https://github.com/scottjehl/Respond/)

	是一个快速、轻量的 polyfill，用于为IE6-8 以及其它不支持 CSS3 Media Queries 的浏览器提供媒体查询的 min-width 和 max-width 特性，
	实现响应式网页设计（Responsive Web Design）。

  2. 媒体查询
  
  使用min-width作为条件判断是一定要从小到达，其C原因是CSS从上往下执行
条件链接 and ();
<pre><code>
  @media (max-width: 767px) {
	.hidden-xs {
	    display: none !important;
	}
  }
  @media (min-width: 992px) and (max-width: 1199px) {
	.hidden-md {
	   display: none !important;
	}
  }
</pre></code>

  3.条件注释
  
  4.字体图标
  <pre><code>	
  @font-face {
    font-family: 'zheng';
    src: url('../fonts/MiFie-Web-Font.eot') format('embedded-opentype'),
    url('../fonts/MiFie-Web-Font.svg') format('svg'),
    url('../fonts/MiFie-Web-Font.ttf') format('truetype'),
    url('../fonts/MiFie-Web-Font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
font-family 命名字体名称 例如: 'abc'
src 字体文件
格式:
	eot ：embedded-opentype;
	svg ：svg
	ttf : truetype
	woff: woff

font-weight 去掉字体默认粗体
 font-style 去掉默认样式
</pre></code>