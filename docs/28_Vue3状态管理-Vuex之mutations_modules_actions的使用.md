# Vue3状态管理-Vuex之mutations、actions、modules的使用

## Mutation的使用

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation：

![image-20220228111336695](D:\截图\11_Vue3状态管理\image-20220228111336695.png)



### Mutation携带数据

很多时候我们在提交mutation的时候，会携带一些数据，这个时候我们可以使用参数：

![image-20220228111435164](D:\截图\11_Vue3状态管理\image-20220228111435164.png)

**payload为对象类型**

![image-20220228111453110](D:\截图\11_Vue3状态管理\image-20220228111453110.png)

**对象风格的提交方式**

![image-20220228111507199](D:\截图\11_Vue3状态管理\image-20220228111507199.png)



### Mutation常量类型

定义常量：mutation-type.js 

![image-20220228111549099](D:\截图\11_Vue3状态管理\image-20220228111549099.png)

定义mutation

![image-20220228111618345](D:\截图\11_Vue3状态管理\image-20220228111618345.png)

提交mutation

![image-20220228111631803](D:\截图\11_Vue3状态管理\image-20220228111631803.png)



### mapMutations辅助函数

我们也可以借助于辅助函数，帮助我们快速映射到对应的方法中：

![image-20220228112531928](D:\截图\11_Vue3状态管理\image-20220228112531928.png)

在setup中使用也是一样的：

![image-20220228112548740](D:\截图\11_Vue3状态管理\image-20220228112548740.png)



### mutation重要原则

一条重要的原则就是要记住 **mutation 必须是同步函数**

- 这是因为devtool工具会记录mutation的日记； 
- 每一条mutation被记录，devtools都需要捕捉到前一状态和后一状态的快照； 
- 但是在mutation中执行异步操作，就无法追踪到数据的变化；
- 所以Vuex的重要原则中要求 mutation必须是同步函数；



## actions的使用

Action类似于mutation，不同在于：

- Action提交的是mutation，而不是直接变更状态；
- Action可以包含任意异步操作；

![image-20220228113905610](D:\截图\11_Vue3状态管理\image-20220228113905610.png)

这里有一个非常重要的参数context： 

- context是一个和store实例均有相同方法和属性的context对象； 

- 所以我们可以从其中获取到commit方法来提交一个mutation，或者通过 context.state 和 context.getters 来

  获取 state 和 getters； 

- 但是为什么它不是store对象呢？这个等到我们讲Modules时再具体来说；



### actions的分发操作

如何使用action呢？进行action的分发：分发使用的是 store 上的dispatch函数；

![image-20220228114102524](D:\截图\11_Vue3状态管理\image-20220228114102524.png)

同样的，它也可以携带我们的参数：

![image-20220228114112093](D:\截图\11_Vue3状态管理\image-20220228114112093.png)

也可以以对象的形式进行分发：

![image-20220228114123989](D:\截图\11_Vue3状态管理\image-20220228114123989.png)



### actions的辅助函数

action也有对应的辅助函数：

- 对象类型的写法； 
- 数组类型的写法；

![image-20220228115352426](D:\截图\11_Vue3状态管理\image-20220228115352426.png)



### actions的异步操作

Action 通常是异步的，那么如何知道 action 什么时候结束呢？

我们可以通过让action返回Promise，在Promise的then中来处理完成后的操作；

![image-20220228115450950](D:\截图\11_Vue3状态管理\image-20220228115450950.png)



## module的使用

什么是Module？ 

- 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象，当应用变得非常复杂时，store 对象就有可能变得相当臃肿； 
- 为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**； 
- 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块；

![image-20220228120746387](D:\截图\11_Vue3状态管理\image-20220228120746387.png)



### module的局部状态

对于模块内部的 mutation 和 getter，接收的第一个参数是**模块的局部状态对象**：

![image-20220228132701235](D:\截图\11_Vue3状态管理\image-20220228132701235.png)



### module的命名空间

默认情况下，模块内部的action和mutation仍然是注册在**全局的命名空间**中的：

- 这样使得多个模块能够对同一个 action 或 mutation 作出响应；
- Getter 同样也默认注册在全局命名空间；

如果我们希望模块具有更高的封装度和复用性，可以添加 namespaced: true 的方式使其成为带命名空间的模块：

- 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名；

![image-20220228132906299](D:\截图\11_Vue3状态管理\image-20220228132906299.png)



### module修改或派发根组件

如果我们希望在module的actions中修改root中的state，那么有如下的方式：

![image-20220228135914428](D:\截图\11_Vue3状态管理\image-20220228135914428.png)



### module的辅助函数

module辅助函数有三种使用方法： 

方式一：通过完整的模块空间名称来查找； 

方式二：第一个参数传入模块空间名称，后面写上要使用的属性；

方式三：通过 createNamespacedHelpers 生成一个模块的辅助函数；

![image-20220228140209381](D:\截图\11_Vue3状态管理\image-20220228140209381.png)

第三种方式： createNamespacedHelpers

![image-20220228140353504](D:\截图\11_Vue3状态管理\image-20220228140353504.png)