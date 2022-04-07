# Vue3CompositionAPI的使用之生命周期、Provide/Inject、Hook的使用及render函数

# 生命周期钩子

我们前面说过 setup 可以用来替代 data 、 methods 、 computed 、watch 等等这些选项，也可以替代 生命周

期钩子。

- 那么setup中如何使用生命周期函数呢？
- 可以使用直接导入的 onX 函数注册生命周期钩子；

![image-20220217143836852](D:\截图\07_composition_API\image-20220217143836852.png)



### Provide函数

事实上我们之前还学习过Provide和Inject，Composition API也可以替代之前的 Provide 和 Inject 的选项。

我们可以通过 provide来提供数据：

- 可以通过 provide 方法来定义每个 Property； 
- provide可以传入两个参数：
  - name：提供的属性名称；
  - value：提供的属性值；

![image-20220217145035695](D:\截图\07_composition_API\image-20220217145035695.png)



### Inject函数

在 后代组件 中可以通过 inject 来注入需要的属性和对应的值：

- 可以通过 inject 来注入需要的内容；
- inject可以传入两个参数：
  - 要 inject 的 property 的 name； 
  - 默认值；

![image-20220217145152498](D:\截图\07_composition_API\image-20220217145152498.png)

**为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 和 reactive。**

![image-20220217145225366](D:\截图\07_composition_API\image-20220217145225366.png)

**如果我们需要修改可响应的数据，那么最好是在数据提供的位置来修改：我们可以将修改方法进行共享，在后代组件中进行调用；**

![image-20220217145307752](D:\截图\07_composition_API\image-20220217145307752.png)



### useCounter

我们先来对之前的counter逻辑进行抽取：

![image-20220217150927721](D:\截图\07_composition_API\image-20220217150927721.png)



### useTitle

我们编写一个修改title的Hook：

![image-20220217151148589](D:\截图\07_composition_API\image-20220217151148589.png)



### useScrollPosition

我们来完成一个监听界面滚动位置的Hook：

![image-20220217151224185](D:\截图\07_composition_API\image-20220217151224185.png)



### useMousePosition

我们来完成一个监听鼠标位置的Hook：

![image-20220217151251907](D:\截图\07_composition_API\image-20220217151251907.png)



### useLocalStorage

我们来完成一个使用 localStorage 存储和获取数据的Hook：

![image-20220217151328446](D:\截图\07_composition_API\image-20220217151328446.png)



### 认识h函数

Vue推荐在绝大数情况下**使用模板**来创建你的HTML，然后一些特殊的场景，你真的需要**JavaScript的完全编程的**

**能力**，这个时候你可以使用 **渲染函数** ，它**比模板更接近编译器**； 

- 前面我们讲解过VNode和VDOM的改变：

- Vue在生成真实的DOM之前，会将我们的节点转换成VNode，而VNode组合在一起形成一颗树结构，就是虚 

  拟DOM（VDOM）； 

- 事实上，我们之前编写的 template 中的HTML 最终也是使用**渲染函数**生成对应的VNode； 

- 那么，如果你想充分的利用JavaScript的编程能力，我们可以自己来编写 createVNode 函数，生成对应的

  VNode； 

那么我们应该怎么来做呢？**使用 h()函数：**

- h() 函数是一个用于创建 vnode 的一个函数； 
- 其实更准备的命名是 createVNode() 函数，但是为了简便在Vue将之简化为 h() 函数；



### h()函数 如何使用呢？

**h()函数 如何使用呢？它接受三个参数：** 

![image-20220217161923037](D:\截图\07_composition_API\image-20220217161923037.png)

**注意事项：**

- 如果没有props，那么通常可以将children作为第二个参数传入； 
- 如果会产生歧义，可以将null作为第二个参数传入，将children作为第三个参数传入；



### h函数的基本使用

**h函数可以在两个地方使用：**

- render函数选项中；
- setup函数选项中（setup本身需要是一个函数类型，函数再返回h函数创建的VNode）； 

![image-20220217162026224](D:\截图\07_composition_API\image-20220217162026224.png)



### h函数计数器案例

![image-20220217162050476](D:\截图\07_composition_API\image-20220217162050476.png)



### 函数组件和插槽的使用

![image-20220217162111301](D:\截图\07_composition_API\image-20220217162111301.png)



### jsx的babel配置

如果我们希望**在项目中使用jsx**，那么我们**需要添加对jsx的支持**： 

- jsx我们通常会通过Babel来进行转换（React编写的jsx就是通过babel转换的）；
- 对于Vue来说，我们只需要在Babel中配置对应的插件即可；

安装**Babel支持Vue的jsx插件**： npm install @vue/babel-plugin-jsx -D

在**babel.config.js配置文件**中配置插件：

![image-20220217162318129](D:\截图\07_composition_API\image-20220217162318129.png)



### jsx计数器案例

![image-20220217162518653](D:\截图\07_composition_API\image-20220217162518653.png)



### jsx组件的使用

![image-20220217162543226](D:\截图\07_composition_API\image-20220217162543226.png)