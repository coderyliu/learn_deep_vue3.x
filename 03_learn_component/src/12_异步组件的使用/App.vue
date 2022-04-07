<template>
  <div>
    <home></home>
    <!-- <async-category></async-category> -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Loading from './Loading.vue'

  import {defineAsyncComponent} from 'vue'
  const AsyncCategory =defineAsyncComponent(()=>import('./AsyncCategory.vue'))

  // const AsyncCategory =defineAsyncComponent({
  //   loader:()=>import('./AsyncCategory.vue'),
  //   loadingComponent:Loading,//表示一个站位的组件
  //   delay:2000,//ms
  //   onError:function(err,retry,fail,attempts){
  //     // err表示错误信息
  //     // retry一个函数，表示加载未成功重新加载
  //     // fail一个函数，执行它退出就不加载这个组件了
  //     // attempts表示可尝试加载的次数
  //   }
  // })
  export default {
    components:{
      Home,
      AsyncCategory,
        Loading
    }
  }
</script>

<style scoped>

</style>