<template>
  <div>
    <h2>当前计数:{{counter}}</h2>
    <h2>当前计数*2:{{doubleCounter}}</h2>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>

    <h2>{{res}}</h2>
    <button @click='changeData'>修改res</button>

    <p class='content'></p>

    <div class="scroll">
      <div class="scroll-x">scrollX:{{scrollX}}</div>
      <div class="scroll-y">scrollY:{{scrollY}}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">mouseX:{{mouseX}}</div>
      <div class="mouse-y">mouseY:{{mouseY}}</div>
    </div>
  </div>
</template>

<script>
import useCounter from './hooks/useCounter'
import useTitle from './hooks/useTitle'
import useScrollPosition from './hooks/useScrollPosition'
import useMousePosition from './hooks/useMousePosition'
import useLocalStorage from './hooks/useLocalStorage'

export default {
  setup() {
    // useCounter
    const {counter,doubleCounter,increment,decrement} =useCounter()

    // useTitle
    const data=useTitle('coder liu')
    setTimeout(()=>{
      data.value='kobe'
    },2000)

    // 滚动位置
    const {scrollX,scrollY}=useScrollPosition()

    // 鼠标移动
    const {mouseX,mouseY} =useMousePosition()

    // localStorage
    const res=useLocalStorage('name','coder')
    const changeData=()=>{
      res.value='kobe'
    }

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      changeData,
      data,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      res
    };
  },
};
</script>

<style scoped>
.content{
  width: 3000px;
  height: 5000px;
}

.scroll{
  position: fixed;
  right:30px;
  bottom:30px;
}
.mouse{
  position: fixed;
  right:30px;
  bottom:80px;
}
</style>
