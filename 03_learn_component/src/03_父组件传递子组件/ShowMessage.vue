<template>
  <div>
    <h2 :class='$attrs.class' :id='$attrs.id'>{{ content }}</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  // 数组写法
  // props:['title','content']
  // 对象的用法
  props: {
    // 可以做一些限制
    title: String,
    content: {
      type: String,
      required: true,
      default: "啧啧啧",
    },
  },
   inheritAttrs:false,
};
</script>

<style scoped></style>
