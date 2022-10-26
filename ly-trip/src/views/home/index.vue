<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
    <HomeSearchBar></HomeSearchBar>
    <HomeCategory></HomeCategory>
    <HomeMainer></HomeMainer>
    <div class="search-bar-wrap" v-if="isShowSearchBar">
      <SearchBar start-date="10.26" end-date="10.27"></SearchBar>
    </div>
  </div>
</template>
x 
<script setup>
import { ref, watch } from 'vue';

import useHomeStore from '@/store/modules/home';
import useScrollPosition from '@/hooks/useScrollPosition'

import HomeNavBar from './c-cpns/HomeNavBar.vue';
import HomeSearchBar from './c-cpns/HomeSearchBar.vue'
import HomeCategory from './c-cpns/HomeCategory.vue';
import HomeMainer from './c-cpns/HomeMainer.vue';
import SearchBar from '@/components/search-bar/index.vue'

const currentPage = ref(1)
const isShowSearchBar = ref(false)

// 首页网络数据请求
const homeStore = useHomeStore()
homeStore.fetchHomeRecommendLocaltionAction()
homeStore.fetchHomeCategoriesAction()
homeStore.fetchHomeHousesAction(currentPage.value)

// ?动态加载首页house数据
const { isReachBottom, scrollTop } = useScrollPosition()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    currentPage.value++
    homeStore.fetchHomeHousesAction(currentPage.value).then(res => {
      isReachBottom.value = false
    })
  }
})

watch(scrollTop, (newValue) => {
  if (newValue > 360) {
    isShowSearchBar.value = true
  } else {
    isShowSearchBar.value = false
  }
})

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
      object-fit: fill;
    }
  }
  .search-bar-wrap{
    position: fixed;
    top:0;
    left:0;
    right:0;
    
    padding:15px;
    background-color: #fff;
    
    z-index:10;
  }
}
</style>
