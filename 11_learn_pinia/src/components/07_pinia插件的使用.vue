<template>
  <div>
    <h2>{{ store.env }}</h2>
    <h2>{{ store.add() }}</h2>
  </div>
</template>

<script>
import { useMainStore } from '../store/index'
export default {
  setup() {
    const store = useMainStore()

    return {
      store
    }
  }
}
</script>

<style scoped></style>