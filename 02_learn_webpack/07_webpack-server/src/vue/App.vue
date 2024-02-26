<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2>{{ desc }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "hello kobe",
      title: "curry",
      desc: 'Jake'
    };
  },
};
</script>

<style>
h2 {
  color: #bfa;
}
</style>
