<template>
  <div class="detail">
    <DetailNavBar></DetailNavBar>
    <TabControl :tab-list="navBarList" @tab-click="handleTabClick" v-if="isShowNavBar"></TabControl>
    <div class="mainner" v-if="mainPart">
      <DetailSwiper :swiper-data="mainPart?.topModule?.housePicture?.housePics"></DetailSwiper>
      <Detailnfos :desc-infos="mainPart?.topModule"></Detailnfos>
      <DetailFacility :facility-info="mainPart?.dynamicModule?.facilityModule?.houseFacility"></DetailFacility>
      <DetailIntroduce :introduce-info="mainPart?.dynamicModule?.landlordModule"></DetailIntroduce>
      <DetailBook :book-info="mainPart?.dynamicModule?.rulesModule"></DetailBook>
      <DetailPosition :position-info="mainPart?.dynamicModule?.positionModule"></DetailPosition>
      <DetailMessage :detail-info="mainPart?.introductionModule"></DetailMessage>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import useDetailStore from '@/store/modules/detail';
import { navBarList } from '@/common/index'
import useScrollPosition from '@/hooks/useScrollPosition';

import TabControl from '@/components/tab-control/index.vue'
import DetailNavBar from './c-cpns/DetailNavBar.vue';
import DetailSwiper from './c-cpns/DetailSwiper.vue';
import Detailnfos from './c-cpns/Detailnfos.vue';
import DetailFacility from './c-cpns/DetailFacility.vue';
import DetailIntroduce from './c-cpns/DetailIntroduce.vue';
import DetailBook from './c-cpns/DetailBook.vue';
import DetailPosition from './c-cpns/DetailPosition.vue';
import DetailMessage from './c-cpns/DetailMessage.vue';

const route = useRoute()
const router = useRouter()
const detailStore = useDetailStore()

// ?是否展示顶部导航
const { scrollTop } = useScrollPosition()
const isShowNavBar = computed(() => scrollTop.value >= 300)


const { detailInfos } = storeToRefs(detailStore)

const mainPart = computed(() => detailInfos.value.mainPart)


// 处理tab-bar的点击
const handleTabClick = (index) => {
  console.log(index)
}

// 发送网络请求详情页数据
detailStore.fetchDetailInfosAction(route.params.id)
</script>

<style lang="less" scoped>
.detail {
  height: 2000px;
}
</style>
