$(function(){
	$.ajax({
		url:'/cart/queryCart',
		success:function(res){
			
			var html=template("cartTp1",{result:res});
			
			$("#cartList").html(html);
			
		}
	})
	
	$("#cartList").on("tap",".delete-btn",function(){
		var that=$(this);
		mui.confirm('是否删除','提示',['确定','取消'],function (e) {
			
			if(e.index==0){
				var id=that.attr("dataId");
				$.ajax({
					url:'/cart/deleteCart',
					data:{
						id:id},
					success:function(res){
						if(res.success){
							location.href="cart.html";
						}
						
					}
						
				})
			}else{
				location.reload();
			}
		})
	})
	$("#cartList").on("tap",".edit-btn",function(){
		var that=$(this);
		mui.confirm('是否删除','提示',['确定','取消'],function (e) {
			
			if(e.index==0){
				var id=that.attr("dataId");
				$.ajax({
					url:'/cart/deleteCart',
					data:{
						id:id},
					success:function(res){
						if(res.success){
							location.href="cart.html";
						}
						
					}
						
				})
			}else{
				location.reload();
			}
		})
	})
});