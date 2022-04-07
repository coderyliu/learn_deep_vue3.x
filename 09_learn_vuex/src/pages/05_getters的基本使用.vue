<template>
  <div>
    <h2>总价值:{{$store.getters.totalPrice}}</h2>
    <h2>总价值:{{$store.getters.totalPriceCountGreaterN(1)}}</h2>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>