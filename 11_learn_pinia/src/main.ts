import { createApp } from 'vue'
import App from './App.vue'
import {createPinia,PiniaPluginContext} from 'pinia'

const app=createApp(App)
const pinia=createPinia()

// 可以给pinia增加一些属性和方法
pinia.use(({app,store,pinia})=>{
  store.env='dev'
  store.add=()=>{
    console.log(1111)
  }
})

app.use(pinia)
app.mount('#app')
