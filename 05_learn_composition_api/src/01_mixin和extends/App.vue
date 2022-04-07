<template>
  <div>
    <home></home>
    <about></about>
    <h2>{{mes}}</h2>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'

import Button from './pages/Button.vue'
export default {
  name: 'App',
  components: {
    Home,
    About
  },
  extends:Button
}
</script>

<style>

</style>
