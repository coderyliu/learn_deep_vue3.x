<template>
  <div class="detail">
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router';

import useDetailStore from '@/store/modules/detail';

const route = useRoute()
const router=useRouter()
const detailStore = useDetailStore()

// 发送网络请求详情页数据
detailStore.fetchDetailInfosAction(route.params.id)
</script>

<style lang="less" scoped>

</style>
