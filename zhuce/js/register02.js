$(function(){
	var name = false, pwd=false, cpwd=false, email=false, checkboxs=false;



	var $username = $('#user_name');
	$username.blur(function(){
		check_username();
	});
	$username.click(function(){
		$(this).next().hide();
	});


	var $pwd = $('#pwd');
	$pwd.blur(function(){
		check_pwd();
	});
	$pwd.click(function(){
		$(this).next().hide();
	});


	var $cpwd = $('#cpwd')
	$cpwd.blur(function(){
		check_cpwd();
	});
	$cpwd.click(function(){
		$(this).next().hide();
	});


	var $emai = $('#email')
	$emai.blur(function(){
		check_email();
	});
	$emai.click(function(){
		$(this).next().hide();
	});



    var $checkbox = $('#allow')
	$checkbox.click(function(){
		//判断复选框是否被选中
        checkboxs = $('#allow').prop('checked');
        console.log(checkboxs)
	});


	var $subm = $('#subm')
	function submit(name,pwd,cpwd,email,checkboxs){
		if (name==true&&pwd==true&&cpwd==true&&email==true&&checkboxs==true) {
			$('#subm').removeAttr("disabled")
		}

	}
	submit(name,pwd,cpwd,email,checkboxs);
	$subm.click(function(){
		alert('dianle ')
		alert(name)
		alert(pwd)
		alert(cpwd)
		alert(email)
		alert(checkboxs)
		return false

	})
	//<input type="submit" value="注 册" name="">



    //账号输入
	function check_username(){

		var val =$username.val();
		var re = /^\w{6,20}$/;
		if (val=='') 
		{
			$username.next().html('用户名不能为空');
			$username.next().show();
			name=false
			return;

		}
		else if (re.test(val)) 
		{
			$username.next().hide();
			name=true
			/*$.ajax({
				url:'php.php',
				data:{name:val},
				success:function(data){
					name=true
					alert(data)
				},
				error:function(a,b,c){
					alert('错误')
					alert(a)
					alert(b)
					alert(c)
				},
				complete:function(){
					alert('请求完成')
				}
			})*/
		}
		else
		{
			$username.next().html('用户名是6到20位的数字或者字母、下划线');
			$username.next().show();
		}

	}




    //密码输入
	function check_pwd(){
		/*<label>密码:</label>
		<input type="password" name="pwd" id="pwd">
		<span class="error_tip">提示信息</span>*/
		var pwdtext =$pwd.val();
		var re = /^[\w@!#$%&^*]{6,15}$/;
		if (pwdtext=='') 
		{
			$pwd.next().html('密码不能为空');
			$pwd.next().show();
			pwd=false
			return;

		}
		else if (re.test(pwdtext)) 
		{
			$pwd.next().hide();
			pwd=true
			/*$.ajax({
				url:'php.php',
				data:{name:pwdtext},
				success:function(data){
					pwd=true
					alert(data)
				},
				error:function(a,b,c){
					alert('错误')
					alert(a)
					alert(b)
					alert(c)
				},
				complete:function(){
					alert('请求完成')
				}
			})*/
		}
		else
		{
			$pwd.next().html('密码必须是6到15位除了*的数字');
			$pwd.next().show();
			
		}


	}


	//确认密码输入
	function check_cpwd(){
		// <input type="password" name="cpwd" id="cpwd">
		// <span class="error_tip">提示信息</span>
		var cpwdtext = $cpwd.val();
		var pwdtext2 =$pwd.val();
		if (!(cpwdtext==pwdtext2)) {
			$cpwd.next().html('两次输入密码不一样');
			$cpwd.next().show();
			cpwd=false

		}
		else{
			cpwd=true
		}


	}


	//邮箱输入
	function check_email(){
		/*<input type="text" name="email" id="email">
		<span class="error_tip">提示信息</span>*/
		var emailtext = $emai.val();
		var re = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/;
		if (emailtext=='') {
			$emai.next().html('邮箱不能为空')
			$emai.next().show()
			email=false
		}
		else if(re.test(emailtext)){
			email=true

		}
		else{
			$emai.next().html('邮箱输入有误');
			$emai.next().show();
			email=false

		}

	}


})