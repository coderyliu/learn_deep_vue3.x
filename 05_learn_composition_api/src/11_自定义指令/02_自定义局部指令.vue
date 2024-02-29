<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el, bindings, vNode, preVnode) {
        console.log(el, bindings, vNode, preVnode)
        el.focus()
      }
    }
  }
}
</script>

<style scoped></style>