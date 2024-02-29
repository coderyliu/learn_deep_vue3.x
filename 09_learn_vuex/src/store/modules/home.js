const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 10,
    };
  },
  getters: {
    doubleHomeCounter(state) {
      return state.homeCounter * 2;
    },
    otherGetter(state) {
      return 100;
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit("increment");
      context.dispatch("incrementAction", null, { root: true });

      // 修改或派发根的state
      context.commit("increment", null, { root: true });
    },
    decrementAction({ state }) {
      const { homeCounter } = state;
      console.log(homeCounter);
    },
  },
};

export default homeModule;
