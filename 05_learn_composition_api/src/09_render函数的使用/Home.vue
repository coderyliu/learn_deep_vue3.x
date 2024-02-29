<script>
import { h } from "vue";
export default {
  render() {
    return h("div", null, [h("h2", null, "hello"), this.$slots.default ? this.$slots.default({ name: 'coder' }) : h('span', null, '我是home的默认插槽')]);
  },
};
</script>

<style scoped></style>
