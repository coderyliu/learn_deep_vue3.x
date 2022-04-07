<template>
  <div>
    <!-- <h2>{{ name }}</h2> -->
    <h2>{{ age }}</h2>

    <!-- <button @click="changeInfoName">改变info.name</button> -->
    <button @click="changeInfoAge">改变info.age</button>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  toRef
} from "vue";
export default {
  setup() {
    // 创建响应式代理对象
    const info = reactive({ name: "coder", age: 18, friend: { name: "kobe", age: 33 } });

    // 结构reactive创建出来的响应式代理对象,reactive结构出来的值不再是响应式的
    // 通过toRefs或者toRef可以将reactive创建出来的对象中的属性转化为ref式的响应式对象
    // let { name, age } = toRefs(info)

    // 如果我们只希望转换一个reactive对象中的属性为ref, 那么可以使用toRef的方法：
    let age=toRef(info,'age')

    // 改变Name属性值
    const changeInfoName = () => {
      // info.name = "curry";
      // name.value='curry'
      // console.log(name.value)
    };
    const changeInfoAge = () => {
      // info.age=20
      age.value=20
      console.log(age.value)
    };

    return {
      info,
      // name,
      age,
      changeInfoName,
      changeInfoAge,
    };
  },
};
</script>

<style scoped></style>
