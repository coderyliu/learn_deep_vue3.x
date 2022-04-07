<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
  </div>
</template>

<script>
  export default {
    name:'Home',
    methods:{
      increment(){
        this.$store.commit('increment')
        // vuex不推荐直接修改state的,修改vuex中的状态只能通过mutation--commit修改
        // this.$store.state.counter++
      },
      decrement(){
        this.$store.commit('decrement')
        // this.$store.state.counter--
      }
    },
    // setup(){}
  }
</script>

<style scoped>

</style>