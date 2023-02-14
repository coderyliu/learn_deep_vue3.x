<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="changeMessage">修改信息</button>
  </div>
</template>

<script>
export default {
  props:{
    date:Date
  },
  data() {
    return {
      message: '哈哈哈哈'
    }
  },
  methods: {
    changeMessage() {
      this.message = Math.random()
    }
  },
  // vue生命周期
  // 父子组件的生命周期:
  // 父子组件嵌套时，父组件和子组件各拥有各自独立的钩子函数。
  // 1-创建过程:
  // parentBeforeCreate-->parentCreated-->parentBeforeMount-->childBeforeCreate-->childCreated-->childBeforeMount-->childMounted-->parentMounted

  // 2-更新过程
  // Parent BeforeUpdate -> Child BeforeUpdate -> Child Updated -> Parent Updated

  // 3-销毁过程
  // Parent BeforeDestroy -> Child BeforeDestroy -> Child Destroyed -> Parent Destroyed
  created() {
    console.log('created')
  },
  mounted() {
    console.log(this.date)
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
}
</script>

<style scoped>

</style>