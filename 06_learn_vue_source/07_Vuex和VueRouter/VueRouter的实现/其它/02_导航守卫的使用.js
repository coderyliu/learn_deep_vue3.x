// 导航守卫是什么？
// 导航守卫其实就是路由跳转时的触发的一些钩子函数、这个过程分为前中后三个阶段
// 全局守卫，路由独享守卫、组件内的守卫三种

// 导航守卫常见的参数:
// form:即将要离开的组件的路由对象
// to:即将要进入的组件的路由对象
// next函数：可以接受字符串、对象、空值、error信息、函数、布尔值
// 注意：只有beforeRouteEnter的next函数可以接受函数作为参数、afterEach没有next这个选项
// 空值/true：正常跳转    字符串/对象:表示要跳转的路径 false/error不跳转

// 路由的导航守卫的执行流程如下:
// 1-导航被触发
// 2-失活组件的beforeRouteLeave钩子函数被触发
// 3-触发全局守卫beforeEach钩子
// 4-触发再次重用的组件beforeRouteUpdate钩子
// 5-组建的路由对象beforeEnter钩子触发
// 6-解析异步路由组件
// 7-在被激活的组件内调用beforeRouteEnter
// 8-调用全局的beforeResolve守卫
// 9-导航被确认
// 10-调用全局afterEach全局守卫
// 11-组建的生命周期回调beforeCreate-created-beforeMount-mounted
// 12-触发DOM更新
// 13-执行组件beforeRouteEnter的对调函数，并把组件实例作为参数传递

// 注意：
// 1-路由解析守卫也是用来定义一个全局守卫，只不过他是在解析异步组件并进入激活组件的beforeRouteEnter组件后导航被确认前被触发
// 2-BeforeRouteLeave和beforeRouteUpdate中都可以直接使用this代表组件实例，而beforeRouteEnter不可以，因此它的回调函数传入了一个vm代表组件实例对象
