<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>Home Counter:{{ counter }}</h2>
    <!-- <button @click='homeIncrement'>Home中的+1</button> -->
  </div>
</template>

<script>
import { ref, inject } from 'vue'
export default {
  setup() {

    // 在vue和react中都有单向数据流这个概念，因此在父子组件通信的时候
    // 不要让子组件修改父组件传给子组件的数据data，避免产生bug
    // const homeIncrement=()=>{
    //   counter.value++
    // }

    const name = inject('name')
    const counter = inject('counter')

    return {
      name,
      counter,
      // homeIncrement
    }
  }
}
</script>

<style scoped></style>