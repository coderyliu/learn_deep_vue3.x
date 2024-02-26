<template>
  <div id="app">
    <Page :date="date"></Page>
  </div>
</template>

<script>
// import Page from "./components/01_Vue.set的原理.vue"
import Page from './components/02_Vue生命周期的理解.vue'
// import Page from './components/03_中国地图绘制.vue'
// import Page from './components/04_绘制城市地图.vue'
// import Page from './components/05_绘制世界地图.vue'

export default {
  name: 'App',
  components: {
    Page
  },
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
