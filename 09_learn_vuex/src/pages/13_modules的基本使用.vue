<template>
  <div>
    <h2>root:{{ $store.state.rootCounter }}</h2>
    <h2>home:{{ $store.state.home.homeCounter }}</h2>
    <h2>user:{{ $store.state.user.userCounter }}</h2>
    <hr>
    <h2>home*2:{{ $store.getters.doubleHomeCounter }}</h2>
    <h2>user*2:{{ $store.getters.otherGetter }}</h2>

    <button @click='$store.dispatch("incrementAction")'>+1</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>