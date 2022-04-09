<template>
  <button id="show-modal" @click='showModal=true'>Show Modal</button>

  <teleport to='body'>
    <Modal :show='showModal' @close='showModal=false'>
      <template #header>
        <h3>custom header</h3>
      </template>
    </Modal>
  </teleport>
</template>

<script setup>
import Modal from './modal.vue'
import {ref} from 'vue'

const showModal=ref(false)

</script>

<style scoped></style>
