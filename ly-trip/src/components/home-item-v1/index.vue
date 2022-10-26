<template>
  <div class="home-item-v1">
    <div class="picture">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="info">
      <div class="item text">{{  houseData.summaryText  }}</div>
      <div class="item desc omit">{{  houseData.houseName  }}</div>
      <div class="item score">
        <van-rate readonly allow-half  color="#ff9854" void-color="#eee" />
        <div class="price">¥{{  houseData.finalPrice  }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  houseData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.home-item-v1{
  position: relative;
  width:50%;
  margin-top:10px;
  padding-right:10px;
  box-sizing: border-box;
  
  .picture{
    width:100%;
    
    img{
      width:100%;
      border-radius:5px;
    }
  }

  .info{
    position: absolute;
    z-index:1;
    left:0;
    right:0;
    bottom:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding:0 10px;

    font-size: 12px;
    color:#fff;

    .item{
      margin-top:5px;
    }

    .score{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:10px;

      .price{
        margin-left:15px;
        text-align: center;
      }
    }
  }
}

</style>
