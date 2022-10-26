<template>
  <div class="search-bar" @click="handleSearchClick">
    <div class="left">
      <div class="top">
        <span>住</span>
        <span class="desc">{{ startDate }}</span>
      </div>
      <div class="bottom">
        <span>离</span>
        <span class="desc">{{ endDate }}</span>
      </div>
    </div>
    <div class="center">关键字/位置/民宿</div>
    <div class="right">
      <van-icon name="search" size="20px" color="#333" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router=useRouter()

const props = defineProps({
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  }
})

const handleSearchClick=()=>{
  router.push('/search')
}

</script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  align-items: center;
  height: 45px;
  margin: 0 10px;

  border: 1px solid #eee;
  border-radius: 6px;

  color: #999;
  background-color: #f2f4f6;

  .left {
    padding: 5px;
    border-right: 1px solid #fff;
    font-size: 12px;

    .desc {
      font-weight: 500;
      color: #333;
    }
  }

  .center {
    flex: 1;
    padding: 5px;
    font-size: 12px;
  }

  .right {
    padding: 5px;
  }
}
</style>
