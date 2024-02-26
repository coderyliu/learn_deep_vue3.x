<template>
  <div>
    Category主页
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  }
}
</script>

<style scoped></style>