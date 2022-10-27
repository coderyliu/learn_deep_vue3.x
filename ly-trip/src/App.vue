<template>
  <div>
    <router-view></router-view>
    <TabBar v-if="!route?.meta?.hiddenTabBar"></TabBar>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import useMainStore from '@/store/modules/main'

import TabBar from '@/components/tab-bar/index.vue'
import Loading from '@/components/loading/index.vue'

const route=useRoute()

const mainStore=useMainStore()
const { isLoading }=storeToRefs(mainStore)
</script>

<style scoped>

</style>
