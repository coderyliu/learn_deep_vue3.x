<template>
  <div>
    <button @click='btnClick'>按钮点击</button>
    1
  </div>
</template>

<script>
  import emitter from './utils/eventBus'
  export default {
    methods:{
      btnClick(){
        emitter.emit('coder',{name:'liu',age:21})
      }
    }
  }
</script>

<style scoped>

</style>