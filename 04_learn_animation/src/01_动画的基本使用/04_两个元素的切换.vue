<template>
  <div>
    <button @click="isShow = !isShow">Toggle</button>

    <transition name="coder" mode='out-in'>
      <h2 class="title" v-if="isShow">Hello World</h2>
      <h2 v-else class="title">你好啊,李银河</h2>
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
