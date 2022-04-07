<template>
  <div>
    <button @click='getBookList'>获取</button>
    <!-- <h2>{{list}}</h2> -->
    <template v-for='(item ,index) in list' :key='index'>
      <li>{{item.name}}--{{item.price}}</li>
    </template>
  </div>
</template>

<script>
  import {useMainStore} from '../store/index'
  import {ref} from 'vue'
  export default {
    setup(){
      const store=useMainStore()

      let list=ref([])
      const getBookList=()=>{
        list.value=store.getBooksList()
        // console.log(list[0])
      }
      return {
        store,
        list,
        getBookList
      }
    }
  }
</script>

<style scoped>

</style>