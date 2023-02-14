<template>
  <div class="home-item-v2">
    <div class="picture">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="info">
      <div class="item location">
        <img src="@/assets/imgs/home/location.png" alt="">
        <span>{{ houseData.location }}</span>
      </div>
      <div class="item desc omit">{{ houseData.houseName }}</div>
      <div class="item text">{{ houseData.summaryText }}</div>
      <div class="item price">
        <span class="curr-price">¥{{ houseData.finalPrice }}</span>
        <span class="origin-price">¥{{ houseData.productPrice }}</span>
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
.home-item-v2{
  display: flex;
  justify-content: flex-start;
  // align-items: flex-start;
  flex-direction: column;
  width:50%;
  padding-right:10px;
  margin-top:10px;

  box-sizing: border-box;

  .picture{
    position: relative;
    top:0;

    img{
      width: 100%;
      border-radius: 5px;
    }
  }

  .info{
    margin-top:5px;
    .item{
      margin-top:5px;
    }

    .location{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      font-size: 12px;
      color:#999;
      img{
        width:15px;
        margin-right:5px;
      }
    }

    .desc{
      font-size:14px;
      color:#333;
    }

    .price{
      display: flex;
      align-items: center;
      margin-top:5px;

      .curr-price{
        font-size: 14px;
        color:var(--primary-color);
      }

      .origin-price{
        margin-left:5px;
        color:#999;
        font-size: 12px;
        text-decoration:line-through;
      }
    }
  }
}

</style>
