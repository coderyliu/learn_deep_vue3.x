<template>
  <div class="detail">
    <!-- <DetailNavBar></DetailNavBar> -->
    <TabControl :tab-list="navBarList" @tab-click="handleTabClick"></TabControl>
    <DetailSwiper></DetailSwiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

import useDetailStore from '@/store/modules/detail';
import { navBarList } from '@/common/index'

import TabControl from '@/components/tab-control/index.vue'
import DetailNavBar from './c-cpns/DetailNavBar.vue';
import DetailSwiper from './c-cpns/DetailSwiper.vue';


const route = useRoute()
const router = useRouter()
const detailStore = useDetailStore()

// 处理tab-bar的点击
const handleTabClick=(index)=>{
  console.log(index)
}

// 发送网络请求详情页数据
detailStore.fetchDetailInfosAction(route.params.id)
</script>

<style lang="less" scoped>

</style>
