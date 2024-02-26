import { createApp } from "vue";
import App from "./08_setup的顶层编写方式/App.vue";

const app = createApp(App);

// 自定义全局指令
// app.directive('focus',{
//   mounted(el){
//     el.focus()
//   }
// })

// app.mixin({
//   data(){
//     return {
//       message:'app'
//     }
//   },
//   created(){
//     console.log('main mixin created');
//   }
// })

app.mount("#app");
