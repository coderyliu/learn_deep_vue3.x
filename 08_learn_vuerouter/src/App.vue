<template>
  <div>
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to='/home' custom v-slot='props'>
      <button @click='props.navigate'>首页</button>
      <!-- <pre>{{props.route}}</pre> -->
      <!-- <button>首页</button>
      <button>{{props.href}}</button> -->
      <!-- <h2>{{props.isActive}}</h2> -->
    </router-link>
    <router-link to='/about'>关于</router-link>
    <router-link to='/user/coder'>用户</router-link>
    <router-link to='/category'>分类</router-link>
    <router-link to='/list'>列表</router-link>

    <router-view v-slot='props'>
      <transition name='coder'>
        <component :is="props.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.coder-leave-to,
.coder-enter-from {
  opacity: 0;
}

.coder-leave-active,
.coder-enter-active {
  transition: opacity 1s ease;
}
</style>