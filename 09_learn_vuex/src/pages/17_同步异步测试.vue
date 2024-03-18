<template>
  <div>
    <h2>{{ homeCounter }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 没有响应式
const { homeCounter } = store.state.home

// 具有响应式
const counter = computed(() => store.state.home.homeCounter)

const increment = () => {
  console.log('start')
  store.commit('home/increment')
  console.log('middle')
  store.dispatch('home/decrementAction')
  console.log('end')
  // * dispatch如果里面的代码是同步的，那么也是同步的，如果有异步代码，按照事件循环执行
  // start => sync1 => sync2 => middle => async1 => 11 => async2 => end
}

const decrement = () => {
  console.log('start')
  store.commit('home/decrement')
  console.log('middle')
  store.dispatch('home/decrementActionTwo')
  console.log('end')
  // start => sync1 => sync2 => middle => async1 => async2 => end => async ing2 => async ing
}
</script>

