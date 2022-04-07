<template>
  <div>
    <h2>{{store.counter}}</h2>
    <button @click='increment(1)'>+1</button>
    <button @click='decrement(1)'>-1</button>
  </div>
</template>

<script>
  import {useMainStore} from '../store/index'
  export default {
    setup(){
      const store=useMainStore()

      // 监听actions的触发,可以监听action的动作及结果
      // 参数:1-name:action的事件名称
      // 2:store:当前的store实例
      // 3.args:函数的参数数组
      // 4.after钩子函数--在action执行完成之后或者resolve之后
      // 5.onError--reject或者报错触发
      const unsubscribe=store.$onAction(({
        name,store,args,after,onError
      })=>{
        console.log(name)
        console.log(store)
        console.log(args)

        after((res)=>{
          console.log(res)
        })

        onError((err)=>{
          console.log(err)
        })
      },true)

      const increment=(n)=>{
        store.incrementAction(n)
      }

      const decrement=(n)=>{ 
        store.decrementAction(n)
      }

      return {
        store,
        increment,
        decrement
      }
    }
  }
</script>

<style scoped>

</style>