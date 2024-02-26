// 自动收集依赖
class Dep {
  constructor() {
    this.subscribe = new Set()
  }

  depend() {
    if (activeEffect) {
      this.subscribe.add(activeEffect)
    }
  }

  notify() {
    this.subscribe.forEach(effect => {
      effect()
    })
  }
}

let activeEffect = null

function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

const targetMap = new WeakMap()

function getDep(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap=new Map()
    targetMap.set(target,depsMap)
  }

  let dep=depsMap.get(key)
  if(!dep){
    dep=new Dep()
    depsMap.set(key,dep)
  }

  return dep
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, value) {
      const dep=getDep(target,key)
      target[key]=value
      dep.notify()
    }
  })
}

const info = reactive({
  name: 'coder',
  age: 18,
  counter: 1
})
const mes = reactive({
  height: 1.88
})

watchEffect(function () {
  console.log('effect1:', info.counter * 2, info.name)
})

// watchEffect2
watchEffect(function () {
  console.log('effect2:', info.counter * info.counter)
})

// watchEffect3
watchEffect(function () {
  console.log('effect3:', info.counter + 10, info.name)
})

// watchEffect4
watchEffect(function () {
  console.log('effect4:', mes.height)
})

info.counter++