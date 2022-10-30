<template>
  <div>
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const onClickLeft = () => {
  router.back()
}

</script>

<style lang="less" scoped>

</style>
