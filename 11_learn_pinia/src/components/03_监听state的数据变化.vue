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

    const increment = () => {
      store.incrementAction()
    }

    const decrement = () => {
      store.decrementAction()
    }

    // 监听state中的数据变化
    const subscribe = store.$subscribe((mutation, state) => {
      console.log(mutation)
      console.log(state)
    }, {
      detached: true
    })
    return {
      store,
      increment,
      decrement
    }
  }
}
</script>

<style scoped></style>