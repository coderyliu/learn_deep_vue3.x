<template>
  <div class="detail-swiper-wrap">
    <van-swipe :autoplay="3000">
      <template v-for="(item) in swiperData" :key="item.url">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <!-- <template #indicator="{ active }">
        <div class="indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
            <span class="item" :class="{ active: swiperData[active].title === key }">
              <span class="text">{{ key.slice(1, -2) }}</span>
              <span class="count" v-if="swiperData[active].title === key">{{ swipeGroup[key].findIndex((item)=>item.orderIndex===active)+1 }}/{{ value.length }}</span>
            </span>
          </template>
        </div>
      </template> -->
    </van-swipe>

  </div>
</template>

<script setup>
import { computed,watch } from 'vue'
import { storeToRefs } from 'pinia';

import useDetailStore from '@/store/modules/detail';

const props=defineProps({
  swiperData:{
    type:Array,
    default:()=>([])
  }
})

const detailStore = useDetailStore()
const { detailInfos } = storeToRefs(detailStore)

// const swiperData = computed(() => detailInfos.value?.mainPart?.topModule?.housePicture?.housePics)

// 对数据进行转换
// const swipeGroup = {}
// watch(swiperData, (newValue) => {
//   for (const item of newValue) {
//     if (!swipeGroup[item.title]) {
//       swipeGroup[item.title] = []
//     }
//     swipeGroup[item.title].push(item)
//   }
// })

</script>

<style lang="less" scoped>
.detail-swiper-wrap {
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }

  .indicator{
    position: absolute;
    right:10px;
    bottom:10px;

    padding:2px 5px;
    font-size: 12px;
    color:#fff;
    background-color:rgba(0,0,0,.8) ;

    z-index:99;
    
    .item{
      // margin:0 3px;
      // box-sizing: border-box;

      &.active{
        padding:0 3px;
        border-radius:5px;
        color:#333;
        background-color:#fff ;
      }
    }
  }
}
</style>
