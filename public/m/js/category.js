$(function(){
	mui('.mui-scroll-wrapper').scroll({
		
		 scrollY: true,
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	
	$.ajax({
		url:'/category/queryTopCategory',
		type:'GET',
		success:function(data){
			
			var html=template('tp1',data);
			$("#firstcate").html(html);
			if(data.rows.length>0){
				$("#firstcate").find("a").eq(0).addClass("active");
				var id=$("#firstcate").find("a").eq(0).attr("cateId");
				getSecondCate(id);
			}
			
		}
		
	})
	
	$("#firstcate").on("tap","a",function(){
		var id=$(this).attr("cateId");
		$(this).addClass("active").siblings().removeClass("active");
		getSecondCate(id);
	})
	
	var getSecondCate=function(id){
		$.ajax({
				url:'/category/querySecondCategory',
				type:'GET',
				data:{id:id},
				success:function(data){
					
					var html=template('tp2',data);
					
					$(".brand-list").html(html);
				}
		})
	}
});