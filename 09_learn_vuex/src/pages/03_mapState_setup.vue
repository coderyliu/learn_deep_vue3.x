<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <hr />
    <h2>{{ counter }}</h2>
    <!-- <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2> -->

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
  </div>
</template>

<script>
import { mapState, useStore } from "vuex";
import { computed } from "vue";
export default {
  // computed: {
  //   fullName() {
  //     return "kobe";
  //   },
  // },
  // methods: {
  //   increment() {
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //   },
  // },
  setup() {
    const store = useStore();

    // vuex在setup中提供了useStore()访问store中内容
    // 方式一:通过computed函数返回一个ref对象
    // 这种方法太笨

    // 这样相当于值得赋值，counter最后不是响应式的了
    let counter = store.state.counter

    // 通过computed把拿到的state变成响应式
    // const counter=computed(()=>store.state.counter)
    // const name=computed(()=>store.state.name)
    // const age=computed(()=>store.state.age)
    // const height=computed(()=>store.state.height)

    // 方式二:通过mapState
    // const storeStateFns = mapState(["counter", "name", "age", "height"]);

    // const storeState = {};
    // Object.keys(storeStateFns).forEach((fnKey) => {
    //   const fn = storeStateFns[fnKey].bind({ $store: store });

    //   storeState[fnKey] = computed(fn);
    // });

    const increment = () => {
      // counter++
      store.commit("increment");
    };
    const decrement = () => {
      store.commit("decrement");
    };

    return {
      // ...storeState,
      increment,
      decrement,
      counter,
    };
  },
};
</script>

<style scoped></style>
