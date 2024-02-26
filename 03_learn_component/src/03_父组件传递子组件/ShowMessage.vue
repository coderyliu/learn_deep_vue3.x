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
  inheritAttrs: false,
  created() {
    // attrs为未被组件声明为props或者emits的属性，最常见的为style、class、id等
    // !通过inheritAttrs=false来禁止继承，$attrs.class可以获取到class属性
    console.log(this.$attrs)
  }
};
</script>

<style scoped></style>
