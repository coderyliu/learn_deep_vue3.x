<template>
  <div class='app'>
    <teleport to='body'>
      <h2>当前计数</h2>
      <button>+1</button>
      <home></home>
    </teleport>

    <teleport to='body'>
      <h2>呵呵呵</h2>
    </teleport>
  </div>
</template>

<script>
  import Home from './Home.vue'
  export default {
    components:{
      Home
    }
  }
</script>

<style scoped>

</style>