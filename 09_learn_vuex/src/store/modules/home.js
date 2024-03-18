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
      console.log("sync1");
      state.homeCounter++;
      console.log("sync2");
    },
    decrement(state) {
      console.log("sync1");
      state.homeCounter--;
      console.log("sync2");
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
      console.log("async1");
      const { homeCounter } = state;
      console.log(homeCounter);
      console.log("async2");
    },
    decrementActionTwo({ state }) {
      console.log("async1");
      new Promise((resolve) => {
        setTimeout(() => {
          console.log("async ing2~");
          resolve();
        }, 2000);
      }).then(() => {
        console.log("async ing~");
      });
      console.log("async2");
    },
  },
};

export default homeModule;
