// 服务端需要Vue实例，每一次客户端请求页面，服务端渲染都是用新的Vue实例
// 不同的用户不能访问相同的Vue实例,服务端需要一个生成Vue实例的工厂函数

// 专门用于服务端渲染的入口文件
import {
  createApp
} from './main'

export default context => { //生成Vue实例的工厂函数
  return new Promise((resolve, reject) => {
    const app = createApp()
    const router = app.$router
    const store = app.$store

    // context包含服务端需要传递给Vue实例的一些数据，比如这里的路由
    const {
      url
    } = context
    const {
      fullPath
    } = router.resolve(url).route

    // 判断当前路由在Vue实例中是否存在
    if (fullPath !== url) {
      return reject({
        url: fullPath
      })
    }

    router.push(url)//设置Vue实例的当前路由

    router.onReady(() => {
      const matchComponents = router.getMatchedComponents()//判断当前路由是否有对应组件
      if (!matchComponents.length) {
        return reject({
          code: 404
        })
      }

      Promise.all(matchComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)//返回Vue实例
      }).catch(reject)
    }, reject)
  })
}