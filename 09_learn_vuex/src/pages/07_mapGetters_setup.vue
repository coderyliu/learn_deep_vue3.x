<template>
  <div>
    <hr>
    <h2>{{nameInfo}}</h2>
    <h2>{{ageInfo}}</h2>
    <h2>{{heightInfo}}</h2>
    <hr>
  </div>
</template>

<script>
  import {useGetters} from '../hooks/useGetters'
  export default {
    setup(){
      const storeGetters=useGetters(['nameInfo','ageInfo','heightInfo'])

      return {
        ...storeGetters
      }
    }
  }
</script>

<style scoped>

</style>