<template>
  <div>
    <h2 ref='title'>哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted, onBeforeMount } from "vue";

export default {
  setup() {
    // 自定义ref，挂载到元素的ref属性上，在元素挂载到真实DOM的时候，title.value还是null
    // 挂载到DOM的时候，title.value就会是H2元素
    // 自定义的ref的值可以随便，挂载到真实DOM之后就会是属性为ref的元素
    const title = ref(null)

    watchEffect(() => {
      console.log(title.value)
    }, {
      flush: 'post'
    })

    // 生命周期钩子
    onBeforeMount(() => {
      console.log(title.value)
    })

    onMounted(() => {
      console.log(title.value)
    })

    return {
      title
    };
  },
};
</script>

<style scoped></style>
