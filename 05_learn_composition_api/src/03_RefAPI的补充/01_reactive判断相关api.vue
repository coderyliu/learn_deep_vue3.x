<template>
  <div>
    <h2>{{info.name}}</h2>
    <h2>{{info.friend.name}}</h2>

    <h2>{{readonlyInfo.name}}</h2>
    <h2>{{readonlyInfo.friend.name}}</h2>

    <h2>{{shallowInfo.name}}</h2>  
    <h2>{{shallowInfo.friend.name}}</h2> 

    <button @click='changeInfoName'>改变info.name</button>
    <button @click='changeInfoFriendName'>改变info.friend.name</button>
    <button @click='changeShallowInfoName'>改变shallow.name</button>
    <button @click='changeShallowInfoFriendName'>改变shallow.friend.name</button>

  </div>
</template>

<script>
  import {reactive,readonly,ref,isReactive,isProxy,isReadonly,shallowReactive,shallowReadonly,toRaw} from 'vue'
  export default {
    setup(){
      // 创建响应式代理对象
      const info=reactive({'name':'coder',age:18,friend:{name:"kobe",age:33}})
      const readonlyInfo=readonly(info)

      // 改变Name属性值
      const changeInfoName=()=>{
        info.name='curry'
      }
      const changeInfoFriendName=()=>{
        info.friend.name='coder why'
      }
      const changeShallowInfoName=()=>{
        shallowInfo.name='james'
      }
      const changeShallowInfoFriendName=()=>{
        shallowInfo.friend.name='coder liu'
      }

      // reactive判断的相关api
      // 1.isProxy--是否是reactive,readonly创建的代理对象
      console.log(isProxy(info))
      console.log(isProxy(readonlyInfo))

      // 2.isReactive--是否是reactive创建出来的响应式代理对象
      console.log(isReactive(info))
      console.log(isReactive(readonlyInfo))

      // 3.isReadonly--是否是readonly创建出来的代理对象
      console.log(isReadonly(readonlyInfo))

      // 4.toRaw--获取reactive和readonly代理对象的原来的对象
      console.log(toRaw(info))
      console.log(toRaw(readonlyInfo))

      // 5.shallowReactive--浅层的响应式对象
      const shallowInfo=shallowReactive({name:'coder',age:18,friend:{name:'kobe'}})

      return {
        info,
        readonlyInfo,
        changeInfoName,
        changeInfoFriendName,
        shallowInfo,
        changeShallowInfoName,
        changeShallowInfoFriendName
      }
    }
  }
</script>

<style scoped>

</style>