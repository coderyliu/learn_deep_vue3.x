<template>
  <div>
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <hr />
    <button @click='increment'>+1</button>
    <button @click='add'>+1</button>
    <button @click='decrement'>-1</button>
    <button @click='incrementN({ count: 10 })'>+10</button>
    <hr />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    //  ...mapMutations(['increment','decrement','incrementN']),
    ...mapMutations({
      add: 'increment'
    })
  },
  setup() {
    const storeMutations = mapMutations(['increment', 'decrement', 'incrementN'])
    return {
      ...storeMutations
    }
  }
};
</script>

<style scoped></style>
