<template>
  <div>
    <h2>Home:{{$store.state.counter}}</h2>
    <hr>
    <h2>{{counter}}</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{height}}</h2>
    <hr>
  </div>
</template>

<script>
  import {useState} from '../hooks/useState'
  export default {
    setup(){
      const storeState=useState(['counter','name','age','height'])

      return {
       ...storeState
      }
    }
  }
</script>

<style scoped>

</style>