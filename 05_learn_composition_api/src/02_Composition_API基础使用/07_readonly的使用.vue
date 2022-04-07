<template>
  <div>
    <button @click='updateState'>修改状态</button>
    <h2>{{readonlyInfo.name}}</h2>
    <h2>{{res.name}}</h2>
    <h2>{{readonlyInfo2}}</h2>
    <!-- <h2>{{readonlyInfo3.name}}</h2> -->
  </div>
</template>

<script>
  import {reactive,ref,readonly} from 'vue'
  export default {
    setup(){
      // 1.普通对象
      const Info1={name:'liu'}
      const readonlyInfo=readonly(Info1)

      // 2.ref响应式对象
      const Info2=ref(Info1)
      const res=Info2.value
      const readonlyInfo2=readonly(Info2)

      // 3.reactive响应式对象
      const Info3=reactive(Info1)
      const readonlyInfo3=readonly(Info3)

      const updateState=()=>{
          // Info1.name='coder'
          // console.log(Info1.name);
          // console.log(readonlyInfo.name);

          // Info3.name='coderwhy'
          // console.log(Info2)
          // console.log(readonlyInfo2.value);
          
          // // readonlyInfo.name='coder'
          // readonlyInfo2.name='coder'
          // readonlyInfo3.name='coder'
      }

      return {
        updateState,
        readonlyInfo,
        readonlyInfo2,
        readonlyInfo3,
        res
      }
    }
  }
</script>

<style scoped>

</style>