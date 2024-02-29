import { createApp } from "vue";

import App from './02_Composition_API基础使用/App.vue'
// import App from './03_RefAPI的补充/03_ref的其它api.vue'
// import App from './03_RefAPI的补充/04_customRef自定义ref的使用.vue'
// import App from "./05_生命周期钩子/02_生命周期钩子的基本使用.vue";

// import App from "./08_setup的顶层编写方式/App.vue";

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
