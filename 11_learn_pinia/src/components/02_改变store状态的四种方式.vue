<template>
  <div>
    <h2>{{store.counter}}</h2>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
  </div>
</template>

<script>
  import {useMainStore} from '../store/index'
  export default {
    setup(){
      const store=useMainStore()

      // store实例，状态容器，是一个响应式对象reactive实现
      // console.log(store)

      // 方式一：直接通过store.xxx的方式直接改变
      // 这种方式dev-tool也是能够监听到的
      // const increment=()=>{
      //   store.counter++
      // }
      // const decrement=()=>{
      //   store.counter--
      // }

      // 方式二：通过store.$patch的方式改变
      // 1.传递的参数是一个对象，相当于赋值操作，有弊端，赋值
      // 2.传递的参数是一个函数，可以做更多的操作,第一个参数是state
      // const increment=()=>{
        // store.$patch({
        //   counter:store.counter+1
        // })
      //   store.$patch((state)=>{
      //     state.counter++
      //   })
      // }
      // const decrement=()=>{
        //  store.$patch({
        //   counter:store.counter-1
        // })
        //  store.$patch((state)=>{
        //    state.counter--
        //  })
      // }

      // 方式三:通过actions修改
      const increment=()=>{
        store.incrementAction()
      }

      const decrement=()=>{ 
        store.decrementAction()
      }
      return {
        store,
        increment,
        decrement
      }
    }
  }
</script>

<style scoped>

</style>