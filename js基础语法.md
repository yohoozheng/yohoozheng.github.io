# JS基础语法 #
 
## 一.数据类型
 
 --- 
### 基础数据类型：

### 1.boolean：true/false

### 2.null：null=0

### 3.undefined:null==undefined

### 4.number：

  声明：var num=1;/var num=new Number();
  
  操作：num.toString();
### 5.String:
  声明：var str="";/var str=new String();
  
  
  操作：
  
  \ 转义
  
  charAt() 使用下标查找字符
  
  	var str="123";
  	console.log(str.charAt(1));
  	//结果：2
  	
  toUpperCase() 转换为大写

  	var str="hello";
  	var str1=str.toUpperCase();
  	console.log(str1);
  	//结果：HELLO
  	
  toLowerCase() 转换为小写
  
  	var str="HELLO";
  	var str1=str.toUpperCase();
  	console.log(str1);
  	//结果：hello
  
  indexOf("",n) 从下标n开始查找第一次出现的“”，找不到返回-1
  
  	var str="123456";
  	console.log(str.indexOf("3",0));
  	//结果：2（下标）
  
  search() 查找对应字符串
  
  	var str="hello";
    console.log(str.search("e"));
    //结果：1
  
  
  lastIndexOf() 从...开始找最后一次出现
  
  	var str="hello";
    console.log(str.lastIndexOf("l",5));
    //结果：3
  
  CharCodeAt 通过下标返回所查找字符的Unicode编码
  
  	var str="hello";
    console.log(str.charCodeAt(2));
    //结果：108 （e的Unicode编码）
  
  concat 连接字符串
  
  	var str="hello";
    var str1="world";
    console.log(str.concat(str1));
    //结果：helloworld
  
  replace(替换掉的内容，要替换的内容) 替换
  
  	var str="hello";
    console.log(str.replace("e","ee"));
    //结果：heello
  
  
  split("") 转换为数组，以""分割
  
  	var str="hello";
    console.log(str.split("l"));
    //结果：["he","","o"]
    
  substring(n,m) 保留n以后的元素，m表示结束位置，
  
  	var arr=[1,2,3,4];
  	var arr1=arr.substring(1,2);
  	console.log(arr);
  	//结果：[2]
  	  
  substr(n,m) 保留n之后的元素，删除m个 
  
  	var str="hello";
  	var str1=str.slice(1,2);/str.substring(1,2);
  	console.log(str1);
  	//结果：el
  
  ParserInt()转换为数字，若有非数字字符串，则转换为NaN
  
  	var str="hello";
    console.log( parseInt(str));
    //结果：NaN
    var str="123";
    console.log( parseInt(str));
    //结果：123
  
  
### 6.Array
  声明：var arr=[];/var str=new Array();
  
  操作：

  length  数组的长度
  
  	var arr=[1,2];
  	console.log(arr.length);
  	//结果：2
  
  push 向尾部添加元素
  
  	var arr=[1,2];
  	arr.push(3);
  	console.log(arr);
  	//结果：[1,2,3]
  
  unshift 向数组前面添加元素
  
  	var arr=[1,2];
  	arr.unshift(3);
  	console.log(arr);
  	//结果：[3,2,1]
  
  shift 删除第一个元素
  
  	var arr=[1,2];
  	arr.shift();
  	console.log(arr);
  	//结果：[2]
  
  pop 删除最后一个元素
  
  	var arr=[1,2];
  	arr.pop(3);
  	console.log(arr);
  	//结果：[2]
  
  splice 对数组进行改动：
   
   	var arr[1,2,3]
   	
   	splice(n) 保留n个
   	arr.splice(2);
   	console.log(arr);
   	//结果：[1,2]
   	
   	splice(n,m) 从n开始删除m
   	arr.splice(2,1);
   	console.log(arr);
   	//结果：[1,3]
   
   	splice(n,m,h,...) 从n开始删除m，h及其之后向删除位置添加
   	arr.splice(2,1,4,5,6);
   	console.log(arr);
   	//结果：[1,4,5,6,3]
  
  sort 按照ascll码进行排序
  
  	var arr=[2,1,4,3];
  	arr.sort();
  	console.log(arr);
  	//结果：[1,2,3,4];
  
  reverse 倒序
  
  	var arr=[2,1,4,3];
  	arr.reverse();
  	console.log(arr);
  	//结果：[4,3,2,1];
  
  slice(n,m) 保留n以后的元素，m表示结束位置，
  
  	var arr=[1,2,3,4];
  	var arr1=arr.slice(1,2);
  	console.log(arr);
  	//结果：[2]
  
  join 转换为字符串
  
  	var arr=[1,2,3];
  	var str=arr.join("0");
  	console.log(str);
  	//结果：10203
### 7.Object

声明：var obj={};/var obj=new Object();

时间对象：var _date=new Date();

	getDay()返回一周中的某一天，周六~周天：1~7；
	getDate()返回一月中的某一天；
	getHours()返回小时，24小时制；
	getMinutes()返回分钟；
	getSeconds()返回秒；
	getMouth()返回月份；
	getFullYear()返回四位数年份；
	getTime()返回时间戳；					

图片对象：var img=new Image()
	
	img.width 图片宽
	img.height 图片高
	img.src 图片路径
	img.vspace 图片上下空间
	img.hspace 图片左右空间

### 8.function
匿名函数：function()

命名函数：var fn=function(){}/function fn(){}

数学函数：
	
	Math.floor 向下取整
	Math.ceil 向上取整
	Math.random 随机数
	Math.round 四舍五入
	Math.max 取最大
	Math.min 取最小
	
变量：局部变量/全局变量

全局变量：在任何函数外声明的变量

局部变量：在函数内声明的变量，在函数外无法调用，若想调用需要用到函数的闭包，
	
	var a=1;
	function fn(){
		var b=0;
		console.log(a);//a为全局变量，可以调用
	}
	fn();
	console.log(b)://b为局部变量，打印出来为undefined


如果想调用到以上函数内部的b需要


	function fn(){
    	var b=0;
    	function fn1(){
        	return b;
    	}
    	return fn1();
	}
	//console.log(b); 报错
	console.log(fn());    
	
变量声明的提升

	function (){
		a=10;
		var b=20;
		var a;
	}
	//var声明的变量以及函数会被默认提前即：
	function (){
		var a;
		var b=20;
		a=10;
	}
	
js中创建函数有两种方式：函数声明式和函数字面量式。只有函数声明才存在函数提升！

	console.log(f1); // function f1() {}   
	console.log(f2); // undefined  
	function f1() {}
	var f2 = function() {}
	//只有function f1(){}声明才有提升
	
## 二、语句
--- 
### 1.循环语句
for循环

	for(var i=0;i<num;i++){
		//循环num次，根据不同情况选择循环的间距(i++/i+=)
		//遍历
		//有固定的循环次数
	}
	
while循环
	
	while (i<5){
		x=x + "The number is " + i + "<br>";
		i++;
	}
	//只要i<5就一直循环，没有具体循环次数
### 2.分支语句
if语句

	if（ ）{
		//（ ）条件可写Boolean值，也可以写运算，涉及到运算符
		如果条件为true，那么执行内容
	}else{
		如果不成立执行这里的内容
	}
	
switch语句

	switch (条件){
  		case 条件为1:
  			执行此行
  			break;//终止本次循环
  		case 条件为2:
  			执行此行
  			break;//终止本次循环
  		default://其他
  			break;//终止本次循环
  	}
### 3.弹出语句
alert(“123”)//弹出内容

prompt(“123”)//弹出后可输入内容

confirm("123")//弹出后询问确认
### 4.打印语句
console.log()
