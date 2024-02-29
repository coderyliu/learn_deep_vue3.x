<template>
  <div class="home">
    <h2>Home</h2>

    <ul>
      <li>home的内容1</li>
      <li>home的内容2</li>
      <li>home的内容3</li>
    </ul>

    <button>消息</button>
    <button @click='jumpBtn'>商品</button>
    <router-link to='/home/message'>消息</router-link>
    <router-link to='/home/shops'>商品</router-link>
    <router-link to='/home/moment'>动态</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()

    const jumpBtn = () => {
      // router.push('/home/shops')
      router.push({
        path: '/home/shops',
        query: {
          name: 'kobe'
        }
      })
    }

    return {
      jumpBtn
    }
  }
};
</script>
