<template>
  <div>
    Home主页
    {{name}}-{{age}}
    <button @click='btnClick'>按钮</button>
  </div>
</template>

<script>
  export default {
    emits:['btn'],
    name:'home',
    props:{
      name:String,
      age:Number
    },
    methods:{
      btnClick(){
        this.$emit('btn')
      }
    }
  }
</script>

<style scoped>

</style>