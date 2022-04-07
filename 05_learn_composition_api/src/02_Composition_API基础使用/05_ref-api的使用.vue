<template>
  <div>
    <h2>{{message}}</h2>

    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数:{{result}}</h2>
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
  import {reactive,ref} from 'vue'
  export default {
    props:{
      message:{
        type:String
      }
    },
    setup(){
      let counter=100
      // const result=reactive(100)

      const result=ref(counter)

      const increment=()=>{
        result.value++
        console.log(result.value);
      }
      
      return {
        counter,
        increment,
        result
      }
    }
  }
</script>

<style scoped>

</style>