<template>
  <div>
    <hr>
    <!-- <h2>{{nameInfo}}</h2>
    <h2>{{ageInfo}}</h2>
    <h2>{{heightInfo}}</h2> -->
    <h2>{{sName}}</h2>
    <h2>{{sAge}}</h2>
    <hr>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed:{
      // ...mapGetters(['totalPrice','nameInfo','ageInfo','heightInfo'])
      ...mapGetters({
        sName:'nameInfo',
        sAge:'ageInfo'
      })
    }
  }
</script>

<style scoped>

</style>