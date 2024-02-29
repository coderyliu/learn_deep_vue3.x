// 路由懒加载:默认所有的组件都会被打包成为一个chunk，这样我们的js文件的体积就会变得非常大，影响首页的加载速度
// 因此，我们可以把不同的组件做一个代码分割，等到我们用到这个组件的时候在做一个加载，这就是路由懒加载

// 实现方式1:import函数
// webpackChunkName名字一样的，就会被打包到一个chunk下
const routes = [
  {
    path: "/home",
    component: import(/*webpackChunkName:''*/ "组件路径"),
  },
];

// 实现方式2：异步组件
// 这个是Vue内部提供给我们的方法，用来异步解析组件通过defineAsyncComponent函数
// 2.1参数是一个函数--defineAsyncComponent(()=>import('组件路径'))
// 2.2参数是一个对象
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./AsyncCategory.vue"),
  loadingComponent: Loading, //表示一个站位的组件
  delay: 2000, //ms
  onError: function (err, retry, fail, attempts) {
    // err表示错误信息
    // retry一个函数，表示加载未成功重新加载
    // fail一个函数，执行它退出就不加载这个组件了
    // attempts表示可尝试加载的次数
  },
});
