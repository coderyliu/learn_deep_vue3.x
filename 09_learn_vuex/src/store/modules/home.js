const homeModule={
  namespaced:true,
  state(){
    return {
      homeCounter:10
    }
  },
  getters:{
    doubleHomeCounter(state){
      return state.homeCounter*2
    },
    otherGetter(state){
      return 100
    }
  },
  mutations:{
    increment(state){
      state.homeCounter++
    }
  },
  actions:{
    incrementAction(context){
      context.commit('increment')

      // 修改或派发根的state
      context.commit('increment',null,{root:true})
    }
  }
}

export default homeModule