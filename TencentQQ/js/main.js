var timeBox=document.getElementsByClassName("timeBox")[0];
var newDate=new Date();
var year=newDate.getFullYear();
var mon=newDate.getMonth()+1;
var day=newDate.getDate();
var hour=newDate.getHours();
var min=newDate.getMinutes();
timeBox.innerHTML=hour+":"+min+'</br>'+year+'-'+mon+'-'+day;
var timer=setInterval(function(){
	newDate=new Date();
	year=newDate.getFullYear();
	mon=newDate.getMonth()+1;
	day=newDate.getDate();
	hour=newDate.getHours();
	min=newDate.getMinutes();
	timeBox.innerHTML=hour+":"+min+'</br>'+year+'-'+mon+'-'+day;
},1000)
var qq=document.getElementsByClassName("qq")[0];
var qqmb=document.getElementById("qq");
var qqtop=document.getElementsByClassName("top")[0];
qq.ondblclick=function(){
	qqmb.style.display="block";
}
function tuozhuai(obj,obj1){
	obj1.onmousedown=function(e){
		var ev=window.event||e;
		var _left=obj.offsetLeft;
		var _top=obj.offsetTop;
		document.onmousemove=function(e1){
			event.preventDefault();
			var ev1=window.event||e1;
			obj.style.left=ev1.clientX-ev.clientX+_left+"px";
			obj.style.top=ev1.clientY-ev.clientY+_top+"px";
			var cliw=document.documentElement.clientWidth||window.innerWidth;
			var clih=document.documentElement.clientHeight||window.innerHeight;
//			if(obj.offsetLeft>=cliw-obj.offsetWidth-5){
//				obj.style.left=cliw-obj.offsetWidth-5+"px";
//			}else if(obj.offsetLeft<=0){
//				obj.style.left="0px";
//			}
//			if(obj.offsetTop>=clih-obj.offsetHeight-5){
//				obj.style.top=clih-obj.offsetHeight-5+"px";
//			}else if(obj.offsetTop<=20){
//				obj.style.top="20px";
//			}
		}
	}
	obj1.onmouseup=function(){
		document.onmousemove=null;
	}
}
tuozhuai(qqmb,qqtop);
var close=document.getElementsByClassName("close")[0];
var toSmall=document.getElementsByClassName("toSmall")[0];
close.onclick=function(){
	event.preventDefault();
	qqmb.style.display="none";
}
toSmall.onclick=function(){
	event.preventDefault();
	qqmb.style.display="none";
}
function (){
	var  timae= document.getElementById("box");
var timer = setInterval(function(){
var nijjhu =document.getEle
function
})
