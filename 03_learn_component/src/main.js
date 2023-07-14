import { createApp } from 'vue'
import App from './08_插槽的基本使用/App.vue'

// import App from './15_组件v-model的实现/App.vue'
createApp(App).mount('#app')

// 默认情况
// import {sum} from './12_异步组件的使用/utils/math'

// console.log(sum(1,1))

// webpack分包
// import('./12_异步组件的使用/utils/math').then((res)=>{
//   console.log(res.sum(1,1))
// })
