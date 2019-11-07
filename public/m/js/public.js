$(function(){
	$("body").on("tap","a",function(){
		mui.openWindow({
			url:$(this).attr('href')
			})
	})
})

var getParamsByUrl=function(url,keyword){
	var parms=url.indexOf("?");
	var Arr=(url.substr(parms+1)).split('&');
	for(var i=0;i<Arr.length;i++){
		var name=Arr[i].split("=");
		
		if(name[0]==keyword){
			return name[1];
		}else{
			return null;
		}
	}
	
}