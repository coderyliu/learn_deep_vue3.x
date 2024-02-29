<template>
  <div>
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <hr>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    increment() {
      this.$store.dispatch('incrementAction', { count: 10 })
    },
    decrement() {
      this.$store.dispatch({
        type: 'decrementAction',
        count: 10
      })
    }
  },
  mounted() {
    this.$store.dispatch('getHomeMultidata')
  }
}
</script>

<style scoped></style>