import Vue from 'vue'
import App from './App.vue'

// 引入echarts
import echarts from 'echarts'
// 引入中国地图
import china from 'echarts/map/json/china.json'

echarts.registerMap('china',china)

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
