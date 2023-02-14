<template>
  <div class="loading-wrap" @click="cancelLoading">
    <div class="bg">
      <img src="@/assets/imgs/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main'

const mainStore = useMainStore()

// 点击取消loading展示
const cancelLoading = () => {
  mainStore.isLoading = false
}
</script>

<style lang="less" scoped>
.loading-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, .5);

  z-index: 99;

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104px;
    height: 104px;

    background: url(@/assets/imgs/home/loading-bg.png) no-repeat center center;

    img {
      width: 70px;
      height: 70px;
      margin-top: 8px;
    }
  }

}
</style>
