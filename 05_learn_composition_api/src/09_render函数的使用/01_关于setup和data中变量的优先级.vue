<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  // 关于setup和options-api中的data,methods中发生变量冲突的时候
  // vue会先在setup中优先使用
  // 如果setup函数中没有，会在data中找
  data() {
    return {
      message: 'kobe'
    }
  },
  setup() {
    const message = 'curry'
    return {
      message
    }
  }
}
</script>

<style scoped></style>