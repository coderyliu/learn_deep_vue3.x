<template>
  <div>
    <h2>hello</h2>
    <h2>{{ message }}</h2>
    <button @click='emitEvent'>发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, useAttrs } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: '呵呵呵'
  }
})

const emits = defineEmits(['increment', 'decrement'])
const emitEvent = () => {
  emits('increment', '10000')
}

const attrs = useAttrs()

console.log(attrs)
</script>

<style scoped></style>