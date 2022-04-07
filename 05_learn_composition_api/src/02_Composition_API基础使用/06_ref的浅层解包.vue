<template>
  <div>
    <h2>{{message}}</h2>

    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数:{{result}}</h2>

    <!-- ref的解包只能是一个浅层解包,info是一个普通对象不会对他解包 -->
    <h2>当前计数:{{info.result.value}}</h2>

    <!-- 当最外层包裹的是一个reactive可响应式对象，也会对其解包 -->
    <h2>当前计数:{{reactiveInfo.counter}}</h2>
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

      // 放到一个普通对象中
      const info={result}

      // 放到reactive可响应式对象中
      const reactiveInfo=reactive({counter})

      const increment=()=>{
        result.value++
        console.log(result.value);
      }
      
      return {
        counter,
        increment,
        result,
        info,
        reactiveInfo
      }
    }
  }
</script>

<style scoped>

</style>