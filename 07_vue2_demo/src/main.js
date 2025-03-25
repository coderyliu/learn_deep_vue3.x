import Vue from "vue";
import App from "./App.vue";

// 引入store
import store from "./store";

// 引入vant
import Vant from "vant";
import "vant/lib/index.css";

// 引入echarts
import echarts from "echarts";
// 引入中国地图
import china from "echarts/map/json/china.json";
import city from "echarts/map/json/china-cities.json";
import country from "echarts/map/json/china-contour.json";
import world from "echarts/map/json/world.json";

echarts.registerMap("china", china);
echarts.registerMap("city", city);
echarts.registerMap("country", country);
echarts.registerMap("world", world);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(Vant);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
