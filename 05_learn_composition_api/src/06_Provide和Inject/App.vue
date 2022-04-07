<template>
  <div>
    <home></home>
    <h2>App Counter:{{counter}}</h2>
    <button @click='increment'>App中的+1</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { ref, readonly, provide } from "vue";

export default {
  components: {
    Home,
  },
  setup() {
    const counter = ref(0)
    const name=ref('coder liu')

    // 解决单向数据流，readonly只能父组件修改
    provide('name',readonly(name))
    provide('counter',readonly(counter))

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
