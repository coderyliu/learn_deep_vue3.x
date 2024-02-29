// Vuex和VueRouter的原理是差不多的，我们通过new Vuex和new VueRouter创建出来的全局store和router对象都会被挂载到根对象上
// 那么子组件想要使用怎么办?依然是通过Vue.use()的时候，在install的时候通过Vue.mixin()做全局混入

// v是vue实例
let Vue;
const install = (v) => {
  Vue = v;
  // 全局混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        // 如果是根页面，直接将自己的store赋值给自己
        this.$store = this.$options.store;
      } else {
        // 除了根页面，将上级的$store赋值给自己的$store
        this.$store = this.$parent && this.$parent.$store;
      }
    },
    destroyed() {
      this.$store = null;
    },
  });
};

// 创建类Store
class Store {
  constructor(options) {
    // options接受传入的store对象
    this.vm = new Vue({
      data: {
        state: options.state, //确保state时响应式的
      },
    });

    // getter
    let getters = options.getters || {};
    this.getters = {};
    Object.keys(getters).forEach((getterName) => {
      Object.defineProperty(this.getters, getterName, {
        get() {
          return getters[getterName](this.state);
        },
      });
    });

    // mutations
    let mutations = options.mutations || {};
    this.mutations = {};
    Object.keys(mutations).forEach((mutationName) => {
      this.mutations[mutationName] = (payLoad) => {
        mutations[mutationName](this.state, payLoad);
      };
    });

    // action
    let actions = options.actions || {};
    this.actions = {};
    Object.keys(actions).forEach((actionName) => {
      this.actions[actionName] = (payLoad) => {
        actions[actionName](this.state, payLoad);
      };
    });
  }
  // 获取state直接返回
  get state() {
    return this.vm.state;
  }

  // commit方法，执行mutations的name方法
  commit(name, payLoad) {
    this.mutations[name](payLoad);
  }

  // dispatch反法，执行actions的name方法
  dispatch(name, payLoad) {
    this.actions[name](payLoad);
  }
}

// 向外暴露接口
export default {
  install,
  Store,
};
