<template>
  <div class="app">
    <button @click="isShow = !isShow">Toggle</button>

    <transition name="coder" mode="out-in" appear>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    About,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.app {
  width: 200px;
  margin: 0 auto;
}

.title {
  display: inline-block;
}

.coder-enter-from,
.coder-leave-to {
  opacity: 0;
}

.coder-enter-active,
.coder-leave-active {
  transition: opacity 1s ease;
}

.coder-enter-active {
  animation: bounce 1s ease;
}

.coder-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
