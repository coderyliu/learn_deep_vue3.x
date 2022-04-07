<template>
  <div>
    <h2>{{store.counter}}</h2>
    <h2>{{store.doubleCounter}}</h2>
    <h2>{{counter}}</h2>
    <button @click='increment(1)'>+1</button>
    <button @click='decrement(1)'>-1</button>
  </div>
</template>

<script>
  import {useMainStore} from '../store/index'
  import {computed} from 'vue'
  import {storeToRefs} from 'pinia'
  export default {
    setup(){
      const store=useMainStore()

      // 注：当我们从store中拿出计算属性或别的值的时候，相当于从reactive对象中结构
      // 那么这时候的值不再是响应式的了
      // 可以通过storeToRefs把值变为ref式的响应式对象
      const refStore=storeToRefs(store)
      const {counter}=refStore

      const increment=(n)=>{
        store.incrementAction(n)
      }

      const decrement=(n)=>{ 
        store.decrementAction(n)
      }

      return {
        store,
        increment,
        decrement,
        refStore,
        counter
      }
    }
  }
</script>

<style scoped>

</style>