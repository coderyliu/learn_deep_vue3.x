<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click='changeName'>修改name</button>
    <button @click='changeAge'>修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    // watchEffect自动收集响应式依赖
    const name = ref('kobe')
    const age = ref(33)

    // watchEffect侦听
    watchEffect(() => {
      console.log('watchEffect自动侦听:', name.value);
    })

    const changeName = () => {
      name.value = 'curry'
    }
    const changeAge = () => {
      age.value = 30
    }

    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style scoped></style>