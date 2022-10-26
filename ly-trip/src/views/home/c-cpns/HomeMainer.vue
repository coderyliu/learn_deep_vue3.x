<template>
  <div class="home-content">
    <div class="title">热门精选</div>
    <div class="list-wrapper">
      <template v-for="(house, index) in housesList" :key="index">
        <HomeItemV1 v-if="house.discoveryContentType === 9" :house-data="house.data"></HomeItemV1>
        <HomeItemV2 v-else-if="house.discoveryContentType === 3" :house-data="house.data"></HomeItemV2>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useHomeStore from '@/store/modules/home';

import HomeItemV1 from '@/components/home-item-v1/index.vue'
import HomeItemV2 from '@/components/home-item-v2/index.vue'

const homeStore = useHomeStore()
const { housesList } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.home-content {
  width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;

  .title {
    padding: 10px 0 5px 0;

    font-size: 26px;
    font-weight: 600;
  }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
}
</style>
