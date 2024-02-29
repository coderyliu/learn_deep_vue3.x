<script setup lang='ts'>
import { isReactive, isRef, isProxy } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../store/counter'

const counterStore = useCounterStore()
// 打印store上的属性和方法
// console.log(counterStore)

// 检测store上的响应式 - 解构
const { counter, info, increment, changeInfo, reset } = counterStore
// * pinia创建出来的store实例都是reactive响应式API，state无论是Ref还是Reactive都会被放到$state中返回
console.log(isReactive(counterStore)) // true 
console.log(isReactive(counter)) // false 相当于直接解构赋值为具体的值

console.log(isReactive(info)) //true 对象结构还是响应式的

// ?变为响应式通过storeToRefs API
const { counter: counter2, info: msg } = storeToRefs(counterStore)

</script>

<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>{{ counter2 }}</h2>
    <button @click="increment">+1</button>
    <h2>{{ info.name }}</h2>
    <h2>{{ info.friends }}</h2>
    <button @click="changeInfo">reactive解构的对象不会失去响应式</button>
    <!-- storeToRefs之后 -->
    <h2>{{ msg.name }}</h2>
    <h2>{{ msg.friends }}</h2>
    <!-- 重置state -->
    <button @click="reset">重置state</button>
  </div>
</template>