# JavaScript中this指向   
## 一、JavaScript中的函数  
---  
在了解this指向之前，要先弄明白函数执行时它的执行环境是如何创建的，这样可以更清楚的去理解JavaScript中的this指向。  


	function fn(x,y,name){  
	var str1=x;  
	var str2=y;  
	this.name=name;  
	function(){  
		alert(str1,str2);  
		}  
		}  
	fn(1,1,Admin);  
	

当调用fn(1,1,Admin)时，首先函数会创建一个活动对象，也叫做变量对象，接着为函数调用创建一个类似数组的arguments对象用于保存传入的参数，再为执行环境分配作用域链，初始化变量，将函数内部除了实参和函数声明有值外，都被初始化为undefined，最后为this关键字赋值，至此函数环境创建成功，成功后开始将形参逐个进行赋值，最后执行alert语句。  
## 二、JavaScript中的this  
---  
JavaScript中的this到底指向谁？！在不同的环境下this可以随时变换指向，是容易让人头晕的的概念。  
了解完函数执行环境的创建，再来看看函数中的this指向问题，在JavaScript中的函数既可以被当做普通函数执行，也可以被当做对象的方式执行，这是导致this指向丰富的原因之一。在主流的面向对象的语言中（例如Java,C#等)，this含义是很明确的，就是指向当前对象。一般在编译期就已经绑定。而JavaScript中this是在运行期进行绑定的，这也会导致JavaScript中this具有多重含义。JavaScript中的this由于是在运行期进行绑定的，所以JavaScript中的this可以是全局对象、当前对象或者任意对象，这取决于函数的调用方式。  
JavaScript中函数的调用有以下几种方式：作为构造函数调用，作为对象方法调用，作为函数调用，和使用apply()或call()调用。下面就要通过举例子来慢慢理解。  
### 1.作为构造函数调用  
	function Fn(a){  
	this.a=a; // this ？  
	}  
	var obj1=new Fn(1);  
	obj1.a; //1  
	var obj2=Point(2);  
	obj2.a; //报错 obj2是一个空对象undefined  
	window.a; //2  
当作为对象方法调用时，job1是根据构造函数创建的实例化对象，那么在构造函数中的this.a=1就指向了obj1，构造函数中的this都指向实例化对象。  
而obj2没有通过new的方式创建对象，所以obj2是一个空对象，obj2.a找不到，所以是undefined，即this.a相当于window.a。  
### 2.对象方法调用  
	
	var obj={  
	x:1,  
	fn:{  
		fn1:function (){  
			console.log(this.x);
    	}
    }  
    }  
    obj.fn.fn1(); //undefined  
对象方法调用中的this指向包含它的对象，这里只需要注意一点，不用new方法创建的对象，其中的this只指向包含它的对象fn,并不会指向fn的父级obj。  
### 3.作为函数直接的调用  

	function fn() {  
		alert(this.a);  
	};  
	var a="1";  
	fn();  
	div.onclick=function(){  
		alert(this);  
	}  
函数fn()被调用时，开始给this赋值，首先判断this不是new出来的对象中的，所以不会指向实例化对象，然后也不是被某个元素调用的,所以最后将window赋值给它。  
在平时最常用的点击事件中，onclick事件是由div绑定的，所以在事件中，this就指向调用的元素，即指向div。  
### 4.使用call()和apply()进行调用  
call()和apply()的作用就是用来改变this指向，它们的第一个参数都是this要指向的对象。  
	
	function Fn(x){  
		this.x = x;  
		this.fn1= function(x){  
			this.x = x;  
		}  
	}  
	var obj1=new Fn(0);  
	var obj2={x: 0};  
	obj1.fn1.apply(obj2, [1]);  
	obj1.x; //0  
	obj2.x; //1  
上面这段代码中，obj1是new出来的实例化对象，所以this指向实例化对象，即obj1，所以obj1.x的结果为0，而apply在执行函数fn1时改变了this指向，使它指向了obj2，所以obj1.fn1.apply(obj2,[1])实际上是相当于obj2.fn1(1)，apply让obj1中的fn1方法赋值给了obj2，所以结果为1。  
## 三、总结  
通过这些例子的总结，大体可以总结出判断this的方法，如果使用new实例化的对象，那么函数中的this就指向实例化对象，如果不是new出来的对象，那就找是否是某个元素调用了这个函数，那么this就指向调用它的元素，如果不是以上两种情况，那么this就指向全局变量window，当然this指向都可以使用call()和apply()来进行改变。  
关于JavaScript中this的指向还有许多问题要慢慢理解，在不同的“场景”中有不同的变化，需要在平时多用多体会。以上就是我对JavaScript中this指向的理解，如有纰漏，还望指正。  
另外附上一篇大神翻译的文章作为结尾，关于this在具体使用时遇到的问题：  
http://www.cnblogs.com/yuanzm/p/4150558.html 
