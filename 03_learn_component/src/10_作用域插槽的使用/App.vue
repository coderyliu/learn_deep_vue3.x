<template>
  <div>
    <!-- 所谓编译作用域就是父组件中的内容都在父组件内编译，子组件中的内容都在子组件内编译 -->
    <!-- 父组件不能访问子组件中的data，子组件也不能访问父组件中的内容，只能通过父子组件中的通信方式访问 -->
    <child-cpn>
      <h2>{{title}}</h2>
      <!-- 默认情况下title就是父级作用域中的data -->
    </child-cpn>

    <show-names :names='names'>
      <!-- 怎么样访问子作用域中的数据？v-slot='slotProps'这种方式可以 -->
      <template v-slot='slotProps'>
        <button>{{slotProps.item}}--{{slotProps.index}}</button>
      </template>
    </show-names>
  </div>
</template>

<script>
  import ChildCpn from './ChildCpn.vue'
  import ShowNames from './ShowNames.vue'

  export default {
    components:{
      ChildCpn,
      ShowNames
    },
    data(){
      return {
        title:'hi',
        names:['kobe','curry','coder']
      }
    }
  }
</script>

<style scoped>

</style>