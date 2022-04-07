<template>
  <div>
    <!-- ref用在元素上 -->
    <h2 ref="mes" class="active">{{ message }}</h2>
    <button @click="btnClick" class="active">获取元素</button>

    <!-- ref用在组件实例上 -->
    <nav-bar ref="instance"></nav-bar>
    <button @click='getInstance'>获取组件</button>

    <!-- ref还可以用来访问组件的data和methods -->
    <button @click='getData'>访问组件的数据</button>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  data() {
    return {
      message: "hello",
    };
  },
  methods: {
    btnClick() {
      console.log(this.$refs.mes); //得到的是ref属性为mes的这个DOM元素
      console.log(this.$refs.mes.className); //还可以获得这个元素的属性
    },
    getInstance(){
      console.log(this.$refs.instance)//获取组件实例
      console.log(this.$refs.instance.$el)//$el使用来获取组建的根元素
    },
    getData(){
      console.log(this.$refs.instance.title)
      console.log(this.$refs.instance.output())
    }
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
