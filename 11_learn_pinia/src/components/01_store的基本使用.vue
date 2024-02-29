<template>
  <div>
    <h2>{{ store.counter }}</h2>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
  </div>
</template>

<script>
import { useMainStore } from '../store/index'
export default {
  setup() {
    const store = useMainStore()

    // store实例，状态容器，是一个响应式对象reactive实现
    // console.log(store)

    const increment = () => {

    }

    const decrement = () => {

    }
    return {
      store,
      increment,
      decrement
    }
  }
}
</script>

<style scoped></style>