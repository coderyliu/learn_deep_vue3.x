<template>
  <div>
    <h2>{{ message }}</h2>

    <h2>当前计数:{{ counter }}</h2>
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  },
  setup() {
    let counter = 100

    const increment = () => {
      counter++
      console.log(counter)
    }

    return {
      counter,
      increment
    }
  },
  mounted() {
    console.log(this.counter)
  }
}
</script>

<style scoped></style>