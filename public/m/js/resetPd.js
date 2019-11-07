
$(function(){
	var code;
	$("#edit").on("tap",function(){
		var originPassword=$.trim($("input[name='originPassword']").val());
		var newPassword=$.trim($("input[name='newPassword'").val());
		var rePassword=$.trim($("input[name='rePassword']").val());
		var vCode=$.trim($("input[name='vCode']").val());
		if(!originPassword){
			mui.toast("原密码不能为空");
			return;
		}
		if(!newPassword){
			mui.toast("新密码不能为空");
			return;
		}
		if(newPassword!=rePassword){
			mui.toast("两次密码不一致");
			return;
		}
		if(!vCode){
			mui.toast("验证码不能为空")
			return;
		}
		if(vCode!=code){
			console.log(code);
			mui.toast("请输入正确的验证码")
			return;
		}
		$.ajax({
			url:'/user/updatePassword',
			type:'POST',
			data:{
				oldPassword:originPassword,
				newPassword:newPassword
			},
			success:function(response){
				console.log([vCode,code]);

				console.log(response);
				if(response.success){
					mui.toast("密码修改成功");
					setTimeout(function() {
						location.href="login.html";
					}, 2000);
				}
			}
		})
	});
	
	$(".getCode").on("tap",function(){
		$.ajax({
			url:'/user/vCodeForUpdatePassword',
			type:'GET',
			success:function(res){
				console.log(res.vCode);
				code=res.vCode;
			}
			
			
		});
	});
	
	
});