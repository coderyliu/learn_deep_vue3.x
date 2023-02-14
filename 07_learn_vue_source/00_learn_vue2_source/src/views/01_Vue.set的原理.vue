<template>
  <div>
    <!-- <h2>{{nam}}</h2> -->
    <h2>{{friends}}</h2>
    <template v-for="item in items">
      <h3>{{item}}</h3>
    </template>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name:"coder",
        age:21,
        items:[1,2,3],
        friends:{
          name:'kobe'
        }
      }
    },
    methods:{
      btnClick(){
        // 这个项目的vue版本是3.x，响应式已经变成了观察者模式+数据劫持（通过proxy做的代理），对data无论是访问属性、修改属性值、添加属性、删除属性都可以劫持
        // 并且废除了set\delete方法
        this.items[0]='one'
        this.friends['age']=43
      }
    }
  }
</script>

<style scoped>

</style>