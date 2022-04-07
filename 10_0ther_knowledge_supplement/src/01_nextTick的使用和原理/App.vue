<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click='increment'>+1</button>
    <h2 ref='titleRef' class='title'>{{message}}</h2>
    <button @click='addMessageContent'>添加内容</button>
  </div>
</template>

<script>
import {ref,onUpdated,nextTick} from 'vue'
export default {
  setup(){
    const message=ref('')

    const titleRef=ref(null)

    onUpdated(()=>{
      console.log(titleRef.value.offsetHeight)
    })

    const counter=ref(0)
    const increment=()=>{
      counter.value++
    }

    const addMessageContent=()=>{
      // console.log(titleRef.value)
      message.value+='哈哈哈哈哈'
      // console.log(titleRef.value.offsetHeight)
      nextTick(()=>{
        console.log(titleRef.value.offsetHeight)
      })
    }

    return {
      message,
      titleRef,
      counter,
      increment,
      addMessageContent
    }
  }
}
</script>

<style>
.title{
  width:170px;
}
</style>
