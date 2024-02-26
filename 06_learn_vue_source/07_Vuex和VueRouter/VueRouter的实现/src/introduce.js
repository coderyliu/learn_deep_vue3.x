// VueRouter类的options参数，就是new VueRouter传入的参数
// 1.hash过程:
// VueRouter默认mode是hash模式，hash喵点并不会在http请求中向服务器发送，会服务器是无效的，这也就是hash模式的原理
// 从而能够达到通过hashchange监听url改变，在页面无刷新的情况下，动态添加组件，卸载组件达到更新页面的效果

// 1-首先调用VueRouter.install方法，保证VueRouter只被执行一次，通过mixin在每个组件的beforeCreate生命周期注册路由实例
// 在destroyed生命周期时，销毁路由实例，同时注册router-view和router-link全局组件，并且通过Object.defineProperty保证router和route对象只读

// 2-接下来new VueRouter实例对象，先获取参数的mode模式值，如果mode是history但是浏览器不支持history，强制选择hash,
// 接下来根据hash值选择路由的模式  hash--new HashHistory  history---new HTML5History

// 3-Vue Router执行构造函数创建路由实例时，创建路由映射表--routes(createRouteMap)路由和组件之间的映射关系,然后返回一个路由匹配对象

// 4-接下来要对实例化的hashHistory对象做路由处理，添加hashchange事件，实现路由的监听，这个监听是在VueRouter的init方法中进行的
// 这里的细节不是在beforeEnter中监听的，原因是如果在beforeEnter中实现会触发两次beforeEnter钩子函数

// 5-挂载router到根组件中实现前端路由 


// 2.history模式
// history模式是html5添加的新特性，同样能够通过url改变实现页面无刷新，更新页面效果
// history模式充分利用history.pushState和replaceState完成url跳转，当然也不会向服务器发送请求
// 不过需要后端配合，historyAPIFallBack在用户访问没有的url的时候，返回一个404页面或者index.html首页
// 这个设置可以通过nginx或者前端webpack来配置
// 过程和hash模式一样，不同的是对路由的切换的监听方式不同，history模式主要是监听push和replace以及popstate方法的变动
// 来进行路由的切换

// 3-对于router-link的跳转主要是它本质上就是一个a标签,href属性是#开头的
// 对于router-view的渲染实际上就是通过路由匹配映射表当url改变的时候，找到对应的组件
// 通过render函数在patchdiff算法更新页面

// 4-刷新页面的时候，路由并没有改变，只是在跳转回本页面而已