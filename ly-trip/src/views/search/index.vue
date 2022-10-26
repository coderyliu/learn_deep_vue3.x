<template>
  <div class="search">
    {{route.query}}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route=useRoute()

</script>

<style lang="less" scoped>

</style>
