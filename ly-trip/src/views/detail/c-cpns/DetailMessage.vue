<template>
  <div class="detail-message">
    <div class="title">价格说明</div>
    <div class="content">{{  detailInfo.introduction  }}</div>
    <div class="footer">
      <img src="@/assets/imgs/detail/icon_ensure.png" alt="">
      <span>ly-旅途,永无止境</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  detailInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.detail-message{
  padding:0 10px 20px;
  .title{
    padding:10px 0;
    font-size: 20px;
    font-weight: 600;
  }

  .content{
    line-height:20px;
    color:#666;
  }

  .footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:50px;

    img{
      width:50%;
    }
    
    span{
      margin-top:8px;
      color:#7688a7;
    }
  }
}
</style>
