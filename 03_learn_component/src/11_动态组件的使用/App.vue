<template>
  <div>
    <button v-for="(item, index) in tabs" :key="index" @click="tabClick(item)">
      {{ item }}
    </button>

    <!-- 方式一：v-if的方式 -->
    <!-- <template v-if='this.currentTab==="home"'>
       <home></home> 
    </template>
    <template v-else-if='this.currentTab==="about"'>
       <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->

    <!-- 方式二:动态组件的方式 -->
    <!-- keep-alive内置组件的使用 -->
    <!-- <keep-alive include="home,about">
      <component :is="currentTab" :name="name" :age="age" @btn="btnClick"></component>
    </keep-alive> -->
    <!-- <keep-alive :include="/home|about/">
      <component :is="currentTab" :name="name" :age="age" @btn="btnClick"></component>
    </keep-alive> -->
    <keep-alive :include="['home', 'about']">
      <component :is="currentTab" :name="name" :age="age" @btn="btnClick"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Category from "./Category.vue";

export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
      name: "coder",
      age: 21,
    };
  },
  methods: {
    tabClick(tab) {
      this.currentTab = tab;
    },
    btnClick() {
      console.log("子传父自定义事件触发");
    },
  },
};
</script>

<style scoped></style>
