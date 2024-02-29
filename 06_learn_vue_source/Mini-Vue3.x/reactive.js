/**
 * @description vue3中的响应式是如何实现的
 * @param {*} target
 */
const reactive = (target) => {
  return new Proxy(target, {
    get(target, key) {
      // 对属性property做数据劫持、依赖收集
      const dep = getDep(target, key);
      
      if (typeof value === "object" && value !== null) {
        return reactive(value);
      }
      
      dep.depend();
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      // 依赖更新
      const dep = getDep(target, key);
      dep.update();
    },
  });
};

let activeEffect = null;

// vue3中的响应式API：computed、watchEffect、watch等
const watchEffect = (effect) => {
  activeEffect = effect;
  effect();
  activeEffect = null;
};

class Dep {
  constructor() {
    this.subscribe = new Set();
  }

  // 收集依赖
  depend() {
    if (activeEffect) {
      this.subscribe.add(activeEffect);
    }
  }

  // 依赖更新
  update() {
    this.subscribe.forEach((effect) => {
      effect();
    });
  }
}

/**
 * @description 获取依赖
 * @param {*} target
 * @param {string|Symbol} key
 */
const targetMap = new WeakMap();
function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}

const info = reactive({
  name: "coder",
  age: 18,
  counter: 1,
});

const mes = reactive({
  height: 1.88,
});

// 调用watchEffect时触发对象属性的get方法，进行依赖收集, 函数作为副作用，在info.name mes.height更新时会被重新调用
watchEffect(() => {
  console.log("effect1", info.name, mes.height);
});

// watchEffect2
watchEffect(() => {
  console.log("effect2:", info.counter * info.counter);
});

// watchEffect3
watchEffect(function () {
  console.log("effect3:", info.counter + 10, info.name);
});

// watchEffect4
watchEffect(function () {
  console.log("effect4:", mes.height);
});

info.counter++;
