<template>
  <div>
    <home message='curry' @increment='getCounter' @click="getCounter"></home>
    <h2>{{ counter }}</h2>
    <button @click='increment'>+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './Home.vue'

const counter = ref(0)
const increment = () => {
  counter.value++
}

const getCounter = (payload) => {
  console.log(payload);
}
</script>

<style scoped></style>