<template>
  <div>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    setup(){
      const name='hello'

      // return的是一个对象，对象的值可以在template模板中使用，因此，setup函数可以替代
      // 像data/methods/computed/watch/生命周期等options-api
      // 这个return的对象就是普通对象，也是键值对结构
      return {
        'name':name
      }
    }
  }
</script>

<style scoped>

</style>