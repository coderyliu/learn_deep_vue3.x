<template>
  <div>
    <show-message title='哈哈哈' content='哈哈哈' class='title' name="coder"></show-message>
    <show-message title='呵呵呵' content='呵呵呵' id='bfa'></show-message>

    <show-message :title='title' :content='content'></show-message>
    <show-message :title='info.title' :content='info.content'></show-message>
    <show-message :='info'></show-message>

    <show-message></show-message>

    <mult-root class='title'></mult-root>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
import MultRoot from './MultRoot.vue'
export default {
  components: {
    ShowMessage,
    MultRoot
  },
  data() {
    return {
      title: '嘿嘿嘿',
      content: '嘿嘿嘿',
      info: {
        title: '嘻嘻嘻',
        content: '嘻嘻嘻'
      }
    }
  }
}
</script>

<style scoped></style>