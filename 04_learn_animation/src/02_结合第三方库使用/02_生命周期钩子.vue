<template>
  <div>
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h2 v-if="isShow" class="title">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    beforeEnter() {
      console.log("before-enter");
    },
    enter() {
      console.log("enter");
    },
    afterEnter() {
      console.log("after-enter");
    },
    beforeLeave() {
      console.log("before-leave");
    },
    leave() {
      console.log("leave");
    },
    afterLeave() {
      console.log("after-leave");
    },
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
