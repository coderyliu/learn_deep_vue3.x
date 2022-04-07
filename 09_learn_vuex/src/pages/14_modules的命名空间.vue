<template>
  <div>
    <h2>root:{{ $store.state.rootCounter }}</h2>
    <h2>home:{{ $store.state.home.homeCounter }}</h2>
    <h2>user:{{ $store.state.user.userCounter }}</h2>
    <hr />
    <!-- 默认情况下的访问getters的方式 -->
    <!-- <h2>home*2:{{$store.getters.doubleHomeCounter}}</h2>
    <h2>user*2:{{$store.getters.otherGetter}}</h2> -->

    <!-- 设置命名空间之后的访问方式 -->
    <h2>home*2:{{ $store.getters["home/doubleHomeCounter"] }}</h2>
    <h2>user*2:{{ $store.getters['user/doubleUserCounter'] }}</h2>

    <!-- 设置命名空间之后的访问actions -->
    <button @click="$store.dispatch('incrementAction')">root+1</button>
    <button @click="$store.dispatch('home/incrementAction')">home+1</button>
    <!-- <button @click="$store.dispatch('incrementAction')">user+1</button> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
