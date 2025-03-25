<template>
  <van-tabs v-model="active" @change="onChange">
    <van-tab v-for="(option, index) in options" :key="index" :title="option"></van-tab>
  </van-tabs>
</template>

<script>
export default {
  props: {
    options: Array,
    default: String,
  },
  data() {
    return {
      active: this.options.indexOf(this.default),
    };
  },
  methods: {
    onChange(index) {
      this.$emit('change', this.options[index]);
    },
  },
};
</script>