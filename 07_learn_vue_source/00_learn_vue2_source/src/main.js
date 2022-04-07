import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')

// app全局的vue实例实例对象
console.log(app)