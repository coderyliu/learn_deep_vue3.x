<template>
  <div>
    <input type="text" ref='title'>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const title = ref(null)

    onMounted(() => {
      title.value.focus()
    })

    return {
      title
    }
  }
};
</script>

<style scoped></style>
