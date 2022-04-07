<template>
  <div>
    <h2>{{ count }}</h2>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    count() {
      return this.counter;
    },
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
};
</script>

<style scoped></style>
