<template>
  <div>
    <!-- <input type="text" v-model="message" /> -->
    <!-- 等价于 -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value" />
    <h2>{{ message }}</h2> -->

    <!-- 组件的v-model -->
    <my-input v-model='message' v-model:title='title'></my-input>
    <!-- 等价于 -->
    <!-- <my-input :model-value='message' @update:model-value='message=$event'></my-input> -->
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
import MyInput2 from "./MyInput2.vue";
export default {
  components: {
    MyInput,
    MyInput2,
  },
  data() {
    return {
      message: "呵呵呵",
      title: '嘻嘻嘻'
    };
  },
};
</script>

<style scoped></style>
