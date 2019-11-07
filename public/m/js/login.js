$(function(){
	$(".login-btn").on("tap",function(){
		var username=$.trim($("input[name='username']").val());
		var password=$.trim($("input[name='password']").val());
		if(!username){
			mui.toast("用户名不能为空");
			return;
		}
		if(!password){
			mui.toast("密码不能为空");
			return;
		}
		$.ajax({
			url:'/user/login',
			type:'POST',
			data:{
				username:username,
				password:password
			},
			beforeSend:function(){
				$(".login-btn").html("正在登录......")
			},
			success:function(data){
				if(data.success){
					$(".login-btn").html("登录")
					mui.toast("登录成功");
					setTimeout(function() {
						location.href="usercenter.html";
					}, 2000);
				}
				
			}
		});
	})
});