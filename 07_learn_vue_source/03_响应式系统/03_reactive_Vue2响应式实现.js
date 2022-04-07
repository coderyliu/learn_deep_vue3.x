class Dep {
  constructor() {
    this.subscribes = new Set()
  }

  depend() {
    if (activeEffect) {
      this.subscribes.add(activeEffect)
    }
  }

  notify() {
    this.subscribes.forEach(effect => {
      effect()
    })
  }
}

// 自动收集依赖
let activeEffect = null

function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

const targetMap = new WeakMap()

function getDep(target, key) {
  // 1.根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}

// Vue2响应式对数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {

    const dep = getDep(raw, key)
    let value = raw[key]
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      reactive(value)
    }

    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })

  return raw
}

// 测试代码
const info = reactive({
  counter: 100,
  name: 'coder',
  nums:[1,2,3]
})
const foo = reactive({
  height: 1.88,
  friends: {
    name: 'kobe'
  }
})

// watchEffect1
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
  console.log('effect4:', foo.height)
})

// watchEffect5
watchEffect(function () {
  console.log('effect5:', info.nums[0])
})
// watchEffect5
watchEffect(function () {
  console.log('effect5:', info.nums)
})

// watchEffect6
watchEffect(function () {
  console.log('effect6:', foo.friends.name)
})

info.counter++

// info.nums = []
// info.nums[info.nums.length] = 5
info.nums.splice(0,1)

foo.friends.name='coderwhy'
foo.friends.name = 'curry'
foo.friends.name = 'james'
// info.name='kobe'

// foo.height=2