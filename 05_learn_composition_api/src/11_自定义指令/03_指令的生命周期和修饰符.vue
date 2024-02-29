<template>
  <div>
    <button v-if="counter < 2" @click="increment" v-focus.aaa='{ name: "coder", age: 18 }'>{{ counter }}</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {
    focus: {
      created() {
        console.log("app created");
      },
      beforeMount() {
        console.log("app beforeMount");
      },
      mounted(el, bindings, vNode, preVnode) {
        console.log("app mounted");
        console.log(el, bindings, vNode, preVnode)
      },
      beforeUpdate() {
        console.log("app beforeUpdate");
      },
      updated() {
        console.log("app updated");
      },
      beforeUnmount() {
        console.log("app beforeUnmount");
      },
      unmounted() {
        console.log("app unmounted");
      },
    },
  },
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
