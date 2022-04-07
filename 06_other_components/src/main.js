import { createApp } from 'vue'
import App from './04_teleport内置组件/App.vue'
import pluginObject from './plugins/pluginObject'
import pluginFunction from './plugins/pluginFunction'

const app=createApp(App)

app.use(pluginObject)
app.use(pluginFunction)

// 自定义全局指令
// app.directive('focus',{
//   mounted(el){
//     el.focus()
//   }
// })

app.mount('#app')
