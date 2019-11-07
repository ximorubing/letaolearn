$(function(){
	var id=getParamsByUrl(location.href,'id');
	var productNum;
	var num=null;
	var size=null;
	$.ajax({
		url:'/product/queryProductDetail',
		data:{
			id:id
			
		},
		success:function(res){
			productNum=res.num;
			var html=template("productTp1",res);
			$("#productBox").prepend(html);
			var gallery = mui('.mui-slider');
			gallery.slider({
			  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
			});
		}
		
	});
	
	$("#productBox").on("tap",".selectSize span",function(){
		
		$(this).addClass("active").siblings().removeClass("active");
		size=$(this).html();
		
	})
	$("#productBox").on("tap",".decrease",function(){
		num=Number($("input[name='num']").val());
		num--;
		
		if(num<0){
			num=0;
		}
		$("input[name='num']").val(num);
		
	})
	$("#productBox").on("tap",".increase",function(){
		num=Number($("input[name='num']").val());
		num++;
		if(num>productNum){
			num=productNum;
		}
		$("input[name='num']").val(num);
	})
	
	$("#add-cart").on("tap",function(){
		
		if(!size){
			mui.toast("请选择尺码");
			return;
		}
		if(!num||num==0){
			mui.toast("请选择数量");
			return;
		}
		$.ajax({
			url:'/cart/addCart',
			type:'post',
			data:{
				productId:id,
				num:num,
				size:size
			},
			success:function(data){
				console.log(data);
				if(data.error==400){
					location.href="login.html";
				}
				if(data.success){
					mui.confirm("查看购物车吗?",function(e){
						if(e.index==1){
							location.href="cart.html";
						}else{
							location.reload();
						}
				});
			}
			
		}
	})
	})
	
});