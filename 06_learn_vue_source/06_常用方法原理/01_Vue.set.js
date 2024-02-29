// Vue2.x中的数据的双向绑定是基于Object.defineProperty的，只能对数据的
// 修改和获取做数据劫持，不能对数据的添加和删除做绑定
// Vue.set和Vue.Delete是官方提供的全局方法做响应式的添加和删除

// 它的实现原理
export default function set(target, key, value) {
  // 判断是不是数组，如果是数组，判断索引值是否有效
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length == Math.max(target.length, key);
    // 如果有效，把相应的索引值的地方通过splice()方法替换
    target.splice(key, 1, val);

    return value;
  }
  // 然后判断target是不是对象，如果是判断是不是key是不是在对象内还是在原型上
  if (key in target && !(key in Object.prototype)) {
    // 如果key在对象上只是简单的替换
    target[key] = value;
    return value;
  }

  // 判断target是不是响应式的，如果不是，只是简单地替换
  const ob = target.__ob__;
  // 判断是否是响应式对象之后还有判断target是不是跟对象，不能为根对象，如果为根对象或者组件实例，直接返回
  if (!ob) {
    target[key] = value;

    return value;
  }
  // 如果是响应式的对象，通过Object.defineProperty做数据劫持
  defineReactive(ob.value, key, value);
  // 通知更新操作
  ob.dep.notify();

  return value;
}
