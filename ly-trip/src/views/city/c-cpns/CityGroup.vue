<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门城市"></van-index-anchor>
      <div class="city-list">
        <template v-for="(item) in groupData.hotCities" :key="item.cityId">
          <div class="hot-city" @click="handleCityClick(item)">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="(group) in groupData.cities" :key="group.group">
        <van-index-anchor :index="group.group" />
        <template v-for="(city) in group.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="handleCityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import useCityStore from '@/store/modules/city'

const router = useRouter()
const cityStore = useCityStore()

// ?定义props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// ?动态获取城市列表索引
const indexList = computed(() => {
  const list = props.groupData?.cities?.map(item => item.group)
  list.unshift('#')
  return list
})

// 处理item点击
const handleCityClick = (city) => {
  cityStore.currentCity = city

  // 返回上一级
  router.back()
}
</script>

<style lang="less" scoped>
.city-group {
  .city-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    padding: 10px;

    .hot-city {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 70px;
      height: 30px;
      margin: 5px 5px 0 0;
      border-radius: 14px;
      font-size: 12px;

      cursor: pointer;
      background-color: var(--primary-color);
    }
  }
}
</style>
