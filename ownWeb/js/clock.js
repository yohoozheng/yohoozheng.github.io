var box=document.getElementById("box");
var numberBox=document.getElementsByClassName("numberBox");
var top=document.getElementsByClassName("top")[0];
var bottom=document.getElementsByClassName("bottom")[0];
var timer=null;
var n=0;
var zIndex=99;
var hourArr=[];
var minArr=[];
var secArr=[];
var now =new Date();  
        var sec=now.getSeconds();  
        var min=now.getMinutes();  
        var hour=now.getHours();
			console.log(hour,min,sec);
			
			if(hour<10){
				var str2=0;
				str2+=hour.toString();
				var newArr=str2.split("");
}else{
	var str2=hour.toString();
	var newArr=str2.split("");
}
if(hourArr[0]!=newArr[0]){
	hourArr[0]=newArr[0];
	creatDiv(numberBox[0],hourArr[0],36000000);
}
if(hourArr[1]!=newArr[1]){
	hourArr[1]=newArr[1];
	creatDiv(numberBox[1],hourArr[1],3600000);
}



if(min<10){
	var str1=0;
	str1+=min.toString();
	var newArr=str1.split("");
}else{
	var str1=min.toString();
	var newArr=str1.split("");
}
if(minArr[0]!=newArr[0]){
	minArr[0]=newArr[0];
	creatDiv(numberBox[2],minArr[0],600000);
}
if(minArr[1]!=newArr[1]){
	minArr[1]=newArr[1];
	creatDiv(numberBox[3],minArr[1],60000);
}




if(sec<10){
	var str=0;
	str+=sec.toString();
	var newArr=str.split("");
}else{
	var str=sec.toString();
	var newArr=str.split("");
			}
			if(secArr[0]!=newArr[0]){
				secArr[0]=newArr[0];
				creatDiv(numberBox[4],secArr[0],10000);
			}
			if(secArr[1]!=newArr[1]){
				secArr[1]=newArr[1];
				creatDiv(numberBox[5],secArr[1],2000);
			}
function creatDiv(obj,a,time){
	var div1=document.createElement("div");
var div2=document.createElement("div");
div1.className="top";
div2.className="bottom  active2";
	div1.innerHTML=a;
	div2.innerHTML=a;
	obj.appendChild(div1);
	obj.appendChild(div2);
	deleteDiv(obj,div1,time);
	deleteDiv(obj,div2,time);
}
function clock(){
	timer=setInterval(function(){
		var now =new Date();  
        var sec=now.getSeconds();  
        var min=now.getMinutes();  
        var hour=now.getHours();
			console.log(hour,min,sec);
			
			if(hour<10){
				var str2=0;
				str2+=hour.toString();
				var newArr=str2.split("");
}else{
	var str2=hour.toString();
	var newArr=str2.split("");
}
if(hourArr[0]!=newArr[0]){
	hourArr[0]=newArr[0];
	creatDiv(numberBox[0],hourArr[0],36000000);
}
if(hourArr[1]!=newArr[1]){
	hourArr[1]=newArr[1];
	creatDiv(numberBox[1],hourArr[1],3600000);
}



if(min<10){
	var str1=0;
	str1+=min.toString();
	var newArr=str1.split("");
}else{
	var str1=min.toString();
	var newArr=str1.split("");
}
if(minArr[0]!=newArr[0]){
	minArr[0]=newArr[0];
	creatDiv(numberBox[2],minArr[0],600000);
}
if(minArr[1]!=newArr[1]){
	minArr[1]=newArr[1];
	creatDiv(numberBox[3],minArr[1],60000);
}




if(sec<10){
	var str=0;
	str+=sec.toString();
	var newArr=str.split("");
}else{
	var str=sec.toString();
	var newArr=str.split("");
			}
			if(secArr[0]!=newArr[0]){
				secArr[0]=newArr[0];
				creatDiv(numberBox[4],secArr[0],10000);
			}
			if(secArr[1]!=newArr[1]){
				secArr[1]=newArr[1];
				creatDiv(numberBox[5],secArr[1],2000);
			}
	},1000)
}
clock();
function deleteDiv(obj1,obj2,time){
	var deleteTime=setInterval(function(){
		obj1.removeChild(obj2);
		clearInterval(deleteTime);
	},time)
}