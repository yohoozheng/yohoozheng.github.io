window.onload=function(){
var dragonLight=document.getElementsByClassName("dragonLight")[0];
var dragonLightLeft=0;
function dragonLightMove(){
	setInterval(function(){
		dragonLightLeft+=351;
		dragonLight.style.backgroundPosition=-dragonLightLeft+"px 0";
		if(dragonLightLeft>=28080){
			dragonLightLeft=0;
		}
	},50)
}
dragonLightMove();
var layer=document.getElementsByClassName("layer");
var cW=document.documentElement.clientWidth||document.body.clientWidth;
var cH=document.documentElement.clientHeight||document.body.clientHeight;
function dragonMove(){
	document.onmousemove=function(e){
		var ev=window.event||e;
		var cX=ev.clientX;
		var cY=ev.clientY;
		var sX=cW/cX;
		if(cX>0&&cX<cW){
			if(cX<=cW/2){
				layer[0].style.transform="translate3d(4.5%,0px,0px)";
				layer[1].style.transform="translate3d(4.5%,0px,0px)";
				layer[2].style.transform="translate3d(4%,0px,0px)";
				if(cY>0&&cY<cH){
					if(cY<=cH/2){
						layer[2].style.transform="translate3d(4%,2780%,0px)";
					}else{
						layer[2].style.transform="translate3d(4%,-2780%,0px)";
					}
				}
			}else{
				layer[0].style.transform="translate3d(-4.5%,0px,0px)";
				layer[1].style.transform="translate3d(-4.5%,0px,0px)";
				layer[2].style.transform="translate3d(-4.5%,0px,0px)";
				if(cY>0&&cY<cH){
					if(cY<=cH/2){
						layer[2].style.transform="translate3d(-4%,2780%,0px)";
					}else{
						layer[2].style.transform="translate3d(-4%,-2780%,0px)";
					}
				}
			}
		}
		

	}
}
dragonMove();


var firstAdvt=document.getElementsByClassName("firstAdvt")[0];
var timer=setInterval(function(){
	firstAdvt.style.height="0px";
	clearInterval(timer);
},9000)

var dayType=document.getElementsByClassName("dayType")[0];
var dayCheck=dayType.getElementsByTagName("a");
var matchList=document.getElementsByClassName("matchList");
for(var i=0;i<dayCheck.length;i++){
	dayCheck[i].index=i;
	dayCheck[i].onclick=function(){
		for(var j=0;j<dayCheck.length;j++){
			dayCheck[j].className="";
			matchList[j].style.display="none";
		}
		dayCheck[this.index].className="on";
		matchList[this.index].style.display="block";
	}
}
var off=document.getElementsByClassName("off");
for(var i=0;i<off.length;i++){
	off[i].onclick=function(){
		alert("敬请期待！");
	}
}
var scoreFilter=document.getElementsByClassName("scoreFilter")[0];
var aa=scoreFilter.getElementsByTagName("a");
var scoreList=document.getElementsByClassName("scoreList");
for(var i=0;i<aa.length;i++){
	var div=document.createElement("div");
	aa[i].index=i;
	aa[i].onclick=function(){
		for(var j=0;j<scoreList.length;j++){
			aa[j].className="";
			scoreList[j].style.display="none";
		}
		aa[this.index].className="selected";
		scoreList[this.index].style.display="block";
	}
}
var titleUl=document.getElementsByClassName("titleUl")[0];
var titleUlLi=titleUl.getElementsByTagName("li");
var tableCUl=document.getElementsByClassName("tableCUl");
for(var i=0;i<titleUlLi.length;i++){
	titleUlLi[i].index=i;
	titleUlLi[i].onclick=function(){
		for(var j=0;j<tableCUl.length;j++){
			titleUlLi[j].className="";
			tableCUl[j].style.display="none";
		}
		titleUlLi[this.index].className="selected";
		tableCUl[this.index].style.display="block";
	};
}


}
