<template>
  <div class="section-wrap">
    <div class="top">
      <h2>{{title}}</h2>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="bottom">  
      <span>{{moreTitle}}</span>
      <van-icon name="arrow" v-if='moreTitle.length>0' />
    </div>
  </div>
</template>

<script setup>
const props=defineProps({
  title:{
    type:String,
    default:''
  },
  moreTitle:{
    type:String,
    default:''
  }
})
</script>

<style lang="less" scoped>
.section-wrap{
  .top{
    font-size:17px;
    padding: 15px 0;
    border-bottom:1px solid #eee;
  }

  .center{
    margin-top:10px;
  }

  .bottom{
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding:10px 0;

    font-size: 16px;
    font-weight: 600;
    color:var(--primary-color);
  }
}
</style>
