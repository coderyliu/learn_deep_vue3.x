<template>
  <div>
    <my-slot-cpn>
      <h2>滋滋滋</h2>
    </my-slot-cpn>

    <my-slot-cpn>
      <button>按钮</button>
    </my-slot-cpn>

    <my-slot-cpn>
      <strong>呵呵呵</strong>
    </my-slot-cpn>

    <!-- 默认插槽内容 -->
    <my-slot-cpn></my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
export default {
  components:{
    MySlotCpn
  }
};
</script>

<style scoped></style>
