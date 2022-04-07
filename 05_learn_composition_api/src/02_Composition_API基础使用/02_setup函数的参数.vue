<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
  },
  /**
   * 参数一: props, 父组件传递过来属性
   * 参数二：context执行上下文，是一个对象，里面有三个属性
   * 分别为attrs:非props属性
   * emit:子传递父自定义事件
   * slots插槽和render函数有关
   */
  // setup函数有哪些参数?
  // setup(props, context) {
  //   console.log(props.message)
  //   console.log(context.attrs.id)
  //   console.log(context.slots)
  //   console.log(context.emit)
  // },

  // setup函数的参数的注意事项：
  //props和context两个参数的顺序不能颠倒，也不能只有一个context参数
  // 如果不适用props只使用context，那么第一个参数使用一个下划线作为占位符，否则报错 

   setup(_,context) {
    // console.log(props.message)
    console.log(context.attrs.id)
    console.log(context.slots)
    console.log(context.emit)
  },
};
</script>

<style scoped></style>
