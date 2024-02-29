<template>
  <div>
    <!-- <h2>{{nam}}</h2> -->
    <h2>{{ friends }}</h2>
    <template v-for="item in items">
      <h3>{{ item }}</h3>
    </template>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "coder",
      age: 21,
      items: [1, 2, 3],
      friends: {
        name: 'kobe'
      }
    }
  },
  methods: {
    btnClick() {
      // 这个项目的vue版本是2.x，响应式原理为观察者模式+数据劫持（通过Object.defineProperty做的代理），对data无论是访问属性、修改属性值可以劫持
      // 对添加属性、删除属性无法劫持
      // 可以通过set\delete方法,对data中的属性添加响应式
      // ! data中的值会改变，但是不是响应式的
      // !age是新属性，不会数据劫持,没有响应式，数组应该是必须通过splice,push,pop,unshift等方法操作，才能劫持
      this.items.splice(0,1, 'one')

      // this.items[0] = 'one'
      // this.friends['age'] = 43

      // this.$set(this.friends, 'age', 43)
      // this.$set(this.items, 0, 'one')

      // 并且，不能直接对跟对象\组件的data直接操作
      // this.$set(this,'height', 1.88)
      console.log(this.friends, this.items, this)

      // 如果对象不是响应式的，只是简单的赋值
      const obj = {
        name: 'james'
      }
      this.$set(obj, 'age', 50)
      console.log(obj)
    }
  }
}
</script>

<style scoped></style>