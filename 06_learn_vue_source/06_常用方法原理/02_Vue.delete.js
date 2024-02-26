// Vue.delete方法的原理

export default function del(target,key){
  if(Array.isArray(target)&&isValidArrayIndex(key)){
    target.splice(key,1)
    return 
  }

  // 判断是不是响应式对象,还要判断是不是根对象或者是组件实例
  const ob=(target).__ob__
  if(!ob){
    return 
  }

  // 判断key是target中的而不是原型中的属性
  if(!hasOwn(target,key)){
    return 
  }


  delete target[key]
  // 触发依赖，更新
  ob.dep.notify()

}