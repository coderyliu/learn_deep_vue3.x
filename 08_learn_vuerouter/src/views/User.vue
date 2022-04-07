<template>
  <div>
    <h2>{{$route.params.username}}</h2>
  </div>
</template>

<script>
  import {useRoute} from 'vue-router'
  export default {
    setup(){
      const route=useRoute()
      console.log(route.params)
    }
  }
</script>

<style scoped>

</style>