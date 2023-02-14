<template>
  <div id="nav">
    <Page></Page>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import Page from "./views/01_Vue.set的原理.vue"

export default {
  components:{
    Page
  },
  methods: {},
};
</script>

<style>

</style>
