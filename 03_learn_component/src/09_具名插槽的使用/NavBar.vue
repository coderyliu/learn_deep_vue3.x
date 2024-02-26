<template>
  <div class='nav-bar'>
    <div class="left">
      <slot name='left'></slot>
    </div>

    <div class="center">
      <slot name='center'></slot>
    </div>

    <div class="right">
      <slot name='right'></slot>
    </div>

    <div class="content">
      <slot :name='name'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  width: 600px;
  border: 1px solid #eee;
}

.left,
.center,
.right,
.content {
  flex: 1;
  text-align: center;
  margin-left: 5px;
}

.left,
h2 {
  color: #bfa;
}</style>