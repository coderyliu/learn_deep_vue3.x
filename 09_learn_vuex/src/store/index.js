import {
  createStore
} from 'vuex'
import home from './modules/home'
import user from './modules/user'

const store = createStore({
  state() {
    return {
      // 对于各个模块的state,vuex会把他们合并到rootState中
      // 格式是：{rootCounter:0,home:{},user:{}}
      // 访问方式:$store.state.home.xxx
      rootCounter:0
    }
  },
  getters: {
    doubleRootCounter(state,getters){
      return state.rootCounter*2
    },
    // 默认情况下，如果模块中也有重名的getters,那么会优先使用根的getters
    // 并且控制台会报错
    // otherGetter(){
    //   return 1
    // }
  },
  mutations: {
    // 默认情况下，对于mutations
    // 如果各个模块中有相同的事件类型，那么commit的时候，所有的事件都会被执行
    increment(state){
      state.rootCounter++
    }
  },
  actions: {
    // 默认情况下,actions的dispatch重名问题，也会全部执行
    incrementAction(context){
      context.commit('increment')
    }
  },
  modules:{
    home,
    user
  }
})

export default store