<template>
  <div>
    <button @click='toggle'>显示/隐藏</button>

    <transition name='coder'>
      <h2 v-if='isShow'>Hello world</h2>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      toggle(){
        this.isShow=!this.isShow
      }
    }
  }
</script>

<style scoped>
  .coder-leave-from,
  .coder-enter-to{
    opacity:1;
  }

  .coder-leave-to,
  .coder-enter-from{
    opacity:0;
  }

  .coder-leave-active,
  .coder-enter-active{
    transition:opacity 2s ease-in;
  }
</style>