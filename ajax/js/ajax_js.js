
/*
type请求类型
url请求地址
data请求内容key=value格式
sucess回调函数
*/

function ajax(option){
	var xhr = new XMLHttpRequest();
	if (option.type == 'get' && option.data) {
		option.url += '?' + option.data;
		option.data = null;
	}
	xhr.open(option.type,option.url);
	if(option.type == 'post' && option.data){
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
	}
	xhr.onload = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			

			
			//option.success(xhr.responseText);
			//获取服务器发来的文件格式
			var contype = xhr.getResponseHeader('Content-Type');
			if (contype.indexOf('json')!=-1) {
				option.success(JSON.parse(xhr.responseText));
			}
			else if (contype.indexOf('xml')!=-1) {
				option.success(xhr.responseXML);
			}
			else{
				option.success(xhr.responseText);
			}
		}
	}
	xhr.send(option.data);
}