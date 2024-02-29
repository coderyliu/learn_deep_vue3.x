// Vue.observable()，在Vue2.x中用在Vue内部，使data函数返回的对象变成响应式
// 从而直接应用在模板中

// 内部实现代码
Vue.observable = (obj) => {
  observe(obj);
  return obj;
};
// 返回的对象和原来的对象任然是同一个对象，在Vue3.x是返回对象的代理proxy
