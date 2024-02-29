<template>
  <div>
    <input type="text" v-model='message'>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import debounceRef from './hook/useDebounceRef'
export default {
  setup() {
    let message = debounceRef('hello')
    return {
      message
    };
  },
};
</script>

<style scoped></style>
