<template>
  <div>
    <button @click='increment'>{{ counter }}</button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'
export default {
  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value++
    }

    // 在setupZ中编写的声明周期是可以多次调用的，会按顺序依次调用
    onMounted(() => {
      console.log('挂载到真实DOM上1');
    })
    onMounted(() => {
      console.log('挂载到真实DOM上2');
    })

    onUpdated(() => {
      console.log('DOM内容发生更新');
    })

    onUnmounted(() => {
      console.log('DOM卸载');
    })

    return {
      counter,
      increment
    }
  },
  // options API中生命周期只能调用一次，后面的会覆盖前面的
  mounted() {
    console.log(1)
  },
  mounted() {
    console.log(2)
  }
}
</script>

<style scoped></style>