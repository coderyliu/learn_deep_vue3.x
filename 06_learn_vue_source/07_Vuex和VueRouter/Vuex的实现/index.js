import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //执行install 全局混入

export default new Vuex.Store({
  state: {
    num: 1,
  },
  getters: {
    getNum(state) {
      return state.num * 2;
    },
  },
  mutations: {
    de(state, payLoad) {
      state.num = payLoad;
    },
  },
  actions: {},
});
