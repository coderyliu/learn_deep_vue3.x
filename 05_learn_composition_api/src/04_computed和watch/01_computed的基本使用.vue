<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click='changeName'>修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const firstName = ref('kobe')
    const lastName = ref('curry')

    // computed用法一：接受一个getter函数
    // computed返回的为getter函数的返回值创建一个ref对象
    // const fullName=computed(()=>{
    //   return firstName.value+' '+lastName.value
    // })

    // computed用法二:接受一个对象，里面有get和set
    // 返回一个可读写的ref对象
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(newValue) {
        const names = newValue.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })

    const changeName = () => {
      // firstName.value='coder liu'
      fullName.value = 'coder liu'
    }
    return {
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
}
</script>

<style scoped></style>