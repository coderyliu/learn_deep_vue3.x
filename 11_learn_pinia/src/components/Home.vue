<template>
  <div>
    <h2>Home</h2>
    <button @click='add'>+1</button>
  </div>
</template>

<script>
import { useMainStore } from '../store/index'
export default {
  setup() {
    const store = useMainStore()

    const add = () => {
      store.counter++
    }

    return {
      store,
      add
    }
  }
}
</script>

<style scoped></style>