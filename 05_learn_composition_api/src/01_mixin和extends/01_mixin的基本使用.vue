<template>
  <div>
    <h2>{{message}}</h2>
    <button @click='foo'>按钮</button>
  </div>
</template>

<script>
  import {mix} from './mixins/mixin'
  export default {
    mixins:[mix],
    data(){
      return {
        title:'world'
      }
    }
  }
</script>

<style scoped>

</style>