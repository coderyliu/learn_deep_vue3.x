<template>
  <div class="section-wrap">
    <div class="top">
      <h2>{{title}}</h2>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="bottom">  
      <span>查看{{moreTitle}}</span>
      <van-icon name="arrow" />
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
    padding: 5px 0;
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

    color:var(--primary-color);
  }
}
</style>
