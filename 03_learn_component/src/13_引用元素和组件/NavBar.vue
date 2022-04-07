<template>
  <div>
    <h2>{{title}}</h2>
    <!-- $parent可以用来访问子组件的父组件 -->
    <!-- $root可以用来访问根组件 -->
    <button @click='getParent'>访问父组件</button>
    <button @click='getRoot'>访问根组件</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title:'呵呵呵'
      }
    },
    methods:{
      output(){
        console.log('111')
      },
      getParent(){
        console.log(this.$parent)
        console.log(this.$parent.$el)
      },
      getRoot(){
        console.log(this.$root)
        console.log(this.$root.$el)
      }
    }
  }
</script>

<style scoped>

</style>