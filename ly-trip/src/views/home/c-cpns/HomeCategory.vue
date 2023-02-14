<template>
  <div class="home-category">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/store/modules/home';

// ?分类数据
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.home-category {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100vw;
  height: 80px;
  margin-top: 5px;
  padding: 0 8px;
  box-sizing: border-box;

  overflow-x: auto;

  // ?隐藏scroll滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>