<template>
  <form id="search">Search <input type="text" name="query" v-model="searchQuery" /></form>
  <DemoGrid :data="gridData" :filterKey="searchQuery" :columns="gridColumns"></DemoGrid>
</template>

<script setup>
import DemoGrid from "./Grid.vue";
import { ref } from "vue";

const searchQuery = ref("");
const gridColumns = ["name", "power"];

const gridData = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];
</script>

<style scoped></style>
