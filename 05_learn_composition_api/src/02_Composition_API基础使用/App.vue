<template>
  <div>
    <home message='hahaha' id='aaa' class='bbb'></home>
  </div>
</template>

<script>
// import Home from './02_setup函数的参数.vue'
// import Home from './03_setup函数的返回值.vue'
import Home from './05_ref-api的使用.vue'
// import Home from './07_readonly的使用.vue'
export default {
  components: {
    Home
  },
  data() {
    return {
      mes: 'hello'
    }
  }
}
</script>

<style scoped></style>