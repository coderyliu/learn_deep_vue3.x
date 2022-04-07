const {age}=require('./js/foo')

import {add} from './js/math'

import {createApp} from 'vue'
import App from './vue/App.vue'

import '@/component'

add()

console.log(age)

const app=createApp(
  // template:'<h2>你好啊,李银河!!!</h2>',
  // data(){
  //   return {
  //     message:'hello world'
  //   }
  // }
  App
)
app.mount('#app')

// 开启热更新
if(module.hot){
  module.hot.accept('./js/component.js',()=>{
    console.log('component模块热更新');
  })
}