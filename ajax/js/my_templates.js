function my_template(id,data){
	//假数据
	/*var data = {
		name:'小东',
		age:18,
		mate:'男'
	}*/
	//获取模板
	var str = document.querySelector('#'+id).innerHTML;
	var re = /{{(\w+)}}/;
	var result = re.exec(str);
	while(result){
		str = str.replace(result[0],data[result[1]]);
		//重新检索重置result
		result = re.exec(str);
	}
	return str;
}