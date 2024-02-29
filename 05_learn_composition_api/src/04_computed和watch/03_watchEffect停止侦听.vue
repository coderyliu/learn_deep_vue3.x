<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // watchEffect自动收集响应式依赖
    const name = ref("kobe");
    const age = ref(33);

    // watchEffect侦听
    // 他会返回一个函数，这个函数用来停止侦听
    const stop = watchEffect(() => {
      console.log("watchEffect自动侦听:", name.value, age.value);
    });

    const changeName = () => {
      name.value = "curry";
    };
    const changeAge = () => {
      age.value++;
      if (age.value > 40) {
        // 一旦调用，就会停止侦听
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
