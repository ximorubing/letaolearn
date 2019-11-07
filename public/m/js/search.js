$(function(){
	
	
	$("#searchBtn").on("tap",function(){
		var keyWord=$("#inputBtn").val();
		if(keyWord.length>0){
			location.href="search_result.html?keyWord="+keyWord;
			
			keyList.push(keyWord);
			localStorage.setItem('key',JSON.stringify(keyList));
			
		}else{
			alert("请输入要搜索的内容");
		}
	})
	
	var keyList=[];
	if(localStorage.getItem('key')){
		keyList=JSON.parse(localStorage.getItem('key'));
		var html=template('historytp1',{result:keyList});
		$("#history").html(html);
	}
	$("#emptyBtn").on("tap",function(){
	
		localStorage.removeItem('key');
		location.reload();
	})
});