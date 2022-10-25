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
import { ref } from 'vue';
import useCityStore from '@/store/modules/city';
import HomeNavBar from './c-cpns/HomeNavBar.vue';
import HomeSearchBar from './c-cpns/HomeSearchBar.vue'

const cityStore = useCityStore()

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
