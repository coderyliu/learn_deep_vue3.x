# Vue3路由-VueRouter之动态添加路由和导航守卫的使用

### router-link的v-slot

在vue-router3.x的时候，router-link有一个tag属性，可以决定router-link到底渲染成什么元素：

- 但是在vue-router4.x开始，该属性被移除了；
- 而给我们提供了更加具有灵活性的v-slot的方式来定制渲染的内容；

**v-slot如何使用呢？**

首先，我们需要使用custom表示我们整个元素要自定义

- 如果不写，那么自定义的内容会被包裹在一个 a 元素中；

其次，我们使用v-slot来作用域插槽来获取内部传给我们的值： 

- href：解析后的 URL； 
- route：解析后的规范化的route对象； 
- navigate：触发导航的函数；
- isActive：是否匹配的状态； 
- isExactActive：是否是精准匹配的状态；

![image-20220227102307079](D:\截图\10_Vue3路由\image-20220227102307079.png)



### router-view的v-slot

router-view也提供给我们一个插槽，可以用于 transition 和 keep-alive 组件来包裹你的路由组件：

- Component：要渲染的组件；
- route：解析出的标准化路由对象；

![image-20220227103259067](D:\截图\10_Vue3路由\image-20220227103259067.png)

### 动态添加路由

某些情况下我们可能需要动态的来添加路由：

- 比如根据用户不同的权限，注册不同的路由；
- 这个时候我们可以使用一个方法 addRoute； 
- 如果我们是为route添加一个children路由，那么可以传入对应的name：

![image-20220227103856377](D:\截图\10_Vue3路由\image-20220227103856377.png)



### 动态删除路由

**删除路由有以下三种方式：**

- 方式一：添加一个name相同的路由；
- 方式二：通过removeRoute方法，传入路由的名称； 
- 方式三：通过addRoute方法的返回值回调；

![image-20220227104120317](D:\截图\10_Vue3路由\image-20220227104120317.png)

路由的其他方法补充： 

- router.hasRoute()：检查路由是否存在。
- router.getRoutes()：获取一个包含所有路由记录的数组。



### 路由导航守卫

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。

**全局的前置守卫beforeEach是在导航触发时会被回调的：**

它有两个参数：

- to：即将进入的路由Route对象；
- from：即将离开的路由Route对象；

它有返回值：

- false：取消当前导航；
- 不返回或者undefined：进行默认导航；
- 返回一个路由地址：
  - 可以是一个string类型的路径；
  - 可以是一个对象，对象中包含path、query、params等信息；

可选的第三个参数：next

- 在Vue2中我们是通过next函数来决定如何进行跳转的；
- 但是在Vue3中我们是通过返回值来控制的，不再推荐使用next函数，这是因为开发中很容易调用多次next；

![image-20220227110252049](D:\截图\10_Vue3路由\image-20220227110252049.png)

比如我们完成一个功能，只有登录后才能看到其他页面：

![image-20220227112039077](D:\截图\10_Vue3路由\image-20220227112039077.png)



### 其他导航守卫

Vue还提供了很多的其他守卫函数，目的都是在某一个时刻给予我们回调，让我们可以更好的控制程序的流程或者功能：https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html

我们一起来看一下**完整的导航解析流程**： 

- 导航被触发。
- 在失活的组件里调用 beforeRouteLeave 守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。 
- 在路由配置里调用 beforeEnter。 
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。 
- 调用全局的 beforeResolve 守卫(2.5+)。 
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。