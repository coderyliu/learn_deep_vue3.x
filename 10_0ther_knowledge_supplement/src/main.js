import Vue from 'vue'
// import App from './01_nextTick的使用和原理/App.vue'
import App from './02_SSR/App.vue'

import {createRouter} from './router'
import {createStore} from './store'

// 1-在main.js中封装一个工厂函数用于返回一个Vue实例
export function createApp() {
  const router=createRouter()
  const store=createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return app
}