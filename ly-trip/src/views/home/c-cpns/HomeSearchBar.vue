<template>
  <div class="home-search-wrapper">
    <div class="location">
      <div class="city">广州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

// 跳转到city页
const positionClick = () => {
  router.push('/city')
}

// ?获取地理位置的API
// ?关于地理位置的逻辑，其实很简单，就是调用下面这个API，获取到一个对象,拿到经纬度，根据经纬度向百度地图或者高德地图发起请求，拿到具体的位置信息
navigator.geolocation.getCurrentPosition((res) => {
  console.log(res)
}, err => {
  console.log(err)
}, {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
})

</script>

<style lang="less" scoped>
.home-search-wrapper {
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 15px;

    .city {
      flex: 1;
    }

    .position {
      display: flex;
      align-items: center;
      width: 74px;

      img {
        width: 16px;
        margin-left: 2px;
      }

    }
  }
}
</style>
