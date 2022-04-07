<template>
  <div>
    <h2>hello</h2>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
export default {
  components: {
    Hello,
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
