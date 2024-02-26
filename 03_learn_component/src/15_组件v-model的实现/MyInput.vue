<template>
  <div>
    <!-- 实现组件的双向绑定 -->
    <input type="text" v-model='value'>

    <input type="text" v-model='value2'>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String
  },
  emits: ['update:modelValue', 'update:title'],
  methods: {

  },
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      }
    },
    value2: {
      set(value) {
        this.$emit('update:title', value)
      },
      get() {
        return this.title
      }
    }
  }
};
</script>

<style scoped></style>
