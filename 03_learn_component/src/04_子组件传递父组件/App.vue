<template>
  <div>
    <h2>{{counter}}</h2>
    <counter-options @add='add' @sub='sub' @addN='addNumber'></counter-options>
  </div>
</template>

<script>
  import CounterOptions from './CounterOptions.vue'
  export default {
    data(){
      return {
        counter:0
      }
    },
    components:{
      CounterOptions
    },
    methods:{
      add(){
        this.counter++
      },
      sub(){
        this.counter--
      },
      addNumber(num,name,age){
        this.counter+=num
        console.log(name,age);
      }
    }
  }
</script>

<style scoped>

</style>