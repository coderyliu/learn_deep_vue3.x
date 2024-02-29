<template>
  <div>
    <h2 v-format-time>{{ timeStamp }}</h2>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { ref } from "vue"
export default {
  directives: {
    formatTime: {
      mounted(el) {
        const textContent = el.textContent
        let timeStamp = parseInt(textContent)
        if (textContent.length === 10) {
          timeStamp = timeStamp * 1000
        }

        el.textContent = dayjs(timeStamp).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  },
  setup() {
    const timeStamp = ref(Date.now())

    return {
      timeStamp
    }
  }
};
</script>

<style scoped></style>
