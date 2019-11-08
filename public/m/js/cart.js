$(function(){
	var result=null;
	var changeSize=null;
	var num=null;
	var productNum=null;
	$.ajax({
		url:'/cart/queryCart',
		success:function(res){
			
			if(res.error==400){
				location.href='login.html';
			}
			result=res;
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
	$("body").on("tap","#changeSize span",function(){
		$(this).addClass("active").siblings().removeClass("active");
		changeSize=$(this).html();
	})
	$("body").on("tap",".decrease",function(){
		num=Number($("input[name='num']").val());
		num--;
		
		if(num<1){
			num=1;
		}
		$("input[name='num']").val(num);
		
	})
	$("body").on("tap",".increase",function(){
		num=Number($("input[name='num']").val());
		num++;
		if(num>productNum){
			num=productNum;
		}
		$("input[name='num']").val(num);
	})
	$("#cartList").on("tap",".edit-btn",function(){
		var id=$(this).attr("dataId");
		var data=null;
		for(var i=0;i<result.length;i++){
			if(id==result[i].id){
				data=result[i];
				changeSize=data.size;
				num=data.num;
				productNum=data.productNum;
			}
		}
		
		var html=template("editTp1",data);
		
		mui.confirm(html,'编辑商品',['确定','取消'],function (e) {
			
			if(e.index==0){
				
				$.ajax({
					url:'/cart/updateCart',
					type:'post',
					data:{
						id:id,
						size:changeSize,
						num:num
						},
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