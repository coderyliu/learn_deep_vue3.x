<template>
  <div>
    <h2>{{homeCounter}}</h2>
    <h2>{{store.getters['home/doubleHomeCounter']}}</h2>

    <button @click='increment'>home+2</button>
    <button @click='incrementAction'>home+2</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// const { homeCounter } = store.state.home

const homeCounter = computed(()=> store.state.home.homeCounter)

const increment = () => {
  store.commit('home/increment', homeCounter + 1)
}

const incrementAction = () => {
  store.dispatch('home/incrementAction', homeCounter + 1)
}
</script>

<style scoped>

</style>
