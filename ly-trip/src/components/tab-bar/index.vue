<template>
  <div class="tab-bar-wrapper">
    <!-- 1.自己封装 -->
    <!-- <template v-for="(item, index) in tabBarList" :key="item.text">
      <div class="item" :class="{ active: index === currentIndex }" @click="itemClick($event, index, item.path)">
        <img v-if="index !== currentIndex" :src="loadAssets(item.imageUrl)" alt="">
        <img v-else :src="loadAssets(item.imageActiveUrl)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
    <!-- 2.借用vant第三方组件库 -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabBarList" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="index !== currentIndex" :src="loadAssets(item.imageUrl)" />
            <img v-else :src="loadAssets(item.imageActiveUrl)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import { tabBarList } from '@/common';
import { loadAssets } from '@/utils'

// const router = useRouter()

const currentIndex = ref(0)
// const itemClick = (e, index, path) => {
//   currentIndex.value = index
//   router.push(path)
// }


</script>

<style lang="less" scoped>
// 1.自己封装的组件样式
// .tab-bar-wrapper {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;

//   .item {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     &.active {
//       color: var(--primary-color);
//     }

//     .text {
//       font-size: 12px;
//     }

//     img {
//       width: 36px;
//     }
//   }
// }

// 2.第三方组件的样式
.tab-bar-wrapper {
  // 修改第三方组件库样式的方案
  // 1.通过插槽
  // 2.:deep样式穿透,可以让我们的样式穿透父组件的scoped，找到子组件对应的样式名
  :deep(.van-tabbar-item__icon){
    font-size: 50px;
  }

  img{
    height: 28px;
  }

  // 3.通过自定义变量 -- 不过不能穿透，有scoped
  // --van-tabbar-item-icon-size:60px;
}
</style>
