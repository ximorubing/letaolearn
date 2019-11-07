$(function(){
	var code;
	$(".regsiter-btn").on("tap",function(){
		var username=$.trim($("input[name='username']").val());
		var password=$.trim($("input[name='password']").val());
		var rePassword=$.trim($("input[name='rePassword']").val());
		var mobile=$.trim($("input[name='mobile']").val());
		var vCode=$.trim($("input[name='vCode']").val());
		if(!username){
			mui.toast("请输入用户名");
			return;
		}
		if(!password){
			mui.toast("请输入密码");
			return;
		}
		if(rePassword!=password){
			mui.toast("两次输入的密码不一致");
			return;
		}
		if(mobile.length<11){
			mui.toast("手机号格式不正确");
			return;
		}
		if(!vCode){
			mui.toast("验证码不能为空")
			return;
		}
		if(vCode!=code){
			mui.toast("请输入正确的验证码")
			return;
		}
		$.ajax({
			url:'/user/register',
			type:'POST',
			data:{
				username:username,
				password:password,
				mobile:mobile,
				vCode:vCode
			},
			beforeSend:function(){
				$(".regsiter-btn").html("注册中")
			},
			success:function(res){
				console.log(res.success);
				if(res.success){
					$(".regsiter-btn").html("注册");
					mui.toast("注册成功");
					setTimeout(function(){
						location.href="login.html";
						
					},2000);
				}
			}
		})
	})
	
	$(".getCode").on("tap",function(){
		$.ajax({
			url:' /user/vCode',
			type:'GET',
			success:function(res){
				console.log(res.vCode);
				code=res.vCode;
			}
			
			
		});
	})
	
})