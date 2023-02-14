import Vue from 'vue'
import App from './App.vue'

// 引入echarts
import echarts from 'echarts'
// 引入中国地图
import china from 'echarts/map/json/china.json'
import city from 'echarts/map/json/china-cities.json'
import country from 'echarts/map/json/china-contour.json'
import world from 'echarts/map/json/world.json'

echarts.registerMap('china',china)
echarts.registerMap('city',city)
echarts.registerMap('country',country)
echarts.registerMap('world',world)

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
