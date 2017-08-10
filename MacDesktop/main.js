var lli=document.getElementsByClassName("lli");
var llul=document.getElementsByClassName("llul");
function rellul(){
	for(var i=0;i<llul.length;i++){
		llul[i].style.display="none";
	}
}
function relli(){
	for(var i=0;i<lli.length;i++){
		lli[i].style.background="";
	}
}
relli();
rellul();


for(var i=0;i<llul.length;i++){
	llul[i].onmouseout=function(){
		event.stopPropagation();
		this.style.display="block";
	}
}

function move(){
	for(var i=0;i<lli.length;i++){
		lli[i].index=i;
		lli[i].onmouseover=function(){
			rellul();
			relli();
			this.style.background="lightseagreen";
			llul[this.index].style.display="block";
		}
		lli[i].onmouseout=function(){
			this.style.background="";
			llul[this.index].style.display="none";
		}
	}
}


for(var i=0;i<lli.length;i++){
	lli[i].index=i;
	lli[i].onclick=function(){
		this.style.background="lightseagreen";
		move();
		if(llul[this.index].style.display=="none"){
			llul[this.index].style.display="block";
		}else{
			llul[this.index].style.display="none";
		}
		event.stopPropagation();
		
	}
}

var twice=document.getElementsByClassName("twice");
var last=document.getElementsByClassName("last");
function relast(){
	for(var i=0;i<last.length;i++){
		last[i].style.display="none";
	}
}
relast();
for(var i=0;i<twice.length;i++){
	twice[i].index=i;
	twice[i].onmouseover=function(){
		last[this.index].style.display="block";
	}
	twice[i].onmouseout=function(){
		last[this.index].style.display="none";
	}
}
function clear(){
	for(var i=0;i<lli.length;i++){
		lli[i].onmouseover=function(){
			relli();
		}
	}
}
document.onclick=function(){
	relli();
	rellul();
	clear();
	iul.style.display="none";
	event.stopPropagation();
}

//时间

setInterval(function(){
	var time=document.getElementById("time");
	var mydate = new Date();
	var year=mydate.getFullYear(); //获取完整的年份(4位,1970-????)
	var month=mydate.getMonth()+1; //获取当前月份(0-11,0代表1月)
	var day=mydate.getDate(); //获取当前日(1-31)
	var week=mydate.getDay(); //获取当前星期X(0-6,0代表星期天)
	var hou=mydate.getHours(); //获取当前小时数(0-23)
	var mi=mydate.getMinutes(); //获取当前分钟数(0-59)
	var se=mydate.getSeconds();
	if(week==0){
		week="天";
	}else if(week==1){
		week="一";
	}else if(week==2){
		week="二";
	}else if(week==3){
		week="三";
	}else if(week==4){
		week="四";
	}else if(week==5){
		week="五";
	}else if(week==5){
		week="六";
	}
	for(var i=0;i<10;i++){
		if(mi==i){
			mi="0"+i;
		}
	}
	for(var i=0;i<10;i++){
		if(se==i){
			se="0"+i;
		}
	}
	time.innerHTML=year+"年"+month+"月"+day+"日"+"周"+week+" "+hou+":"+mi+":"+se;
},1000)


var iul=document.getElementById("iul");
iul.style.display="none";
document.oncontextmenu=function(e){
	var ev=window.event||e;
	event.preventDefault();
	iul.style.display="block";
	var cw=document.documentElement.clientWidth||window.innerWidth;
	var ch=document.documentElement.clientHeight||window.innerHeight;
	if(ev.clientY>=ch-iul.offsetHeight){
		iul.style.left=ev.clientX+"px";
		iul.style.top=ev.clientY-iul.offsetHeight+"px";
	}else if(ev.clientX>=cw-iul.offsetWidth){
		iul.style.left=ev.clientX-140+"px";
		iul.style.top=ev.clientY+"px";
	}else{
		iul.style.left=ev.clientX+"px";
		iul.style.top=ev.clientY+"px";
	}
}
//拖拽函数
function tuozhuai(obj){
	obj.onmousedown=function(e){
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
			if(obj.offsetLeft>=cliw-obj.offsetWidth-5){
				obj.style.left=cliw-obj.offsetWidth-5+"px";
			}else if(obj.offsetLeft<=0){
				obj.style.left="0px";
			}
			if(obj.offsetTop>=clih-obj.offsetHeight-5){
				obj.style.top=clih-obj.offsetHeight-5+"px";
			}else if(obj.offsetTop<=20){
				obj.style.top="20px";
			}
		}
	}
	obj.onmouseup=function(){
		document.onmousemove=null;
		var ml=obj.offsetLeft;
		var mt=obj.offsetTop;
		var mr=ml+obj.offsetWidth;
		var mb=mt+obj.offsetHeight;
		var bl=trash.offsetLeft;
		var bt=trash.offsetTop;
		var br=bl+trash.offsetWidth;
		var bb=bt+trash.offsetHeight;
		if(mr<bl||mb<bt||ml>br||mt>bb){
			console.log("123");
		}else{
			body.removeChild(this);
		}
	}
}
var trash=document.getElementById("trash");
tuozhuai(trash);

var creatW=document.getElementById("creatW");
var body=document.getElementsByTagName("body")[0];
creatW.onclick=function(){
	var xj=document.createElement("div");
	xj.className="xj";
	xj.style.left=event.clientX+"px";
	xj.style.top=event.clientY+"px";
	xj.innerHTML="<img src='img/文件夹 (1).png' style='margin-left:8px;'/><div class='kbj' contenteditable='true'>未命名文件夹</div>";
	body.appendChild(xj);
	tuozhuai(xj);
}
var show=document.getElementsByClassName("show");
var show1=document.getElementsByClassName("show1");
function dis(){
	for(var i=0;i<show1.length;i++){
		show1[i].style.display="none";
	}
}
dis();
for(var i=0;i<show.length;i++){
	show[i].index=i;
	show[i].onmouseover=function(){
		dis();
		show1[this.index].style.display="block";
	}
	show[i].onmouseout=function(){
		dis();
	}
}
