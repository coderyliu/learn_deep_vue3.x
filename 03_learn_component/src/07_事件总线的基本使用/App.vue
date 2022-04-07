<template>
  <div>
    <about />
    <home-con></home-con>
  </div>
</template>

<script>
import HomeCon from "./HomeCon.vue";
import About from "./About.vue";

export default {
  components: {
    HomeCon,
    About,
  },
};
</script>

<style scoped></style>
