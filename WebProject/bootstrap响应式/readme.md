
### Bootstrap实现响应式
	1. 布局容器container
	2. 栅格系统
	3. 固定导航栏
	4. 媒体查询
	5. slider JS组件轮播图
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
  
  使用min-width作为条件判断是一定要从小到大
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
  
格式:
	eot ：embedded-opentype;
	svg ：svg
	ttf : truetype
	woff: woff

font-weight 去掉字体默认粗体
 font-style 去掉默认样式
</pre></code>