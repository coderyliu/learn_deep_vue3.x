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
        message:"hi"
      }
    },
    methods:{
      foo(){
        console.log('App foo function');
      }
    },
    created(){
      console.log('App created 执行');
    }
  }
</script>

<style scoped>

</style>