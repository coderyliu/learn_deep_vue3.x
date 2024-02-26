class VueRouter {
  constructor(options) {

  }

  init(app) {}
}

let _Vue
VueRouter.install = (Vue) => {
  _Vue = Vue

  // 使用VUe.mixin混入每一个组件
  Vue.mixin({
    // 在每个组件的beforeCreate生命周期去执行
    beforeCreate() {
      if (this.$options.router) {
        // 如果是根组件，执行根组件的this.$router.init()方法
      } else {
        // 非根组件
        this._routerRoot = this.$parent && this.$parent._routerRoot

        // 子组件也要挂上$router
        this.$router = this._routerRoot.$router
      }
    },
  })
}

export default VueRouter