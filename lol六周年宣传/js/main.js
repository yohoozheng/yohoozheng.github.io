var cHeight=document.documentElement.clientHeight||innerHeight;
var cWidth=document.documentElement.clientWidth||innerWidth;
var scale=cWidth/750;
//声明元素
var ctxVideo=document.getElementById("ctxVideo");
//初始化变量
var t=0;
var i=0,step=1;
var isEnd=false;
var type="";
var cards=[
	{
		name:"红色",
		list:[
			{
				name:"红桃",
				list:[{name:"红桃单",list:[]},{name:"红桃双",list:[]}]
			},
			{
				name:"方块",
				list:[{name:"方块单",list:[]},{name:"方块双",list:[]}]
			}
		]
	},
	{
		name:"黑色",
		list:[
			{
				name:"黑桃",
				list:[{name:"黑桃单",list:[]},{name:"黑桃双",list:[]}]
			},
			{
				name:"梅花",
				list:[{name:"梅花单",list:[]},{name:"梅花双",list:[]}]
			}
		]
	}
]
var data=cards;
//创建canvas画板画笔
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
canvas.style.transform="scale("+scale+")";
//视频加载完毕事件
ctxVideo.oncanplay=function(){
	this.play();
	canvas.onclick=function(ev){
		var x=ev.offsetX,y=ev.offsetY;
		if(!isEnd)return;
		if((x>125&&y>680)&&(x<290&&y<950)){
			color_choose(data[0].name);
			data=data[0].list;
			step++;
		}
		if((x>480&&y>680)&&(x<645&&y<950)){
			color_choose(data[1].name);
			data=data[1].list;
			step++;
		}
	}
	t=window.requestAnimationFrame(gameStart);
}
ctxVideo.onended=function(){
	isEnd=true;
}
function gameStart(){
	ctx.drawImage(ctxVideo,0,0);
	window.cancelAnimationFrame(t);
	t=window.requestAnimationFrame(gameStart);
}
function color_choose(color){
	ctxVideo.src="video/"+color+".mp4";
	ctxVideo.play();
	isEnd=false;
}
function red_choose(){
	switch(type){
		case "red_choose":
			color_choose("红桃");
			break;
		case "black_choose":
			color_choose("黑桃");
			break;
	}
}
function black_choose(){
	switch(type){
		case "red_choose":
			color_choose("方块");
			break;
		case "black_choose":
			color_choose("梅花");
			break;
	}
}
//	1.开始游戏
//	2.选择红黑牌
//		|	            |————红桃--单双数
//		|  |	————红牌————|
//		|  |				|————方块--单双数
//		|--|
//		   |				|————黑桃--单双数
//		   |————黑牌————|
//		   				|————梅花--单双数
//	解决的问题：
//		1.怎么用canvas来绘制视频？	声音从哪里来？
//		2.怎么在canvas中添加事件？
//		3.怎么切换视频？
//	
//	每个定时器都有一个自己独立有的唯一数字标识，通过这个标识就可以使用clearInterval或clearTimeout来关闭定时器。这个标识有浏览器自动分配，并且是一个自增长的数字。不同浏览器数字的起始值可能会不一样
//		Chrome 1 / Firefox 2


