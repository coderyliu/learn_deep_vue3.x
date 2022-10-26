<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
    <HomeSearchBar></HomeSearchBar>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import HomeNavBar from './c-cpns/HomeNavBar.vue';
import HomeSearchBar from './c-cpns/HomeSearchBar.vue'

// 首页网络数据请求
const homeStore = useHomeStore()
homeStore.fetchHomeRecommendLocaltionAction()

</script>

<style lang="less" scoped>
.home{
  .banner{
    img{
      width:100%;
      object-fit: fill;
    }
  }
}

</style>
