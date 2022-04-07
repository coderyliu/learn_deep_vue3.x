<template>
  <div>
    <h2>slot开始</h2>
    <slot><h2>我是插槽的没默认内容</h2></slot>

    <!-- 多个插槽 -->
    <slot></slot>
    <slot></slot>
    <h2>slot结束</h2>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>