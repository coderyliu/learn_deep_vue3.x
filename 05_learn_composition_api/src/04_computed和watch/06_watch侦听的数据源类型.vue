<template>
  <div>
    <h2 ref='title'>{{info.name}}</h2>
    <button @click='changeData'>修改数据</button>
  </div>
</template>

<script>
import { ref, watch,reactive} from "vue";

export default {
  setup() {
    const info=reactive({name:"coder",age:18})

    // 1.侦听watch时，传入的是一个getter函数
    // watch(()=>info.name,(newValue,oldValue)=>{
    //   console.log('newValue:',newValue,'oldValue:',oldValue)
    // })

    // 2.传入的是一个响应式对象：reactive或者ref
    // 2.1reactive对象，获取到的newValue和oldValue都是reactive对象本身
    // watch(info,(newValue,oldValue)=>{
    //   console.log('newValue:',newValue,'oldValue:',oldValue);
    // })
    // 如果希望是一个普通的对象，解构
    watch(()=>{
      return {...info}
    },(newValue,oldValue)=>{
      console.log('newValue:',newValue,'oldValue:',oldValue);
    })

    // 2.2ref对象，获取到的newValue和oldValue都是value只本身
    // const name=ref('coder')
    // watch(name,(newValue,oldValue)=>{
    //   console.log('newValue:',newValue,'oldValue:',oldValue);
    // })

    const changeData=()=>{
      // name.value='liu'
      info.name='kobe'
    }
    return {
      info,
      changeData
    }
  },
};
</script>

<style scoped></style>
