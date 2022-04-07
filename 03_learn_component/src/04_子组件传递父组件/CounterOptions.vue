<template>
  <div>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>

    <input type="text" v-model.number='num'>
    <button @click='incrementN'>+{{num}}</button>
  </div>
</template>

<script>
  export default {
    // emits:['add','sub','addN'],
    // emits的对象写法
    emits:{
      add:null,
      sub:null,
      addN:(num,name,age)=>{
        // 主要是做参数的类型检测
        if(num>5){
          return true
        }
        return false
      }
    },
    methods:{
      increment(){
        this.$emit('add')
      },
      decrement(){
        this.$emit('sub')
      },
      incrementN(){
        this.$emit('addN',this.num,'liu',18)
      }
    },
    data(){
      return {
        num:0
      }
    }
  }
</script>

<style scoped>

</style>