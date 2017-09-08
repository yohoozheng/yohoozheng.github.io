//声明元素(＾－＾)V
var start=document.getElementById("start");
var ali=document.getElementsByTagName("li");
var test=document.getElementsByClassName("test");
var txtBox=document.getElementById("txtBox");
var txt=document.getElementsByClassName("txt");
var answer=document.getElementsByClassName("answer");
var close=document.getElementsByClassName("close");
var sp=document.getElementsByTagName("p");
var qp=document.getElementById("qp");
var qptxt=document.getElementById("qptxt");
//获取可视宽高
var cHeight=document.documentElement.clientHeight||innerHeight;
var cWidth=document.documentElement.clientWidth||innerWidth;
//蒙版层填充屏幕
txtBox.style.width=cWidth+"px";
txtBox.style.height=cHeight+"px";
//初始化变量(⊙__⊙)b
var bol=false;//判断开始和停止
var timer=null;//开始定时器
var timer1=null;//结束时改变速度定时器
var timer2=null;//选题定时器
var speed=30;//初始化速度
var nameArr=[0,1,2,3,4,5,6,7,8,9,10,11,12];//初始化题目
var testArr=[0,1,2,3,4,5,6,7,8,9];//初始化题目
var rand=0;//初始化当前题目
var n=0;//初始化姓名编号
var no=0;//初始化次数；
//随机数函数Σ（ﾟдﾟlll）
function ranDom(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
//开始点名٩(๑>◡<๑)۶
function startCallOver(speed){
	timer=setInterval(function(){
		if(n>=nameArr.length-1){
			n=-1;
		}
		n+=1;
		for(var i=0;i<nameArr.length;i++){
			ali[nameArr[i]].removeAttribute("id");
		}
		ali[nameArr[n]].setAttribute("id","target");
	},speed)
}
//开始选题！乂(ﾟДﾟ三ﾟДﾟ)乂 
function startChoose(speed){
	timer2=setInterval(function(){
		rand=ranDom(0,testArr.length-1);
		for(var i=0;i<testArr.length;i++){
			test[testArr[i]].removeAttribute("id");
		}
		test[testArr[rand]].setAttribute("id","deal");
	},speed)
}
//开始改变速度ヾ(=･ω･=)o
function changeSpeed(ran){
	timer1=setInterval(function(){
		speed+=ran;
		clearInterval(timer);
		startCallOver(speed);
		if(speed>=600){
			clearInterval(timer1);
			clearInterval(timer);
			//↓↓↓↓↓↓↓↓作弊系统！(;￢＿￢)   
			//使用方法：将不想被选中的人名填入最后一个li中，并打开以下注释代码，关闭//1代码。
			if(n==nameArr.length-1){
				ali[nameArr[n]].removeAttribute("id");
				n=0;
				ali[nameArr[n]].setAttribute("id","target");
			}
//			ali[nameArr[n]].setAttribute("id","target");//1
			//↑↑↑↑↑↑↑↑作弊系统！(;￢＿￢)   
		}
	},600)
}
//开始停止按钮事件(～￣▽￣)～
start.onclick=function(){
	if(bol==false){
		no++;
		//如果是false那就开始（￣︶￣）↗
		if(no>1){
			ali[nameArr[n]].setAttribute("id","targeted");
			nameArr.splice(n,1);
		}		
		start.style.borderBottom="2px solid #666";
		start.style.borderRight="2px solid #666";
		start.style.transform="translate(8px,8px)";
		speed=30;
		bol=true;
		startChoose(50);
		startCallOver(speed);
	}else if(bol){
		//如果是true那就停止（￣︶￣）↗
		start.style.borderBottom="10px solid #666";
		start.style.borderRight="10px solid #666";
		start.style.transform="translate(0)";
		var ran=ranDom(50,150);
		bol=false;
		changeSpeed(ran);
		clearInterval(timer2);
		test[testArr[rand]].setAttribute("id","deal");
		testArr.splice(rand,1);//去除选择过的题目
	}
}
//显示对应题目☆´∀｀☆
for(var i=0;i<test.length;i++){
	test[i].index=i;
	test[i].onclick=function(){
		test[this.index].style.background="#666";
		test[this.index].style.borderRadius="50%";
		txtBox.style.display="block";
		for(var j=0;j<txt.length;j++){
			txt[j].style.display="none";
		}
		txt[this.index].style.display="block";
	}
}
//显示对应答案ヾ(^▽^ヾ)
for(var i=0;i<answer.length;i++){
	answer[i].index=i;
	answer[i].onclick=function(){
		for(var j=0;j<sp.length;j++){
			sp[j].style.display="none";
		}
		sp[this.index].style.display="block";
	}
}
//关闭蒙版层Σ(oﾟдﾟoﾉ)
for(var i=0;i<close.length;i++){
	close[i].onclick=function(){
		txtBox.style.display="none";
	}
}
//进入全屏─=≡Σ(((つ•̀ω•́)つ))
function requestFullScreen() {  
    var de = document.documentElement;  
    if (de.requestFullscreen) {  
        de.requestFullscreen();  
    } else if (de.mozRequestFullScreen) {  
        de.mozRequestFullScreen();  
    } else if (de.webkitRequestFullScreen) {  
        de.webkitRequestFullScreen();  
    }  
} 
//点击进全屏！彡(-_-;)彡
qp.onclick=function(){
	requestFullScreen();
	qptxt.innerText="Esc";
}
//按ESC退出！U•ェ•*U 
document.onkeydown=function(e){
	var ev=window.event||e;
	switch (ev.keyCode){
		case 27:
			qptxt.innerText="全屏";
		break;
	}
}
//阻止默认事件 O__O"…
document.onmousemove=function(){
	return false;
}
//Bug信息打印~请观看调试器！(⊙v⊙)
console.log("%c%s","color: lightseagreen; font-size: 12px;","Then end. 丨 Rh九尾鱼 丨 Bug提交：yohoozheng324@163.com");123123
console.log("%c%s","color: lightseagreen; font-size: 12px;","——————————————————————— v1.0.0 ————————————————————————");123123
console.log("%c%s","color: lightseagreen; font-size: 12px;","1.link中icon图标无法引入网络路径，大部分图片有版权不显示。");123123
console.log("%c%s","color: lightseagreen; font-size: 12px;","2.在随机过程中还可以再次点击开始按钮。");123123
console.log("%c%s","color: lightseagreen; font-size: 12px;","3.退出全屏函数失效，已删除，在修改。");123123
console.log("%c%s","color: lightseagreen; font-size: 12px;","4.题目选取完后还能开启点名。");123123
console.log("%c%s","color: lightseagreen; font-size: 12px;","5.按ESC时，退出全屏和按钮内容更新信息不同步。");123123