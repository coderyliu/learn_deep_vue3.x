// 现在还要在完善一下，对于对象的深度监听以及，Object.defineProperty()不能实现对数组的响应式
class Dep {
  constructor() {
    this.subscribes = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribes.add(activeEffect);
    }
  }

  notify() {
    this.subscribes.forEach((effect) => {
      effect();
    });
  }
}

// 自动收集依赖
let activeEffect = null;

function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

const targetMap = new WeakMap();

function getDep(target, key) {
  // 1.根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}

// Vue3响应式对数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      const value = target[key];
      if (typeof value === "object" && value !== null) {
        return reactive(value);
      }
      dep.depend();
      return Reflect.get(target, key);
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      Reflect.set(target, key, newValue);
      // target[key]=newValue
      dep.notify();
    },
  });
}

// 测试代码
const data = {
  counter: 100,
  name: "coder",
  nums: [1, 2, 3],
};
const info = reactive({
  counter: 100,
  name: "coder",
  nums: [1, 2, 3],
});
const foo = reactive({
  height: 1.88,
  friends: {
    name: "kobe",
  },
});

// watchEffect1
watchEffect(function () {
  console.log("effect1:", info.counter * 2, info.name);
});

// watchEffect2
watchEffect(function () {
  console.log("effect2:", info.counter * info.counter);
});

// watchEffect3
watchEffect(function () {
  console.log("effect3:", info.counter + 10, info.name);
});

// watchEffect4
watchEffect(function () {
  console.log("effect4:", foo.height);
});

// watchEffect5
watchEffect(function () {
  console.log("effect5:", info.nums[0]);
});

// watchEffect6
watchEffect(function () {
  console.log("effect6:", foo.friends.name);
});

info.counter++;

info.nums[0] = 2;
info.nums[info.nums.length] = 5;

// foo.friends='curry'//这样只能实现对对象的浅层响应式及监听
foo.friends.name = "curry";
// info.name='kobe'

// foo.height=2
