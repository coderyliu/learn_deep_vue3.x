import {defineStore} from 'pinia'
import {listStore} from './list'

export const useMainStore=defineStore('main',{
  state(){
    return {
      counter:1
    }
  },
  getters:{
    // doubleCounter(state):number{
    //   return state.counter*2
    // }
    // 这种就不会报错
    doubleCounter():number{
      return this.counter*2
    }
  },
  actions:{
    // 注意，actions中的函数不能是箭头函数，会丢失this指向
    incrementAction(n:number){
      console.log(this)
      this.counter+=n
    },
    decrementAction(n:number){
      this.counter-=n
    },
    // 实现多个store的内部调用
    getBooksList(){
      return listStore().books
    }
  },
})