
$(function(){
	var picker = new mui.PopPicker({
		layer: 3
	});
		picker.setData(cityData);
		$("#showCity").on("tap",function(){
			var that=this;
			picker.show(function(items){
				
				var city1=items[0].text;
				var city2=items[1].text;
				var city3=items[2].text;
				var val=city1+city2+city3;
				that.value=val;
				
			})
			
			
		})
		var edit=getParamsByUrl(location.href,"edit");
		if(Number(edit)){
			if(localStorage.getItem('address')){
				var res=JSON.parse(localStorage.getItem('address'));
				$("input[name='recipients']").val(res.recipients);
				$("input[name='postCode']").val(res.postCode);
				$("input[name='address']").val(res.address);
				$("input[name='addressDetail']").val(res.addressDetail);
				var id=res.id;
				$("#sureBtn").on("tap",function(){
				var username=$.trim($("input[name='recipients']").val());
				var postCode=$.trim($("input[name='postCode']").val());
				var address=$.trim($("input[name='address']").val());
				var detail=$.trim($("input[name='addressDetail']").val());
				
				if(!username){
					mui.toast("收货人不能为空");
					return;
				}
				if(!postCode){
					mui.toast("邮编不能为空");
					return;
				}
				if(!address){
					mui.toast("省市区不能为空");
					return;
				}
				if(!detail){
					mui.toast("详细地址不能为空");
					return;
				}
				
				$.ajax({
					url:'/address/updateAddress',
					type:'post',
					data:{
						id:id,
						address:address,
						addressDetail:detail,
						recipients:username,
						postcode:postCode
					},
					success:function(res){
						if(res.success){
							mui.toast("修改地址成功");
							
							setTimeout(function() {
								location.href="address.html";
							}, 2000);
						}
					}
					})
			})}
		}else{
			$("#sureBtn").on("tap",function(){
				var username=$.trim($("input[name='recipients']").val());
				var postCode=$.trim($("input[name='postCode']").val());
				var address=$.trim($("input[name='address']").val());
				var detail=$.trim($("input[name='addressDetail']").val());
				
				if(!username){
					mui.toast("收货人不能为空");
					return;
				}
				if(!postCode){
					mui.toast("邮编不能为空");
					return;
				}
				if(!address){
					mui.toast("省市区不能为空");
					return;
				}
				if(!detail){
					mui.toast("详细地址不能为空");
					return;
				}
				
				$.ajax({
					url:'/address/addAddress',
					type:'POST',
					data:{
						address:address,
						addressDetail:detail,
						recipients:username,
						postcode:postCode
					},
					success:function(res){
						if(res.success){
							mui.toast("新增地址成功");
							setTimeout(function() {
								location.href="address.html";
							}, 2000);
						}
					}
					
				});
					
			})
			
			
		}
		
	
});