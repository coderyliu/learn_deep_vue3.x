<template>
  <div>
    <hr>
    <h2>{{homeCounter}}</h2>
    <h2>{{doubleHomeCounter}}</h2>

    <button @click='increment'>home+1</button>
    <button @click='incrementAction'>home+1</button>
    <hr>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions,mapState} from 'vuex'

import {useState2,useGetters2} from '../hooks'
// import {createNamespacedHelpers} from 'vuex'

// const {mapState,mapGetters,mapMutations,mapActions}=createNamespacedHelpers('home') 
export default {
  // 写法一：常用
  // methods:{
  //   ...mapMutations('home',['increment']),
  //   ...mapActions('home',['incrementAction'])
  // },
  // computed:{
  //   ...mapState('home',['homeCounter']),
  //   ...mapGetters('home',['doubleHomeCounter'])
  // },

  // 写法二：常用
  // methods:{
  //   ...mapMutations(['increment']),
  //   ...mapActions(['incrementAction'])
  // },
  // computed:{
  //   ...mapState(['homeCounter']),
  //   ...mapGetters(['doubleHomeCounter'])
  // },

  // 写法三：不常用
  // methods:{
  //   ...mapMutations({
  //     increment:'home/increment'
  //   }),
  //   ...mapActions({
  //     incrementAction:"home/incrementAction"
  //   })
  // },
  // computed:{
  //   ...mapState({
  //     homeCounter:state=>state.home.homeCounter
  //   }),
  //   ...mapGetters({
  //     doubleHomeCounter:'home/doubleHomeCounter'
  //   })
  // }

  // 在setup中使用
  setup(){
    const states=useState2('home',['homeCounter'])
    const getters=useGetters2('home',['doubleHomeCounter'])

    const mutations=mapMutations('home',['increment'])
    const actions=mapActions('home',['incrementAction'])
    return {
      ...states,
      ...getters,
      ...mutations,
      ...actions
    }
  }

};
</script>

<style scoped></style>
