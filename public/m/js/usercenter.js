var userInfo=null;
$.ajax({
		url:'/user/queryUserMessage',
		async:false,
		type:'GET',
		success:function(data){
			userInfo=data;
			if(data.error&&data.error==400){
				location.href="./login.html";
			}
			
		}
	})
$(function(){
	$(".logout").on("tap",function(){
		$.ajax({
			url:'/user/logout',
			type:'GET',
			success:function(data){
				
				if(data.success){
					
					setTimeout(function() {
						location.href="index.html";
					}, 2000);
				}
			}
				
			
		});
	})
	
	var html=template("userTp1",userInfo);
	$(".info").html(html);
	
	$(".resetPd").on("tap",function(){
		location.href="resetPd.html";
		
	})
	
});