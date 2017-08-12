# JavaScript-DOM
## 一、什么是DOM  
---  

　　  JavaScript由ECMAScript、DOM和BOM三部分组成，其中DOM代表描述网页内容的方法和接口，即文档对象模型(Document Object Model)。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM，而树形结构就是我们常说的DOM树。

　　维基百科中介绍DOM更为准确：DOM是一种跨平台和语言非依赖性的应用程序编程接口，即处理现在的HTML,XHTML或XML文档作为树结构，其中每个节点是一个对象，每个节点表示该文档的一部分。  
## 二、DOM节点  
---  

### 1.节点的类型  
DOM树是由许多不同类型的节点组成的，而这些节点类型都有一个nodeType值，我们可以通过nodeType值来判断我们获取的或想要的是不是对应类型的节点。  

|     节点类型    | 元素节点(标签节点)| 属性节点  | 文本节点(空格、换行、文字) | 注释节点 | document节点 |  
| :------------: | :------------: | :-----: | :--------------------: | :-----: | :------------: |  
| nodeType值     |        1       |     2    |           3            |    8    |       9       |  

除了通过nodeType值判断类型以外我们还可以通过nodeName来查看元素节点和属性节点的节点名称，还有使用nadeValue来查看属性节点的属性值。  
### 2.获取元素节点  
* document.getElementById(id); 
* document.getElementByTagName(tagname);
* document.getElementByClassName(classname);  

通常想要在JavaScript中更改或使用HML中的元素节点时，都要先获取才可以调用，那么我们就是通过设置元素的Id属性或Class属性来获取，或是使用标签名获取。但是要注意的是getElementById()方法不能工作在XML中，在XML文档中，必须通过拥有id属性来进行搜索，而此类型必须在 XML DTD 中进行声明。  
获取完我们想要的节点后，我们还可以通过节点的关系来操作其他节点,这里我们以div元素为初设元素节点来举例。  
**2.1 子节点**    
div.children();/div.childNodes();  
获取div下面的子节点，而div.children()只能获取到是元素节点的子节点，而div.childNodes()会获取所有类型的子节点，也就是说会解析空白文本节点。  
**2.2 父节点**  
div.parentNode();/div.offsetParent();  
获取div的父节点，div.offsetParent()获取的是具有定位属性的祖先节点，即从父节点开始查找，如果父节点没有定位属性，那么再找父节点的父节点，直到找到有定位属性的节点。  
**2.3 兄弟节点**  
//下一个兄弟节点  
div.nextElementSibling();/div.nextSibling();  
//上一个兄弟节点  
div.previousElementSibling();/div.previousSibling();  
这里有没有Element很关键，跟获取子节点一样，div.nextSibling()和div.previousSibling()会解析空白节点，会获取到div下面的空格或回车。  
**2.4 首尾子节点**  
//获取div的第一个子节点  
div.firstElementChild();/div.firstChild();  
//获取div的最后一个子节点  
div.lastElementChild();/div.lastElementChild();  
区别同上。  
### 3.节点操作  
我们除了可以在HTML中添加、删除个修改节点，也可以在JavaScript中对节点进行操作。  
**3.1 创建节点**  
//创建节点/创建文本节点  
createElement();/createTextNode()；  
创建文本节点一般用来向元素节点中添加内容，它创建的是静态文本，不能像innerHTML一样带有HTML格式，所以creatTextNode()更安全，而innerText又有浏览器兼容问题。  
**3.2 添加节点**  
我们创建的节点不会自动添加到HTML里，需要我们对创建的节点进行操作。  
//向尾部添加子节点  
appendChild();  
//向目标节点之前添加  
insertBefore(newElement,targetElement);  
insertBefore()第二个参数是可选参数，如果不写第二个参数那么就默认向尾部添加，即等同于appendChild();  
**3.3 替换**  
//将旧节点换为新节点  
replaceChild(newElement,oldElement);  
div.replaceChild(newElement,oldElement) ，这里无论是新节点还是旧节点，都必须是div的子节点。  
**3.4 删除**  
removeChild();  
注意删除的是子节点。  
**3.5 克隆/复制**  
//深复制或浅复制  
cloneNode(boolean);  
当参数的布尔值为true时为深复制，即会复制节点本身以及它以下的所有子节点。  
当参数的布尔值为false时为浅复制，只会复制节点自己本身。  
**3.6 判断**  
hasChildNode();  
判断是否有子节点,返回布尔值。
**3.7 属性**  
//获取节点属性  
getAttribute();  
//设置节点属性  
setAttribute();  
//删除节点属性  
removeAttribute();  
要注意的一点就是class属性不能通过setAttribute(); 设置。  
# 三、DOM的优缺点  
---  
DOM的优点主要表现在：易用性强，并且遍历简单，支持XPath，增强了易用性。  
DOM的缺点主要表现在：效率低，解析速度慢，内存占用量过高。  

--- 