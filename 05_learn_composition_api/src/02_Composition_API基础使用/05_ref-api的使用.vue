<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ test }}</h2>
    <h2>{{ info }}</h2>

    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  props: {
    message: {
      type: String
    }
  },
  setup() {
    // Vue3的响应式是通过proxy代理来实现的，下面来验证一下
    const info = reactive({
      name: 'coder',
      age: 23,
      friends: {
        name: 'curry'
      }
    })

    const test = ref({
      foo: 'foo',
      bar: 'bar',
      friends: {
        name: 'kobe'
      }
    })

    const increment = () => {
      // 1.测试reactive的响应式
      // * 可以看出, info的响应式是通过proxy代理来实现的,对get、set做了数据劫持
      info.sex = 'man'

      // *删除属性也做了劫持
      delete info.age

      // * 深层响应式
      info.friends.sex = 'woman'

      // 2. 测试ref的响应式
      // * 可以看出, test的响应式是通过proxy代理来实现的,对get、set做了数据劫持
      test.value.test = 'test'

      // *删除属性也做了劫持
      delete test.value.bar

      // *深层响应式
      test.value.friends.sex = 'woman'
    }

    return {
      increment,
      info,
      test
    }
  },
  mounted() {
    console.log(this.counter)
  }
}
</script>

<style scoped></style>