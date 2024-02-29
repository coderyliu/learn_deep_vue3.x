<script>
import { ref, h } from 'vue'
export default {
  setup() {
    const counter = ref(0)

    return {
      counter
    }
  },
  // 如果是setup选项，render函数中访问变量也用this
  render() {
    return h('div', null, [
      h('h2', null, this.counter),
      h('button', {
        onClick: () => this.counter++
      }, '+1'),
      h('button', {
        onClick: () => this.counter--
      }, '-1')
    ])
  }
}
</script>

<style scoped></style>