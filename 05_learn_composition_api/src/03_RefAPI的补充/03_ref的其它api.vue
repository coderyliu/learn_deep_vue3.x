<template>
  <div>
    <h2>{{ refInfo.name }}</h2>
    <h2>{{ refInfo.age }}</h2>

    <h2>{{shallowRefInfo.name}}</h2>
    <button @click="changeInfoName">改变info.name</button>
    <button @click="changeInfoAge">改变info.age</button>
    <button @click="changeShallowInfoName">改变shallowInfo.name</button>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  unref,
  isRef,
  shallowRef,
  triggerRef
} from "vue";
export default {
  setup() {
    // 创建响应式代理对象
    const info = ref({ name: "coder", age: 18, friend: { name: "kobe", age: 33 } });

    // shallowRef创建浅层ref响应式对象
    const shallowInfo=shallowRef({ name: "coder", age: 18, friend: { name: "kobe", age: 33 } })

    const refInfo=unref(info)
    const shallowRefInfo=unref(shallowInfo)
    console.log(shallowRefInfo)
    // 改变Name属性值
    const changeInfoName = () => {
      // 获取ref中的value还可以通过unref方法
      refInfo.name='curry'
    };
    const changeInfoAge = () => {
      refInfo.age=20
    };

    const changeShallowInfoName=()=>{
      shallowRefInfo.name='kobe'
      console.log(shallowRefInfo)
    }
    // 判断是否是ref响应式对象
    console.log(isRef(info))
    return {
      info,
      refInfo,
      changeInfoName,
      changeInfoAge,
      shallowInfo,
      changeShallowInfoName,
      shallowRefInfo
    };
  },
};
</script>

<style scoped></style>
