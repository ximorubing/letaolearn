$(function(){
	var result=null;
	$.ajax({
		url:'/address/queryAddress',
		success:function(res){
			
			result=res;
			var html=template('tp_address',{result:res});
			
			$("#addressList").html(html);
		}
	})
	$("#addressList").on("tap",".edit-btn",function(){
		var id=$(this).attr("dataid");
		for(var i=0;i<result.length;i++){
			if(id==result[i].id){
				console.log(result[i]);
				localStorage.setItem('address',JSON.stringify(result[i]));
				return;
			}
		}
	})
	
	$("#addressList").on("tap",".delete-btn",function(){
		
		var id=$(this).attr('dataid');
		
		mui.confirm("确定删除吗?",function(e){
			
			if(e.index==1){
				$.ajax({
					url:'/address/deleteAddress',
					type:'Post',
					data:{
						id:id
					},
					success:function(res){
						if(res.success){
							mui.toast("地址删除成功");
							location.reload();
						}
						
					}
				})
				
			}else{
				location.reload();
			}
			
		});
	})
	
});