<template>
  <div>
    <router-view></router-view>
    <TabBar v-if="!route?.meta?.hiddenTabBar"></TabBar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TabBar from '@/components/tab-bar/index.vue'

const route=useRoute()
</script>

<style scoped>

</style>
