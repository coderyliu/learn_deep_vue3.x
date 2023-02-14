<template>
  <div class="city">
    <div class="top">
      <van-search v-model="searchValue" show-action placeholder="城市/区域/位置" shape="round" @cancel="searchCancel" />
      <van-tabs v-model:active="contentActive" color="#ff9854" line-height="3">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 这块之所以都遍历出来是为了做性能优化，通过v-show的display来做切换，这样效率就很高了，或者用虚拟列表等 -->
      <template v-for="(value, key) in allCities" :key="key">
        <CityGroup :group-data="value" v-show="key === contentActive"></CityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';

import useCityStore from '@/store/modules/city'

import CityGroup from './c-cpns/CityGroup.vue';

const router = useRouter()
const cityStore = useCityStore()

// ?搜索相关逻辑
const searchValue = ref('')
const searchCancel = () => {
  router.back()
}

// ?tab相关逻辑
const contentActive = ref()

// ?城市数据网络请求,放在store中统一管理
cityStore.fetchAllCitiesAction()
const { allCities } = storeToRefs(cityStore)

const currentGroup = computed(() => allCities.value[contentActive.value])

</script>

<style lang="less" scoped>
.city {
  .content {
    // city页面下方滚动的css方案，给content一个固定的高度，让他在自己的区域滚动
    height: calc(100vh - 98px);
    overflow-y: scroll;
  }
}
</style>
