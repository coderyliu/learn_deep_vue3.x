<template>
  <div class="detail-book">
    <SectionItem title="预定须知" more-title="查看说明">
      <div class="inner">
        <template v-for="item in bookInfo?.orderRules" :key="item.title">
          <div class="item">
            <span class="title">{{item.title}}</span>
            <span class="introduction">{{item.introduction}}</span>
          </div>
        </template>
      </div>
    </SectionItem>
  </div>
</template>

<script setup>
import SectionItem from '@/components/section-item/index.vue'

const props=defineProps({
  bookInfo:{
    type:Object,
    default:()=>({})
  }
})

</script>

<style lang="less" scoped>
.detail-book{
  padding:0 10px 20px;
  border-bottom:5px solid #f2f2f2;
  .inner{
    margin-top:20px;
    .item{
      margin-bottom:25px;
      color:#333;
      font-size: 14px;
      .title{
        margin-right:20px;
      }
    }
  }
}
</style>
