<template>
  <div class="tab-control-wrap">
    <template v-for="(item, index) in tabList" :key="item">
      <div @click="scrollToPosition(index)"  :class="{ 'active': index === currentIndex ,'item':true}">
        <span>{{item}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabList: {
    type: Array,
    default: () => ([])
  }
})

const emits=defineEmits(['tabClick'])

const currentIndex = ref(0)

// 点击滚动到某一位置
const scrollToPosition = (index) => {
  currentIndex.value=index
  emits('tabClick',index)
}
</script>

<style lang="less" scoped>
.tab-control-wrap{
  position: fixed;
  left:0;
  top:0;
  right:0;
  display: flex;
  align-items: center;
  height: 44px;
  line-height: 44px;

  z-index:99;

  .item{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.active{
      font-weight: 600;
      color:var(--primary-color);
    }

    &.active span{
      width:80%;
      border-bottom:3px solid var(--primary-color);
    }
  }
}

</style>