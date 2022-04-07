<template>
  <div>
    <home message='hahaha' id='aaa' class='bbb'></home>
  </div>
</template>

<script>
  import Home from './07_readonly的使用.vue'
  export default {
    components:{
      Home
    },
    data(){
      return {
        mes:'hello'
      }
    }
  }
</script>

<style scoped>

</style>