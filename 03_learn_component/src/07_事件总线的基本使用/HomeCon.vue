<template>
  <div>

    <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from './HomeContent.vue'
export default {
  name: 'HomeCon',
  // created(){
  //   emitter.on('coder',(params)=>{
  //     console.log(params);
  //   })
  // }
  components: {
    HomeContent
  }
}
</script>

<style scoped></style>