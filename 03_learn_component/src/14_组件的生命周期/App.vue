<template>
  <div>
    <button @click='toggle'>切换</button>
    <template v-if='isShow'>
      <home></home>
    </template>
    <h2>{{desc}}</h2>
  </div>
</template>

<script>
  import Home from './Home.vue'
  export default {
    components:{
      Home
    },
    data(){
      return {
        isShow:true,
        desc:'呵呵呵'
      }
    },
    methods:{
      toggle(){
        this.isShow=!this.isShow
        this.desc='嘻嘻嘻'
      }
    }
  }
</script>

<style scoped>

</style>