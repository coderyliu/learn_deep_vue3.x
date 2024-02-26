<template>
  <div>
    <input type="number" v-model='counter'>

    <h2>当前计数:{{ showNumber.toFixed(0) }}</h2>
  </div>
</template>

<script>
import gasp from 'gsap'
export default {
  data() {
    return {
      counter: 0,
      showNumber: 0
    }
  },
  watch: {
    counter(newValue) {
      gasp.to(this, { duration: 1, showNumber: newValue })
    }
  }
}
</script>

<style scoped></style>