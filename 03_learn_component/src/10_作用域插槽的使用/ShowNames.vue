<template>
  <div>
    <template v-for="(item,index) in names" >
      <!-- 自定义绑定属性 -->
      <slot :item='item' :index='index'></slot>
    </template>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        // names:['coder','kobe','curry']
      }
    },
    props:{
      names:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>