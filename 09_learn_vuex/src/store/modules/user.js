const userModule={
  namespaced:true,
  state(){
    return {
      userCounter:1
    }
  },
  getters:{
    doubleUserCounter(state){
      return state.userCounter*2
    }
  },
  mutations:{

  },
  actions:{

  }
}

export default userModule