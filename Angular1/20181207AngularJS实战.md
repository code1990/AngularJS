12/12/2018 10:36:51 AM 
## 第1章  认识Angular        ##

下载地址 [http://code.angularjs.org](http://code.angularjs.org "下载地址")

Angular是一套基于 MVC 结构 的JavaScript 开发工具 

特点：一个是数据的双向绑定，另一个是依赖注人

通过{{}}进行数据绑定

依赖注人的核心思想是在编写代码时,只关注于需要调用的对象，不关注于依赖的对象

Angular 1.x 是 基于 JavaScript的框架，而Angular 2 是基于 TypeScript的框架

 如果仅仅用于PC 端的WEB开发， Angular 1.x足以应对； 
如果是用于 mobile app ，在用户体验方面，略显捉襟见肘

Angular 4 是 Angular 2 的升级版本

 从 Angular 1.x 到 Angular 2 ，再发展到 Angular 4， 其路线就是为了更快一些。

<table class="table table-bordered table-striped code-table">
<thead>
<tr>
<th>概念</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="../tutorial/13.html">模板(Template)</a></td>
<td>带有Angular扩展标记的<strong>HTML</strong></td>
</tr>
<tr>
<td><a href="../tutorial/5.html">指令(Directive)</a></td>
<td>用于通过<strong>自定义属性和元素</strong>扩展HTML的行为</td>
</tr>
<tr>
<td>模型(Model)</td>
<td>用于显示给用户并且与用户互动的<strong>数据</strong></td>
</tr>
<tr>
<td><a href="../tutorial/12.html">作用域(Scope)</a></td>
<td>用来存储模型(Model)的语境(context)。模型放在这个语境中才能被控制器、指令和表达式等访问到</td>
</tr>
<tr>
<td><a href="../tutorial/3.html">表达式(Expression)</a></td>
<td>模板中可以通过它来访问作用域（Scope）中的变量和函数</td>
</tr>
<tr>
<td><a href="../tutorial/15.html">编译器(Compiler)</a></td>
<td>用来<strong>编译</strong>模板(Template)，并且对其中包含的指令(Directive)和表达式(Expression)进行<strong>实例化</strong></td>
</tr>
<tr>
<td><a href="../tutorial/8.html">过滤器(Filter)</a></td>
<td>负责<strong>格式化</strong>表达式(Expression)的值，以便呈现给用户</td>
</tr>
<tr>
<td>视图(View)</td>
<td>用户看到的内容（即<strong>DOM</strong>）</td>
</tr>
<tr>
<td><a href="../tutorial/10.html">数据绑定(Data Binding)</a></td>
<td><strong>自动同步</strong>模型(Model)中的数据和视图(View)表现</td>
</tr>
<tr>
<td><a href="../tutorial/2.html">控制器(Controller)</a></td>
<td>视图(View)背后的<strong>业务逻辑</strong></td>
</tr>
<tr>
<td><a href="../tutorial/17.html">依赖注入(Dependency Injection)</a></td>
<td>负责创建和自动装载对象或函数</td>
</tr>
<tr>
<td>注入器(Injector)</td>
<td>用来实现依赖注入(Injection)的容器</td>
</tr>
<tr>
<td><a href="../tutorial/6.html">模块(Module)</a></td>
<td>用来配置注入器</td>
</tr>
<tr>
<td><a href="../tutorial/19.html">服务(Service)</a></td>
<td>独立于视图(View)的、<strong>可复用</strong>的业务逻辑</td>
</tr>
</tbody>
</table>

## 第2章 Angular基础知识         ##
### 2.1  Angular中的表达式       ###
Angular 中所有表达式的值都来源于 $scope 对象 ．由该对象以添加属性的 方式统 一进行设置 ，包括window对象
允许null和undefined
### 2.2  Angular中的控制器       ###

在 Angular 中， 控制器的功能是管理页面的逻辑代码 。
当控制器通过 “ ng-controller ” 指令被添加到 DOM 页面时 ，Angular 将会通过控制器构造函数生成一个实体的对象 ，而在生成这个对象的过程 中，
$scope 对象作为参数注入其中 ，并允许用户访问$scope对象。这样一来，用户可以通过
$scope对象与页面中的元素进行数据绑定，从而实现数据从控制器层到视图 层的过程。

2.2.2	控制器初始化 $scope 对象
控制器的任务就是操作 $scope 对象 ，而这种操作具体表现在两个方面 ：一是对 $scope 对象进行初始化 ，二是为 $scope 对象添加各种实现 逻辑功能的方法。

处于子层控制器中的 $scope 对象将会自动继承父层控制器 中$scope 对象的属性和方法。
### 2.3  Angular中的模板       ###
### 2.4  Angular中的表单控件       ###

**Angular UI Bootstrap**


## 第3章  Angular过滤器和作用域        ##
### 3.1  模板中的过滤器       ###
### 3.2  过滤器的应用       ###
### 3.3  作用域概述       ###
### 3.4  作用域的层级       ###

## 第4章  Angular的依赖注入        ##
### 4.1  依赖注入介绍       ###
### 4.2  依赖注入标记       ###
### 4.3  $injector常用API       ###

## 第5章  Angular中MVC模式        ##
### 5.1  MVC模式概述       ###
### 5.2  Model组件       ###
### 5.3  Controller组件       ###
### 5.4  View组件       ###

## 第6章  Angular的服务        ##
### 6.1  Angular服务介绍       ###
### 6.2  创建Angular服务       ###
### 6.3  管理服务的依赖       ###
### 6.4  添加服务的其他设置       ###

## 第7章  Angular与服务端交互        ##
### 7.1  与服务端交互介绍       ###
### 7.2  Angular中的缓存       ###
### 7.3  $resource服务       ###
### 7.4  promise对象       ###

## 第8章  Angular的指令        ##
### 8.1  Angular指令概述       ###
### 8.2  Angular指令对象的重要属性       ###
### 8.3  Angular指令对象的scope属性       ###
### 8.4  Angular对象的require属性和controller属性       ###

## 第9章 使用$location         ##
### 9.1  初识$location       ###
### 9.2  $location对象的事件       ###
### 9.3  路由模式和地址变更       ###

## 第10章  Angular开发的注意事项和最佳实践        ##
### 10.1  页面元素的控制       ###
### 10.2  使用ng-repeat时的注意事项       ###
### 10.3  解决单机按钮事件冒泡       ###
### 10.4  释放多余的$watch监测函数       ###
### 10.5  解决ng-if中的ng-model值无效       ###

## 第11章 综合案例         ##
### 11.1 使用Angular基于Canvas来绘图         ###
### 11.2 使用Angular开发一个抽奖应用         ###
