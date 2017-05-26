/**
 * Created by zheng on 2017/4/20.
 */
function ajaxHttp(request_url){
	//request_url = {data:"",datatype:"xml/json",type:get/post,url:"",asyn:true/false,sucess:function(data){},failure:function(){}};

	//第一步，创建xhr对象
	var xhr = null;
	var dataJson;
	try{
		if(window.XMLHttpRequest){	//标准浏览器 标准的是有XMLHttpRequest内置对象的
			xhr = new XMLHttpRequest();
		}else{	//早期的IE浏览器  不存在这个对象
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}catch(e) {
		e.createExpression("XMLHttpRequest不支持.");
		return false;
	}
	var req_type = request_url.type == 'get'?'get':'post';
	//var url = 'php/text.json';
	//第二步，准备发送请求，配置请求的参数设置

	var flag = request_url.asyn == 'true'?'false':'true';
	xhr.open(req_type,request_url.url,flag);
	//第四步, 指定回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				dataJson = JSON.parse(xhr.responseText);	//json
				console.log(dataJson);
				request_url.success(dataJson);
			}else{
				request_url.failture();
			}

		}
	}
	//第三步，指定发送动作
	xhr.send(null);
}

