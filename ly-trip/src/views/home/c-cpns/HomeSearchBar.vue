<template>
  <div class="home-search-wrapper">
    <!-- 城市选择器 -->
    <div class="section location">
      <div class="city">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 时间筛选 -->
    <div class="section select-time">
      <div class="item left" @click="showCalendar">
        <div class="text">入住</div>
        <div class="time">{{ startTime }}</div>
      </div>
      <div class="center">
        共{{ totalDate }}晚
      </div>
      <div class="item right" @click="showCalendar">
        <div class="text">离店</div>
        <div class="time">{{ endTime }}</div>
      </div>
    </div>

    <!-- 价格，人数 -->
    <div class="section price-counter">
      <div class="price item">价格不限</div>
      <div class="number item">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword">关键字/位置/民宿名</div>

    <!-- 日期选择器 -->
    <van-calendar :round="false" v-model:show="showCalender" type="range" @confirm="onDateConfirm" />

    <!-- 热门建议 -->
    <div class="suggest">
      <template v-for="(item, index) in recommendLocationInfo" :key="index">
        <div class="item" :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn" @click="handleSearchBtnClick">开始搜索</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import useHomeStore from '@/store/modules/home';
import useCityStore from '@/store/modules/city';

import { formatTime, getDiffDays } from '@/utils/index'

const router = useRouter()
const homeStore = useHomeStore()
const cityStore = useCityStore()

// 跳转到city页
const { currentCity } = storeToRefs(cityStore)
const positionClick = () => {
  router.push('/city')

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
}

// ?时间选择相关
const showCalender = ref(false)
const nowTime = new Date()
const newTime = new Date()
newTime.setDate(nowTime.getDate() + 1)
const startTime = ref(formatTime(nowTime))
const endTime = ref(formatTime(newTime))
const totalDate = ref(getDiffDays(nowTime, newTime))

const showCalendar = () => {
  showCalender.value = true
}

const onDateConfirm = (values) => {
  showCalender.value = false

  const [startDate, endDate] = values
  startTime.value = formatTime(startDate)
  endTime.value = formatTime(endDate)
  totalDate.value = getDiffDays(startDate, endDate)
}

// ?首页推荐位置数据获取
const { recommendLocationInfo } = storeToRefs(homeStore)

// ?搜索按钮点击
const handleSearchBtnClick = () => {
  router.push({
    path:'/search',
    query: {
      startDate: startTime.value,
      endDate: endTime.value,
      currentCity:currentCity.value.cityName
    }
  })
}


</script>

<style lang="less" scoped>
.home-search-wrapper {
  padding: 0 15px;

  .location {
    display: flex;
    align-items: center;
    height: 44px;

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

  .select-time {
    display: flex;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      line-height: 22px;

      .text {
        font-size: 12px;
        color: #999;
      }

      .time {
        font-size: 16px;
        font-weight: 600;
      }
    }

    .right {
      align-items: flex-end;
    }
  }

  .section {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid rgb(250, 248, 249fr);

    box-sizing: border-box;
  }

  .price-counter {
    display: flex;
    align-items: center;

    .item {
      flex: 1;
      color: #999;
    }

    .price {
      flex: 2;
      border-right: 1px solid rgb(250, 248, 249);
    }

    .number {
      text-align: center;
    }
  }

  .keyword {
    color: #999;
  }

  .suggest {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;

    .item {
      padding: 4px 8px;
      margin: 5px 5px 0 0;
      border: 1px solid #eee;
      border-radius: 14px;

      font-size: 14px;
      cursor: pointer;
    }
  }

  .search-btn {
    line-height: 40px;
    margin-top: 15px;
    border-radius: 20px;
    font-size: 20px;
    color: #fff;
    text-align: center;

    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  }
}
</style>
