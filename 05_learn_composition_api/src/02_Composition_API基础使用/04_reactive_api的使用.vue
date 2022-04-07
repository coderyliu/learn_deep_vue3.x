<template>
  <div>
    <h2>{{message}}</h2>

    <h2>当前计数:{{result.counter}}</h2>
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    props:{
      message:{
        type:String
      }
    },
    setup(){
      let counter=100

      const result=reactive({counter})

      const increment=()=>{
        result.counter++
        console.log(result.counter)
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