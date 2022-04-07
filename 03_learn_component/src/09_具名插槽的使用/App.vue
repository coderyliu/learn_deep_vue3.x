<template>
  <div>
    <nav-bar :name='name'>
      <!-- <template v-slot:left>
        <h2>我是left</h2>
      </template>

      <template v-slot:center>
        <h2>我是center</h2>
      </template>

      <template v-slot:right>
        <h2>我是right</h2>
      </template> -->

      <!-- v-slot语法糖 -->
       <template #left>
        <h2>我是left</h2>
      </template>

      <template #center>
        <h2>我是center</h2>
      </template>

      <template #right>
        <h2>我是right</h2>
      </template>

      <!-- 动态插槽名 -->
      <template #[name]>
        <h2>动态插槽名</h2>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  export default {
    components:{
      NavBar
    },
    data(){
      return {
        name:'coder'
      }
    }
  }
</script>

<style scoped>

</style>