var backTime=null;
$(window).scroll(function(){
	var sTop=document.documentElement.scrollTop||document.body.scrollTop;
  	if(sTop>=350){
		$("#backTop").css({"display":"block"});
		$("#backTopi").css({"display":"block"});
		
	}else{
		$("#backTop").css({"display":"none"});
		$("#backTopi").css({"display":"none"});
	}
});
document.onmousewheel=function(){
	clearInterval(backTime);
}
$("#backTop").click(function(){
	var sTop=document.documentElement.scrollTop||document.body.scrollTop;
	function backT(){
		backTime=setInterval(function(){
			sTop-=30;
			document.documentElement.scrollTop=sTop;
			document.body.scrollTop=sTop;
			if(sTop<=0){
				clearInterval(backTime);
			}
		},1)
	}
	backT();
})
$(".com").on("click",function(){
	$(".ewm").eq($(this).index()).toggleClass("ewm1");
})


