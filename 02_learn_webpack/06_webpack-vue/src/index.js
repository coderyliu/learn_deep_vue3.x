const {age}=require('./js/foo')

import {add} from './js/math'

import {createApp} from 'vue'
import App from './vue/App.vue'

import './js/component'

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