<template>
  <div>
    <counter v-if='isShow'></counter>
    <home v-else></home>
    <hr>
    <button @click='toggle'>切换</button>
  </div>
</template>

<script>
// import Counter from './components/07_pinia插件的使用.vue'
import Counter from './components/08_pinia组合式API使用.vue'
import Home from './components/Home.vue'
import { useMainStore } from './store/index'
// const store=useMainStore()
export default {
  components: {
    Counter,
    Home
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
      // store.counter++
    }
  },
}
</script>

<style scoped></style>