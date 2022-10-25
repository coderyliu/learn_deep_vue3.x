import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式重置
import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(router).use(store).mount('#app')