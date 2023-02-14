<template>
  <div class="detail-info-wrap">
    <div class="desc">{{descInfos.houseName}}</div>
    <div class="tag">
      <template v-for="(item,index) in descInfos?.houseTags" :key="index">
        <span 
          class="item"
          :style="{color:item?.tagText?.color,backgroundColor:item?.tagText?.background?.color}"
        >
          {{item?.tagText?.text}}
        </span>
      </template>
    </div>
    <div class="score">
      <div class="left">
        <span class="sc">{{descInfos.commentBrief?.overall}}</span>
        <span>{{descInfos.commentBrief?.scoreTitle}}</span>
        <span class="comm">{{descInfos.commentBrief?.commentBrief}}</span>
      </div>
      <div class="right">
        <span>{{descInfos.commentBrief?.totalCount}}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="address">
      <div class="left">
        <span class="sc">{{descInfos.nearByPosition?.address}}</span>
      </div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>

const props=defineProps({
  descInfos:{
    type:Object,
    default:()=>({})
  }
})


</script>

<style lang="less" scoped>
.detail-info-wrap{
  padding:0 10px 30px;
  border-bottom:3px solid #f2f3f4;

  .desc{
    padding:10px 0;
    font-size: 22px;
    font-weight: 600;
  }

  .tag{
    padding:10px 0;

    .item{
      margin-right:3px;
    }
  } 

  .score,.address{
    display: flex;
    line-height: 40px;
    padding: 5px 10px;
    margin-top:5px;

    border-radius: 5px;
    background-color:#f5f7fa;

    .left{
      flex:1;

      color:#333;
      font-weight: 600;

      span{
        margin-right:5px;
      }
      .sc{
        font-size: 18px;
      }
      .comm{
        color:#999;
        font-weight: normal;
      }
    }

    .right{
      width:90px;
      font-size: 14px;
      color:var(--primary-color);
    }
  }
}
</style>
