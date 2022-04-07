<template>
  <div>
    <button @click='loginClick'>登录</button>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  export default {
    beforeRouteEnter (to, from, next) {
      
    },
    setup(){
      const router=useRouter()

      const loginClick=()=>{
        window.localStorage.setItem('token','ncoiewncosdlncodsaklncods')

        router.push({
          path:'/home'
        })
      }

      return {
        loginClick
      }
    }
  }
</script>

<style scoped>

</style>