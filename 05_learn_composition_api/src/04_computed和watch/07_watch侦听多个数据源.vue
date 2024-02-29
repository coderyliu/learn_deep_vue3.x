<template>
  <div>
    <h2 ref='title'>{{ info.name }}</h2>
    <button @click='changeData'>修改数据</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";

export default {
  setup() {
    const info = reactive({ name: "coder", age: 18 })
    const name = ref('coder')

    watch([name, () => ({ ...info })], (newValue, oldValue) => {
      console.log('newValue:', newValue, 'oldValue:', oldValue);
    })

    const changeData = () => {
      // name.value='liu'
      info.name = 'kobe'
    }
    return {
      info,
      changeData
    }
  },
};
</script>

<style scoped></style>
