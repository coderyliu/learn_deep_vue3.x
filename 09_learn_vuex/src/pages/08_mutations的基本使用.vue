<template>
  <div>
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <hr />
    <button @click='$store.commit("increment")'>+1</button>
    <button @click='$store.commit("decrement")'>-1</button>
    <button @click='addTen'>+10</button>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    addTen() {
      // 1.携带的数据是变量或者常量
      // this.$store.commit('incrementN',10)

      // 2.携带的参数是一个对象类型
      // this.$store.commit('incrementN',{count:10})

      // 3.提交commit的对象风格
      this.$store.commit({
        type: 'incrementN',
        count: 10
      })
    }
  }
};
</script>

<style scoped></style>
