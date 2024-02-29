// Vue.use是帮助我们安装插件，有两种情况：参数是对象或者函数
// 如果是对象必须提供install方法，如果是一个函数直接就会被作为install方法
// install方法执行时，会将vue实例作为参数传递
// 同一个插件只会被安装一次

// 原理：vue2.x实现代码
export default function Use(plugin) {
  // 首先会判断插件是否被安装过,先获取所有插件,this指的是Vue对象
  const installedPlugins =
    this._installedPlugins || (this._installedPlugins = []);
  if (installedPlugins.indexOf(plugin) > -1) {
    return this; //如果被安装过，直接返回
  }
  // 接着，把 use的参数转为数组用apply函数调用plugin
  const args = toArray(arguments, 1);
  args.unshift(this);

  // 然后判断plugin书不是一个函数
  if (typeof plugin === "function") {
    // 执行
    plugin.apply(null, args);
  } else if (typeof plugins.install === "function") {
    plugin.install.apply(plugin, args);
  }

  // 添加到数组中
  installedPlugins.push(plugin);
  return this;
}
// Vue3.x的use的原理
// 3.x中的use用了一个set结构存储已经安装的插件
function Use(plugin, ...options) {
  if (installedPlugins.has(plugin)) {
    // 如果有，报警告
  } else if (plugin && isFunction(plugin.install)) {
    // 接着判断install方法是不是一个函数,如果是，添加到set中并执行
    installedPlugins.add(plugin);
    plugin.install(app, ...options);
  } else if (isFunction(plugin)) {
    // 如果plugin是一个函数，直接执行
    installedPlugins.add(plugin);
    plugin(app, ...options);
  } else {
    // 如果都不符合，报警告
  }

  return app;
}
