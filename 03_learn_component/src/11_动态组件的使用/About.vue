<template>
  <div>
    About主页
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name:'about',
  data(){
    return {
      counter:0
    }
  },
  methods: {
    increment(){
      this.counter++
    }
  },
  activated(){
    console.log('About activated')
  },
  deactivated() {
    console.log('About deactivated')
  },
}
</script>

<style scoped></style>
