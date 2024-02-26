<template>
  <div>
    <home />
    <button @click='addNames'>增加</button>
  </div>
</template>

<script>
import Home from './Home.vue'

//provide的响应式
import { computed } from 'vue'
export default {
  components: {
    Home
  },
  // provide的基本使用
  // provide:{
  //   name:'coder',
  //   age:21
  // }
  data() {
    return {
      name: 'liu',
      age: 21,
      names: ['kobe', 'curry', 'coder']
    }
  },
  //provide还可以是一个函数，这样就可以访问data中的数据
  provide() {
    return {
      name: this.name,
      age: this.age,
      length: computed(() => this.names.length)
    }
  },
  methods: {
    addNames() {
      this.names.push('liu')
      console.log(this.names);
    }
  }
}
</script>

<style scoped></style>