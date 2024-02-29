<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <h2>Home:{{ counter }}</h2>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>height:{{ height }}</h2>
    <!-- <h2>{{sName}}</h2>
    <h2>{{sAge}}</h2> -->

    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    fullName() {
      return 'kobe'
    },
    // 数组语法
    ...mapState(['counter', 'name', 'age', 'height'])
    // 对象语法
    // ...mapState({
    //   sName:(state)=>state.name,
    //   sAge:state=>state.age
    // })
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped></style>